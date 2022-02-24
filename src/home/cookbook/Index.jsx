import React from 'react'
import './index.less'
import {Swiper,Space } from 'antd-mobile'
import Search from "@/components/search/Index"

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
const hotClass = ['家常菜','素菜','粥','汤','川菜','早餐','清淡','麻辣']

export default function Index() {
  return (
    <div className="cook-book-box">
      <div className="nav">
        <div>菜谱大全</div>
      </div>
      <div className="body">
        <div>
          {/* ==================================== */}
          <Space direction='vertical' block>
            <Swiper 
              autoplay 
              loop  
              indicatorProps={{
                color: 'blue',
              }}>
                {
                  colors.map((color, index) => (
                    <Swiper.Item key={index}>
                      <div
                        className="swiper-item"
                        style={{ background: color }}
                      >
                        {index + 1}
                      </div>
                    </Swiper.Item>
                  ))
                }
            </Swiper>
          </Space>
          {/* ==================================== */}
          <Search></Search>
          {/* ==================================== */}
          <div className='hot-box'>
            <div className='name pad'>热门分类</div>
            <ul>
              {
                hotClass.map((val,index) => {
                  return (
                    <li key={index}>
                      {val}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
