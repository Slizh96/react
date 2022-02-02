import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
// debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Route path='/dialogs' element=<DialogsContainer
                               store={props.store}
                            // state={props.store.messagePage}
                               //  dispatch={props.dispatch}
                        />/>
                        <Route path='/profile' element=<Profile
                               store={props.store}
                               // state={props.state.profilePage}
                               // dispatch={props.dispatch}
                        />/>
                        <Route path='/news' element=<News/> />
                        <Route path='/music' element=<Music/> />
                        <Route path='/settings' element=<Settings/> />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;