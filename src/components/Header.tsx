'use client';
import styles from '@/styles/header.module.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';

export default function Header() {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(currentDate);
  
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header id={styles.header}>
      <div id={styles.ctnLogotype}>
        <h1 id={styles.logotype}>Systema News</h1>
        <span 
          id={styles.dtNews}
          className={styles.dtLine}
        >
          {formattedDate}
        </span>
      </div>

      <div id={styles.ctnSearch}>
        <div 
          id={styles.inpSearch}
          className={showSearch ? styles.visible : styles.hidden}
        >
          {showSearch && (
            <input type="search" placeholder="Pesquisar..." />
          )}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className={styles.btnIcon}
          >
            <MagnifyingGlassIcon size={18} color="#000000" weight="bold"/>
          </button>
        </div>

        <button
          id={styles.btnDarkmode}
          onClick={() => setDarkMode(!darkMode)}
        >
          {
          darkMode ? 
          <MoonIcon size={18} color="#000000" weight="bold" /> : 
          <SunIcon size={18} color="#000000" weight="bold" />
          }
        </button>
      </div>

      <nav>
        <Link className={styles.btnNav} href="/">Home</Link>
        <Link className={styles.btnNav} href="/about">About</Link>
      </nav>
    </header>
  );
}