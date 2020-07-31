<template>
    <div class="app" id="app">
        <button class="reload" @click="reload">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync" class="svg-inline--fa fa-sync fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path></svg>
        </button>
        <div class="y-axis">
            <div v-for="(boy, i) in boys" :key="`th-${i}`">
                <svg v-if="i === 0" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" class="svg-inline--fa fa-crown crown fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg>
                <img v-if="i === boys.length - 1" class="dunce" src="./assets/dunce2.png" alt="">
                {{ boy.name }}<br>{{ boy.average }}
            </div>
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
</template>

<script>
import moment from 'moment';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    days() {
      const days = [];
      const daysBack = moment( '20200717', "YYYYMMDD").fromNow().split(' ')[0];

      for (var i = 0; i < daysBack; i++) {
        days.push( moment().subtract(i, 'days').format('ddd M/D') );
      }

      return days;
    },
    boys() {
      const timesBrian = {
        '7/30': '5:37',
        '7/29': '3:38',
        '7/28': '2:09',
        '7/27': '4:05',
        '7/26': '',
        '7/25': '9:04',
        '7/24': '0:48',
        '7/23': '8:05',
        '7/22': '8:30',
        '7/21': '1:01',
        '7/20': '0:44',
        '7/19': '',
        '7/18': '07:29',
        '7/17': '01:06',
      };

      const timesJoseph = {
        '7/30': '1:28',
        '7/29': '0:58',
        '7/28': '0:54',
        '7/27': '6:04',
        '7/26': '',
        '7/25': '4:34',
        '7/24': '1:15',
        '7/23': '2:23',
        '7/22': '1:22',
        '7/21': '0:52',
        '7/20': '02:19',
        '7/19': '',
        '7/18': '8:32',
        '7/17': '2:22',
      };

      const timesJosh = {
        '7/30': '0:43',
        '7/29': '1:53',
        '7/28': '1:23',
        '7/27': '2:29',
        '7/26': '0:58',
        '7/25': '5:54',
        '7/24': '1:16',
        '7/23': '01:52',
        '7/22': '0:29',
        '7/21': '0:41',
        '7/20': '1:23',
        '7/19': '',
        '7/18': '2:32',
        '7/17': '0:59',
      }

      const timesDylan = {
        '7/30': '2:06',
        '7/29': '1:48',
        '7/28': '2:13',
        '7/27': '4:09',
        '7/26': '',
        '7/25': '8:37',
        '7/24': '3:50',
        '7/23': '8:15',
        '7/22': '4:33',
        '7/21': '3:35',
        '7/20': '2:24',
        '7/19': '',
        '7/18': '8:32',
        '7/17': '2:22',
      }

      const timesBrent = {
        '7/30': '2:16',
        '7/29': '1:19',
        '7/28': '2:49',
        '7/27': '2:25',
        '7/26': '',
        '7/25': '4:01',
        '7/24': '4:46',
        '7/23': '',
        '7/22': '1:02',
        '7/21': '2:00',
        '7/20': '1:35',
        '7/19': '',
        '7/18': '4:41',
        '7/17': '',
      }

      const timesMark = {
        '7/30': '1:22',
        '7/29': '4:32',
        '7/28': '3:41',
        '7/27': '3:11',
        '7/26': '',
        '7/25': '4:11',
        '7/24': '0:53',
        '7/23': '',
        '7/22': '4:51',
        '7/21': '',
        '7/20': '',
        '7/19': '',
        '7/18': '',
        '7/17': '',
      }

      const timesNick = {
        '7/30': '2:13',
        '7/29': '',
        '7/28': '0:50',
        '7/27': '9:01',
        '7/26': '',
        '7/25': '',
        '7/24': '',
        '7/23': '',
        '7/22': '',
        '7/21': '',
        '7/20': '',
        '7/19': '',
        '7/18': '',
        '7/17': '',
      }

      const timesSteve = {
        '7/30': '1:19',
        '7/29': '1:13',
        '7/28': '3:58',
        '7/27': '6:00',
        '7/26': '',
        '7/25': '',
        '7/24': '',
        '7/23': '',
        '7/22': '',
        '7/21': '',
        '7/20': '',
        '7/19': '',
        '7/18': '',
        '7/17': '',
      }

      const boys = [
        {
          name: 'joseph',
          times: timesJoseph,
          average: this.getAverage(timesJoseph),
        },
        {
          name: 'brian',
          times: timesBrian,
          average: this.getAverage(timesBrian),
        },
        {
          name: 'josh',
          times: timesJosh,
          average: this.getAverage(timesJosh),
        },
        {
          name: 'dylan',
          times: timesDylan,
          average: this.getAverage(timesDylan),
        },
        {
          name: 'brent',
          times: timesBrent,
          average: this.getAverage(timesBrent),
        },
        {
          name: 'mark',
          times: timesMark,
          average: this.getAverage(timesMark),
        },
        {
          name: 'nick',
          times: timesNick,
          average: this.getAverage(timesNick),
        },
        {
          name: 'steve',
          times: timesSteve,
          average: this.getAverage(timesSteve),
        },
      ];

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
    aaa() {
      const time = '01:06';
      const mins = Number(time.split(':')[0]) * 60;
      const seconds = Number(time.split(':')[1]);

      return mins + seconds;
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
        return seconds;
      }

      const mins = Math.floor(seconds / 60)
      let secs = seconds % 60;

      if ( secs < 10 ) {
        secs = '0' + secs;
      }

      return `${mins}:${secs}`;
    },
    isFastest(day, time) {
      const date = day.split(' ')[1];
      let fastest = true;

      if ( time === '-' ) {
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

html, body {
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;

    tbody {
        display: block;
    }
}

$cell-width: 70px;

.app {
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
        box-shadow: inset 0 0 3px -1px #00000021;
        border: 0;
        width: 72px;
        flex: 0 0 72px;

        div {
            max-width: 40px;
            font-size: 12px;
            line-height: 1.7;
            padding-top: 3px;
        }
    }

    td {
        border: 1px solid #fafafa;
        background: #fff;
    }

    .y-axis {
        width: $cell-width;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        padding-top: $cell-width;

        div {
            height: $cell-width;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fafafa;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            background: #000;
            border-top: 2px solid rgba( #fff, .3);
            font-size: 14px;
            position: relative;

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
            background: #fbf6f6;
            border-color: transparent;
        }
    }

    .time svg {
        top: -1px;
        right: 5px;
        color: #2584ea;
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
        width: 14px;
    }
}

.table-wrap {
    overflow: auto;
}
</style>
