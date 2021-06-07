import React from 'react';
import Icon from '../../assets/img/sprite.svg'

const SearchBox = () => {
    return (
        <div className='search__box__wrapper'>
            <div className='search__button_div'>
                <svg className="search__button">
                    <use xlinkHref={`${Icon}#icon-search`}></use>
                </svg>
            </div>
            <input className='search__box' type='search' placeholder='Search...' />
        </div>
    );
};

export default SearchBox;