import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultHome.css'; // Import the CSS file

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
            title: 'CIA-1',
            text: 'CHECK YOUR CIA 1 EXAM RESULT ',
            imageUrl: 'https://www.pngkit.com/png/detail/197-1970626_discuss-results-with-patients-view-result-icon.png', // Replace with your image URL
        },
        {
            title: 'CIA-2',
            text: 'CHECK YOUR CIA 1 EXAM RESULT ',
            imageUrl: 'https://www.freeiconspng.com/thumbs/results-icon-png/results-icon-png-11.png', // Replace with your image URL
        },
        {
            title: 'UNIVERSITY RESULT',
            text: 'CHECK YOUR UNIVERSITY EXAM RESULT ',
            imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/task-result-illustration-download-in-svg-png-gif-file-formats--exam-a-plus-grade-sheet-school-education-pack-illustrations-4707141.png', // Replace with your image URL
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
