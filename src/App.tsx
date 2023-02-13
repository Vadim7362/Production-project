import {Route, Routes, Link,} from 'react-router-dom';
import './styles/index.scss';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import React, { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/UseTheme';
import { classNames } from './helpers/ClassNames/classNames';



const App = () => {

const {theme, toggleTheme} = useTheme();
const bool = true;

  return (
    <div className= {classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}/>
          <Route path={'/'} element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;