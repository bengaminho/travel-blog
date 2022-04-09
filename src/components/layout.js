import * as React from 'react'
import { Link } from 'gatsby'
import '../scss/_container.scss'
import instaLogo from '../images/icon-instagram.svg';
import twitterLogo from '../images/icon-twitter.svg';



const Layout = ({ pageTitle, children }) => {
    return (
            <div className={'header'}>
                <title>{pageTitle}</title>
{/*                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>*/}
                <main>
                    <h1>{pageTitle}</h1>
                    <div className={'container-wrapper'}>
                        {children}
                    </div>
                  <footer className={'footer'}>
                    <a href={'https://www.instagram.com/bengaminho/'} target={'_blank'}><img className={'social-icon'} src={instaLogo}/></a>
                    <a href={'https://twitter.com/bengaminho'} target={'_blank'}><img className={'social-icon'} src={twitterLogo}/></a>
                  </footer>
                </main>
            </div>
    )
}

export default Layout