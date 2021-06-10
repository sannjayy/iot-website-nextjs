import styles from '../../styles/Nav.module.css'
import React from 'react'
import Link from 'next/link'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/switch">Switch</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
