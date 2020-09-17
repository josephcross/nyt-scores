<template>
    <div class="average-chart">
        <line-chart :chart-data="chartData" :options="options"></line-chart>
    </div>
</template>

<script>
import LineChart from './mixins/LineChart.js'

export default {
    name: 'AvgChart',
    components: {
        LineChart
    },
    props: {
        chartData: {
            type: Object,
            default: null
        },
    },
    data () {
        return {
            datacollection: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
}
</script>

<style>
.small {
    max-width: 600px;
    margin:  150px auto;
}
</style>