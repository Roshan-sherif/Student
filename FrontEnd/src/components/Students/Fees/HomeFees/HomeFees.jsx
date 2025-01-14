import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeFees.css'; // Import the CSS file

// TitleCard component
const TitleCard = ({ title, text, imageUrl }) => {
    return (
        <div className="title-card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
};

const ResultOnClick=()=>{

}
// Result component
const Result = () => {

    const navigate =useNavigate()

    const ResultOnClick=(title)=>{
        navigate(`/${title}`)
    }
    
    const cards = [
        {
            title: 'DUE FEES',
            text: 'CHECK YOUR DUE FEES  ',
            imageUrl: 'https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/fees.png', // Replace with your image URL
        },
        {
            title: 'PAY FEES',
            text: 'PAY YOUR FEES ',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/552/552788.png', // Replace with your image URL
        },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
            {cards.map((card, index) => (
                <div onClick={()=> ResultOnClick(card.title,index)}>
                <TitleCard 
                    key={index}
                    title={card.title}
                    text={card.text}
                    imageUrl={card.imageUrl}
                />
                </div>
            ))}
        </div>
    );
};

export default Result;
