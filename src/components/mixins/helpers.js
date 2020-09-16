const helpers = {
    methods: {
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
