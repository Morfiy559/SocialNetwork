import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (<BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
