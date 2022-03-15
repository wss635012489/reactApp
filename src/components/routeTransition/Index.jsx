import {CSSTransition,TransitionGroup} from 'react-transition-group'

import React from 'react'
import './Index.less'
import { useHistory, useLocation } from 'react-router-dom'

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}
export default function Index(props) {
  const {pathname} = useLocation()
  const history = useHistory()
  return (
    <TransitionGroup
      childFactory={child => React.cloneElement(
        child,
        {classNames: ANIMATION_MAP[history.action]}
      )}
    >
       <CSSTransition 
          key={pathname}
          classNames="fade"
          timeout={500}
          unmountOnExit={true}
        >
          {props.children}
      </CSSTransition>
    </TransitionGroup>
  )
}
