import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Navbar.module.scss'


export default function Navbar() {
    return (
        <div className={`col-10 col-offset-2 ${styles.navbar} `}>
            <div className={styles.navContainer}>
                <a className= {styles.navLogo} > <span> </span></a>
                <input className={styles.searchText} aria-label="search_input" type="text" placeholder="Nunca dejes de buscar"  />
                <button type="button" aria-label="search-button" className= {styles.btnNavbar}> <FontAwesomeIcon className={styles.iconBtn}  icon={faSearch}/> </button>
            </div>
        </div>
    )
}
