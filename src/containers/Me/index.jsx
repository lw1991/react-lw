import React from 'react'
import WrapBlock from 'persentational/WrapBlock/WrapBlock'

function HocComponent(Component) {
  return class extends React.Component {
    state = {
      name: 'hoc-component'
    }
    render() {
      return <Component {...this.props} name={this.state.name} />
    }
  }
}

@HocComponent
class Me extends React.Component {
  state = {
    count: 1
  }
  setStateAsync = state => new Promise(resolve => this.setState(state, resolve))
  async componentDidMount() {
    setTimeout(() => {
      console.log(this.state.count)
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
    }, 0)
    // console.log(this.state.count)
    // this.setState(state => ({ count: state.count + 1 }))
    // console.log(this.state.count)
  }
  render() {
    return (
      <WrapBlock>
        Me的页面
        <p>当前的name名字为：{this.props.name}</p>
      </WrapBlock>
    )
  }
}

export default Me
