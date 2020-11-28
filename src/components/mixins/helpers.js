import moment from 'moment';
import _ from 'lodash';

const helpers = {
    computed: {
      times() {
          return this.$store.state.times;
      },
      colors() {
          return this.$store.state.colors;
      },
      days() {
          const days = [];
          const daysBack = moment().diff( '2020-07-17', 'days' );

          for (var i = 0; i < daysBack; i++) {
              days.push( moment().subtract(i, 'days').format('ddd M/D') );
          }

          return days;
      },
      chartDays() {
        const short = this.days.slice().reverse().map( day => day.split(' ')[1] );
        return short.slice(14);
      },
      boys() {
          const boys = [];

          for ( const [name, times] of Object.entries(this.times) ) {
              boys.push({
                  name,
                  times,
                  average: this.getAverage(times),
              });
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
        getTimes(times) {
            const points = [];

            _.forEach( this.chartDays.slice(-10), day => {
                if ( times[day] ) {
                    points.push(this.toSeconds(times[day]));
                } else {
                    points.push(null);
                }
            });

            return points;
        },
        getAverage(times, inSeconds) {
            let count = 0;
            let totalSeconds = 0;

            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(times)) {
                if ( value ) {
                    totalSeconds += this.toSeconds(value);
                    count += 1;
                }
            }

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
        getAverages(times, daysBack) {
            const averages = [];
            const timesClone = _.clone(times);
            const days = daysBack ? this.chartDays.slice(daysBack) : this.chartDays;

            _.forEach( days, day => {
                averages.push(this.getAverage(timesClone, true));
                delete timesClone[day];
            });

            return averages.reverse();
        },
    },
};

export default helpers;
