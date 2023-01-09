import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

function Header()
{
    return(
        <div className='header'>
            <div className='header__left'>

            
          
          <MenuIcon />

         <img className="header__logo" 
         src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg " alt="" />
         </div>
         <div className='header__input'>
         <input placeholder ="Search" type="text" />
         <SearchIcon className='header__inputButton' />
         </div>
         <div className='header__icons'>
         <VideoCallIcon className='header__icon' />
         <AppsIcon />
         <NotificationsIcon />
         <Avatar alt ="remy sharp" src="https://picsum.photos/200/300?random=50 "/>
         </div>

        </div>
    )
}
 export default Header