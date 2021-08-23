/* eslint-disable jsx-a11y/anchor-is-valid */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      router.push(
        {
          pathname: '/items',
          query: { search },
        },
      );
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(
      {
        pathname: '/items',
        query: { search },
      },
    );
    // searchItem(search);
  };
  return (
    <div className={`col-10 col-offset-2 ${styles.navbar} `}>
      <div className={styles.navContainer}>
        <Link href="/">
          <a className={styles.navLogo}>
            <span> </span>
          </a>
        </Link>
        <input className={styles.searchText} aria-label="search_input" type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} onKeyDown={handleKeyDown} />
        <button type="button" aria-label="search-button" className={styles.btnNavbar} onClick={handleClick}>
          <FontAwesomeIcon className={styles.iconBtn} icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
