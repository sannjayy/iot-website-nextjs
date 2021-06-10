import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
    const x = 2
    return (
        <div>
            <h1 className={styles.title}>
                <span>Z</span> IOT Cloud
            </h1>
            <p className={styles.description}>Home Automation (Beta v0.1) </p>
            <style jsx>
                {`
                    .title {
                        color:${x > 3 ? 'orange' : 'blue'};
                    }
                `}
            </style>
        </div>
    )
}
