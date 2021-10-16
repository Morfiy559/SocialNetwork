import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React,{Component,lazy} from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store from "./redux/redux-store";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        {/*<Route path='/dialogs' component={Dialogs}/>*/}
                        {/*<Route path='/profile' component={Profile}/>*/}
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <React.Suspense fallback={<Preloader />}>
                            <Switch>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                            </Switch>
                        </React.Suspense>

                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized:state.app.initialized
})
let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);

const SamuraiJSApp = (props)=>{
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
