import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios/axios'
import AuthInput from '../../component/authInput/AuthInput';
import SecondInput from '../../component/authInput/SecondInput';
import Button from '../../component/button/Button';
import Profile from '../../component/profileTitle/Profile';
import Spinner from '../../component/Spinner'
const singleProfile ={
    photo: '',
    name: '',
    age: '',
    language: '',
    interest: []
}

const EditSingleProfile = () => {
    const [profileData, setProfileData] = useState(singleProfile)
    const [loading, setLoading] = useState(true)
    const [link, setLink] = useState('')
    useEffect(() => {
        setLoading(true)
        axios.get('/child/60c94e7b4616bd09fcd30202').then(res => {

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

    return (
        <>
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
            <SecondInput link={`/profile/interest?i=${link}`} />
            <Button text='Continue'/>
            <a className='cancel__button display' href='/'>Cancel</a>
        </div>
    </div>}
        </>
    );
};

export default EditSingleProfile;