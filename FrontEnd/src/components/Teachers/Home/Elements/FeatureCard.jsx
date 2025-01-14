import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureCard.css'; // Import the CSS file

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
const FeatureCard = () => {

    const navigate =useNavigate()

    const ResultOnClick=(title)=>{
        navigate(`/teachers/${title}`)
    }
    
    const cards = [
        {
            title: 'Students',
            text: 'CHECK YOUR STUDENTS LIST ',
            imageUrl: 'https://png.pngtree.com/png-vector/20240511/ourmid/pngtree-cute-young-boy-and-girl-student-image-png-image_12432923.png',
        },
        {
            title: 'Attendance',
            text: 'CHECK STUDENTS ATTENDANCE ',
            imageUrl: 'https://cdn-icons-png.freepik.com/256/9875/9875154.png?semt=ais_hybrid',
        },
        {
            title: 'Mark Entry',
            text: 'ENTER MARK OF THE STUDENTS ',
            imageUrl: 'https://img.favpng.com/6/9/21/grading-in-education-computer-icons-test-student-png-favpng-DCv96JXC4Ccvb0FgzGUFcQ89L.jpg', // Replace with your image URL
        },
        {
            title: 'Teacher Time Table',
            text: 'CHECK TIME TABLE ',
            imageUrl: 'https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png', // Replace with your image URL
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

export default FeatureCard;
