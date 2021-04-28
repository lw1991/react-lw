import { init } from '@rematch/core'
import createPersistPlugin from '@rematch/persist'
import immerPlugin from '@rematch/immer'
import loadingPlugin from '@rematch/loading'
import updatedPlugin from '@rematch/updated'
import storage from 'redux-persist/lib/storage'

const models = {}
const context = require.context('./models', false, /\.js$/)

context.keys().forEach( request => {
  // 取文件夹名字
  var reg = /\.\/(\w+)\.js$/
  var curPathName = reg.exec(request)[1]
  models[curPathName] = context(request).default
})

// 设置数据持久化插件
const persistPlugin = createPersistPlugin({
  key: 'react-cli', // key决定与其他项目的数据是否放一起, 建议分开
  storage,
  // whitelist: [], // 加入持久化的数据
  // blacklist: [], // 不加入持久化的数据
  version: 2,
})

const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: process.env.NODE_ENV === 'production'
    }
  },
  plugins: [
    persistPlugin,
    immerPlugin(),
    loadingPlugin(),
    updatedPlugin()
  ],
})

// 绑定config
export default store
