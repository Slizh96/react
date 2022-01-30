import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addMessage, updateNewMessageText, updateNewPostText} from "./redux/state";

const App = (props) => {
// debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element=<Dialogs
                               state={props.state.messagePage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}
                        />/>
                        <Route  path='/profile' element=<Profile
                                state={props.state.profilePage}
                                updateNewPostText={props.updateNewPostText}
                                addPost={props.addPost}
                               />/>
                        <Route  path='/news' element=<News/> />
                        <Route  path='/music' element=<Music/> />
                        <Route  path='/settings' element=<Settings/> />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;