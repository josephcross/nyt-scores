<template>
    <div class="app" id="app">
        <div class="y-axis">
            <div v-for="(boy, i) in boys" :key="`th-${i}`">{{ boy.name }}<br>{{ boy.average }}</div>
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
                        <td v-for="(day, i) in days" :key="`time-${i}-${bi}`">{{ getTime(day, bi) }}</td>
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
        '7/27': '',
        '7/26': '',
        '7/25': '9:04',
        '7/24': '00:48',
        '7/23': '8:05',
        '7/22': '8:30',
        '7/21': '1:01',
        '7/20': '0:44',
        '7/19': '',
        '7/18': '07:29',
        '7/17': '01:06',
      };

      const timesJoseph = {
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
        '7/27': '2:29',
        '7/26': '',
        '7/25': '',
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
        '7/27': '',
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
        '7/27': '',
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
          average: this.getAverage(timesDylan),
        },
        {
          name: 'mark',
          times: timesMark,
          average: this.getAverage(timesMark),
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
    getTime(day, boyIndex) {
      const date = day.split(' ')[1];
      return this.boys[boyIndex].times[date] ? this.boys[boyIndex].times[date] : '-';
    },
    getAverage(times) {
      let count = 0;
      let totalSeconds = 0;

      for (const [key, value] of Object.entries(times)) {
        console.log(key);
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
      const secs = seconds % 60 === 0 ? '00' : seconds % 60;
      return `${mins}:${secs}`;
    }
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
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;

        div {
            max-width: 40px;
        }
    }

    td {
        border: 1px solid #fafafa;
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
            border-top: 1px solid rgba( #fff, .3);
            font-size: 14px;

            &:first-child {
                background: #907c0f;
                border: 0;
            }
        }
    }
}

.table-wrap {
    overflow: auto;
}
</style>
