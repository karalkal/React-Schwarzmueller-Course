import { Fragment } from 'react'

import classes from './Header.module.css'

import backgroundImage from '../../assets/meals.jpg'
import HeaderCartBTN from './HeaderCartButton'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals App</h1>
                <HeaderCartBTN />
            </header>
            <div className={classes["main-image"]}>
                <img src={backgroundImage} alt='various dishes on a table' />
            </div>
        </Fragment>)
}

export default Header