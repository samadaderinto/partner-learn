import React from 'react'
import img from "../../assets/heart giphy.png"
import "./header.scss"

const Header = () => {
    return (
        <div className='header'>
            <h3 className="header-logo">SpeechGen</h3>
            <section className="header-info">
                <h3>Convert Your Text 2 Speech</h3>
                <span>
                    made with
                    <img src={img} alt="love icon"/>
                    by
                    <a href='https://www.github.com/samadaderinto' rel="noreferrer" target="_blank">Samad Aderinto</a>
                </span>

            </section>
        </div>
    )
}

export default Header