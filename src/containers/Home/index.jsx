import React from 'react'
import globalConfig from '@/config'
import './index.scss'

class Index extends React.Component {
  render() {
    return (
      <div className='home'>
        首页{" "}
        <button onClick={() => globalConfig.history.push('/demo')}>demo页面</button>{" "}
        <button onClick={() => globalConfig.history.push('/about')}>about页面</button>
        <ul className="home-box">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    )
  }
}

export default Index
