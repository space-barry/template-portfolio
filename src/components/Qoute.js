import React from "react";
import axios from "axios";
import {Button} from 'antd';
import { DoubleRightOutlined} from '@ant-design/icons';
import { useState } from "react";

function Qoute() {
    const [qoute, setQoute] = useState('')
    <div>
        const getQoute = () => {
            axios.get('https://api.qoutable.io/random').then(response => { console.log(response.data.content)
            setQoute(response.data.content) }).catch(err => { console.Console.log(err) } )
        }    
    </div>
    return(
        <>
            <h1>Qoute</h1>

            <div>
            <Button type="primary"  icon={<DoubleRightOutlined />} onClick={getQoute} >Get Qoute</Button>
            {qoute && <p>{qoute}</p> : null}
            </div>



        <
    )
}

export default Qoute;