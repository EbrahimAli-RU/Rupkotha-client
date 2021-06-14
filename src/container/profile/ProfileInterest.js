import React, {useState} from 'react';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import ButtonLink from '../../component/button/ButtonLink';
import InterestCard from '../../component/profileTitle/InterestCard';

const interest = [
    {id: 1, name: 'Superheroes', selected: false}, 
    {id: 2, name: 'Superheroes', selected: false}, 
    {id: 3, name: 'Superheroes', selected: false},
    {id: 4, name: 'Superheroes', selected: false}, 
    {id: 5, name: 'Superheroes', selected: false}, 
    {id: 6, name: 'Superheroes', selected: false},
    {id: 7, name: 'Superheroes', selected: false}, 
    {id: 8, name: 'Superheroes', selected: false}, 
    {id: 9, name: 'Superheroes', selected: false},
    {id: 10, name: 'Superheroes', selected: false}, 
    {id: 11, name: 'Superheroes', selected: false}, 
    {id: 12, name: 'Superheroes', selected: false},
    {id: 13, name: 'Superheroes', selected: false}, 
    {id: 14, name: 'Superheroes', selected: false}, 
    // {id: 15, name: 'Superheroes', selected: false},
    // {id: 16, name: 'Superheroes', selected: false}, 
    {id: 17, name: 'Superheroes', selected: false}, 
    {id: 18, name: 'Superheroes', selected: false}]

const ProfileInterest = () => {
    const [interests, setInterest] = useState(interest)
    
    
    const interestHandler = (id) => {
        let interCopy = [...interests];
        interCopy.forEach(inte => {
            if(inte.id === id && inte.selected === false) {inte.selected=true} 
            else if(inte.id === id && inte.selected === true) {inte.selected=false}
        })
        // console.log(interCopy)
    //     let index = interCopy.indexOf(id)
    //     index === -1 ? interCopy.push(id) : interCopy.splice(index, index + 1)
    //   console.log(interCopy)
        setInterest(interCopy)
        
    }
    return (
        <>
            <ProfileTitle title='Interests' />
            <div className='profile__interest__wrapper'>
                <div className='profile__interest__content'>
                    <h2>Choose Your Interests</h2>
                    <p>Get personalized recomendations</p>
                    <div className='profile__interest__topic__wrapper'>
                        {interest.map(el => 
                            <InterestCard 
                                key={el.id}
                                isSelected={el.selected}
                                handler={interestHandler} 
                                id={el.id} 
                                name={el.name} />)}
                    </div>
                    
                    <div style={{width: '36rem', display:'flex', justifyContent: 'center'}}>
                        <ButtonLink text='Continue' link='/select/profile' />
                    </div>
                    <a className='cancel__button display' href='/'>Cancel</a>
                </div>
            </div>
        </>
    );
};

export default ProfileInterest;