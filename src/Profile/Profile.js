import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile(props) {
  if(localStorage.getItem('userLogin')){
      return <div>HELLO MẪN</div>
  }else {
      alert('Đăng nhập để tiếp tục cuộc chơi')
      return<Redirect to='/login' />
  }
}
