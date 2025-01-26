import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Cards.css'; 
import axios from 'axios';


const TitleCard = ({ title, text, imageUrl }) => {
    return (
        <div className="title-card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
};

const FeatureCard = () => {
const [DashboardData,setDashboardData]=useState(null)
    const navigate =useNavigate()
    
useEffect(()=>{
   const fetchDashboardData=async()=>{
    const token=localStorage.getItem("token")
    if(!token){
       return navigate('/login/admin')
    }else{
        try {
      const response= await fetch('http://localhost:5000/api/admin/', {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
          }

      })
      const data = await response.json()
      if(data.status){
        navigate(`${data.redirect}`)
        setDashboardData(response.data)
      }else{
        navigate(`/login/admin`)
        setDashboardData(response.data)
      }
  
        } 
        
        catch (error) {
            navigate('/login/admin')
            console.error(error)
        }
    }
    }
    fetchDashboardData(); 

},[navigate])

    const ResultOnClick=(title)=>{
        navigate(`/admin/${title}`)
    }
    
    const cards = [
        {
            title: 'Students',
            text: 'CHECK YOUR STUDENTS LIST ',
            imageUrl: 'https://png.pngtree.com/png-vector/20240511/ourmid/pngtree-cute-young-boy-and-girl-student-image-png-image_12432923.png',
        },

        {
            title: 'Teacher',
            text: 'CHECK TEACHERS LIST ',
            imageUrl: 'https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png', // Replace with your image URL
        },
        {
            title: 'Class',
            text: 'CHECK CLASS ',
            imageUrl: 'https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png', // Replace with your image URL
        }

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
