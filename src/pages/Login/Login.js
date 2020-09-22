import React,{useState} from 'react';


export default function Login(props) {
    // const [state, setState] = useState({
    //     userLogin: {
    //         userName:'',
    //         passWord: '',
    //     }
    // });
    const [userLogin, setUserLogin] = useState({
        userName:'',
        passWord: '',
    })
    const handleChange = (e) => {
        const {value, name} = e.target;
        setUserLogin({
            ...userLogin,
            [name]:value
        })
         
        // setState({
        //     userLogin: {...state.userLogin,[name]:value}
        // })
        console.log(value,name)
       
    }
    const login = (e) => {
        e.preventDefault();
        //Kiểm tra userName, passWord = cybersoft => CHuyển về trang chủ ngược lại báo lỗi
        if (userLogin.userName === 'cybersoft' && userLogin.passWord === '123') {
            //CHuyển hướng đến trang mặc định về trang home
            // props.history.push('/home');
            props.history.replace('/home')
        }else {
            alert("Login fail !!!")
        }
    }
    return (
        <form className = "container text-center text-primary" style={{width:"35%",border:"20px solid yellow",borderRadius:"20%"}} onSubmit = {login}>
            <h1>Login</h1>
            <div className="form-group">
                <span>UserName</span>
                <input name="userName" className = "form-control" onChange = {handleChange}/>
            </div>
            <div className="form-group">
                <span>Password</span>
                <input name="passWord" className = "form-control" onChange = {handleChange}/>
            </div>
            <div className="form-group">
                <button type = "submit" className ="btn btn-success">Login</button>
            </div>

        </form>
    )
}
