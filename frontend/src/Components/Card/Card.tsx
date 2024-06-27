import React from 'react'
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return <div className = "card">
    <img src="https://images.unsplash.com/photo-1719244755007-e28c54f869b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D" alt="image" />
    <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>
    <p className='info'>Allez</p>
  </div>
};

export default Card