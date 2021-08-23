import React from 'react';
import Navbar from '../../component/Navbar';
import style from './home.module.css';
import img from '../../image/jumbotron.jpg';
import Midtool from '../../component/middleTool';

const Home = () => (
    <div className={style.root}>
      <Navbar />
      <img src={img} alt="jumbotron" className={style.jumbotron} />
      <Midtool />
    </div>
  );

export default Home;
