import React from 'react';
import FeatureCard from './Elements/FeatureCard';
import checkAuth from '../../../hooks/checkAuth';
import { useEffect } from 'react';
import { useState } from 'react';


const TeachersHome = () => {
  const [showEmpty,setShowEmpty]=useState()


  const { user } = checkAuth()
  console.log(user)
  useEffect(() => {

    const fetchDashboardData = async () => {
      if (!user) return; 

      console.log(user)
      if (user !== 'teacher') {
        console.log('fffff')
        setShowEmpty(true)      
      }
    }
    fetchDashboardData();
  }, [user])


  if(showEmpty){
    return <div></div>
  }


  console.log(user)
    return (
    <div className="">
<FeatureCard/>
    </div>
  );
};

export default TeachersHome;
