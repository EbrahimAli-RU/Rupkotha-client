import React from 'react';
import {withRouter} from 'react-router-dom'

const ProfileImage = (props) => {

    const selectProfilePicHandler = () => {
        props.history.push('/profile/create')
    }
console.log(props.profiles.photos[0])
    return (
        <>

            <div className='one__category__profile__imgs'>
                    <p className='one__category__profile__imgs__title'>{props.profiles.title}</p>
                    {props.profiles.photos.map(el => 
                        <img onClick={selectProfilePicHandler} 
                             className='one__category__profile__img' 
                             key={el} 
                             src={`http://localhost:8000/${el}`} 
                             alt='new profile' />)}
            </div>
        </>
    );
};

export default withRouter(ProfileImage);