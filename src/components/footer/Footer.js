import React from 'react';
import './footer.css';
import { fetchDatas } from '../../react-redux-store/actions/getApiDataAction';
import {connect} from 'react-redux';

class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ingredient: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.props.fetchDatas(this.state.ingredient);
    
    };
    handleTry = (e) => {
        e.preventDefault();
    }
    handleState = () => {};

   

    render(){
        return(
            <footer>
                <div className="text">
                    <div className="subs">Find food</div>
                    <div className="updated">with ingredient of your choice</div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="search">
                        <input type="text" name="ingredient" onChange={this.onChange} placeholder="Enter ingredient here" value={this.state.ingredient}/>                       
                    </div>
                    <button type="submit">Submit </button>
                </form>
            </footer>
        );
    }
}

export default connect(null, { fetchDatas })(Footer);
