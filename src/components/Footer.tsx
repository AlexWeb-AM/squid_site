import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer_div'>
            <footer className='footer'>
                <div className="container">
                    <div className='start_footer'>
                        <img src="images/logo_footer.svg" alt="" />
                        <p>A good design is not only aesthetically <br /> pleasing, but also functional. It should be <br /> able to solve the problem </p>
                    </div>
                    <div className='end_div'>
                        <h3>Pages</h3>
                        <ul>
                            <Link to='/'><li>Home</li></Link>            
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='bottom_div'>
                <div className="container">
                    <h2>All Rights Reservd Inkyy.com 2022</h2>
                    <div className='sot_sites'>
                        <div>
                            <img src="images/twitter.svg" alt="" />
                        </div>
                        <div>
                            <img src="images/linkedin.svg" alt="" />
                        </div>
                        <div>
                            <img src="images/discord.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
