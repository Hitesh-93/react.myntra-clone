import React from 'react'
import HomeItems from '../components/HomeItems'
import { useSelector } from 'react-redux'



const Home = () => {

    const items = useSelector((store) => store.item)

    return (
        <main>
            <div className="items-container">
                {
                    items.map((item) => {
                        return (
                            <HomeItems key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Home