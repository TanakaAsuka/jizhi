import React, { Component } from 'react'
import { Tab, Tablist } from 'evergreen-ui'
// import PropTypes from 'prop-types'

class SiteLabel extends Component {
  render () {
    // const { engineOption, value, focused, onFocus, onBlur, onChange } = this.props
    return (
      <Tablist className='siteLabel' width={525}>
        <Tab is='a' href='https://www.zhihu.com'>知乎知乎</Tab>
        <Tab is='a' href='https://www.taobao.com'>淘宝淘宝</Tab>
        <Tab is='a' href='https://www.zhihu.com'>知乎知乎</Tab>
        <Tab is='a' href='https://www.taobao.com'>淘宝淘宝</Tab>
        <Tab is='a' href='https://www.zhihu.com'>知乎知乎</Tab>
        <Tab is='a' href='https://www.taobao.com'>淘宝淘宝</Tab>
        <Tab is='a' href='https://www.zhihu.com'>知乎知乎</Tab>
      </Tablist>
    )
  }
}

// SearchInput.propTypes = {
//   value: PropTypes.string,
//   focused: PropTypes.bool,
//   engineOption: PropTypes.string,
//   onFocus: PropTypes.func,
//   onBlur: PropTypes.func,
//   onChange: PropTypes.func
// }

export default SiteLabel
