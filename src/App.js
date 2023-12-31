import Header from "./components/Header";
import {HeroSection} from "./components/HeroSection";
import {Projects} from "./components/Projects";
import {BuyerReview, SellerReviews} from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Button} from 'antd';
import { DoubleRightOutlined} from '@ant-design/icons';
import axios from "axios";
import { useState } from "react";
//import Qoute from "./components/Qoute";

function App() {
    const [qoute, setQoute] = useState('')
    const getQoute = () => {
        axios.get('https://api.qoutable.io/random')
        .then(response => {
             console.log(response.data.content)
            setQoute(response.data.content)
         }).catch(err => {
             console.Console.log(err)
         })
    }



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

            {/* <Button type="primary"  icon={<DoubleRightOutlined />} onClick={getQoute} >Get Qoute</Button> */}

            <Contact/>
            <div className="App">
            <Button type="primary"  icon={<DoubleRightOutlined />} onClick={getQoute} >Get Qoute</Button>
            {qoute && <p>{qoute}</p> }
            </div>


            <Footer/>
        </div>
    );
}

export default App;
