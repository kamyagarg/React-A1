import React from 'react';
import Carousel from 'react-elastic-carousel';
// import {Card} from './components/cards/card';
import Card from '../cards/card';
import {connect} from 'react-redux';



let breakPoints = [
    { width: 500 , itemsToShow : 1},
    { width: 768 , itemsToShow : 3},
    { width: 1200 , itemsToShow : 4},
    { width: 1500 , itemsToShow : 5}
];

class Card1 extends React.Component {

        render(){
            if(this.props.items){
                return(
                <div className="carousel">
                    <Carousel breakPoints={breakPoints}>
                        {this.props.items.map((n) => (
                        <Card number={n.title} />
                        ))}
                    </Carousel>
                </div>
                );
            }else{
        // console.log("this iprops",this.props.items);
            return(
            <Carousel breakPoints={breakPoints}>
                <Card number="No item found!"></Card>
            </Carousel>
            );
            }
        }
        
}

const mapStateToProps = (state) => ({
    items: state.items,
    formValues: state.formValues,
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
});




export default connect(mapStateToProps)(Card1);