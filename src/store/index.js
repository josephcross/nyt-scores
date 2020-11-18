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
                '11/17': '0:50',
                '11/16': '3:50',
                '11/15': '0:45',
                '11/14': '',
                '11/13': '1:34',
                '11/12': '1:26',
                '11/11': '8:34',
                '11/10': '1:25',
                '11/9': '',
                '11/8': '0:58',
                '11/7': '1:51',
                '11/6': '1:43',
                '11/5': '9:32',
                '11/4': '0:41',
                '11/3': '1:15',
                '11/2': '0:36',
                '11/1': '1:05',
                '10/31': '2:13',
                '10/30': '0:34',
                '10/29': '2:16',
                '10/28': '0:19',
                '10/27': '0:53',
                '10/26': '2:02',
                '10/25': '0:41',
                '10/24': '1:55',
                '10/23': '0:35',
                '10/22': '4:32',
                '10/21': '1:31',
                '10/20': '1:10',
                '10/19': '0:46',
                '10/18': '1:08',
                '10/17': '2:00',
                '10/16': '0:55',
                '10/15': '0:53',
                '10/14': '0:48',
                '10/13': '5:28',
                '10/12': '3:45',
                '10/11': '1:01',
                '10/10': '3:18',
                '10/9': '0:48',
                '10/8': '3:29',
                '10/7': '1:03',
                '10/6': '1:42',
                '10/5': '3:15',
                '10/4': '1:27',
                '10/3': '5:55',
                '10/2': '0:53',
                '10/1': '',
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
                '11/17': '0:30',
                '11/16': '1:20',
                '11/15': '1:06',
                '11/14': '',
                '11/13': '1:05',
                '11/12': '0:54',
                '11/11': '0:42',
                '11/10': '0:41',
                '11/9': '0:27',
                '11/8': '0:55',
                '11/7': '3:25',
                '11/6': '0:57',
                '11/5': '3:40',
                '11/4': '0:46',
                '11/3': '0:56',
                '11/2': '2:10',
                '11/1': '3:44',
                '10/31': '1:46',
                '10/30': '1:50',
                '10/29': '1:31',
                '10/28': '0:15',
                '10/27': '0:56',
                '10/26': '1:25',
                '10/25': '0:59',
                '10/24': '4:24',
                '10/23': '1:00',
                '10/22': '2:01',
                '10/21': '4:23',
                '10/20': '1:10',
                '10/19': '2:41',
                '10/18': '0:45',
                '10/17': '0:58',
                '10/16': '0:48',
                '10/15': '0:34',
                '10/14': '0:54',
                '10/13': '2:13',
                '10/12': '0:54',
                '10/11': '1:04',
                '10/10': '1:23',
                '10/9': '0:46',
                '10/8': '0:51',
                '10/7': '1:01',
                '10/6': '2:06',
                '10/5': '1:07',
                '10/4': '0:38',
                '10/3': '5:25',
                '10/2': '2:19',
                '10/1': '1:14',
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
                '11/17': '0:34',
                '11/16': '0:45',
                '11/15': '1:04',
                '11/14': '',
                '11/13': '2:00',
                '11/12': '0:45',
                '11/11': '3:13',
                '11/10': '0:38',
                '11/9': '0:11',
                '11/8': '1:10',
                '11/7': '2:27',
                '11/6': '0:31',
                '11/5': '1:06',
                '11/4': '3:15',
                '11/3': '0:31',
                '11/2': '1:18',
                '11/1': '0:55',
                '10/31': '4:02',
                '10/30': '0:42',
                '10/29': '2:11',
                '10/28': '0:23',
                '10/27': '0:41',
                '10/26': '1:14',
                '10/25': '',
                '10/24': '2:01',
                '10/23': '0:59',
                '10/22': '0:45',
                '10/21': '0:50',
                '10/20': '0:34',
                '10/19': '0:52',
                '10/18': '0:29',
                '10/17': '2:00',
                '10/16': '0:44',
                '10/15': '0:48',
                '10/14': '0:38',
                '10/13': '1:07',
                '10/12': '1:43',
                '10/11': '1:04',
                '10/10': '4:22',
                '10/9': '3:09',
                '10/8': '0:40',
                '10/7': '1:14',
                '10/6': '1:00',
                '10/5': '0:45',
                '10/4': '0:41',
                '10/3': '5:55',
                '10/2': '1:31',
                '10/1': '0:54',
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
                '11/17': '0:47',
                '11/16': '1:34',
                '11/15': '1:12',
                '11/14': '',
                '11/13': '1:22',
                '11/12': '0:47',
                '11/11': '1:37',
                '11/10': '2:06',
                '11/9': '3:29',
                '11/8': '1:48',
                '11/7': '4:04',
                '11/6': '1:06',
                '11/5': '2:42',
                '11/4': '',
                '11/3': '',
                '11/2': '',
                '11/1': '2:44',
                '10/31': '9:12',
                '10/30': '1:32',
                '10/29': '2:10',
                '10/28': '1:19',
                '10/27': '1:42',
                '10/26': '2:06',
                '10/25': '1:42',
                '10/24': '2:09',
                '10/23': '1:14',
                '10/22': '2:29',
                '10/21': '3:15',
                '10/20': '2:12',
                '10/19': '1:41',
                '10/18': '1:31',
                '10/17': '1:30',
                '10/16': '0:41',
                '10/15': '2:28',
                '10/14': '2:25',
                '10/13': '1:27',
                '10/12': '4:16',
                '10/11': '1:28',
                '10/10': '4:40',
                '10/9': '2:02',
                '10/8': '2:42',
                '10/7': '3:18',
                '10/6': '1:47',
                '10/5': '2:48',
                '10/4': '1:08',
                '10/3': '4:00',
                '10/2': '1:31',
                '10/1': '',
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
            mark: {
                '11/17': '1:38',
                '11/16': '',
                '11/15': '',
                '11/14': '',
                '11/13': '',
                '11/12': '1:19',
                '11/11': '',
                '11/10': '',
                '11/9': '0:39',
                '11/8': '',
                '11/7': '1:42',
                '11/6': '0:38',
                '11/5': '1:24',
                '11/4': '0:31',
                '11/3': '0:50',
                '11/2': '2:03',
                '11/1': '2:19',
                '10/31': '3:29',
                '10/30': '3:25',
                '10/29': '3:17',
                '10/28': '0:44',
                '10/27': '1:42',
                '10/26': '3:24',
                '10/25': '1:34',
                '10/24': '4:54',
                '10/23': '2:06',
                '10/22': '2:49',
                '10/21': '2:24',
                '10/20': '',
                '10/19': '',
                '10/18': '1:27',
                '10/17': '1:30',
                '10/16': '3:12',
                '10/15': '1:15',
                '10/14': '2:07',
                '10/13': '3:19',
                '10/12': '2:06',
                '10/11': '1:23',
                '10/10': '',
                '10/9': '2:23',
                '10/8': '1:58',
                '10/7': '1:50',
                '10/6': '1:19',
                '10/5': '3:24',
                '10/4': '1:48',
                '10/3': '5:55',
                '10/2': '',
                '10/1': '2:14',
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
                '11/17': '0:58',
                '11/16': '0:53',
                '11/15': '',
                '11/14': '',
                '11/13': '0:27',
                '11/12': '1:42',
                '11/11': '1:31',
                '11/10': '1:17',
                '11/9': '',
                '11/8': '1:02',
                '11/7': '2:17',
                '11/6': '',
                '11/5': '',
                '11/4': '0:32',
                '11/3': '1:06',
                '11/2': '0:37',
                '11/1': '1:11',
                '10/31': '2:13',
                '10/30': '0:46',
                '10/29': '',
                '10/28': '0:14',
                '10/27': '',
                '10/26': '',
                '10/25': '',
                '10/24': '4:54',
                '10/23': '0:30',
                '10/22': '0:59',
                '10/21': '1:24',
                '10/20': '0:33',
                '10/19': '0:56',
                '10/18': '0:48',
                '10/17': '1:21',
                '10/16': '0:28',
                '10/15': '0:37',
                '10/14': '0:32',
                '10/13': '0:44',
                '10/12': '2:33',
                '10/11': '0:36',
                '10/10': '3:01',
                '10/9': '1:02',
                '10/8': '1:22',
                '10/7': '0:39',
                '10/6': '1:02',
                '10/5': '',
                '10/4': '1:14',
                '10/3': '2:14',
                '10/2': '2:17',
                '10/1': '',
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
                '11/17': '0:47',
                '11/16': '0:47',
                '11/15': '1:17',
                '11/14': '',
                '11/13': '0:45',
                '11/12': '0:41',
                '11/11': '0:59',
                '11/10': '2:17',
                '11/9': '1:15',
                '11/8': '1:10',
                '11/7': '2:04',
                '11/6': '0:50',
                '11/5': '1:35',
                '11/4': '0:36',
                '11/3': '1:50',
                '11/2': '0:58',
                '11/1': '1:36',
                '10/31': '3:56',
                '10/30': '0:49',
                '10/29': '2:02',
                '10/28': '0:15',
                '10/27': '0:44',
                '10/26': '0:38',
                '10/25': '1:06',
                '10/24': '1:09',
                '10/23': '1:02',
                '10/22': '3:08',
                '10/21': '3:51',
                '10/20': '2:04',
                '10/19': '1:25',
                '10/18': '0:49',
                '10/17': '2:00',
                '10/16': '0:37',
                '10/15': '0:42',
                '10/14': '0:39',
                '10/13': '0:54',
                '10/12': '2:29',
                '10/11': '0:31',
                '10/10': '2:57',
                '10/9': '0:32',
                '10/8': '4:49',
                '10/7': '1:12',
                '10/6': '1:30',
                '10/5': '2:33',
                '10/4': '1:19',
                '10/3': '4:50',
                '10/2': '0:39',
                '10/1': '',
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
        },
        md: {
            '11/17': '',
            '11/16': '2:33',
            '11/15': '3:36',
            '11/14': '',
            '11/13': '0:57',
            '11/12': '0:48',
            '11/11': '1:10',
            '11/10': '0:54',
            '11/9': '1:05',
            '11/8': '0:47',
            '11/7': '1:21',
            '11/6': '1:24',
            '11/5': '1:37',
            '11/4': '0:41',
            '11/3': '',
            '11/2': '',
            '11/1': '1:10',
            '10/31': '1:47',
            '10/30': '0:31',
            '10/29': '1:26',
            '10/28': '',
            '10/27': '0:57',
            '10/26': '1:21',
            '10/25': '0:36',
            '10/24': '2:05',
            '10/23': '0:58',
            '10/22': '1:59',
            '10/21': '1:42',
            '10/20': '1:03',
            '10/19': '0:48',
            '10/18': '',
            '10/17': '1:30',
            '10/16': '',
            '10/15': '',
            '10/14': '0:40',
            '10/13': '',
            '10/12': '',
            '10/11': '0:41',
            '10/10': '',
            '10/9': '0:48',
            '10/8': '',
            '10/7': '',
            '10/6': '',
            '10/5': '',
            '10/4': '',
            '10/3': '',
            '10/2': '',
            '10/1': '',
            '9/30': '',
            '9/29': '',
            '9/28': '',
            '9/27': '',
            '9/26': '',
            '9/25': '',
            '9/24': '',
            '9/23': '',
            '9/22': '',
            '9/21': '',
            '9/20': '',
            '9/19': '',
            '9/18': '',
            '9/17': '',
            '9/16': '',
            '9/15': '',
            '9/14': '',
            '9/13': '',
            '9/12': '',
            '9/11': '',
            '9/10': '',
            '9/9': '',
            '9/8': '',
            '9/7': '',
            '9/6': '',
            '9/5': '',
            '9/4': '',
            '9/3': '',
            '9/2': '',
            '9/1': '',
            '8/31': '',
            '8/30': '',
            '8/29': '',
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
            '8/15': '',
            '8/14': '',
            '8/13': '',
            '8/12': '',
            '8/11': '',
            '8/10': '',
            '8/9': '',
            '8/8': '',
            '8/7': '',
            '8/6': '',
            '8/5': '',
            '8/4': '',
            '8/3': '',
            '8/2': '',
            '8/1': '',
            '7/31': '',
            '7/30': '',
            '7/29': '',
            '7/28': '',
            '7/27': '',
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
        brent: {
            '10/14': '',
            '10/13': '',
            '10/12': '',
            '10/11': '',
            '10/10': '',
            '10/9': '',
            '10/8': '',
            '10/7': '',
            '10/6': '',
            '10/5': '',
            '10/4': '',
            '10/3': '5:55',
            '10/2': '',
            '10/1': '',
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
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
})
