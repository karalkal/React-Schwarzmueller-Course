## Description

This project is based on  Max Schwarzmueller 's tutorial [react-complete-guide](https://github.com/academind/react-complete-guide-code).
There are quite a few modifications of the code (not necessarily for the better) and comments detailing these changes as well as some of the basic React concepts.
All topics covered by Max have been utilized in separate projects in a similar manner to how the original course has been structured.
Below could be found notes created for my own reference.

### **01-basics--react-expense-tracker** 
#### *(Comprehensive overview of React basics such as components, props, useState hook etc.)*
**Modifications**
- In original code Date.js was separate component which was then included in ExpenseItem.js component.
I have merged it into the ExpenseItem.js itself, thus simplifying the app structure.
- Data is now stored in a separate file, and not in App.js as in the original version.
- App.js will store this data in localStorage and initial state will be derived from localStorage. Then when new items are being created the localStorage data will be overwritten and state will be updated / page will re-render with the updated data. 
- After each restart the app will attempt to load data from localStorage and if it gets 'undefined' the hard-coded data from the app will be reloaded again.
 - Because of this major modifications were made in the way Data objects were manipulated. Data in localStorage is stored as json, hence the date objects are strings which we need to parse again to Date objects so we can obtain the day, month, year in the required format. At the same time newly created items need to have their date cast to toISOString() before being added to the array we will be stringifying and saving in localStorage. Please refer to the actual code and comments.

### **02-styling--styled-components-css-modules** 
#### *(Dynamic CSS styling)*

There are 3 versions of  CourseInput folder which contains the CourseInput.js component where Max has demonstrated the 3 techniques to apply dynamic styling to an element - if the user tries to submit a blank form the class invalid will be applied to the div element which will then affect the children <label\> and <input\> by coloring them red(dish):

```
.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```
The 3 folders are interchangeable, the one with the valid name (i.e. currently used) is version 3 (using modules)

**1. using string interpolation and conditionally adding the invalid class**

```
<form onSubmit={formSubmitHandler}>
     <div className={`form-control ${!isValid && 'invalid'}`}>
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}

         <label>Course Goal</label>
         <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
```

**2. using 'styled-components'**
```
import styled from 'styled-components';
```
FormControl is now a separate styled component which receives props:
```
      <FormControl invalid={!isValid}>
```
... and looks slightly bizzare:
```
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
```
With this method no css file is actually required

**3. using CSS modules**

- CSS files must be named FolderName.module.css
- `import styles from './CourseInput.module.css';`  could be any name, doesn't need to be **styles**
- then use styles object like this         `className={`${styles['form-control']} ${!isValid && styles.invalid}`}`
NOTE: we have ['form-control'] because of the minus in the name of the property

### **03-practice-render-input-as-card** 
#### *(Practicing the topics covered so far)*

NOTE: My implementation difers significantly from Max's as it has been created entirely independently

### **04-04-render-input-as-card-portal-refs** 
#### *(Refactored form to use refs instead of name/value crossreferencing via state, 
#### modal rendered at top level by use of portal)*

### **05-side-effects--reducers--context-api**
####05-a
useEffect() triggers an action in response to a side effect, i.e. page loading/re-loading, 
user input changes, data being loaded from server etc.
It runs AFTER the render. 
IF any of the dependancies changes, the function will run AGAIN
####05-b
 
####05-c and 05-d
It is not perfect when you pass state over multiple components with props if the "middle" components don't really use this, 
i.e. they are only used as intermediary between a higher and lower level components. 
In this case we have <MainHeader/> getting props from <App/> only to pass them on to <Navigation/>
```
const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};
```

We create Context like this:`
const AuthContext = React.createContext({
    isLoggedIn: false,
    ...: ...
})

export default AuthContext`

Then we need to 
**1. provide it / wrap components using it**
```
<AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
      }}>
 </AuthContext.Provider>
```
**Children components will also have access to context props  (ctx.isLoggedIn in this case)
and we don't have to pass it as via a chain of components which don't need it **
**N.B. `<AuthContext.Provider value={{ some-object with relevant props}}>`
is always required as it will allow updating state of context**

**2. consume it:**

2.1. with AuthContext.Consumer 
*In this example:*
Originally we pass props from <App> to <MainHeader> to <Navigation>. Now with useContext <Navigation /> gets direct access to the context provided by <App>.
Syntax is as follow: Consumer takes a child function which takes the ctx as arg and uses it in jsx code using it.
```
return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav> . . . . [code which needs access to ctx data] . . . . </nav>
```
2.2 By using useContext hook:
*In this example:*
```
import { useContext } from 'react';
  const ctx = useContext(AuthContext)
```
and then just use it - see <Login> and <Home>





