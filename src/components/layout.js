import * as React from 'react'
import { Link } from 'gatsby'
import '../scss/_container.scss'


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
                </main>
            </div>
    )
}

export default Layout