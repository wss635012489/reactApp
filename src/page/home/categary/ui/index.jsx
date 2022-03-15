import React, { useEffect, useState } from 'react'
import './index.less'
import Search from "@/components/search/Index"
import {get} from "@a/http"
import { useHistory } from 'react-router-dom'

export default function Index() {
  const [navType,setNavType] = useState('category')
  const [menu,setMenu] = useState('')
  const [curMenu,setCurMenu] = useState('')
  const [cat,setCat] = useState('')
  const history = useHistory()
  useEffect(() => {
    get('/api/category').then(res => {
     // console.log(res)
      var menu = Object.keys(res[navType])
      setCat(res)
      setMenu(menu)
      setCurMenu(menu[0])
    })
  },[])
  const handelNavClick = (type) => {
    return () => {
      setNavType(type)
      setMenu(() => {
        var arr = Object.keys(cat[type])
        setCurMenu(arr[0])
        return arr
      })
      
    }
  }
  return (
    <div className='categray-box'>
      <div className='nav x-center y-center'>
        <div className='x-center'>
          <span className={navType == 'category'?'active':''} onClick={handelNavClick('category')}>分类</span>
          <span className={navType == 'foods'?'active':''}  onClick={handelNavClick('foods')}>食材</span>
        </div>
      </div>
      <div className='search'>
        <Search title="请输入关键字，如川菜"></Search>
      </div>
      <div className='content my-flex'>
        <div className='left'>
          <ul>
            {
              menu && menu.map((item,index) => {
                return <li key={index} className={item == curMenu?'active':''} onClick={() => {setCurMenu(item)}}>{item}</li>
              })
            }
          </ul>
        </div>
        <div className='right my-flex my-flex-1'>
          <ul>
            {
              cat && cat[navType][curMenu] && cat[navType][curMenu].map((item,index) => {
                return <li key={index} onClick={() => {history.push('/list',{title:item})}}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
