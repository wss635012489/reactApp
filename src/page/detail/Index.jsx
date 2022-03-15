import React from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import './Index.less'
import {NavBar,Toast } from 'antd-mobile'

export default function Index() {
  const history = useHistory()
  const Location = useLocation()

  const handleClick = () => {
    Toast.show({
      icon: 'success',
      content: '已收藏',
    })
  }
  return (
    <div className='detail-box'>
      <NavBar onBack={() => {history.goBack()}}>{Location.state.title}</NavBar>
      <div className='content'>
        <img src="https://i8.meishichina.com/attachment/recipe/2022/03/14/20220314164722621535140212793280.jpg?x-oss-process=style/p800" alt="" />
        <p>口水鸡是四川的一道传统名菜，集麻辣鲜香嫩爽于一身，有“名驰巴蜀三千里，味压江南十二州”的美称。今天给大家做一道简易版的口水鸡！</p>
        <div className='button'>
          <button onClick={handleClick}>收藏</button>
        </div>
        <p>主料：鸡腿</p>
        <p>辅料：花生、姜葱蒜</p>
        <p>调理：东古浓头油、东古老陈醋、东古香格辣、白砂糖</p>
        <p>标签；麻辣、伴、半小时、简单</p>
      </div>
    </div>
  )
}
