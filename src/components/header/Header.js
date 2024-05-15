
import classes from './Header.module.css';

function Header() {
    return (
<>
<div className={classes.headerTxt}>
<h1 className={classes.title}>Daily achievements</h1>
<h2 className={classes.subTitle}>Just plan accurately and get it done!</h2>
</div>
</>
    );
}

export default Header;