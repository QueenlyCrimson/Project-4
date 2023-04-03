import { useEffect, useState } from "react"
import { GetChatrooms } from "../services/MessageServices"

const Chatrooms = ({ user }) => {
  const [chatrooms, setChatrooms] = useState([])

  const handleChatrooms = async () => {
    const data = await GetChatrooms()
    setChatrooms(data)
  }

  useEffect(() => {
    handleChatrooms()
  }, [user])


  return(
    <div className="chatrooms" >
      <div></div>
    </div>
  )
}

export default Chatrooms