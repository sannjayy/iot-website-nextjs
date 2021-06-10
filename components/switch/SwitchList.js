import React from 'react'
import SwitchCard from './SwitchCard'
import styles from '../../styles/Switch.module.css'


export default function SwitchList({data}) {
    // console.log(data)
    return <>
        <div className={styles.grid}>
            {
                data.map((switc, key) => <SwitchCard key={key} data={switc} />)
            }
        </div>
        
    </>
}
