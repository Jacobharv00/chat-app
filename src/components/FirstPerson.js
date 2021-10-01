import ChatBox from 'react-custom-chat'
import { useState } from '@hookstate/core'
import store from '../store'

function FirstPerson () {
  //initial global state
  const { firstPersonMessageList, secondPersonMessageList } = useState( store )

  const handleSendMessage = newMessage => {
    firstPersonMessageList.merge( [ { text: newMessage, person: 'primary' } ] )
    setTimeout( () => {
      secondPersonMessageList.merge( [ { text: newMessage, person: 'secondary' } ] )
    }, 500 )
  }


  return (
    <ChatBox
      messageList={ firstPersonMessageList.get() }
      onSendMessage={ handleSendMessage }
      settings={ {
        position: 'left',
        navColor: 'green',
        navText: 'Jacob'
      } }
    />
  )
}

export default FirstPerson
