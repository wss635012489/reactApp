import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {NavBar } from 'antd-mobile'
import './index.less'
import {get} from '@a/http'

export default function Index() {
  const history = useHistory()
  const Location = useLocation()
  const [list,setList] = useState([])
 
  useEffect(() => {
    get('/api/list').then(res => {
      //console.log(res)
      setList(res)
    })
  },[])
  return (
    <div className='list-box'>
       <NavBar onBack={() => {history.goBack()}}>{Location.state.title}</NavBar>
      <div className='content'>
        <ul>
          {
            list.length > 0 && list.map((item,index) => {
              return ( 
                <li key={index} onClick={() => {history.push('/detail',{title:item.title})}}>
                  <img src={item.imgUrl} alt="" />
                  <div>
                    <p className='title'>{item.title}</p>
                    <p className='stock line-2'>{item.stock}</p>
                    <p className='author'>{item.author}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
