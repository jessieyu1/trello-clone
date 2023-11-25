import { useNavigate } from "react-router-dom"
import {AppBar,Toolbar,Button,Container,Grid,TextField} from '@mui/material'
import logoURL from '../assets/images/trello-logo.svg'
import '../App.css'
const HeaderSection = () => {
  const navigate = useNavigate()

  const toLogin = () => {
    navigate('/login')
  }

  const toSignUp= () => {
    navigate('/signup')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
       
          <a href="/home" className='logo-container'>
              <div style={{margin: '5px',fontSize: '14px',lineHeight:'1.2',color:'white'}}>
             <span>ATALASSIAN</span>
              </div>
            <img src={logoURL} alt="trello logo" className='logo-img'/>
      
          </a>
       
        </div>
        <button onClick={toLogin}>Log in</button>
     
        <button onClick={toSignUp}>Get Trello for free</button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderSection