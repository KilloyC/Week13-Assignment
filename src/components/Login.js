import React from 'react';

function Login() {
    return(
        <div className="login">
            <form>
                <div>
                    <h3>Login</h3>
                    <hr></hr>

                    <label htmlFor="username" className='label'><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required></input>

                    <label htmlFor="password" className='label'><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required></input>

                    <hr></hr>

                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;