import React from 'react';
import './header.css';


export class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <header>
                        <div className="logo">
                            <img src="../icons/pizza.svg" alt="" class="logo" />
                        </div>
                        <div className="options">
                            <ul>
                                <li><a href="www.google.com">HOME</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="www.google.com">FEATURES</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="www.google.com">BLOG STYLES</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="www.google.com">MEGA MENU</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="www.google.com">SHOP</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                            </ul>
                            <div className="right-icons">
                                <img src="../icons/bolt.svg" alt="" className="icons-all" />
                                <img src="../icons/search.svg" alt="" className="icons-all" />
                                <img src="../icons/share.svg" alt="" className="icons-all" />
                                <img src="../icons/bookmarks.svg" alt="" className="icons-all" />
                            </div>
                        </div>
                    </header>   
                </div>
            </div>
        );
    }
}


{/* <img src="../icons/arrow.svg" alt="" className="arrow-icon" />
<img src="../icons/arrow.svg" alt="" className="arrow-icon" /> */}
