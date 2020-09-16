<template>
    <div class="profile">
        <router-link :to="{ name: 'Home' }" class="profile-back">Back</router-link>
        <div class="profile-header">
            <div class="avi">

            </div>
            <div>
                <h2>{{ name }}</h2>
                <small>{{ getAverage(myTimes) }}</small>
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
                    <th>Fastest</th>
                    <td>{{ fastestTime}}</td>
                </tr>
                <tr>
                    <th>Slowest</th>
                    <td>{{ slowestTime }}</td>
                </tr>
            </table>
        </div>
        <div class="profile-chart">
            todo: average time line chart
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import helpers from '../components/mixins/helpers';

export default {
    name: 'Profile',
    mixins: [helpers],
    data() {
        return {
            name: this.$route.params.boy,
        };
    },
    computed: {
        myTimes() {
            return this.$store.state.times[this.name];
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
    },
    methods: {
        toSeconds(time) {
            const mins = Number(time.split(':')[0]) * 60;
            const seconds = Number(time.split(':')[1]);

            return mins + seconds;
        },
    }
}
</script>

<style lang="scss">
    .profile {
        padding: 1rem;
        text-align: left;
    }

    .profile-header {
        display: flex;
        text-align: left;
        margin: 10px 0 30px;

        .avi {
            width: 100px;
            height: 100px;
            background: red;
            margin-right: 20px;
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

    .profile-chart {
        margin-top: 30px;
        text-align: center;
        padding: 40px;
        background: #f3f0f0;
    }
</style>