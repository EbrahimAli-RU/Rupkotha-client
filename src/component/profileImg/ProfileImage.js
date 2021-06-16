import React from 'react';

const ProfileImage = (props) => {

    return (
        <>
            <div className='one__category__profile__imgs'>
                    <p className='one__category__profile__imgs__title'>{props.profiles.title}</p>
                    {props.profiles.photos.map(el => 
                        <img onClick={() => props.handler(el)} 
                             className='one__category__profile__img' 
                             key={el} 
                             src={`http://localhost:8000/${el}`} 
                             alt='new profile' />)}
            </div>
        </>
    );
};

export default ProfileImage;