import { useState } from "react"
import axios from "axios"


const SignIn = () => {

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')

    const url = 'login'

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url, {
           user,
           pwd
        })

    }


    return (
        <section className="container m-auto p-5 border mt-5">
            <h1 className="text-center">Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 col-12">
                    <label htmlFor="formGroupExampleInput1" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="Enter user name"
                        required
                        value={user}
                        onChange={(e) => setUser(e.target.value)}

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
                            placeholder="Enter Passward"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Log in
                </button>
            </form>
        </section>

    )
}

export default SignIn