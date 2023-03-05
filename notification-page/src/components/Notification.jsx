import markAvatar from '../assets/images/avatar-mark-webber.webp';
import './Notification.css';
import { useState } from 'react';
import notifications from '../data';

function Notification() {
  const [isRead, setIsRead] = useState(false);

  return (
    <div className='notification-container'>
      <div className='notification'>
        <div className='upper'>
          <img src={markAvatar} alt='hello' className='avatar' />
          <div className='notification-info'>
            <p className='person-name'>Mark Webber</p>
            <p className='notification-action'>reacted to your recent post</p>
            <p className='action-name'>My first tournament today!</p>
            <div className='unread-dot'></div>
          </div>
        </div>
        <p className='notification-time'>1m ago</p>
      </div>
    </div>
  );
}

export default Notification;
