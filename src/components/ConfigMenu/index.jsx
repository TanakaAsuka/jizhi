import React, { Component } from 'react'
import { Popover, Menu, Position, Switch, Icon, SegmentedControl, TextInput, Button } from 'evergreen-ui'
import PropTypes from 'prop-types'
import Legal from './Legal'
import SaveBgMenuItem from './SaveBgMenuItem'

class ConfigMenu extends Component {
  constructor (props) {
    super()
    this.state = {
      isOpen: false,
      isClear: false,
      titleValue: '',
      addrValue: ''
    }
  }

  handleOnOpen = () => this.setState({ isOpen: true })

  handleOnClose = () => this.setState({ isOpen: false })

  handleAddSite = () => this.setState({ isClear: true })

  handleTitleValue = (e) => { this.setState({ titleValue: e.target.value }); this.setState({ isClear: false }) }

  handleAddrValue = (e) => { this.setState({ addrValue: e.target.value }); this.setState({ isClear: false }) }

  render () {
    const {
      isPlaying,
      onPlayPauseSelect,
      showSearchBarChecked,
      onShowSearchBarChange,
      defaultPlayChecked,
      isVerticalVerses,
      onVersesLayoutChange,
      onDefaultPlayChange,
      colorStayChecked,
      onColorStayChange,
      selected,
      onBgOptionChange,
      engineOption,
      onEngineOptionChange,
      onCustomBtn,
      onCustomBtnDelete,
      onSiteTitleInput,
      onSiteAddrInput
    } = this.props

    return (
      <div id='menu' data-html2canvas-ignore>
        <Popover
          position={Position.BOTTOM_LEFT}
          onOpen={this.handleOnOpen}
          onClose={this.handleOnClose}
          content={
            <Menu>
              <Menu.OptionsGroup
                title='背景'
                options={[
                  { label: 'Waves', value: 'waves' },
                  { label: 'Blobs', value: 'blobs' }
                ]}
                selected={selected}
                onChange={onBgOptionChange}
              />
              <Menu.Divider />

              <Menu.Group title='操作'>
                <SaveBgMenuItem />
                <Menu.Item
                  icon={isPlaying ? 'pause' : 'play'}
                  intent='success'
                  onSelect={onPlayPauseSelect}
                  secondaryText='Space'
                >
                  {isPlaying ? '暂停动画' : '播放动画'}
                </Menu.Item>
              </Menu.Group>

              <Menu.Divider />

              <Menu.Group title='设置'>
                <Menu.Item intent='success'>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    默认播放动画
                    <Switch
                      checked={defaultPlayChecked}
                      onChange={onDefaultPlayChange}
                    />
                  </div>
                </Menu.Item>
                {selected === 'waves' && (
                  <Menu.Item intent='success'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      保留颜色名称
                      <Switch
                        checked={colorStayChecked}
                        onChange={onColorStayChange}
                      />
                    </div>
                  </Menu.Item>
                )}
                <Menu.Item intent='success'>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    显示搜索框
                    <Switch
                      checked={showSearchBarChecked}
                      onChange={onShowSearchBarChange}
                    />
                  </div>
                </Menu.Item>
                <Menu.Item intent='success'>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    竖版诗词
                    <Switch
                      checked={isVerticalVerses}
                      onChange={onVersesLayoutChange}
                    />
                  </div>
                </Menu.Item>
              </Menu.Group>
              <Menu.Divider />

              <Menu.Group title='搜索引擎'>
                <div style={{ margin: 16 }}>
                  <SegmentedControl
                    width={300}
                    options={[
                      { label: 'Google', value: 'https://www.google.com/search?q=' },
                      { label: 'Baidu', value: 'https://www.baidu.com/s?wd=' },
                      { label: 'Bing', value: 'https://www.bing.com/search?q=' }
                    ]}
                    value={engineOption}
                    onChange={onEngineOptionChange}
                  />
                </div>
              </Menu.Group>

              <Menu.Divider />
              <Menu.Group title='自定义'>
                <Menu.Item>
                  <TextInput id='siteTitle' value={this.state.isClear ? '' : this.state.titleValue} onChange={(e) => { onSiteTitleInput(e); this.handleTitleValue(e) }} name='siteTitle' placeholder='网页标题' />
                </Menu.Item>
                <Menu.Item marginTop={8}>
                  <TextInput id='siteAddr' value={this.state.isClear ? '' : this.state.addrValue} onChange={(e) => { onSiteAddrInput(e); this.handleAddrValue(e) }} name='siteAddr' placeholder='输入完整URL' />
                </Menu.Item>
                <Menu.Item marginTop={8}>
                  <Button marginRight={0} onClick={() => { onCustomBtn(); this.handleAddSite() }}>添加</Button>
                  <Button marginLeft={5} onClick={() => { onCustomBtnDelete() }}>删除</Button>
                </Menu.Item>
              </Menu.Group>

              <Menu.Divider />
              <Legal />
              {this.props.children}
            </Menu>
          }
        >
          <Icon
            id='menu-btn'
            icon='cog'
            size={20}
            color='white'
            className={this.state.isOpen && 'open'}
          />
        </Popover>
      </div>
    )
  }
}

ConfigMenu.propTypes = {
  children: PropTypes.any,
  showSearchBarChecked: PropTypes.func,
  onShowSearchBarChange: PropTypes.func,
  onPlayPauseSelect: PropTypes.func.isRequired,
  onVersesLayoutChange: PropTypes.func.isRequired,
  isVerticalVerses: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  defaultPlayChecked: PropTypes.bool.isRequired,
  onDefaultPlayChange: PropTypes.func.isRequired,
  colorStayChecked: PropTypes.bool.isRequired,
  onColorStayChange: PropTypes.func.isRequired,
  selected: PropTypes.string,
  onBgOptionChange: PropTypes.func,
  engineOption: PropTypes.string,
  onEngineOptionChange: PropTypes.func,
  onCustomBtn: PropTypes.func,
  onCustomBtnDelete: PropTypes.func,
  onSiteTitleInput: PropTypes.func,
  onSiteAddrInput: PropTypes.func
}

export default ConfigMenu
