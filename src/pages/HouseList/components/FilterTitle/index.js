import React from 'react'

import { Flex } from 'antd-mobile'

import styles from './index.module.css'

// 条件筛选栏标题数组：
const titleList = [
  { title: '区域', type: 'area' },
  { title: '方式', type: 'mode' },
  { title: '租金', type: 'price' },
  { title: '筛选', type: 'more' }
]

/* 
  1 通过 props 接收，高亮状态对象 titleSelectedStatus。
  2 遍历 titleList 数组，渲染标题列表。
  3 判断高亮对象中当前标题是否高亮，如果是，就添加高亮类。

  4 给标题项绑定单击事件，在事件中调用父组件传过来的方法 onClick。
  5 将当前标题 type，通过 onClick 的参数，传递给父组件。
  6 父组件中接收到当前 type，修改该标题的选中状态为true。
*/

export default function FilterTitle({ titleSelectedStatus, onClick }) {
  return (
    <Flex align="center" className={styles.root}>
      {titleList.map(item => {
        // item.type => 'area'
        const isSelected = titleSelectedStatus[item.type]
        return (
          <Flex.Item key={item.type} onClick={() => onClick(item.type)}>
            {/* 选中类名： selected */}
            <span
              className={[
                styles.dropdown,
                isSelected ? styles.selected : ''
              ].join(' ')}
            >
              <span>{item.title}</span>
              <i className="iconfont icon-arrow" />
            </span>
          </Flex.Item>
        )
      })}
    </Flex>
  )
}
