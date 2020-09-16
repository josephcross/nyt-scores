const helpers = {
    methods: {
        getAverage(times) {
            let count = 0;
            let totalSeconds = 0;

            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(times)) {
                if ( value ) {
                    totalSeconds += this.toSeconds(value);
                    count += 1;
                }
            }

            return this.toMinutes(Math.floor(totalSeconds / count));
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
