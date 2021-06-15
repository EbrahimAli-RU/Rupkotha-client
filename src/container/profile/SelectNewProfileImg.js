import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProfileImage from '../../component/profileImg/ProfileImage';
import ProfileTitle from '../../component/profileTitle/ProfileTitle';
import Spinner from '../../component/Spinner'

const SelectNewProfileImg = () => {
    const [avater, setAvater] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/avater').then(res => {
            setAvater(res.data.data.avaters)
        }).catch(err => {
            console.log(err.response)
        })
        
    }, [])
    return (
        <>
            {avater.length === 0 ? <Spinner show />: 
            <>
                <ProfileTitle title='Choose Your Avater' />
                <div className='select__new__profile__img'>
                    {avater.map((el, i) => <ProfileImage key={i} profiles={el}/>)}
                </div>
            </>}
        </>
    );
};

export default SelectNewProfileImg;