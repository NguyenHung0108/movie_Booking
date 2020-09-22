import React from 'react'

export default function PageNotFound(props) {
    return (
        <div className = "container text-success">
            <h1 className ="display-1">KHÔNG TÌM THẤY TRANG</h1> 
            {props.location.pathname}
            <button className = "btn btn-primary" onClick = {()=> {
                props.history.replace('/home')
            }}>Quay về trang chủ</button>
        </div>
    )
}
