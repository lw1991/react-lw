import React, { useEffect } from "react"
import { render } from "react-dom"
import { BrowserRouter, useHistory } from 'react-router-dom'

/** redux 配置 */
import { Provider } from "react-redux"
import Spinner from 'react-spinkit'
import { getPersistor } from "@rematch/persist"
import { PersistGate } from "redux-persist/es/integration/react"
import store from './store'

// import Demo from "containers/demo"
import Root from './Root'
import globalConfig from '@/config'
import 'static/scss/reset.scss'
globalConfig.init()

// 给globalConfig绑定history对象,方法编程式导航跳转
// 使用hooks仅渲染时执行一次
const CreateRoute = () => {
  const history = useHistory()
  useEffect(()=>{
    globalConfig.history = history
  },[ history ])
  return (<></>)
}

render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={getPersistor()}>
        <BrowserRouter>
          <Root />
          <CreateRoute />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
