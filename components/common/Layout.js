import React from 'react'
import styles from '../../styles/Layout.module.css'
import Header from './Header'
import Image from 'next/image'
import Nav from './Nav'
import Meta from './Meta'

export default function Layout({ children }) {
    return <>
        <Meta />
        
        <div className={styles.container}>
            <main className={styles.main}>

                <Header />
                <Nav />
                {children}

            </main>
            <footer className={styles.footer}>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by ZNAS{' '}
                    <span className={styles.logo}>
                        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                    </span>
                </a>
            </footer>
        </div>
    </>
}
