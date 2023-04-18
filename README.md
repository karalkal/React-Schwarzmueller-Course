## Description

This project is based on  Max Schwarzmueller 's tutorial [react-complete-guide](https://github.com/academind/react-complete-guide-code).
There are quite a few modifications of the code (not necessarily for the better) and comments detailing these changes as well as some of the basic React concepts.
All topics covered by Max have been utilized in separate projects in a similar manner to how the original course has been structured.

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











