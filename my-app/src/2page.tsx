import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Vacancie {
  vacancies_id: number;
  url: string;
  name: string;
  company_name: string;
  vacancies_type: string;
  professional_roles: string;
  snippet_requirement: string;
  snippet_responsibility: string;
  experience: string;
  salary: string;
}

export const FilterPage = () => {
  const [vacancies, setVacancies] = useState<Vacancie[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/vacancies_filter');
        setVacancies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVacancies();
  }, []);


  const [filter, setFilter] = useState ('')

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {setFilter(event.target.value)} 
  
    return (
      <div>
        <p><strong>Общее количество вакансий - {vacancies.length} </strong></p>
        <p>Фильтр по названию вакансии   <input type="text" value={filter} onChange={handleChange}></input></p>
          
        {vacancies.filter((key) => filter !== '' ? key.name.toLowerCase().includes(filter.toLowerCase()) :  1).map((vacancie) => (
          <div key={vacancie.vacancies_id}>
            <h3>{vacancie.name}</h3>
            <p><strong>Название компании</strong>: {vacancie.company_name}</p>
            <p><strong>URL</strong> <a  href={vacancie.url}>{vacancie.url}</a></p>
            <p><strong>Зарплата:</strong> {vacancie.salary.replace("'from'", ' От ').replace("'to'", ' До ').replace("'currency'", ' Валюта ').replace("'gross': False", '').replace("None", 'не обозначено').replace("'gross': True", '').replace('{', '').replace('}', '')}</p>
            <p><strong>Тип вакансии:</strong> {vacancie.vacancies_type}</p>
            <p><strong>Профессиональные роли:</strong> {vacancie.professional_roles}</p>
            <p><strong>Требования:</strong> {vacancie.snippet_requirement}</p>
            <p><strong>Обязанности:</strong> {vacancie.snippet_responsibility}</p>
            <p><strong>Опыт работы:</strong> {vacancie.experience}</p>
            {/* Другие поля вакансии */}
          </div>
        ))}
      </div>
    );
  };