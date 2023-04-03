import App from '../App'
import Messaging from '../components/Messaging'

const Home = ({ user, socket }) => {




  

  return user ? (
    <div>
       <Messaging socket={socket} /> 
      <h1>signed in!</h1>
    </div>
  ) : (
    <div>
      <h1>Woops! You don't have an account! Please sign in or create one to continue!</h1>
      
    </div>
  )
}

export default Home