
const SubscriptionPackage = (props) => {


    return (
        <div className={props.index === props.activePackage ? 'subscription__package activeBorder' : 'subscription__package'} onClick={() => props.handler(props.price, props.duration, props.index)}>
            <div className='subscription__package__category' style={{ backgroundColor: `${props.color}` }}><p>{props.duration}</p></div>
            <p className='subscription__package__price' style={{ color: `${props.color}` }}><span>৳ </span>{props.price}</p>
            <p className='subscription__package__duration' style={{ color: `${props.color}` }}>{props.duration}</p>
            <p className='subscription__package__message'>No commitment cancel anytime</p>
        </div>
    );
};

export default SubscriptionPackage;