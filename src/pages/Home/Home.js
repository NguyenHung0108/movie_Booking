import React, { useState } from 'react';
import {axios} from 'axios'

export default function Home(props) {
    const [dsPhim, setDSPhim] = useState([]);
    const layDSPhim = () => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP08',
            method: 'GET'
        }).then(res => {
            console.log('kết quả', res.data);
            //Set lại state ds phim => function render lại .(chạy lại tất cả ds phim mang giá trị mới)
            setDSPhim(res.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
        const renderPhim = () => {
            return dsPhim.map((phim, index) => {
                return <div className="col-4" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa}</p>
                        </div>
                    </div>

                </div>

            })
        }
    
    return (
        <div className="container">
            
            <button className="btn btn-success" onClick={() => {
                layDSPhim();
            }}>Lấy danh sách phim</button>
            <h2>Danh sách phim</h2>
            <div className = "row">
            {renderPhim()}
            </div>
           
        </div>
    )
}

