// exports.wishlistHandler = (id, category) => {
//     axios.post('/wishlist', { bookId: id, userId: child._id }).then(res => {
//         res.data.data.message === 'created' ?
//             setWishlist({ id, category, isInserted: true }) :
//             setWishlist({ id, category, isInserted: false })
//     }).catch(err => {
//         setError({ error: true, message: err.response.data.message })
//         setTimeout(() => {
//             vanisError()
//         }, 4000)
//         console.log(err.response)
//     })
// }

exports.responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

exports.responsiveCarosul = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};