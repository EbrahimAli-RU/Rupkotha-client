import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios/axios'
import Profile from '../../component/profileTitle/Profile';
import SearchBox from '../../component/searchBox/SearchBox';
import Spinner from '../../component/Spinner';
import Navigation from '../../layout/Navigation';


const EditProfile = (props) => {
    const [childs, setChilds] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filterChild, setFilterChild] = useState([]);
    
    useEffect(() => {
        axios.get(`/user/${JSON.parse(localStorage.getItem('userId'))}`).then(res => {
            setChilds(res.data.users.children)
        }).catch(err => {
            console.log(err.response)
        })
    }, [])
    const searchHandler = (e) => {
        setSearchItem(e.target.value)
        const filter = childs.filter(el => el.name.toLowerCase().startsWith(`${e.target.value.toLowerCase()}`))
        setFilterChild(filter)
    }
    return (
        <>
        {childs.length === 0 ? <Spinner show /> : 
            <>
                <Navigation />
                <div className='select__profile__container width80'>
                <h1 className='select__profile__title marginBottom-big'>Edit Profile</h1>
                <div className='select__profile__btn-search marginBottom-extralarge'>
                    <SearchBox  handler={searchHandler} value={searchItem}/>
                </div>
                <div className='select__profile__wrapper width60'>
                {searchItem.length === 0 ? <> 
                        {childs.map(child => <Profile link={`/profile/${child._id}/edit`}  key={child._id} id={child._id} profile={child.photo} name={child.name} isDisplay={true} />)}
                    </>: <>
                    {filterChild.map(child => <Profile link={`/profile/${child._id}/edit`}  key={child._id} id={child._id} profile={child.photo} name={child.name} isDisplay={true} />)}
                    </>}
                </div>
                </div>
            </>
        }
        </>
    );
};

export default EditProfile;