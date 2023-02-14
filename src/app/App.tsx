import {Route, Routes, Link,} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/ClassNames/classNames';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';



const App = () => {

const {theme, toggleTheme} = useTheme();

  return (
    <div className= {classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;