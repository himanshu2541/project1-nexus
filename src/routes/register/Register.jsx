// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import styles from '../login/login.module.css'
import {Link} from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("")
  const [name , setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    if(!name || !username || !password){
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
    setUsername("")
    setName("")
    setPassword("")
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <form action={""} className={styles.form}>
          <input type={"text"} id={"name"} placeholder={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
          <input type={"email"} id={"username"} placeholder={"email"} value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type={"password"} id={"password"} placeholder={"password"} value={password} onChange={e=> setPassword(e.target.value)}/>
          <button onClick={handleLogin}>Register</button>
        </form>
        <p>Already have an account? <Link to={"/"} className={styles.register}>Login</Link></p>
        <p className={styles.errorBox}>
          {error}
        </p>
      </div>
    </div>
  )
}
export default Register
