import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../header/Header';
import HeaderNav from '../headerNav/HeaderNav'
import Footer from '../footer/Footer';
import { SignIn, SignUp, MainPage, Booking, SingleTrip } from '../pages/index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/sing-in" element={<Header/>}/>
                <Route path="/sing-up" element={<Header/>}/>
                <Route path="*" element={<Header><HeaderNav/></Header>}/>
            
            </Routes>
                
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sing-in" element={<SignIn/>}/>
                <Route path="/sing-up" element={<SignUp/>}/>
                <Route path="/bookings" element={<Booking/>}/>
                <Route path="/trip/:tripId " element ={<SingleTrip/>}/>
                <Route path="*" element={<MainPage/>}/>
            </Routes>

            <Footer/>     
        </Router>
    )
}

export default App;