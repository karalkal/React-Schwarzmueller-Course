import { Fragment } from 'react'

import classes from './Header.module.css'

import backgroundImage from '../../assets/melting_pizza.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Pizza App</h1>
                <HeaderCartButton onDisplayCart={props.onDisplayCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={backgroundImage} alt='tasty pizza with melting mozzarella' />
            </div>
        </Fragment>)
}

export default Header