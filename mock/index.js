const fs = require('fs')
const path = require('path')
const resolve = (...args) => path.resolve(__dirname, ...args)

const mock = {}
/**
 * 1、获取当前目录所有文件
 * 2、过滤掉当前文件
 * 3、循环添加进mock一个对象里面
 */
fs.readdirSync(resolve('./'))
  .filter(i => !i.includes('index.js'))
  .forEach(file => {
    Object.assign(mock, require(resolve('./', file)))
  })

module.exports = mock
