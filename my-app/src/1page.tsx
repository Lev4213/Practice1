import React, { useState } from 'react';
import axios from 'axios';
import './1pg.css'

export const UploadPage = () => {
  const [text, setText] = useState('python');
  const [salary, setsalary] = useState(0);
  const [perPage, setPerPage] = useState(100);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/vacancies_post', { text, per_page: perPage, page });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='designe_number_two' onSubmit={handleSubmit}>
      <p className='disigne'><strong>Название вакансии</strong></p><p className='Zarplata'><strong>Зарплата</strong></p>
      <div className='block'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="number" value={salary} onChange={(e) => setsalary(Number(e.target.value))} />
        <input type="number" value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} />
        <input type="number" value={page} onChange={(e) => setPage(Number(e.target.value))} />
      </div>
      <button className='buttonchik' type="submit">Загрузка вакансий</button>
    </form>
  );
};

