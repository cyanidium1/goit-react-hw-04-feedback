import css from './Feedback.module.css';
// import Stats from 'components/Stats/Stats';
import ButtonsSet from 'components/ButtonsSet/ButtonsSet';
// import Section from 'components/Section/Section';
import PropTypes from 'prop-types';

const Feedback = ({ increase, options }) => {
  return (
    <div className={css.container}>
      <h2>Okay, leave feedback</h2>
      <ButtonsSet increase={increase} options={options} />
    </div>
  );
};

Feedback.propTypes = {
  increase: PropTypes.func,
};

export default Feedback;
