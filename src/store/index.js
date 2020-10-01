import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: {
      brian: '#7f87b2',
      joseph: '#3da4ab',
      josh: '#95dab6',
      dylan: '#f2e6b1',
      brent: '#dc8580',
      mark: '#4a4e4d',
      nick: '#f6cd61',
      steve: '#fe603e',
    },
    times: {
      brian: {
        '9/30': '0:58',
        '9/29': '0:40',
        '9/28': '1:08',
        '9/27': '',
        '9/26': '3:15',
        '9/25': '',
        '9/24': '0:48',
        '9/23': '2:01',
        '9/22': '0:53',
        '9/21': '1:58',
        '9/20': '3:31',
        '9/19': '1:30',
        '9/18': '1:50',
        '9/17': '',
        '9/16': '1:14',
        '9/15': '0:37',
        '9/14': '1:28',
        '9/13': '0:37',
        '9/12': '4:47',
        '9/11': '0:51',
        '9/10': '1:17',
        '9/9': '',
        '9/8': '0:35',
        '9/7': '1:42',
        '9/6': '1:41',
        '9/5': '1:42',
        '9/4': '1:35',
        '9/3': '1:44',
        '9/2': '1:11',
        '9/1': '9:00',
        '8/31': '1:58',
        '8/30': '1:10',
        '8/29': '1:44',
        '8/28': '1:11',
        '8/27': '1:02',
        '8/26': '0:43',
        '8/25': '1:47',
        '8/24': '0:45',
        '8/23': '0:38',
        '8/22': '4:24',
        '8/21': '0:19',
        '8/20': '3:55',
        '8/19': '1:15',
        '8/18': '0:34',
        '8/17': '2:17',
        '8/16': '0:44',
        '8/15': '1:08',
        '8/14': '4:49',
        '8/13': '1:04',
        '8/12': '1:47',
        '8/11': '1:01',
        '8/10': '4:51',
        '8/9': '1:38',
        '8/8': '8:22',
        '8/7': '2:35',
        '8/6': '2:15',
        '8/5': '4:12',
        '8/4': '',
        '8/3': '',
        '8/2': '1:23',
        '8/1': '',
        '7/31': '0:59',
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
      },
      joseph: {
        '9/30': '1:08',
        '9/29': '0:24',
        '9/28': '0:36',
        '9/27': '2:22',
        '9/26': '1:58',
        '9/25': '',
        '9/24': '0:39',
        '9/23': '2:26',
        '9/22': '0:34',
        '9/21': '0:25',
        '9/20': '4:01',
        '9/19': '3:07',
        '9/18': '1:40',
        '9/17': '',
        '9/16': '0:52',
        '9/15': '0:26',
        '9/14': '2:02',
        '9/13': '1:34',
        '9/12': '4:20',
        '9/11': '0:58',
        '9/10': '1:03',
        '9/9': '1:57',
        '9/8': '0:31',
        '9/7': '2:08',
        '9/6': '2:01',
        '9/5': '1:14',
        '9/4': '2:13',
        '9/3': '1:04',
        '9/2': '1:34',
        '9/1': '8:44',
        '8/31': '3:10',
        '8/30': '0:28',
        '8/29': '2:01',
        '8/28': '2:06',
        '8/27': '2:35',
        '8/26': '0:50',
        '8/25': '0:40',
        '8/24': '0:45',
        '8/23': '1:27',
        '8/22': '2:04',
        '8/21': '0:47',
        '8/20': '1:52',
        '8/19': '2:26',
        '8/18': '1:02',
        '8/17': '1:20',
        '8/16': '5:23',
        '8/15': '1:09',
        '8/14': '1:49',
        '8/13': '1:10',
        '8/12': '4:34',
        '8/11': '1:59',
        '8/10': '1:26',
        '8/9': '1:25',
        '8/8': '7:41',
        '8/7': '3:52',
        '8/6': '1:07',
        '8/5': '5:40',
        '8/4': '',
        '8/3': '',
        '8/2': '1:02',
        '8/1': '',
        '7/31': '0:44',
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
      },
      josh: {
        '9/30': '0:46',
        '9/29': '0:20',
        '9/28': '0:51',
        '9/27': '',
        '9/26': '4:49',
        '9/25': '',
        '9/24': '0:30',
        '9/23': '1:27',
        '9/22': '1:25',
        '9/21': '0:55',
        '9/20': '2:48',
        '9/19': '2:05',
        '9/18': '2:28',
        '9/17': '',
        '9/16': '1:42',
        '9/15': '0:21',
        '9/14': '1:31',
        '9/13': '0:54',
        '9/12': '0:52',
        '9/11': '2:03',
        '9/10': '0:32',
        '9/9': '1:18',
        '9/8': '0:41',
        '9/7': '1:05',
        '9/6': '4:07',
        '9/5': '0:57',
        '9/4': '6:08',
        '9/3': '1:03',
        '9/2': '1:22',
        '9/1': '7:40',
        '8/31': '0:40',
        '8/30': '1:28',
        '8/29': '1:36',
        '8/28': '0:32',
        '8/27': '0:55',
        '8/26': '2:32',
        '8/25': '0:33',
        '8/24': '0:36',
        '8/23': '',
        '8/22': '2:41',
        '8/21': '0:50',
        '8/20': '1:55',
        '8/19': '1:12',
        '8/18': '2:04',
        '8/17': '0:56',
        '8/16': '0:41',
        '8/15': '1:50',
        '8/14': '1:59',
        '8/13': '0:44',
        '8/12': '1:54',
        '8/11': '0:47',
        '8/10': '0:50',
        '8/9': '0:33',
        '8/8': '1:35',
        '8/7': '1:30',
        '8/6': '1:38',
        '8/5': '4:41',
        '8/4': '',
        '8/3': '0:29',
        '8/2': '2:17',
        '8/1': '',
        '7/31': '1:13',
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
      },
      dylan: {
        '9/30': '0:58',
        '9/29': '0:38',
        '9/28': '1:31',
        '9/27': '2:01',
        '9/26': '3:12',
        '9/25': '',
        '9/24': '',
        '9/23': '3:36',
        '9/22': '1:05',
        '9/21': '2:17',
        '9/20': '1:30',
        '9/19': '3:09',
        '9/18': '2:40',
        '9/17': '',
        '9/16': '1:06',
        '9/15': '2:04',
        '9/14': '1:25',
        '9/13': '2:26',
        '9/12': '5:22',
        '9/11': '1:34',
        '9/10': '0:51',
        '9/9': '1:47',
        '9/8': '1:11',
        '9/7': '1:35',
        '9/6': '1:26',
        '9/5': '4:09',
        '9/4': '2:33',
        '9/3': '1:56',
        '9/2': '3:04',
        '9/1': '3:55',
        '8/31': '1:57',
        '8/30': '2:15',
        '8/29': '4:13',
        '8/28': '2:05',
        '8/27': '3:21',
        '8/26': '2:32',
        '8/25': '1:22',
        '8/24': '1:52',
        '8/23': '2:23',
        '8/22': '5:38',
        '8/21': '1:14',
        '8/20': '2:03',
        '8/19': '1:25',
        '8/18': '1:48',
        '8/17': '4:14',
        '8/16': '4:19',
        '8/15': '3:29',
        '8/14': '3:13',
        '8/13': '1:19',
        '8/12': '3:14',
        '8/11': '1:48',
        '8/10': '2:39',
        '8/9': '2:25',
        '8/8': '4:38',
        '8/7': '4:02',
        '8/6': '2:46',
        '8/5': '4:54',
        '8/4': '',
        '8/3': '',
        '8/2': '1:00',
        '8/1': '',
        '7/31': '3:52',
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
      },
      brent: {
        '9/30': '',
        '9/29': '',
        '9/28': '',
        '9/27': '',
        '9/26': '4:05',
        '9/25': '',
        '9/24': '',
        '9/23': '',
        '9/22': '',
        '9/21': '',
        '9/20': '',
        '9/19': '3:39',
        '9/18': '',
        '9/17': '',
        '9/16': '',
        '9/15': '',
        '9/14': '',
        '9/13': '',
        '9/12': '5:22',
        '9/11': '',
        '9/10': '',
        '9/9': '1:37',
        '9/8': '2:18',
        '9/7': '',
        '9/6': '3:27',
        '9/5': '2:56',
        '9/4': '2:27',
        '9/3': '',
        '9/2': '1:20',
        '9/1': '2:24',
        '8/31': '1:29',
        '8/30': '1:35',
        '8/29': '4:43',
        '8/28': '',
        '8/27': '',
        '8/26': '',
        '8/25': '',
        '8/24': '',
        '8/23': '',
        '8/22': '',
        '8/21': '',
        '8/20': '',
        '8/19': '',
        '8/18': '',
        '8/17': '',
        '8/16': '',
        '8/15': '3:08',
        '8/14': '',
        '8/13': '1:47',
        '8/12': '',
        '8/11': '2:49',
        '8/10': '',
        '8/9': '',
        '8/8': '4:04',
        '8/7': '',
        '8/6': '',
        '8/5': '2:33',
        '8/4': '',
        '8/3': '',
        '8/2': '',
        '8/1': '',
        '7/31': '1:45',
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
      },
      mark: {
        '9/30': '1:34',
        '9/29': '',
        '9/28': '2:19',
        '9/27': '2:47',
        '9/26': '4:19',
        '9/25': '',
        '9/24': '',
        '9/23': '3:27',
        '9/22': '1:09',
        '9/21': '1:26',
        '9/20': '3:11',
        '9/19': '3:39',
        '9/18': '',
        '9/17': '',
        '9/16': '1:49',
        '9/15': '2:48',
        '9/14': '1:58',
        '9/13': '2:59',
        '9/12': '4:52',
        '9/11': '2:40',
        '9/10': '',
        '9/9': '',
        '9/8': '1:46',
        '9/7': '',
        '9/6': '1:26',
        '9/5': '4:39',
        '9/4': '2:10',
        '9/3': '',
        '9/2': '',
        '9/1': '4:01',
        '8/31': '1:57',
        '8/30': '1:02',
        '8/29': '2:00',
        '8/28': '',
        '8/27': '',
        '8/26': '',
        '8/25': '1:07',
        '8/24': '1:13',
        '8/23': '',
        '8/22': '2:22',
        '8/21': '1:55',
        '8/20': '1:13',
        '8/19': '2:15',
        '8/18': '1:38',
        '8/17': '',
        '8/16': '',
        '8/15': '1:57',
        '8/14': '2:08',
        '8/13': '1:16',
        '8/12': '2:11',
        '8/11': '2:32',
        '8/10': '1:46',
        '8/9': '2:21',
        '8/8': '',
        '8/7': '1:49',
        '8/6': '1:14',
        '8/5': '3:48',
        '8/4': '',
        '8/3': '',
        '8/2': '1:40',
        '8/1': '',
        '7/31': '1:19',
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
      },
      nick: {
        '9/30': '0:53',
        '9/29': '0:21',
        '9/28': '0:44',
        '9/27': '1:57',
        '9/26': '2:52',
        '9/25': '',
        '9/24': '1:05',
        '9/23': '',
        '9/22': '',
        '9/21': '',
        '9/20': '0:39',
        '9/19': '2:10',
        '9/18': '1:04',
        '9/17': '',
        '9/16': '1:02',
        '9/15': '0:30',
        '9/14': '0:40',
        '9/13': '0:42',
        '9/12': '1:35',
        '9/11': '1:04',
        '9/10': '2:47',
        '9/9': '2:04',
        '9/8': '0:21',
        '9/7': '1:02',
        '9/6': '0:47',
        '9/5': '4:39',
        '9/4': '2:25',
        '9/3': '1:05',
        '9/2': '0:37',
        '9/1': '1:28',
        '8/31': '0:50',
        '8/30': '1:47',
        '8/29': '2:00',
        '8/28': '0:27',
        '8/27': '1:22',
        '8/26': '0:35',
        '8/25': '1:15',
        '8/24': '0:36',
        '8/23': '0:47',
        '8/22': '3:14',
        '8/21': '2:04',
        '8/20': '0:52',
        '8/19': '1:02',
        '8/18': '0:38',
        '8/17': '',
        '8/16': '3:36',
        '8/15': '',
        '8/14': '1:16',
        '8/13': '0:53',
        '8/12': '2:22',
        '8/11': '1:07',
        '8/10': '1:07',
        '8/9': '0:50',
        '8/8': '5:18',
        '8/7': '1:47',
        '8/6': '1:33',
        '8/5': '5:33',
        '8/4': '',
        '8/3': '',
        '8/2': '',
        '8/1': '',
        '7/31': '',
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
      },
      steve: {
        '9/30': '0:39',
        '9/29': '0:23',
        '9/28': '0:55',
        '9/27': '',
        '9/26': '1:46',
        '9/25': '',
        '9/24': '0:44',
        '9/23': '3:41',
        '9/22': '0:33',
        '9/21': '1:33',
        '9/20': '2:37',
        '9/19': '1:22',
        '9/18': '1:58',
        '9/17': '',
        '9/16': '1:13',
        '9/15': '0:22',
        '9/14': '1:12',
        '9/13': '',
        '9/12': '4:05',
        '9/11': '0:56',
        '9/10': '1:25',
        '9/9': '1:04',
        '9/8': '',
        '9/7': '1:03',
        '9/6': '',
        '9/5': '4:39',
        '9/4': '3:04',
        '9/3': '',
        '9/2': '1:14',
        '9/1': '4:27',
        '8/31': '2:02',
        '8/30': '0:41',
        '8/29': '3:01',
        '8/28': '1:29',
        '8/27': '3:04',
        '8/26': '1:21',
        '8/25': '1:26',
        '8/24': '0:47',
        '8/23': '2:49',
        '8/22': '2:56',
        '8/21': '1:08',
        '8/20': '2:48',
        '8/19': '0:34',
        '8/18': '0:43',
        '8/17': '1:22',
        '8/16': '',
        '8/15': '2:10',
        '8/14': '2:04',
        '8/13': '0:36',
        '8/12': '4:20',
        '8/11': '0:57',
        '8/10': '3:02',
        '8/9': '1:35',
        '8/8': '5:12',
        '8/7': '5:11',
        '8/6': '2:13',
        '8/5': '1:55',
        '8/4': '',
        '8/3': '',
        '8/2': '',
        '8/1': '',
        '7/31': '2:27',
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
      },
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
