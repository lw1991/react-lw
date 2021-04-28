import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import WrapRouter from 'containers/common/WrapRouter'
import routes from 'routes'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.renderRoutes = null
  }

  // 循环引入路由
  renderRoute = (routes) => {
    return (
      routes.map(({ children, ...route }) => {
        let routeView = null
        if(children) {
          routeView = (
            <Switch>
              {this.renderRoute(children)}
            </Switch>
          )
        }

        if(route.redirect) {
          return (
            <Redirect key={route.redirect} to={route.redirect} />
          )
        } else {
          return (
            <WrapRouter
              {...route}
              routeView={routeView}
              key={route.path}
            />
          )
        }
      })
    )
  }

  render() {
    // 避免重复循环渲染, 加入判断
    if(!this.renderRoutes) {
      this.renderRoutes = this.renderRoute(routes)
    }
    return (
      <Switch>
        {this.renderRoutes}
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default App
