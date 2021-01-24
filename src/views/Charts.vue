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
}
</script>

<style lang="scss">
.overviw {
    padding: 2rem 1rem;
}
</style>