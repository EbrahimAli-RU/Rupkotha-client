import React from 'react';
import Button from '../../component/button/Button';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import interest1 from '../../assets/img/interest1.png'

const ProfileInterest = () => {
    return (
        <>
            <ProfileTitle />
            <div className='profile__interest__wrapper'>
                <div className='profile__interest__content'>
                    <h2>Choose Your Interests</h2>
                    <p>Get personalized recomendations</p>
                    <div className='profile__interest__topic__wrapper'>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                        <div className='profile__interest__topic'>
                            <img src={interest1} alt='interst' />
                            <p>Superheroes</p>
                        </div>
                    </div>
                    
                    <div style={{width: '36rem'}}>
                        <Button text='Continue' />
                    </div>
                    <a className='cancel__button display' href='/'>Cancel</a>
                </div>
            </div>
        </>
    );
};

export default ProfileInterest;