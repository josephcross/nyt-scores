<template>
    <div class="profile">
        <div class="profile-back">
            <router-link :to="{ name: 'Home' }" class="profile-back">Back</router-link>
        </div>
        <div class="profile-header">
            <div class="avi">
                <!-- <img src="../assets/avi-brian.jpg"> -->
                <img :src="require(`../assets/avi-${name}.jpg`)">
            </div>
            <div>
                <h2>{{ name }}</h2>
                <small>puzzles done: {{ puzzlesDone }}</small>
            </div>
        </div>

        <div class="profile-stats flex two-up">
            <table>
                <tr>
                    <th>1st places</th>
                    <td>todo</td>
                </tr>
                <tr>
                    <th>2st places</th>
                    <td>todo</td>
                </tr>
                <tr>
                    <th>Last places</th>
                    <td>todo</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Average</th>
                    <td>{{ getAverage(myTimes) }}</td>
                </tr>
                <tr>
                    <th>Fastest</th>
                    <td>{{ fastestTime}}</td>
                </tr>
                <tr>
                    <th>Slowest</th>
                    <td>{{ slowestTime }}</td>
                </tr>
            </table>
        </div>
        <AvgChart :chart-data="chartData"></AvgChart>
    </div>
</template>

<script>
import _ from 'lodash';
import helpers from '../components/mixins/helpers';
import AvgChart from '../components/AvgChart';

export default {
    name: 'Profile',
    mixins: [helpers],
    components: { AvgChart },
    data() {
        return {
            name: this.$route.params.boy,
        };
    },
    computed: {
        myTimes() {
            return this.$store.state.times[this.name];
        },
        puzzlesDone() {
            let count = 0;

            _.forEach( this.myTimes, (time) => {
                if ( time ) {
                    count +=1;
                }
            });

            return count;
        },
        timesAll() {
            return this.$store.state.times;
        },
        fastestTime() {
            let fastest = 999999;

            _.forEach( this.myTimes, (time) => {
                if ( time && this.toSeconds(time) < fastest ) {
                    fastest = this.toSeconds(time);
                }
            });

            return this.toMinutes(fastest);
        },
        slowestTime() {
            let slowest = 1;

            _.forEach( this.myTimes, (time) => {
                if ( time && this.toSeconds(time) > slowest ) {
                    slowest = this.toSeconds(time);
                }
            });

            return this.toMinutes(slowest);
        },
        nFirst() {
            return 'todo';
        },
        nSecond() {
            return 'todo';
        },
        nLast() {
            return 'todo';
        },
        myAverages() {
            const averages = [];
            const times = _.clone(this.myTimes);

            _.forEach( this.chartDays, day => {
                averages.push(this.getAverage(times, true));
                delete times[day];
            });

            return averages.reverse();
        },
        chartData() {
            return {
                labels: this.chartDays,
                datasets: [
                    {
                        label: 'Average time (in seconds)',
                        borderColor: '#7f87b2',
                        fill: false,
                        data: this.myAverages,
                    }
                ]
            }
        }
    },
}
</script>

<style lang="scss">
.profile-back {
    padding: 10px 1rem;
    margin: 0 -1rem;
}

.profile {
    padding: 0 1rem 1rem;
    text-align: left;
}

.profile-header {
    display: flex;
    text-align: left;
    margin: 0 0 30px;

    .avi {
        width: 100px;
        height: 100px;
        background: red;
        margin-right: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        box-shadow: 0 0 3px 2px rgba( #000, .03);

        img {
            max-width: 100%;
        }
    }

    small {
        font-size: 15px;
    }

    h2 {
        margin: 0;
    }
}

.profile-stats {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 -1rem;
    padding: 1rem;
    background: #f5f6fa;

    table {
        flex: 0 0 50%;
    }

    td, {
        text-align: left;
    }

    th {
        text-align: right;
        padding-right: 15px;
    }
}

.average-chart {
    margin-top: 40px;
}
</style>