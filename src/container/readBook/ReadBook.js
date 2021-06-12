import React from 'react';
import Icon from '../../assets/img/sprite.svg'
import audio from '../../assets/audio/audio1.mp3'
import photo1 from '../../assets/img/1.jpg'
import photo2 from '../../assets/img/2.jpg'
import photo3 from '../../assets/img/3.jpg'
import back4 from '../../assets/img/4.jpg'
import back5 from '../../assets/img/5.jpg'
import back6 from '../../assets/img/6.jpg'
const ReadBook = () => {
    const arr = [photo1,photo2,photo3,back4,back5,back6,photo1,photo2,photo3,back4,back5,back6];
    let currentLocation = 0;
    let numOfPages = arr.length;
    let maxLocation = numOfPages

    const goNextPage = () => {
        let papers = document.querySelectorAll('.paper');
        if(currentLocation < maxLocation) {
            console.log(currentLocation);
            papers[currentLocation].classList.add('flipped')
            papers[currentLocation].style.zIndex =  numOfPages+currentLocation;
                currentLocation++;
            
        }
        if(currentLocation === numOfPages) {
            for(let i=0; i<numOfPages; i++) {
                papers[i].style.zIndex =  i;
            }
        }
    }

    const goPrevPage = () => {
        let papers = document.querySelectorAll('.paper');
        if(currentLocation >0) {
            papers[currentLocation-1].classList.remove('flipped')
            papers[currentLocation-1].style.zIndex = 2* numOfPages - currentLocation;
            currentLocation--;
        }
        if(currentLocation === 0) {
            for(let i=0; i<numOfPages; i++) {
                papers[i].style.zIndex = numOfPages - i;
            }
        }
    }
    return (
        <div className='read__book'>
            <button>CLICK</button>
            <div className='read__book__pdf'>
                {/* Prev--button */}
                <button  onClick={goPrevPage} id='prev-btn'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>
                    </div>
                </button>

                <div className='book' id='book'>
                    {arr.map((el, i) => (
                        <div key={i+1} className='paper' style={{zIndex: `${arr.length - i}`, marginRight: `${arr.length - i}`}}  >
                        <div className='front'>
                            <div id='f1' className='front__content'>
                                {/* <h1>Front {i+1}</h1> */}
                                <img style={{width:'100%'}} src={el} alt='ggg' />
                            </div>
                        </div>

                        <div className='back'>
                            <div id='b1' className='back__content'>
                                {/* <h1>Back {i+1}</h1> */}
                                <img style={{width:'100%', height: '100%', }} src={el} alt='ggg' />
                            </div>
                        </div>
                    </div>
                    ))}

                    {/* <div className='paper ' id='p2'>
                        <div className='front'>
                            <div id='f2' className='front__content'>
                                <h1>Front 2</h1>
                            </div>
                        </div>

                        <div className='back'>
                            <div id='b2' className='back__content'>
                                <h1>Back 2</h1>
                            </div>
                        </div>
                    </div>

                    <div className='paper ' id='p3'>
                        <div className='front'>
                            <div id='f3' className='front__content'>
                                <h1>Front 3</h1>
                            </div>
                        </div>

                        <div className='back'>
                            <div id='b3' className='back__content'>
                                <h1>Back 3</h1>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* next--button */}
                <button onClick={goNextPage} id='next-btn'>
                    <div className="nav__items__icon-wrapper" >
                        <svg className="nav__items__icon">
                            <use xlinkHref={`${Icon}#icon-home`}></use>
                        </svg>
                    </div>
                </button>
            </div>
            <div className='read__book__audio'>
                <audio style={{width: '100%'}} controls>
                    <source src={audio} />
                </audio>
            </div>
            
        </div>
    );
};

export default ReadBook;