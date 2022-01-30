import React from 'react'; 
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

import './Feed.css';

function Feed({ posts }) {
    return (
        <div className='feed'>
            <MessageSender />
            <Post 
            message="this works"
            timestamp='timestamp'
            username='me'
            //image={image}
            />
        </div>
    );
}

export default Feed 