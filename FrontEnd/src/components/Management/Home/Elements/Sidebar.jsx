import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const ManagementSidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
<div className='Items' style={{ display: 'flex', justifyContent: 'center' }}>
  <img className='avatar' src="https://www.creativefabrica.com/wp-content/uploads/2022/03/09/Woman-Icon-Teen-Profile-Graphics-26722130-2-580x387.png" alt="" />
</div>

<div className='Items' style={{ display: 'flex', justifyContent: 'center' }}>
<nav>
        <ul>
          <Link className='sidebarTexts' to='/'><li>HOME</li></Link>
          <Link className='sidebarTexts' to='/PROGRESS'><li>PROGRESS</li></Link>
          <Link className='sidebarTexts' to='/RESULT'><li>RESULT</li></Link>
          <Link className='sidebarTexts' to='/CGPA'><li>CGPA</li></Link>
          <Link className='sidebarTexts' to='/FEES'><li>PAY FEE</li></Link> 
          <Link className='sidebarTexts' to='/EVENTS'><li>EVENTS</li></Link>
          <Link className='sidebarTexts' to='/PROFILE'><li>PROFILE</li></Link>
        </ul>
      </nav>

    </div>

</div>
  );
};

export default ManagementSidebar;
// <div className="profile-section">
//         <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
//         <h3>NAME</h3>
//       </div>
