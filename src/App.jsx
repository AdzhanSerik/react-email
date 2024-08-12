import { useState } from 'react'
import styles from './App.module.css'
import { Details } from './Details'

const MENU = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Contact',
        link: '/contact',
    }
]

// const title = 'Привет'





function App() {
    // const [title, setTitle] = useState('Hello')

    const [details, setDetails] = useState({
        title: 'Hello',
        buttonText: 'Click Me'
    })
    return (
    <div className={styles.layout}>
        <img src="/1362872.png" width={400} alt="" />
        {MENU.map(item => (
            <p key={item.link}>{item.name}</p>
        ))}
        {/* <Details title={title} setTitle={setTitle} /> */}
        <Details details={details} setDetails={setDetails} />

        <h1>Привет Мир</h1>
        
    </div>
    )
   
}

export default App