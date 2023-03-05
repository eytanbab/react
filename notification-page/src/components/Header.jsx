import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='notification-header'>
      <div className='notification-title'>
        <h3 className='title'>Notification</h3>
        <div className='num-of-unread'>3</div>
      </div>
      <button className='mark-as-read-btn'>Mark all as read</button>
    </div>
  );
}

export default Header;
