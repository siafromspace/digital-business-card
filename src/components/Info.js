import React from 'react'
import { ReactComponent as EmailSvg } from '../assets/Mail.svg'

function Info() {
    return (
        <div className="info">
            <img src={require("../images/sharon.jpg")} alt="profile photo" className="profile-photo" />
            <div className="profile">
                <h2 className="profile-name">Sharon Yakubu</h2>
                <h3 className="profile-title">Frontend Developer</h3>
                <h4 className="profile-site">sharony.website</h4>
                <button className="email">
                    <a href="#">
                        <EmailSvg /> Email</a>
                </button>
            </div>
        </div>
    )
}

export default Info