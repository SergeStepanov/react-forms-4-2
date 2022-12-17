import React from 'react';
import './TrainingList.css';
import PropTypes from 'prop-types';
import TitleList from '../TitleList/TitleList';

function TrainingList({ trainingList, setTrainingList }) {
  const close = '\u2718';

  const hendleRemuve = (id) => {
    setTrainingList((prevTrainingList) =>
      prevTrainingList.filter((o) => o.id !== id)
    );
  };

  return trainingList.length === 0 ? null : (
    <>
      <TitleList />
      <ul className='training-list'>
        {trainingList
          .sort((a, b) => (a.date < b.date ? -1 : 1))
          .map((o) => (
            <li className='training-item' key={o.id} id={o.id}>
              <span>{new Date(o.date).toLocaleDateString()}</span>

              <span>{o.distance}</span>

              <span
                className='training-remuve'
                onClick={() => hendleRemuve(o.id)}>
                {close}
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}

TrainingList.propTypes = {
  trainingList: PropTypes.array.isRequired,
};

export default TrainingList;
