const Modal = ({ id, deleteHandler, show, closeHandler }) => {
    return (
        <div className='popup' id='popup' style={{
            opacity: show ? '1' : '0',
            visibility: show ? 'visible' : 'hidden'
        }}>
            <div className='popup__content' style={{
                opacity: show ? '1' : '0',
                transform: show ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'
            }}>
                <p className='popup__question'>Do you Want to Delete?</p>
                <div className='popup__button'>
                    <button onClick={closeHandler} className='popup__btn'>CANCEL</button>
                    <button onClick={deleteHandler} style={{color: 'red'}} className='popup__btn'>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Modal