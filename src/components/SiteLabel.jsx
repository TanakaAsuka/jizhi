import React, { Component } from 'react'
import { Tab, Tablist } from 'evergreen-ui'
import Storager from '../utils/storager'
// import PropTypes from 'prop-types'

class SiteLabel extends Component {
  constructor (props) {
    super(props)
    this.state = { siteArr: [], titleArr: [] }
  }

  render () {
    Storager.get('siteArr', arr => {
      if (arr.siteArr !== undefined) {
        this.state.titleArr = arr.siteArr
      }
    })
    Storager.get(this.state.titleArr, res => {
      this.setState({ siteArr: res })
    })
    let siteList = []
    // 根据自定义标题数组获取网址对象
    siteList = Object.keys(this.state.siteArr).map(title => <Tab is='a' key={this.state.siteArr[title]} href={this.state.siteArr[title]}>{title}</Tab>)
    return (
      <Tablist className='siteLabel' width={525}>
        {siteList}
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
