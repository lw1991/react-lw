import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

const WrapRouter = ({ component: Component, routeView, ...rest }) => {
  useEffect(() => {
    // 父组件也会使用, 仅仅对比最后的路由即可;
    if(rest.path === window.location.pathname && rest.meta?.title) {
      document.title = rest.meta.title
    }
  }, [ rest ])

  return (
    <Route
      {...rest}
      exact
      render={routerProps =>
        <Component {...routerProps} routeView={routeView} />
      }
    />
  )
}

export default WrapRouter
