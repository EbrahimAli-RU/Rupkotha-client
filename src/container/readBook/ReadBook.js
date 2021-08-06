import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios/axios'
import Icon from '../../assets/img/sprite.svg'
import audio from '../../assets/audio/audio1.mp3'
import ExpireSubscription from '../../component/expireSubscription/ExpireSubscription';

const ReadBook = () => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkSubscription, setCheckSubscription] = useState(true)

    useEffect(() => {
        axios.get('/book/61052150d36f254048956fe1/read').then(res => {
            setPages(res.data.data.pages.page.pages)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    }, [])
    const arr = pages
    let currentLocation = 0;
    let numOfPages = arr.length;
    let maxLocation = numOfPages

    const goNextPage = () => {
        let papers = document.querySelectorAll('.paper');
        if (currentLocation < maxLocation) {
            console.log(currentLocation);
            papers[currentLocation].classList.add('flipped')
            papers[currentLocation].style.zIndex = numOfPages + currentLocation;
            currentLocation++;

        }
        if (currentLocation === numOfPages) {
            for (let i = 0; i < numOfPages; i++) {
                papers[i].style.zIndex = i;
            }
        }
    }

    const goPrevPage = () => {
        let papers = document.querySelectorAll('.paper');
        if (currentLocation > 0) {
            papers[currentLocation - 1].classList.remove('flipped')
            papers[currentLocation - 1].style.zIndex = 2 * numOfPages - currentLocation;
            currentLocation--;
        }
        if (currentLocation === 0) {
            for (let i = 0; i < numOfPages; i++) {
                papers[i].style.zIndex = numOfPages - i;
            }
        }
    }
    return (
        <>
            {!checkSubscription ? <ExpireSubscription /> :
                <div className='read__book'>
                    <div className='read__book__pdf'>
                        {/* Prev--button */}
                        <button onClick={goPrevPage} id='prev-btn' className='back__btn'>
                            <svg className="btn__svg">
                                <use xlinkHref={`${Icon}#icon-circle-right`}></use>
                            </svg>
                        </button>
                        {loading ? <p>Loading......</p> :
                            <div className='book' id='book'>
                                {arr.map((el, i) => (
                                    <div key={i + 1} className='paper marginL marginR' style={{
                                        zIndex: `${arr.length - i}`,
                                    }}  >
                                        <div className='front'>
                                            <div id='f1' className='front__content'>
                                                <img style={{ width: '100%', height: '100%' }}
                                                    src={`http://localhost:8000/${el}`} alt='ggg' />
                                            </div>
                                        </div>

                                        <div className='back'>
                                            <div id='b1' className='back__content'>
                                                <img style={{ width: '100%', height: '100%', }}
                                                    src={`http://localhost:8000/${el}`} alt='ggg' />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="paper1" id='p1'></div>
                                <div className="paper1" id='p2'></div>
                                <div className="paper1" id='p3'></div>
                                <div className="paper1" id='p4'></div>
                                <div className="paper1" id='p5'></div>
                                <div className="paper1" id='p6'></div>
                            </div>}

                        {/* next--button */}

                        <button onClick={goNextPage} id='next-btn' className='forward__btn'>
                            <svg className="btn__svg">
                                <use xlinkHref={`${Icon}#icon-circle-left`}></use>
                            </svg>
                        </button>

                    </div>
                    <div className='read__book__audio'>
                        <audio className='audio' controls>
                            <source src={audio} />
                        </audio>
                    </div>

                </div>}
        </>
    );
};

export default ReadBook;
