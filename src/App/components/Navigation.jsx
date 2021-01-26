//This lets the file know you're creating a React component
import React from "react";
//This imports the stylesheet
import "../styles/Navigation.scss";

/*
"export" allows us to use this component in other files using the "import" syntax above.
"const" initializes the variable as one that cannot be redefined. Note the Error on line 
"Navigation" is the name of our component. The first letter of React components are always written in uppercase.
Above the return statement is where you will write your logic for the component as it will not appear on the screen.
In the return statement, within an element is where you will write your JSX -- JSX is a mix of HTML & JavaScript
Always assign a className to the highest level element in the component. The className should be the same name as the component
The className will allow you to style your component
*/
export const Navigation = () => {
  //code that won't render on the DOM
  return (
    <div className="navigation">{/* code that will render on the DOM */}</div>
  );
};
