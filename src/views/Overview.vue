<template>
    <div class="overview">
        overview
        <AvgChart :chart-data="chartData"></AvgChart>
    </div>
</template>

<script>
import _ from 'lodash';
import helpers from '../components/mixins/helpers';
import AvgChart from '../components/AvgChart';

export default {
    name: 'Overview',
    mixins: [helpers],
    components: { AvgChart },
    data() {
        return {};
    },
    computed: {
        times() {
            return this.$store.state.times;
        },
        datasets() {
            const data = [];

            _.forEach( this.times, (name, times) => {
                const obj = {
                    label: name,
                    borderColor: '#7f87b2',
                    fill: false,
                    data: this.getAverages(times),
                }
                data.push(obj);
            });

            return data;
        },
        chartData() {
            return {
                labels: this.chartDays,
                datasets: this.datasets,
            }
        },
    },
    methods: {
        getAverages(times) {
            const averages = [];

            _.forEach( this.chartDays, day => {
                averages.push(this.getAverage(times, true));
                delete times[day];
            });

            return averages.reverse();
        },
    },
}
</script>

<style lang="scss">
.overviw {
    padding: 2rem 1rem;
}
</style>