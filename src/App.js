import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import Account from './container/account/Account';
import Activation from './container/auth/Activation';
import ForgotPassword from './container/auth/ForgotPassword';
import Logout from './container/auth/Logout';
import ResetPassword from './container/auth/ResetPassword';
import Signin from './container/auth/Signin';
import Signup from './container/auth/Signup';
import Success from './container/auth/Success';
import Billing from './container/billing/Billing';
import BookDetail from './container/bookDetail/BookDetail';
import Main from './container/home/Main'
import PrivacyPolicy from './container/privacyPolicy/PrivacyPolicy';
import CreateProfile from './container/profile/CreateProfile';
import EditProfile from './container/profile/EditProfile';
import EditSingleProfile from './container/profile/EditSingleProfile';
import ProfileInterest from './container/profile/ProfileInterest';
import SelectNewProfileImg from './container/profile/SelectNewProfileImg';
import SelectProfile from './container/profile/SelectProfile';
import ReadBook from './container/readBook/ReadBook';
import Resource from './container/resource/Resource';
import SearchBook from './container/searchBook/SearchBook';
import ViewMore from './container/viewMore/ViewMore';
import Wishlist from './container/wishList/Wishlist';
import * as action from './redux/action/index'

import './sass/main.scss'
import AdminMain from './admin/layout/Main'

function App() {
  ///STATE
  const [flag, setFlag] = useState(false)
  //////////////GET TOKEN FROM COOKIE 
  let token = '';
  const allCookie = document.cookie.split(';')
  for (let i = 0; i < allCookie.length; i++) {
    if (allCookie[i].split('=')[0] === 'token') {
      token = allCookie[i].split('=')[1];
    }
  }




  const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem('userId')) === null
  }

  const isProfileSelected = () => {
    return JSON.parse(localStorage.getItem('currentProfile')) === null
  }
  const tokenFromRedux = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    setFlag(true)
    dispatch(action.tokenHandler(token))
    dispatch(action.saveChildHandler(JSON.parse(localStorage.getItem('currentProfile'))))
  }, [])

  let routes
  if (tokenFromRedux.token === '') {
    routes = (
      <Switch>
        <Route path='/admin' component={AdminMain} />
        <Route path='/activate/:token' exact component={Activation} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/register' exact component={Signup} />
        <Route path='/success' component={Success} />
        <Route path='/reset-password/:resetToken' component={ResetPassword} />
        <Route path='/' exact component={Signin} />
        <Redirect to="/" />
      </Switch>
    )
  }
  else if (tokenFromRedux.token !== '' && tokenFromRedux.child === null) {
    routes = (
      <Switch>
        <Route path='/admin' component={AdminMain} />
        <Route path='/activate/:token' exact component={Activation} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/select/profile' component={SelectProfile} />
        <Route path='/profile/new' component={SelectNewProfileImg} />
        <Route path='/profile/create' component={CreateProfile} />
        <Route path='/profile/interest' component={ProfileInterest} />
        <Route path='/register' exact component={Signup} />
        <Route path='/success' component={Success} />
        <Route path='/reset-password/:resetToken' component={ResetPassword} />
        <Route path='/' exact component={Signin} />
        <Redirect to="/select/profile" />
      </Switch>
    )
  } else if (tokenFromRedux.child !== null) {
    routes = (
      <Switch>
        <Route path='/admin' component={AdminMain} />
        <Route path='/account' component={Account} />
        <Route path='/activate/:token' exact component={Activation} />
        <Route path='/book/channel' component={ViewMore} />
        <Route path='/billing' component={Billing} />
        <Route path='/read' component={ReadBook} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/logout' component={Logout} />
        <Route path='/book/:bookId' component={BookDetail} />
        <Route path='/profile/create' component={CreateProfile} />
        <Route path='/profile/edit' component={EditProfile} />
        <Route path='/profile/:id/edit' component={EditSingleProfile} />
        <Route path='/profile/interest' component={ProfileInterest} />
        <Route path='/profile/new' component={SelectNewProfileImg} />
        <Route path='/home' component={Main} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/resource' component={Resource} />
        <Route path='/select/profile' component={SelectProfile} />
        <Route path='/search' component={SearchBook} />
        <Route path='/register' exact component={Signup} />
        <Route path='/success' component={Success} />
        <Route path='/reset-password/:resetToken' component={ResetPassword} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/' component={Signin} />
        <Redirect to="/home" />
      </Switch>)
  }
  return (
    <>
      {/* {routes} */}
      {flag ? routes : null}
    </>
  );
}

export default App;
