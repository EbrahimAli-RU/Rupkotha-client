import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { withRouter } from 'react-router'
import axios from '../../utils/axios/axios'
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import Button from '../../component/button/Button';
import InterestCard from '../../component/profileTitle/InterestCard';
import * as action from '../../redux/action/index'

const ProfileInterest = (props) => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const [interests, setInterest] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/interest').then(res => {
            const interests =  res.data.data.interest.map(el => { return { inter: {...el, selected: false} }})
             setInterest(interests)
        }).catch(err => {
            console.log(err.response)
        })
        
    }, [])
    
    const interestHandler = (id, name) => {
        let interCopy = [...interests];
        interCopy.forEach(inte => {
            if(inte.inter._id === id && inte.inter.selected === false) {
                inte.inter.selected=true
            } else if(inte.inter._id === id && inte.inter.selected === true) {
                inte.inter.selected=false
            }
        })
        const profileCopy = {...profile}
        const addInterestCopy =profileCopy.interest
        let index = addInterestCopy.indexOf(name)
        index === -1 ? addInterestCopy.push(name) : addInterestCopy.splice(index, index + 1)
      console.log(addInterestCopy)
        dispatch(action.interestHandler(addInterestCopy))
    }

    const createProfileHandler = () => {
        axios.post('/child/add-child', {
            ...profile
        }).then(res => {
            console.log(res.data)
            props.history.push('/select/profile')
        }).catch(err => {
            console.log(err.response)
        })
        // console.log(profileData)
    }
    return (
        <>
            <ProfileTitle title='Interests' />
            <div className='profile__interest__wrapper'>
                <div className='profile__interest__content'>
                    <h2>Choose Your Interests</h2>
                    <p>Get personalized recomendations</p>
                    <div className='profile__interest__topic__wrapper'>
                        {interests.map(el => 
                            <InterestCard 
                                key={el.inter._id}
                                isSelected={el.inter.selected}
                                handler={interestHandler} 
                                id={el.inter._id} 
                                photo={el.inter.photo}
                                name={el.inter.title} />)}
                    </div>
                    
                    <div style={{width: '36rem', display:'flex', justifyContent: 'center'}}>
                        <Button text='Continue' handler={createProfileHandler} />
                    </div>
                    <a className='cancel__button display' href='/'>Cancel</a>
                </div>
            </div>
        </>
    );
};

export default withRouter(ProfileInterest);