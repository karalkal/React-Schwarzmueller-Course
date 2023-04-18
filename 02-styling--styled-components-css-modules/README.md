### **02-styling--styled-components-css-modules** 
#### *(3 different dynamic styling techniques, incl. mediaqueries)*

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
This approach can result in styling bugs as the form-control class will apply not only to this component but to all
components with the class

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











