import React, { Fragment } from 'react'
import classes from './Header.module.css'
import foodImage from '../../assets/food-img-header.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt='Different kinds of healthy foods' />
            </div>
        </Fragment>
    )
}

export default Header