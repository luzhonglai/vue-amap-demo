/* eslint-disable no-undef */
/*
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-01 13:37:24
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-02-01 14:15:44
 */
import Vue from 'vue'
import App from './App.vue'
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

Vue.config.productionTip = false

VueAMap.initAMapApiLoader({
  key: '申请的高德地图Key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11' // 版本号
});

new Vue({
  render: h => h(App),
}).$mount('#app')
