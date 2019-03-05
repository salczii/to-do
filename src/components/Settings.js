import React from 'react'
import Span from '../styled-components/Span'
import { withAppContext } from './withAppContext'

const Settings = ({ context: { setTheme, darkTheme } }) => {
    console.log(darkTheme)
    return (
        <section className='settings'>
            <p>set theme: <Span onClick={setTheme} theme={darkTheme.toString()}></Span></p>

        </section>
    )
}

export default withAppContext(Settings)