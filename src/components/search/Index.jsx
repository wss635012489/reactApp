import React from 'react'
import styles from "./index.module.less"
import { SearchOutline } from 'antd-mobile-icons'
import PropTypes from 'prop-types'

function Index(props) {
  return (
    <div className='pad-15 main-color'>
      <div className={styles.box}>
        <SearchOutline className={styles.icon}/>{props.title}
      </div>
    </div>
  )
}
Index.propTypes = {
  title:PropTypes.string
}
Index.defaultProps = {
  title:'想吃什么搜这里'
}

export default Index
