import React from 'react';
import '../style.css';

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return <footer>Copyright {thisYear} SI Celine C</footer>;
}
