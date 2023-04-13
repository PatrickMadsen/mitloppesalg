import { useState } from "react"
import { signIn } from "next-auth/react"
import Router from "next/router"

export default () => {
    const [userInfo, setUserInfo] = useState({username: "", password: ""})
    const handle = async (e) => {
        e.preventDefault()
        const res = await signIn("credentials", {
            username: userInfo.username,
            password: userInfo.password,
            redirect: false
        })
        if(res.status === 200){
            Router.replace("/admin")
        }
    }
    return(
        <div className="container login">
            <form onSubmit={handle}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    value={userInfo.username}
                    type="text" 
                    className="form-control" 
                    name="username" 
                    id="username" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Username" 
                    onChange={({target}) => {
                        setUserInfo({...userInfo, username: target.value})
                    }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input 
                    value={userInfo.password}
                    type="password" 
                    name="password" 
                    className="form-control" 
                    id="Password" 
                    placeholder="Password" 
                    onChange={({target}) => {
                        setUserInfo({...userInfo, password: target.value})
                    }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}