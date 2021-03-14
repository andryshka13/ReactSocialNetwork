import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'/Profile'}/>} />
            <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/Dialogs' render={withSuspense(DialogsContainer)} />
            <Route path='/Settings' render={() => <Settings />} />
            <Route path='/News' render={() => <News />} />
            <Route path='/Music' render={() => <Music />} />
            <Route path='/Users' render={() => <UsersContainer />} />
            <Route path='/Login' render={() => <LoginPage />} />
            <Route path='*' render={() => <div> 404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = withRouter(connect(mapStateToProps, { initializeApp })(App));


const SamuraiApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}


export default SamuraiApp;