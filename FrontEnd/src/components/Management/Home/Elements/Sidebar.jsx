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
        </ul>
      </nav>

    </div>

</div>
  );
};

export default ManagementSidebar;
