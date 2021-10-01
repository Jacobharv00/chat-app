import ChatBox from 'react-custom-chat'
import { useState } from '@hookstate/core'
import store from '../store'

function SecondPerson () {
  const { firstPersonMessageList, secondPersonMessageList } = useState( store )

  const handleSendMessage = newMessage => {
    secondPersonMessageList.merge( [ { text: newMessage, person: 'primary' } ] )
    setTimeout( () => {
      firstPersonMessageList.merge( [ { text: newMessage, person: 'secondary' } ] )
    }, 500 )
  }

  return (
    <ChatBox
      messageList={ secondPersonMessageList.get() }
      onSendMessage={ handleSendMessage }
      settings={ {
        position: 'right',
        navColor: 'blue',
        navText: 'Gracie'
      } }
    />
  )
}

export default SecondPerson

