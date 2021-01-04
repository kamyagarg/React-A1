import React from 'react';
import './footer.css';

export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="text">
                    <div className="subs">Subscribe</div>
                    <div className="updated">& Stay Updated</div>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter here"/>
                </div>
            </footer>
        );
    }
}