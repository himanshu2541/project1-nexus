// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import styles from './login.module.css'
import {Link} from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    if(!username || !password){
      setError("Please fill out all the fields")
      setTimeout(() => {
        setError("")
      }, 5000)
    }
    else if(!username.includes("@")){
      setError("Please provide correct credentials")
      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <form action={""} className={styles.form}>
          <input type={"email"} id={"username"} placeholder={"email"} onChange={(e) => setUsername(e.target.value)}/>
          <input type={"password"} id={"password"} placeholder={"password"} onChange={e=> setPassword(e.target.value)}/>
          <button onClick={handleLogin}>Login</button>
        </form>
          <p>Didn't have a account? <Link to={"/register"} className={styles.register}>Register</Link></p>
        <p className={styles.errorBox}>
          {error}
        </p>
      </div>
    </div>
  )
}
export default Login
