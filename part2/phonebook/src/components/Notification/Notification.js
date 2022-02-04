import React from 'react';
import './notification.css';

const Notification = ({message, type}) => {
    if(!message){
        return <></>;
    }

    return (
        <div className={`notif-${type}`}>
            {message}
        </div>
    )
}

export default Notification;