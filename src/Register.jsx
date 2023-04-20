import { useEffect, useRef, useState } from "react";
import { FaTimes } from 'react-icons/fa'
import { TiLocationArrow } from 'react-icons/ti'

const USER_REGEX = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

const Register = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [userValid, setUserValid] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setpwd] = useState('')
    const [pwdValid, setPwdValid] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [matchValid, setMatchValid] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        let result = USER_REGEX.test(user)
        setUserValid(result)
    }, [user])

    useEffect(() => {
        let pwdResult = PASSWORD_REGEX.test(pwd)
        setPwdValid(pwdResult)
        let matching = pwd === matchPwd
        setMatchValid(matching)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    return (
        <div className="container">
            <p className={errMsg ? 'hide' : 'show'} ref={errRef} aria-live='assertive'>{errMsg} </p>
            <h1 className="text-primary f3 text-center">Register</h1>
            <form className="row g-3">

                <div className="col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Username: <span>{user && !userValid ? <FaTimes/> : <TiLocationArrow/>}</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Username"
                        autoComplete="off"
                        ref={userRef}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={userValid ? false : true}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        aria-describedby="uidnote"
                    />
                    <p className={userFocus && user && !userValid ? 'show' : 'hide'} id="uidnote">4 to 24 characters <br />
                        must begin with letter <br />
                        letters, numbers, underscores, hyphens allowed.
                    </p>
                </div>


                <div className="col-md-6">
                    <label htmlFor="inputPassword1" className="form-label">
                        Password
                    </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword1" 
                    placeholder="Password"
                    value={pwd}
                    onChange={(e)=> setpwd(e.target.value)}
                    required
                    onFocus={()=> setPwdFocus(true)}
                    onBlur={()=> setPwdFocus(false)}
                    aria-invalid = {pwdValid? false : true}
                    aria-describedby="pwdInfo"

                    />
                    <p id='pwdInfo' className={!pwdValid && pwdFocus && pwd ? 'show' : 'hide'}>It should be at least 8 characters long <br />It must have a number <br /> It must have a capital alphabet</p>
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword4" 
                    placeholder="Confirm Password"
                    required
                    onChange={(e)=> setMatchPwd(e.target.value)}
                    value={matchPwd}
                    onFocus={()=> setMatchFocus(true)}
                    onBlur={()=> setMatchFocus(false)}
                    aria-invalid={matchValid? false : true}
                    aria-describedby="confPwdInfo"
                     />
                     <p className={!matchValid && matchPwd && matchFocus ? 'show' : 'hide'}>Password not matching</p>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </div>
            </form>

        </div>
    );
}

export default Register