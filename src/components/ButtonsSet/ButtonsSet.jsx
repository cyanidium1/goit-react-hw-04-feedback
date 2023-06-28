import css from './Buttons.module.css';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ButtonsSet = ({ increase, options }) => {
  return (
    <div className={css.buttons}>
      {options.map(el => (
        <Button
          key={options.indexOf(el)}
          name={el}
          action={() => increase(`${el}`)}
        />
      ))}
    </div>
  );
};

ButtonsSet.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default ButtonsSet;
