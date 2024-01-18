import React from 'react';
import "./Header.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import MessageIcon from '@mui/icons-material/Message';
import NavigationIcon from '@mui/icons-material/Navigation';
import GestureIcon from '@mui/icons-material/Gesture';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';


const Header = () => {
    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container-in">
                    <div className="header-top-area">
                        <ul className="left">
                            <li>
                               <EmailIcon/> <span>auditionhub@gmail.com</span>
                            </li>
                            <li>
                                <RoomIcon/> Kochi,Kerala,India
                            </li>
                        </ul>
                        <ul className="social-icons d-flex align-items-center">
                            <li>
                                <a href="#" className="fb"><MessageIcon/></a>
                            </li>
                            <li>
                                <a href="#" className="twitter"><TwitterIcon/></a>
                            </li>
                            <li>
                                <a href="#" className="vimeo"><NavigationIcon/></a>
                            </li>
                            <li>
                                <a href="#" className="skype"><GestureIcon/></a>
                            </li>
                            <li>
                                <a href="#" className="rss"><RssFeedIcon/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
