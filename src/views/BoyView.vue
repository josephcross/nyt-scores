<template>
    <div class="boy-view">
        <router-link :to="{ name: 'Home',}">Back</router-link>
        <h1>{{ name }}</h1>
        <br>
        fastest time: {{ fastestTime }}<br>
        slowest time: {{ slowestTime }}
    </div>
</template>

<script>
import _ from 'lodash';
import helpers from '../components/mixins/helpers';

export default {
    name: 'BoyView',
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