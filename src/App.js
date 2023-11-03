import Header from "./components/Header";
import {HeroSection} from "./components/HeroSection";
import {Projects} from "./components/Projects";
import {BuyerReview, SellerReviews} from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Projects/>

            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Seller Reviews">
                    <SellerReviews/>
                </Tab>
                <Tab eventKey="profile" title="Buyer Reviews">
                    <BuyerReview/>
                </Tab>
            </Tabs>


            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
