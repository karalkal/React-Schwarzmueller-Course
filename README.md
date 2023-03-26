## Description

This project is based on  Max Schwarzmueller 's tutorial [react-complete-guide](https://github.com/academind/react-complete-guide-code).
There are quite a few modifications of the code (not necessarily for the better) and comments detailing these changes as well as some of the basic React concepts.

## Modifications

- In original code Date was separate component which was then included in ExpenseItem.js component.
I have merged it into the ExpenseItem.js itself, thus simplifying the app structure.
- Data is now stored in a separate file, and not in App.js as in the original version.
- App.js will duplicate this data in localStorage and initial state will be derived from there. Then when new items are being created the localStorage data will be overwritten and state will be updated / page will re-render with the updated data. After each app restart obviously localStorage will be overwitten again with the hard-coded data from the app.
 - Because of this major modifications were made in the way Data objects were manipulated. Data in localStorage is stored as json, hence the date objects are strings which we need to parse again to Date objects so we can obtain the day, month, year in the required format. At the same time newly created items need to have their date cast to toISOString() before being added to the array we will be stringifying and saving in localStorage. Please refer to the actual code and comments.

