import React from 'react';
import profile from '../../assets/img/profile.png'
import profile1 from '../../assets/img/profile1.png'
import profile2 from '../../assets/img/profile2.png'
import Profile from '../../component/profileTitle/Profile';
import SearchBox from '../../component/searchBox/SearchBox';

const EditProfile = () => {
    return (
        <div className='select__profile__container width80'>
            <h1 className='select__profile__title marginBottom-big'>Edit Profile</h1>
            <div className='select__profile__btn-search marginBottom-extralarge'>
                   <SearchBox />
            </div>
            <div className='select__profile__wrapper width60'>
                <Profile profile={profile} name='default' isDisplay={true} />
                <Profile profile={profile1} name='Isita' isDisplay={true} />
                <Profile profile={profile2} name='Isita' isDisplay={true} />
            </div>
        </div>
    );
};

export default EditProfile;