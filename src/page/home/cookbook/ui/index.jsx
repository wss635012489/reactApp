import React,{Component} from 'react'
import './index.less'
import {Swiper,Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setHotListDataSync } from '../actionCeator'
import Search from "@/components/search/Index"

const hotClass = ['家常菜','素菜','粥','汤','川菜','早餐','清淡','麻辣']

@withRouter
@connect(
  (state) => {
    return {
      list:state.cookbook.hotList
    }
  },
  (dispatch) => {
    return {
      loadData(){
        dispatch(setHotListDataSync())
      }
    }
  }
)
class Index extends Component {
  componentDidMount(){
    this.props.loadData()
  }

  goList = (title) => {
    return () => {
      this.props.history.push('/list',{title})
    }
  }
  goDetil = (title) => {
    return () => {
      this.props.history.push('/detail',{title})
    }
  }

  render(){
    const {list} = this.props
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
                loop>
                  {
                    list.map((item, index) => (
                      <Swiper.Item key={index}>
                        <div
                          className="swiper-item"
                        >
                          <img src={item.imgUrl} alt="" />
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
                      <li key={index} onClick={this.goList(val)}>
                        {val}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='boutique-box'>
              <div className='pad'>精品菜品</div>
              <ul>
                {
                  list.length > 0 && list.map((item,index) => {
                    return <li key={index} onClick={this.goDetil(item.title)}>
                      <img src={item.imgUrl} alt="" />
                      <div>
                        <div>{item.title}</div>
                        <div><span>{item.seeNum}</span>浏览 <span>{item.scNum}</span>收藏</div>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Index