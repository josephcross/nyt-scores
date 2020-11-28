<template>
    <div>
        <div class="home">
            <button class="reload" @click="reload">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync" class="svg-inline--fa fa-sync fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path></svg>
            </button>
            <div class="y-axis">
                <router-link v-for="(boy, i) in boys" :key="`th-${i}`" :to="{ path: `/boy/${boy.name}` }">
                    <svg v-if="i === 0" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" class="svg-inline--fa fa-crown crown fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg>
                    <img v-if="i === boys.length - 1" class="dunce" src="../assets/dunce2.png" alt="">
                    {{ boy.name }}<br>{{ boy.average }}
                </router-link>
            </div>
            <div class="table-wrap">
                <table>
                    <thead>
                        <th v-for="(day, i) in days" :key="`day-${i}`">
                            <div>{{ day }}</div>
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(boy, bi) in boys" :key="`boy-row-${bi}`">
                            <td v-for="(day, i) in days" :key="`time-${i}-${bi}`" :class="{'slowest': isSlowest(day, getTime(day, bi))}" class="time">
                                {{ getTime(day, bi) }}
                                <svg v-if="isFastest(day, getTime(day, bi))" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" class="svg-inline--fa fa-medal fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path></svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <router-link :to="{ name: 'Charts' }" class="btn btn-charts">View Charts</router-link> -->
        <div class="chart-wrap">
            <h2>Average (all-time)</h2>
            <AvgChart :chart-data="chartDataAvg"></AvgChart>
            <!-- <h2>Average (past 30 days)</h2>
            <AvgChart :chart-data="chartDataAvg30"></AvgChart> -->
            <h2>Puzzle times (past 10 days)</h2>
            <AvgChart :chart-data="chartDataTimes10"></AvgChart>
        </div>
    </div>
</template>

<script>
import helpers from '../components/mixins/helpers';
import AvgChart from '../components/AvgChart';
import _ from 'lodash';

export default {
    name: 'Home',
    mixins: [helpers],
    components: { AvgChart },
    computed: {
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
        reload() {
            window.location.reload();
        },
        getTime(day, boyIndex) {
            const date = day.split(' ')[1];
            return this.boys[boyIndex].times[date] ? this.boys[boyIndex].times[date] : '-';
        },
        isFastest(day, time) {
            const date = day.split(' ')[1];
            let fastest = true;

            if ( time === '-' || !time ) {
                return false;
            }

            for (var i = 0; i < this.boys.length; i++) {
                const thisBoysTime = this.toSeconds(this.boys[i].times[date]);
                if ( thisBoysTime < this.toSeconds(time) ) {
                    fastest = false;
                }
            }

            return fastest;
        },
        isSlowest(day, time) {
            const date = day.split(' ')[1];
            let slowest = true;

            if ( time === '-' ) {
                return false;
            }

            for (var i = 0; i < this.boys.length; i++) {
                const thisBoysTime = this.toSeconds(this.boys[i].times[date]);
                if ( thisBoysTime > this.toSeconds(time) ) {
                    slowest = false;
                }
            }

            return slowest;
        },
    },
}
</script>

<style lang="scss">

.home table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;

    tbody {
        display: block;
    }
}

$cell-width: 70px;

.home {
    display: flex;
    overflow-x: auto;
    padding-left: $cell-width;
    position: relative;
    background: #fdfbfb;

    tr,
    thead {
        display: flex;
    }

    td,
    th {
        display: flex;
        align-items: center;
        justify-content: center;
        width: $cell-width;
        height: $cell-width;
        padding: 0;
        font-size: 15px;
    }

    th {
        flex: 0 0 $cell-width;
        border: 0;
        border: 0;
        width: 72px;
        flex: 0 0 72px;
        background: #7f87b2;
        box-shadow: inset 0 0 3px -1px #adb3d4ad;
        color: #fff;

        div {
            max-width: 40px;
            font-size: 12px;
            line-height: 1.7;
            padding-top: 3px;
        }
    }

    td {
        border: 1px solid #ececec;
        background: #f5f6fa;
    }

    .y-axis {
        width: $cell-width;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        padding-top: $cell-width;
        background: #7f87b2;

        a {
            height: $cell-width;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fafafa;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            // background: #000;
            background: #000000b8;
            border-top: 2px solid rgba( #fff, .3);
            font-size: 14px;
            position: relative;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }

            &:first-child {
                border: 0;
            }
        }
    }

    .crown {
        position: absolute;
        width: 36px;
        top: -15px;
        left: 0;
        right: 0;
        margin: auto;
        color: #ffd700;
    }

    .dunce {
        position: absolute;
        width: 30px;
        transform: rotate(-20deg);
        top: -19px;
        left: 0;
    }

    .time {
        position: relative;

        &.slowest {
            background: rgba( #dc8580, .09);
        }
    }

    // medal
    .time svg {
        top: -1px;
        right: 5px;
        // color: #95dab6;
        color: #2196f3;
        width: 15px;
        position: absolute;
        z-index: 3;
    }
}

.reload {
    width: 70px;
	height: 70px;
	position: absolute;
	left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    appearance: none;
    background: transparent;
    cursor: pointer;
    z-index: 10;

    svg {
        color: #fff;
        width: 14px;
    }
}

.table-wrap {
    overflow: auto;
}

.chart-wrap {
    padding: 2rem 1rem;
}

.btn-charts {
    display: block;
    margin: 1rem;
    padding: 1rem;
    border-radius: 3px;
    text-decoration: none;
    background: #7f87b2;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: .5px;
    transition: .1s;

    &:hover,
    &:focus {
        opacity: .9;
    }
}
</style>
