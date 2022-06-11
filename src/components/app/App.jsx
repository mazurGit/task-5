import Header from '../header/Header';
import HeaderNav from '../headerNav/HeaderNav'
import Footer from '../footer/Footer';
import { SignIn, SignUp, MainPage, Booking, SingleTrip } from '../pages/index';

const App = () => {
    return (
        <>
            <Header>
                <HeaderNav/>
            </Header>    

            <>
                <MainPage/>
                {/* <SignIn/> */}
                {/* <SignUp/> */}
                {/* <SingleTrip/> */}
                {/* <Booking/> */}
            </>

            <Footer/>     
        </>
    )
}

export default App;