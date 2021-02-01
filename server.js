/*
 * @Descripttion: 
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-01 16:12:27
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2021-02-01 16:26:16
 */

const express = require('express')

let app  = new express()

app.use(express.static('./dist'))

app.listen(3000,()=>console.log(111121))