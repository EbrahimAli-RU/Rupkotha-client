import { Switch, Route } from 'react-router-dom'

import ForgotPassword from './container/auth/ForgotPassword';
import Signin from './container/auth/Signin';
import Signup from './container/auth/Signup';
import Main from './container/home/Main'
import SelectProfile from './container/selectProfile/SelectProfile';
import Navigation from './layout/Navigation';

import './sass/main.scss'
function App() {

  return (
    <>
      <Navigation />
      <Switch>
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
