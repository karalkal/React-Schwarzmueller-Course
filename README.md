## Description

This project is based on  Max Schwarzmueller 's tutorial [react-complete-guide](https://github.com/academind/react-complete-guide-code).
There are quite a few modifications of the code (not necessarily for the better) and comments detailing these changes as well as some of the basic React concepts.
All topics covered by Max have been utilized in separate projects in a similar manner to how the original course has been structured.

### **01-basics--react-expense-tracker** 
#### *(Comprehensive overview of React basics such as components, props, useState hook etc.)*
#### Modifications

- In original code Date.js was separate component which was then included in ExpenseItem.js component.
I have merged it into the ExpenseItem.js itself, thus simplifying the app structure.
- Data is now stored in a separate file, and not in App.js as in the original version.
- App.js will store this data in localStorage and initial state will be derived from localStorage. Then when new items are being created the localStorage data will be overwritten and state will be updated / page will re-render with the updated data. 
- After each restart the app will attempt to load data from localStorage and if it gets 'undefined' the hard-coded data from the app will be reloaded again.
- Because of this major modifications were made in the way Data objects were manipulated. Data in localStorage is stored as json, hence the date objects are strings which we need to parse again to Date objects so we can obtain the day, month, year in the required format. At the same time newly created items need to have their date cast to toISOString() before being added to the array we will be stringifying and saving in localStorage. Please refer to the actual code and comments.



