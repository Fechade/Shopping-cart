import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import '../css/App.css'

function Home() {
    return(
        <div className="Home">
            <button className='Go w-7/12 h-60 text-8xl bg-black' >
                <Link to="/shop">GO SHOPPING</Link>
            </button>
        </div>
    )
}

export default Home;