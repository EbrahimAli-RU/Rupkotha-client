import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const SecondInput = (props) => {
    return (
        <div className={props.width ? 'second__input borderAll width100' : 'second__input borderAll width80'}>
        <div className='second__input-title'>
            <p id='second__input__para'>Interests</p>
            <p className='second__input__interest' >{props.numberOfInterest} Selected</p>
        </div>
        <Link to={props.link}>
            <FontAwesomeIcon icon={faArrowRight} style={{marginRight: '2rem'}} />
        </Link>
    </div>
    );
};

export default SecondInput;