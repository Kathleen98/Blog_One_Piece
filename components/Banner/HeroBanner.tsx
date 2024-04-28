import { Children } from 'react';
import React from 'react';
import styles from './styles.module.css';

interface LinksProps {
    children: React.ReactNode;
}

function NavLink({Children:React.ReactNode){
    return(
        <a href="">{Children}</a>
    )
}

function HeroBanner(){
    return(
        <header className={styles.heroBanner}>
            <nav>
                <NavLink>Personagens</NavLink>
            </nav>
        </header>
    )    
}


export default  HeroBanner