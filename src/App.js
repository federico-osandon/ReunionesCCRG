import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/Menu/Menu'
import ListadoReunionesContainer from './components/containers/ListadoReunionesContainer';
import ReunionDetalleContainer from './components/containers/ReunionDetalleContainer';
import Footer from "./components/Footer/Footer"
// import Login from './components/auth/Login'

function App() {
    return ( 
        <Router>
            <Menu />
            <Switch>
                {/* <Route exact path={'/login'} component={Login} /> */}
                <Route exact path={'/reunion/:idreunion'} component={ReunionDetalleContainer} />               
                <Route exact path={'/crearreunion'} component={Home} />               
                <Route exact path={'/'} component={ListadoReunionesContainer} />               
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
