import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ name, action }) => (
  <button onClick={action} className={css.btn}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
