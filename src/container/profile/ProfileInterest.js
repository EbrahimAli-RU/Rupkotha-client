import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import axios from '../../utils/axios/axios'
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import Button from '../../component/button/Button';
import InterestCard from '../../component/profileTitle/InterestCard';
import * as action from '../../redux/action/index'
import Spinner from '../../component/Spinner';
import Navigation from '../../layout/Navigation';
import { Link } from 'react-router-dom'

const ProfileInterest = (props) => {
    /////STATE
    const [interests, setInterest] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    ///////GETING DATA FROM REDUX
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();

    ///////CHECKING IF USER RELOAD PAGE
    if (profile.child.photo === '' && props.location.search.length === 0) {
        props.history.replace('/profile/new');
    } else if (profile.child.photo === '' && props.location.search.length !== 0) {
        props.history.replace('/profile/edit');
    }

    useEffect(() => {
        ///////GETTING INTEREST WHEN USER EDIT A PROFILE
        dispatch(action.checkHandler())
        axios.get('/interest').then(res => {
            const interests = res.data.data.interest.map(el => {
                return { inter: { ...el, selected: profile.child.interest.includes(el.title) } }
            })
            setInterest(interests)
        }).catch(err => {
            console.log(err.response)
        })
        return () => { setInterest([]) }
    }, [props.location.search])


    //////HANDLING USER INTEREST LIKE:ADDING OR REMOVING FROM INTEREST LIST
    const interestHandler = (id, name) => {
        let interCopy = [...interests];
        interCopy.forEach(inte => {
            if (inte.inter._id === id && inte.inter.selected === false) {
                inte.inter.selected = true
            } else if (inte.inter._id === id && inte.inter.selected === true) {
                inte.inter.selected = false
            }
        })
        const profileCopy = { ...profile.child }
        const addInterestCopy = profileCopy.interest
        let index = addInterestCopy.indexOf(name)
        index === -1 ? addInterestCopy.push(name) : addInterestCopy.splice(index, index + 1)
        dispatch(action.userInputHandler('interest', addInterestCopy))
    }

    //////CREATING NEW PROFIE
    const createProfileHandler = () => {
        if (profile.isSubmitted) {
            props.history.replace(profile.redirectLink);
        } else {
            setLoading(true)
            setTimeout(() => {
                axios.post('/child/add-child', {
                    ...profile.child
                }).then(res => {
                    props.history.push('/select/profile')
                    setLoading(false)
                }).catch(err => {
                    console.log(err.response)
                    setLoading(false)
                })
            }, 5000)
        }

    }

    //////RENDERING
    return (
        <>
            {interests.length === 0 || loading ? <Spinner show /> :
                <>
                    <Navigation />
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

                            <div style={{ width: '36rem', display: 'flex', justifyContent: 'center' }}>
                                <Button text='Continue' handler={createProfileHandler} />
                            </div>
                            <Link className='cancel__button display' to='/profile/new'>Cancel</Link>
                        </div>
                    </div></>}
        </>
    );
};

export default withRouter(ProfileInterest);