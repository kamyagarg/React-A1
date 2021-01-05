import React from 'react';
import './card.css'
import {connect} from 'react-redux';

const Card = ({ number }) => <div className = "card">{number}</div>

export default Card;
