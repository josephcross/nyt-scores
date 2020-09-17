import moment from 'moment';

const helpers = {
    computed: {
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
    },
    methods: {
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
    },
};

export default helpers;
