import React, {useState} from 'react'
import styles from '../../styles/Switch.module.css'
import Link from 'next/link'
import axios from 'axios'
export default function SwitchCard({ data }) {
    const [power, setPower] = useState(data.state)
    const clickEvent = async (id, state) => {
        let new_state 

        if (state == 0){
            new_state = 1
            setPower(1)
        }
        else{
            new_state =0
            setPower(0)
        }
        
        await axios.patch(`https://znas-iot.herokuapp.com/v1/backend/devices/${id}`, { state: new_state },)
    }

    return (
        <Link href="/switch">
            <a className={styles.card} onClick={() => clickEvent(data.id, data.state)} >
                <h3>{data.device_name}</h3>
                <p>{power == 1 ? 'Off' : 'On'}</p>
            </a>
        </Link>
    )
}