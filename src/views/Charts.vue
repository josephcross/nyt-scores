<template>
    <div class="Charts">
        <div class="chart-wrap">
            <h2>Average (all-time)</h2>
            <AvgChart :chart-data="chartDataAvg"></AvgChart>
            <h2>Average (past 30 days)</h2>
            <AvgChart :chart-data="chartDataAvg30"></AvgChart>
            <h2>Puzzle times (past 10 days)</h2>
            <AvgChart :chart-data="chartDataTimes10"></AvgChart>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import helpers from '../components/mixins/helpers';
import AvgChart from '../components/AvgChart';

export default {
    name: 'Charts',
    mixins: [helpers],
    components: { AvgChart },
    data() {
        return {};
    },
    computed: {
        datasetsAvg30() {
            const data = [];

            _.forEach( this.boys, boy => {
                const obj = {
                    label: boy.name,
                    borderColor: this.colors[boy.name],
                    pointRadius: 0,
                    fill: false,
                    data: this.getAverages(boy.times, -30),
                }
                data.push(obj);
            });

            return data;
        },
        datasetsAvgAll() {
            const data = [];


            _.forEach( this.boys, boy => {
                const obj = {
                    label: boy.name,
                    borderColor: this.colors[boy.name],
                    pointRadius: 0,
                    fill: false,
                    data: this.getAverages(boy.times),
                }
                data.push(obj);
            });

            return data;
        },
        datasetTimes10() {
            const data = [];

            _.forEach( this.boys, boy => {
                const obj = {
                    label: boy.name,
                    borderColor: this.colors[boy.name],
                    pointRadius: 3,
                    fill: false,
                    data: this.getTimes(boy.times),
                }
                data.push(obj);
            });

            return data;
        },
        chartDataAvg30() {
            return {
                labels: this.chartDays.slice(-30),
                datasets: this.datasetsAvg30,
            }
        },
        chartDataAvg() {
            return {
                labels: this.chartDays,
                datasets: this.datasetsAvgAll,
            }
        },
        chartDataTimes10() {
            return {
                labels: this.chartDays.slice(-10),
                datasets: this.datasetTimes10,
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