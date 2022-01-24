import React, { Component } from 'react'

import { PickerView } from 'antd-mobile'

import FilterFooter from '../../../../components/FilterFooter'

/* 
  获取选中值：

  1 在 FilterPicker 组件中，添加状态 value（用于获取 PickerView 组件的选中值）。
  2 给 PickerView 组件添加配置项 onChange，通过参数获取到选中值，并更新状态 value。
  3 在确定按钮的事件处理程序中，将 type 和 value 作为参数传递给父组件。
*/

export default class FilterPicker extends Component {
  state = {
    value: this.props.defaultValue
  }
  // constructor(props) {
  //   super(props)
  //   console.log('FilterPicker 创建了')
  //   this.state = {
  //     value: this.props.defaultValue
  //   }
  // }

  render() {
    const { onCancel, onSave, data, cols, type } = this.props
    const { value } = this.state

    return (
      <>
        {/* 
          选择器组件： 
          注意：一定要设置组件 value 属性的值，为当前选中状态的值，否则，无法实现切换选中项
        */}
        <PickerView
          data={data}
          value={value}
          cols={cols}
          onChange={val => {
            this.setState({
              value: val
            })
          }}
        />

        {/* 底部按钮 */}
        <FilterFooter
          onCancel={() => onCancel(type)}
          onOk={() => onSave(type, value)}
        />
      </>
    )
  }
}
