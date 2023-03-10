import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Subscriptions from '@mui/icons-material/Subscriptions';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Header() {
  return (
    <div className='header'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
            alt=""/>
        <div className="header__left">
            
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" />
            </div>
    
        </div>
        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option ">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option ">
                <Subscriptions fontSize="large" />
            </div>
            <div className="header__option ">
                <StorefrontIcon fontSize="large" />
            </div>
            <div className="header__option ">
                <SupervisedUserCircle fontSize="large" />
            </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <Avatar/>  
            <h4>Bhanuka</h4>
          </div>
          <IconButton>
            <AddIcon/>  
          </IconButton> 
          <IconButton>
            <ForumIcon/>  
          </IconButton> 
          <IconButton>
            <NotificationsActiveIcon/>  
          </IconButton> 
          <IconButton>
            <ExpandMoreIcon/>  
          </IconButton> 
        </div> 
    </div> 
  )
}
