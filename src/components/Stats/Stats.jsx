import css from './Stats.module.css';
// import PropTypes from 'prop-types';

const Stats = ({ params, total, percentage }) => {
  return (
    <div className={css.list}>
      <p className={css.item}>Good: {params.good}</p>
      <p className={css.item}>Neutral: {params.neutral}</p>
      <p className={css.item}>Bad: {params.bad}</p>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Percents: {percentage}</p>
    </div>
  );
};

// Stats.propTypes = {
//   params: PropTypes.arrayOf(PropTypes.string),
// };

export default Stats;
