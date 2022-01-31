import React from 'react';

const Avatar = (props) => {
  return (
    <div className="profile_image">
      <h4>{props.userID}</h4>
      <p>User Avatar to go here</p>
      <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"/>
    </div>)
};

export default Avatar;
