import React, { Component } from 'react'

import { Spring } from 'react-spring/renderprops'

import FilterFooter from '../../../../components/FilterFooter'

import styles from './index.module.css'

export default class FilterMore extends Component {
  state = {
    selectedValues: this.props.defaultValue
  }

  // 标签点击事件
  onTagClick(value) {
    const { selectedValues } = this.state
    // 创建新数组
    const newSelectedValues = [...selectedValues]

    if (newSelectedValues.indexOf(value) <= -1) {
      // 没有当前项的值
      newSelectedValues.push(value)
    } else {
      // 有
      const index = newSelectedValues.findIndex(item => item === value)
      newSelectedValues.splice(index, 1)
    }

    this.setState({
      selectedValues: newSelectedValues
    })
  }

  // 渲染标签
  renderFilters(data) {
    const { selectedValues } = this.state
    // 高亮类名： styles.tagActive
    return data.map(item => {
      const isSelected = selectedValues.indexOf(item.value) > -1

      return (
        <span
          key={item.value}
          className={[styles.tag, isSelected ? styles.tagActive : ''].join(' ')}
          onClick={() => this.onTagClick(item.value)}
        >
          {item.label}
        </span>
      )
    })
  }

  // 取消按钮的事件处理程序
  onCancel = () => {
    this.setState({
      selectedValues: []
    })
  }

  // 确定按钮的事件处理程序
  onOk = () => {
    const { type, onSave } = this.props
    // onSave 是父组件中的方法
    onSave(type, this.state.selectedValues)
  }

  render() {
    const {
      data: { roomType, oriented, floor, characteristic },
      onCancel,
      type
    } = this.props

    // 该组件是否展示
    const isOpen = type === 'more'

    return (
      <div className={styles.root}>
        {/* 遮罩层 */}
        <Spring to={{ opacity: isOpen ? 1 : 0 }}>
          {props => {
            if (props.opacity === 0) {
              return null
            }

            return (
              <div
                style={props}
                className={styles.mask}
                onClick={() => onCancel(type)}
              />
            )
          }}
        </Spring>

        <Spring
          to={{ transform: `translate(${isOpen ? '0px' : '100%'}, 0px)` }}
        >
          {props => {
            return (
              <>
                {/* 条件内容 */}
                <div style={props} className={styles.tags}>
                  <dl className={styles.dl}>
                    <dt className={styles.dt}>户型</dt>
                    <dd className={styles.dd}>
                      {this.renderFilters(roomType)}
                    </dd>

                    <dt className={styles.dt}>朝向</dt>
                    <dd className={styles.dd}>
                      {this.renderFilters(oriented)}
                    </dd>

                    <dt className={styles.dt}>楼层</dt>
                    <dd className={styles.dd}>{this.renderFilters(floor)}</dd>

                    <dt className={styles.dt}>房屋亮点</dt>
                    <dd className={styles.dd}>
                      {this.renderFilters(characteristic)}
                    </dd>
                  </dl>
                </div>

                {/* 底部按钮 */}
                <FilterFooter
                  style={props}
                  className={styles.footer}
                  cancelText="清除"
                  onCancel={this.onCancel}
                  onOk={this.onOk}
                />
              </>
            )
          }}
        </Spring>
      </div>
    )
  }
}
