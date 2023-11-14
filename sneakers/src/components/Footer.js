import React from 'react'
import '../styles/footer.css'

function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer>
            <div>
                <p className='footer-item'>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</p>
                <p className='footer-item'>Coded by <a href="https://benhensordev.netlify.app" target="_blank" rel="noreferrer">Ben Hensor</a>.</p>
            </div>
            <p>© {year} Sneakers Inc.</p>
            
        </footer>
    );
}

export default Footer