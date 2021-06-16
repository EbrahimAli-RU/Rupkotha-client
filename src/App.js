import { Switch, Route } from 'react-router-dom'

import ForgotPassword from './container/auth/ForgotPassword';
import Signin from './container/auth/Signin';
import Signup from './container/auth/Signup';
import BookDetail from './container/bookDetail/BookDetail';
import Main from './container/home/Main'
import CreateProfile from './container/profile/CreateProfile';
import EditProfile from './container/profile/EditProfile';
import EditSingleProfile from './container/profile/EditSingleProfile';
import ProfileInterest from './container/profile/ProfileInterest';
import SelectNewProfileImg from './container/profile/SelectNewProfileImg';
import SelectProfile from './container/profile/SelectProfile';
import ReadBook from './container/readBook/ReadBook';
import SearchBook from './container/searchBook/SearchBook';
import Wishlist from './container/wishList/Wishlist';
import Navigation from './layout/Navigation';

import './sass/main.scss'
function App() {

  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route path='/read' component={ReadBook} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/bookdetail' component={BookDetail} />
        <Route path='/profile/create' component={CreateProfile} />
        <Route path='/profile/edit' component={EditProfile} />
        <Route path='/profile/:id/edit' component={EditSingleProfile} />
        <Route path='/profile/interest' component={ProfileInterest} />
        <Route path='/profile/new' component={SelectNewProfileImg}/>
        <Route path='/home' component={Main} />
        <Route path='/select/profile' component={SelectProfile} />
        <Route path='/search' component={SearchBook} />
        <Route path='/register' component={Signup} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/' component={Signin} />
      </Switch>
    </>
  );
}

export default App;
