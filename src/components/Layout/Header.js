import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Abdul's Meal</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-img']}>
        <img src={mealsImage} alt='A Table of Meals' />
      </div>
    </Fragment>
  );
};

export default Header;
