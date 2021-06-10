import React from 'react'
import SwitchList from '../components/switch/SwitchList'
import Meta from '../components/common/Meta'

export default function Switch({ datas }) {
    // console.log(datas)
    return (
        <div>
            <Meta title="Switch :: ZIOT Cloud" />
            <SwitchList data={datas} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://znas-iot.herokuapp.com/v1/backend/devices/`)
    const datas = await res.json()
    return {
        props: {
            datas
        }
    }
}

// export const getServerSideProps = async () => {
//     // It will request to server every time.
//     const res = await fetch(`https://znas-iot.herokuapp.com/v1/backend/devices/`)

//     const datas = await res.json()
//     return {
//         props:{
//             datas
//         }
//     }
// }