import React from 'react'
import { Link } from 'react-router-dom'
import WrapBlock from 'persentational/WrapBlock/WrapBlock'
// import MyPath from 'containers/MyPath'

class About extends React.Component {
  render() {
    return (
      <WrapBlock>
        <Link to='/demo'>demo</Link>{" "}
        <Link to='/about/me'>me</Link>{" "}
        <Link to='/about/mypath'>mypath</Link>
        {this.props.routeView}
      </WrapBlock>
    )
  }
}

export default About
