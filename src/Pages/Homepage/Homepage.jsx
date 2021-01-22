import React from 'react'
import Directory from '../../Components/Directory/Directory'
import "./homepage.scss"

const Homepage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}

export default Homepage
