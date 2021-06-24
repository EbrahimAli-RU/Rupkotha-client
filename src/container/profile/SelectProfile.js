import React, {useState, useEffect } from 'react';
import { withRouter} from 'react-router'
import axios from '../../utils/axios/axios'
import Icon from '../../assets/img/sprite.svg'
import Profile from '../../component/profileTitle/Profile';
import SearchBox from '../../component/searchBox/SearchBox';
import Spinner from '../../component/Spinner'
import Navigation from '../../layout/Navigation';


const SelectProfile = (props) => {
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
        const filter = childs.filter(el =>  el.name.toLowerCase().startsWith(`${e.target.value.toLowerCase()}`))
        setFilterChild(filter)
    }

    const selectHandler = (id) => {
        const matchedProfile = childs.find(el => el._id === id)
        localStorage.setItem('currentProfile', JSON.stringify(matchedProfile))
        props.history.push('/home')
    }
    return (
        <>
        <Navigation />
        {childs.length === 0 ? <Spinner show /> :
        <div className='select__profile__container width60'>
            <h1 className='select__profile__title'>Who is Watching?</h1>
            <div className='select__profile__btn-search'>
               <a href='/profile/new'>
                    <button id='btn-read' className='btn btn-read'> 
                        <svg className="nav__items__icon" style={{marginRight: '1rem', fill: 'white'}}>
                                <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>add profile</button>
                </a>
                   <SearchBox handler={searchHandler} value={searchItem} /> 
            </div>

            <div className='select__profile__wrapper width80'>
                {searchItem.length === 0 ? <> 
                    {childs.map(child => <Profile handler={selectHandler} key={child._id} id={child._id} profile={child.photo} name={child.name} isDisplay={false} />)}
                </>: <>
                {filterChild.map(child => <Profile handler={selectHandler} key={child._id} id={child._id} profile={child.photo} name={child.name} isDisplay={false} />)}
                </>}
                
            </div>
        </div>}
        </>
    );
};

export default withRouter(SelectProfile);