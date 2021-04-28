import React from 'react'

const WrapBlock = ({ children, style, ...rest }) => {
  return (
    <div style={Object.assign({ padding: 20 }, style)} {...rest}>
      {children}
    </div>
  )
}

export default WrapBlock
