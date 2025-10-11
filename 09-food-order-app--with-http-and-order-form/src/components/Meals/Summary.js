import classes from './Summary.module.css';

const Summary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Pizza, Delivered To You</h2>
            <p>
                Pizza is an Italian, specifically Neapolitan, dish typically consisting of a flat base of leavened
                wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.
            </p>
            <p>
                The term pizza was first recorded in 997 AD, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio,
                on the border with Campania.
            </p>
        </section>
    );
};

export default Summary;
