import React from 'react';
import Profile from '../../component/profileTitle/Profile';
import profile from '../../assets/img/profile1.png'
import SearchBox from '../../component/searchBox/SearchBox';

const SearchBook = () => {
    return (
        <div className='search__book__wrapper'>
            <div className='search__book__content'>
                <div style={{ marginLeft: '20%', paddingTop: '6rem' }}><SearchBox /></div>
                <div className='search__book__recent-searchs'>
                    <h2>Recent Searches</h2>
                    <div className='search__book__title__wrapper' >
                        <p className='search__book__recent-search-title'>Summer</p>
                        <p className='search__book__recent-search-title'>Kid's Math</p>
                        <p className='search__book__recent-search-title'>Winter</p>
                        <p className='search__book__recent-search-title'>Summer</p>
                    </div>
                </div>
                <div className='search__book__recent-searchs'>
                    <h2>Popular Searches</h2>
                    <div className='search__book__title__wrapper' >
                        <p className='search__book__recent-search-title'>Summer</p>
                        <p className='search__book__recent-search-title'>Kid's Math</p>
                        <p className='search__book__recent-search-title'>Winter</p>
                    </div>
                </div>
                <div className='search__book__recent-searchs'>
                    <h2>Popular Searches</h2>
                    <div className='search__book__title__wrapper' >
                        <Profile profile={profile} width={true} name='default' isDisplay={false} />
                        <Profile profile={profile} width={true} name='default' isDisplay={false} />
                        <Profile profile={profile} width={true} name='default' isDisplay={false} />
                        <Profile profile={profile} width={true} name='default' isDisplay={false} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SearchBook;