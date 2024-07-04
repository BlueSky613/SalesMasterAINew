/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilGroup,
  cilHome,
  cilList,
  cilPen,
  cilSettings,
} from '@coreui/icons'
import {CNavItem} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'ホーム',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '営業AI作成',
    to: '/chat_new',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '営業AI一覧',
    to: '/chat',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ユーザー設定',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'グループ',
    to: '/group',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
]

export default _nav
