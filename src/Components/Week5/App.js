import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inbox from './Home';
import Likes from './Likes';
import Friends from './Friends';
import Messages from './Messages';
import Help from './Help';
import Settings from './Settings';

function App() {
    return (
        <>
            <Router>
                <Sidebar></Sidebar>
                <Switch>
                <Route path='/inbox' exact component={Inbox} />
                <Route path='/likes' component={Likes} />
                <Route path='/friends' component={Friends} />
                <Route path='/messages' component={Messages} />
                <Route path='/help' component={Help} />
                <Route path='/settings' component={Settings} />
                </Switch>
            </Router>
        </>
    );
}

export default App;