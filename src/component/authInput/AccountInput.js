import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const AccountInput = ({title, date='', link, toShow, width, handler}) => {
    return (
        <div className={width ? 'second__input borderbottom width100' : 'second__input borderbottom width80' }  style={{marginBottom: '3rem'}}>
        <div className='second__input-title' style={{color: 'black'}}>
            <p id='second__input__para'>{title}</p>
            <p className='second__input__interest' >{date}</p>
        </div>
        {toShow? <p onClick={handler} style={{marginRight: '2rem', fontWeight: 'bold', color: 'rgb(36, 82, 246)', cursor: 'pointer'}}>Change</p>: 
        <FontAwesomeIcon onClick={handler} icon={faArrowRight} style={{marginRight: '2rem', cursor: 'pointer', color: 'rgb(36, 82, 246)'}} />
        }
    </div>
    );
};

export default AccountInput;