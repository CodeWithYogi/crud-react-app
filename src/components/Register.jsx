import { useRef, useState } from "react";
import axios from "axios";


const User_Regex = /^[a-zA-Z\-]+$/;
const Password_Regix = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/

const url = 'register'

const Register = () => {

    const userRef = useRef()

    const [user, setUser] = useState('')
    const [validUser, setValidUser] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [mobileNum, setMobileNum] = useState('')
    const [userId, setUserId] = useState('')
    const [pwd, setPwd] = useState('')
    const [matchPwd, setMatchPwd] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://interview.wpos.live/api/user/register', {
            user,
            mobileNum,
            userId,
            pwd,
        })
    }

    return (
        <section className="container row m-auto p-5 border mt-5">
            <h3 className="text-center">Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="Enter username"
                        required
                        ref={userRef}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        area-aria-disabled={validUser ? false : true}
                        aria-describedby="user"

                    />
            
                </div>

                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Mobile Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter Mobile number"
                        value={mobileNum}
                        onChange={(e) => setMobileNum(e.target.value)}
                    />
                </div>

                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput3" className="form-label">
                        User Id
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        placeholder="Enter user Id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>

                <div className="mb-3 col-12">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Enter Password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <label htmlFor="inputPassword4" className="col-12 col-form-label">
                        Confirm Password
                    </label>
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Re-enter Password"
                            value={matchPwd}
                            onChange={(e) => setMatchPwd(e.target.value)}
                        />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary w-100">
                    Sign in
                </button>
            </form>

        </section>
    )
}

export default Register