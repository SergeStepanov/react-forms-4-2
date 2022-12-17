import React, { useState } from 'react';
import TrainingModel from './TrainingModel';
import PropTypes from 'prop-types';

function FormTraining({ onAdd }) {
  const [form, setForm] = useState({
    date: '',
    distance: '',
  });

  const hendleSumbit = (e) => {
    e.preventDefault();
    const data = new TrainingModel(form.date, form.distance);
    onAdd(data);
    setForm({date: '', distance: '',})
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  return (
    <>
      <form id='form' className='form-box' onSubmit={hendleSumbit}>
        <div className='form-input'>
          <label htmlFor='form-date'>Дата (ДД.ММ.ГГ)</label>
          <input
            className='form-date'
            id='form-date'
            name='date'
            type='date'
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-input'>
          <label htmlFor='form-distance'>Пройдено км</label>
          <input
            className='form-distance'
            id='form-distance'
            name='distance'
            type='number'
            step='0.1'
            value={form.distance}
            onChange={handleChange}
            required
          />
        </div>
        <button className='form-btn'>Ok</button>
      </form>
    </>
  );
}

FormTraining.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default FormTraining;
