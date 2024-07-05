import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {UploadPage} from './1page';
import {FilterPage} from './2page';

// Основной компонент приложения с маршрутизацией
 export const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/upload">Загрузить вакансии</Link> | <Link to="/filter">Фильтр вакансий</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>
    </Router>
  );
};

// Компонент для домашней страницы
const HomePage = () => {
  return <div>Добро пожаловать на главную страницу!</div>;
};

export default App;
