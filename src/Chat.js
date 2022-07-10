import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
       
     <div className='chatheader'>  
     <Avatar/>
        <div className='chatheader_info'>
          <h1>Room Name</h1>
          <p>Last Seen at .....</p>
        </div>

        <div className='chatheader_additional'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton> 
          <IconButton>
            <MoreVert/>
          </IconButton>        
        


        </div>
      </div>
      <div className='chat_body'>

         <p className='chat_message'>
          <span className='chat_name'>Belieber</span>
          This is a message
          <span className='chat_time'>
            {new Date().toUTCString()}
          </span>
          
            </p> 
      </div>
   </div>
  )
}

export default Chat
