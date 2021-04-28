import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const loadCom = (loader, options) => Loadable(Object.assign({
  loader,
  loading: Loading
}, options))

/**
 * 路由下面放this.props.routeView展示子路由，支持二级以上
 * 填写路由时path必须写全，二级三级path都必须写全
 */
const routes = [
  {
    path: '/',
    component: loadCom(() => import(/* webpackChunkName: 'Home'*/ 'containers/Home')),
    meta: {
      title: '首页'
    },
    exact: true
  },
  {
    path: '/demo',
    component: loadCom(() => import(/* webpackChunkName: 'Demo'*/ 'containers/Demo')),
    meta: {
      title: 'demo页面'
    }
  },
  {
    path: '/about',
    component: loadCom(() => import(/* webpackChunkName: 'About'*/ 'containers/About')),
    meta: {
      title: '关于页面'
    },
    children: [
      {
        path: '/about/me',
        component: loadCom(() => import(/* webpackChunkName: 'Me'*/ 'containers/Me')),
        meta: {
          title: '我的页面'
        }
      },
      {
        path: '/about/mypath',
        component: loadCom(() => import(/* webpackChunkName: 'MyPath'*/ 'containers/MyPath')),
        meta: {
          title: '我的path页面',
          isVip: true,
        },
        children: [
          {
            path: '/about/mypath/detail',
            component: loadCom(() => import(/* webpackChunkName: 'MypathDetail'*/ 'containers/MypathDetail'))
          }
        ]
      },
      {
        redirect: '/about/me'
      }
    ]
  }
]

export default routes
