const Chat = (props) => {
  if(props.status === 'login'){
      return (        
        <div className="main">
        <div>        
          <div><div className='bubble'><span className='user-chat'>Risa Nussy</span> Hallo semua</div><br/></div>
        </div>

          <br /><br /><br />
          <form className={'form-chat'}>
            <input type="text" className="chat" placeholder="Ketikan Pesan"/>
            <button className="chat-btn">Kirim</button>
          </form> 
        </div>
    )
  }else {
    return (        
      <div className="main">
      <div>        
        <div><div className='bubble'><span className='user-chat'>Risa Nussy</span> Hallo semua</div><br/></div>
      </div>
      </div>
  )
  }
}

export default Chat;