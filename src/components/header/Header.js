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
                                <li><a href="#">HOME</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="#">FEATURES</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="#">BLOG STYLES</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="#">MEGA MENU</a><img src="../icons/arrow.svg" alt="" className="arrow-icon" /></li>
                                <li><a href="#">SHOP</a><img src="../icons/arrow.svg" alt="" className="arrow-icon"/></li>
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

