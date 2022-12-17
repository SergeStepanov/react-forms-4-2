import React from 'react';
import './TitleList.css';

function TitleList() {
  return (
    <ul className='title-list'>
      <li className='title'>Дата (ДД.ММ.ГГ)</li>
      <li className='title'>Пройдено км</li>
      <li className='title'>Действия</li>
    </ul>
  );
}

export default TitleList