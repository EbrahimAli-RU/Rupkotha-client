import { Switch, Route } from 'react-router-dom'

import ForgotPassword from './container/auth/ForgotPassword';
import Signin from './container/auth/Signin';
import Signup from './container/auth/Signup';
import Main from './container/home/Main'
import CreateProfile from './container/profile/CreateProfile';
import EditProfile from './container/profile/EditProfile';
import ProfileInterest from './container/profile/ProfileInterest';
import SelectNewProfileImg from './container/profile/SelectNewProfileImg';
import SelectProfile from './container/profile/SelectProfile';
import Navigation from './layout/Navigation';

import './sass/main.scss'
function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/profile/create' component={CreateProfile} />
        <Route path='/profile/edit' component={EditProfile} />
        <Route path='/profile/interest' component={ProfileInterest} />
        <Route path='/profile/new' component={SelectNewProfileImg}/>
        <Route path='/home' component={Main} />
        <Route path='/select/profile' component={SelectProfile} />
        <Route path='/register' component={Signup} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/' component={Signin} />
      </Switch>
    </>
  );
}

export default App;
