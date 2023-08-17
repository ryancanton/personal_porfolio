import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['y', 'a', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])

  return (
    <div className="container home-page">
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
          strArray={"Hi,".split("")}
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={"I'm".split("")}
          idx={15} />
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={15} />
        </h1>
        <h2>Full Stack Developer / Ruby on Rails Expert / Musician</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home