import React from 'react'
import { Link } from 'react-router-dom'
import WrapBlock from 'persentational/WrapBlock/WrapBlock'

class MyPath extends React.Component {
  render() {
    return (
      <WrapBlock>
        Mypath页面
        <Link to='/about/mypath/detail'>跳转到detail</Link>
        {this.props.routeView}
      </WrapBlock>
    )
  }
}

export default MyPath
