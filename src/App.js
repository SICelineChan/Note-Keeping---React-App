import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';

export default function App() {
  return (
    <div>
      <Header />
      <Notes />
      <p>Start editing to see some magic happen :)</p>
      <Footer />
    </div>
  );
}
