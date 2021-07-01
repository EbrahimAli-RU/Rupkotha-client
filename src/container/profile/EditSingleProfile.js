import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios/axios'
import { withRouter } from 'react-router-dom'
import AuthInput from '../../component/authInput/AuthInput';
import SecondInput from '../../component/authInput/SecondInput';
import Button from '../../component/button/Button';
import Profile from '../../component/profileTitle/Profile';
import Spinner from '../../component/Spinner'
import Modal from '../../component/Modal';

const singleProfile ={
    photo: '',
    name: '',
    age: '',
    language: '',
    interest: []
}

const EditSingleProfile = ( props ) => {
    const [profileData, setProfileData] = useState(singleProfile)
    const [loading, setLoading] = useState(true)
    const [link, setLink] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [isCurrentProfileMessage, setIsCurrentProfileMesage] = useState('')

    const id = props.location.pathname.split('/')[2]
    useEffect(() => {
        setLoading(true)
        
        axios.get(`/child/${id}`).then(res => {
            const singleProfileCopy ={...singleProfile}
            for(let key in singleProfileCopy) {
                singleProfileCopy[key] = res.data.data.child[key]
            }
            setProfileData(singleProfileCopy)
            let str=`${singleProfileCopy.interest[0]}`  
            for(let i = 1; i<singleProfileCopy.interest.length ; i++) {
               str = str.concat(`+${singleProfileCopy.interest[i]}`)
            }
            setLink(str)
            setLoading(false)
        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })
    },[])

    const inputHandler = (e) => {
        const {name, value} = e.target
        const profileDataCopy = {...profileData}
        profileDataCopy[name] = value
        setProfileData(profileDataCopy)
    }

    const showModalHandler = () => {
        const profile = JSON.parse(localStorage.getItem('currentProfile'))
        if(JSON.parse(localStorage.getItem('currentProfile'))._id === id) {
            setIsCurrentProfileMesage(`Can't delete current profile:(`)
            setShowModal(false)
        } else {
            setShowModal(true)
        }
       
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const deleteprofileHandler = () => {
        axios.delete(`/child/${id}`).then(res => {
            props.history.push('/profile/edit')
        }).catch(err => {
            console.log(err.response)
        })
    }

    return (
        <>
        <Modal show={showModal} id={id} deleteHandler={deleteprofileHandler}  closeHandler={closeModal}  />
        { loading ? <Spinner show /> :
        <div className='create__profile__wrapper'>
        <div className='create__profile__content'>
            <h2>Edit Profile</h2>
            <Profile link='/profile/new' profile={profileData.photo} isDisplay={false} />
            <AuthInput placeholder='Name'
                       type='text'
                       valueof={profileData.name}
                       handler={inputHandler}
                       name='name' />
            <AuthInput placeholder='Age'
                       type='number'
                       valueof={profileData.age}
                       handler={inputHandler}
                       name='age'/>
            <AuthInput placeholder='Language'
                       type='text'
                       valueof={profileData.language}
                       handler={inputHandler}
                       name='language'/>
            <SecondInput link={`/profile/interest?i=${link}&n=false`} />
            <div style={{height: '2rem', marginTop: '1rem'}}>
                <p style={{fontSize: '1.2rem', color: 'red'}}>{isCurrentProfileMessage}</p>
            </div>
            <button style={{
                border: 'none',
                outline: 'none',
                color: 'red',
                backgroundColor: 'transparent',
                fontSize: '2rem',
                paddingTop: '.2rem',
                marginBottom: '-1.8rem',
                fontWeight: 'bolder'
            }} onClick={showModalHandler}>Delete</button>
            <Button text='Continue'/>
            <a className='cancel__button display' href='/'>Cancel</a>
        </div>
    </div>}
        </>
    );
};

export default withRouter(EditSingleProfile);