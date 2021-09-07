import React from 'react';
import Link from 'next/link';
import ClassNameProp from '../../types/props/ClassNameProp';

import styles from './Header.module.css'
import pages from '../../constants/pages';

const Header: React.VFC<ClassNameProp> = ({ className }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      Solla
    </h1>
    <nav className={styles.list}>
      {pages.map(name => 
        <Link href={`/${name}`} key={`header-list-item-${name}`} passHref>
          <button className={styles.card}>
            <h1 className={styles.cardTitle}>
              {name}
            </h1>
          </button>
        </Link>
      )}
    </nav>
  </header>
)

export default Header