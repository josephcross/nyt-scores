import moment from 'moment';
import _ from 'lodash';

const helpers = {
    data() {
        return {
            showHidden: false,
            hiddenNames: ['md'],
        };
    },
    computed: {
        times() {
            return this.$store.state.times;
        },
        colors() {
            return this.$store.state.colors;
        },
        days() {
            const days = [];
            const daysBack = moment().startOf('day').diff( '2020-07-16', 'days' );

            for (var i = 0; i < daysBack; i++) {
                days.push( moment().subtract(i, 'days').format('ddd M/D') );
            }

            const daysBehind = days.length - this.boys[0].times.length;

            if ( daysBehind ) {
                days.splice(0, daysBehind);
            }
            return days;
        },
        chartDays() {
            const clone = _.clone(this.days);
            const short = clone.slice().reverse().map( day => day.split(' ')[1] );
            return short.slice(14);
        },
        boys() {
            const boys = [];

            for ( const [name, times] of Object.entries(this.times) ) {
                if ( this.hiddenNames.includes(name) && !this.showHidden ) {
                    // skip
                } else {
                    boys.push({
                        name,
                        times,
                        average: this.getAverage(times),
                    });
                }
            }

            return boys.sort( (a,b) => {
                if ( this.toSeconds(a.average) < this.toSeconds(b.average) ) {
                    return -1;
                }

                if ( this.toSeconds(a.average) > this.toSeconds(b.average) ) {
                    return 1;
                }

                return 0;
            });
        },
    },
    methods: {
        getTenMostRecentTimes(name) {
            const clone = _.clone(this.times[name]);
            const times = clone.slice(0, 10);
            const out = [];

            _.forEach(times, (obj) => {
                const key = Object.keys(obj)[0];
                out.push(this.toSeconds(obj[key]));
            });

            return out.reverse();
        },
        calcAverages(name) {
            const clone = _.clone(this.times[name]);
            const times = clone.reverse();
            const myAverages = [];
            let total = 0;
            let divideBy = 0;

            _.forEach( times, (timeObj) => {
                const key = Object.keys(timeObj)[0];
                const time = timeObj[key];

                if ( time ) {
                    total += this.toSeconds(time);
                    divideBy +=1;
                }

                if ( !divideBy ) {
                    myAverages.push(60);
                } else {
                    myAverages.push(Math.floor( total / divideBy ));
                }
            });

            return myAverages.slice(14);
        },
        getTimesForChart(times, daysBack) {
            return _.map( times.slice(daysBack), (obj) => {
                const key = Object.keys(obj)[0];
                return obj[key];
            });
        },
        getAverage(times, inSeconds) {
            let count = 0;
            let totalSeconds = 0;

            _.forEach( times, (obj) => {
                const key = Object.keys(obj)[0];
                const time = obj[key];

                if ( time ) {
                    totalSeconds += this.toSeconds(time);
                    count += 1;
                }
            });

            if ( inSeconds ) {
                return Math.floor(totalSeconds / count);
            } else {
                return this.toMinutes(Math.floor(totalSeconds / count));
            }
        },
        toSeconds(time) {
            const mins = Number(time.split(':')[0]) * 60;
            const seconds = Number(time.split(':')[1]);

            return mins + seconds;
        },
        toMinutes(seconds) {
            if ( seconds < 60 ) {
                return `0:${seconds}`;
            }

            const mins = Math.floor(seconds / 60)
            let secs = seconds % 60;

            if ( secs < 10 ) {
                secs = '0' + secs;
            }

            return `${mins}:${secs}`;
        },
    },
};

export default helpers;
