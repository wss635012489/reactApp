import React from 'react'
import styles from "./index.module.less"
import { SearchOutline } from 'antd-mobile-icons'

export default function Index() {
  return (
    <div className='pad-15 main-color'>
      <div className={styles.box}>
        <SearchOutline />想吃什么搜这里
      </div>
    </div>
  )
}
