import classes from './MealsMenu.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem'
import { useEffect, useState } from 'react';


const MENU_URL = "https://react-food-order-app-79c6b-default-rtdb.europe-west1.firebasedatabase.app/.json"
// N.B. "pizzas" is the first object key, the menu itself is value, hence below we get it from data.pizzas


const AvailableMeals = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenu()
    }, []);

    async function fetchMenu() {
        try {
            const response = await fetch(MENU_URL)
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            // data will be like "m1": {"name": "Marinara","description": "Tomato Sauce · Oregano · Basil", "price": 5.99},
            // need to make it into an array of {id: "m1", name: "Marinara"}
            const pizzaMenu = transformData(data.pizzas);
            setMenu(pizzaMenu);

        } catch (err) {
            console.log(err.message || 'Something went wrong!')
        }
    }

    function transformData(incomingData) {
        let transformedData = [];
        for (let dbPizza in incomingData) {
            let pizza = {
                id: dbPizza,
                name: incomingData[dbPizza].name,
                description: incomingData[dbPizza].description,
                price: incomingData[dbPizza].price,
            }
            transformedData.push(pizza)
        }
        return transformedData
    }

    const mealsAsComponents = menu.map((menuItem) =>
        <MealItem
            key={menuItem.id}
            id={menuItem.id}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsAsComponents}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
