const Auth = (props) => {
    return (
        <div className="sidebar">
            <h1>Web Chat</h1>
            <br /><br />
            <div className="auth">
                <h3>Login</h3>
                <br />
                <form>
                    <input type="text" placeholder="Email" required/>
                    <hr />
                    <input type="password" placeholder="Password" required/>
                    <br /><br />
                    <button className="login">Login</button>
                </form>
            </div>
            <br /><br /><br />
            <div className="auth">
                <h3>Daftar</h3>
                <br />
                <form>
                    <input type="text" placeholder="Username" />
                    <hr />
                    <input type="text" placeholder="Email" />
                    <hr />
                    <input type="password" placeholder="Password" />
                    <hr />
                    <input type="password" placeholder="Confirm" />
                    <br /><br />
                    <button className="daftar">Daftar</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;