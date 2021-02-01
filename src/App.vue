<!--
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-01 13:37:24
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-02-01 15:24:42
-->
/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <div id="app">
    <el-amap
      :center="center"
      :zoom="zoom"
      :amap-manager="amapManager"
      id="container"
      :events="events"
    >
      <!-- 添加marker-->
      <el-amap-marker
        v-for="marker in list"
        :key="marker.title"
        :title="marker.title"
        :position="marker.position"

      ></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
import VueAMap from 'vue-amap';
const listData = require('./utils/data.json')

let amapManager = new VueAMap.AMapManager();

export default {
  name: 'map',
  components: {
  },
  data() {
    return {
      center: [116.21213, 39.90923],
      zoom: 8,
      label: {
        content: 'asdasds',
        offset: [10, 12]
      },
      list: [],
      amapManager,
    }
  },
  created() {
    this.initMap()
  },
  methods: {
    initMap(){
      let list = listData.map(item=> ({
          title:item.name,
          position : [item.location.lon, item.location.lat ],
          isNew: item.isNew,
          icon: item.isNew === 1 ? 'red' : 'yellow'
      }))
      this.list = list
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container {
  width: 100vw;
  height: 100vh;
}
</style>
