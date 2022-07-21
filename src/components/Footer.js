import React from 'react'
import { ReactComponent as TwitterSvg } from '../assets/Twitter-Icon.svg'
import { ReactComponent as FacebookSvg } from '../assets/Facebook-Icon.svg'
import { ReactComponent as InstagramSvg } from '../assets/Instagram-Icon.svg'
import { ReactComponent as LinkedinSvg } from '../assets/Linkedin-Icon.svg'
import { ReactComponent as GitHubSvg } from '../assets/GitHub-Icon.svg'

function Footer() {
    return (
        <footer className="footer">
            <a href="#">
                <TwitterSvg />
            </a>
            <a href="#">
                <FacebookSvg />
            </a>
            <a href="#">
                <InstagramSvg />
            </a>
            <a href="#">
                <LinkedinSvg />
            </a>
            <a href="#">
                <GitHubSvg />
            </a>
        </footer>
    )
}

export default Footer