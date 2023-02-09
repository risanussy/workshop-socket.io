const Profil = (props) => {  
    return (
        <div className="sidebar">
            <h1>Web Chat</h1>
            <br /><br />
            <div className="foto">
                <button className="change">+</button>
            </div>
            <br />
            <h2>Risa</h2>
            <p>risa@nussy.com</p>
            <br /><br /><br />
            <div className="auth">
                <h3>Online <span className="on"></span></h3>
                <br />
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <button className="logout">logout</button>
        </div>
    )
}

export default Profil;