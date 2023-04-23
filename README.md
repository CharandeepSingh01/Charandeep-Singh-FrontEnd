Name - Charandeep Singh

Visit assignment: https://charandeep-singh-front-end.vercel.app/

Reg No - 12011066

Q1. Explain what the simple List component does.

The List component in our React application renders an unordered list of items passed to it as props. Each item is represented as a memoized functional component named "SingleListItem". The component receives various props such as the item's index, a boolean value indicating whether the item is selected or not, a click handler function, and the item's display text.


The List component maintains its own state using the useState hook to keep track of the selected item's index. Whenever an item is clicked, the handleClick function is invoked with the clicked item's index. The function then updates the component's state using the setSelectedIndex function.


Each SingleListItem component receives an isSelected prop which is a boolean value that reflects whether the item at the given index is currently selected, based on the selected index stored in the List component's state. If the index matches the selected index, the item is highlighted with a green background, otherwise, it has a red background.


The List component also uses the useEffect hook to reset the selected index to null whenever there is a change in the items prop. This ensures that any previously selected item is deselected when the list is updated with new items. Additionally, the List component has a default props definition for the items prop, setting it to null if not provided.


In summary, the List component provides a mechanism for users to select a single item from a list of items and displays visual feedback on which item is currently selected. It uses various React hooks such as useState, useEffect, and memo to maintain its state and optimize its rendering performance.




Q2. What problems / warnings are there with code?

There are several issues with the provided code:

In the SingleListItem component, the onClickHandler prop is being passed the result of calling the handleClick function instead of the function itself. This will result in the handleClick function being called immediately when the component is rendered, instead of when the item is clicked. To fix this, the onClickHandler prop should be passed a function that calls the handleClick function when the item is clicked, like this: onClick={() => onClickHandler(index)}


In the propTypes definition for the WrappedListComponent, the items prop is defined as an array of objects with a "text" property that is a required string. However, the correct syntax is to use the "shape" validator in conjunction with the "arrayOf" validator. The correct propTypes definition for items should be: items: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired }))

In the WrappedListComponent component, the selectedIndex variable initialized by the useState hook should be set to null instead of undefined. The following line needs to be changed: const [setSelectedIndex, selectedIndex] = useState()

In the SingleListItem component, the isSelected prop is being passed the selectedIndex state variable instead of a boolean value. The following line needs to be changed: isSelected={selectedIndex}

In the WrappedListComponent component, a unique key needs to be provided for each SingleListItem component to help React efficiently render the list. The following line needs to be changed: <SingleListItem .../>

In the given code, the map() method is being used without any data being passed from the App component. Additionally, the selectedIndex variable is being initialized to null by default, resulting in an error. To address this, a default prop for the data can be set to ensure that the map() method has valid data to work with, even if it is not passed from the App component.

Lastly, the state setter function, setSelectedIndex, is defined incorrectly in the WrappedListComponent. The line const [setSelectedIndex, selectedIndex] = useState(); should be changed to const [selectedIndex, setSelectedIndex] = useState(null); to ensure that the initial value of the selectedIndex variable is set to null.


Q3. Please fix, optimize, and/or modify the component as much as you think is necessary.

import React, { useState, useEffect, memo } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Navbar from "./Navbar";


// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Navbar />

    <div className="main-div">
    <ul>
      {items &&
        items.map((item, index) => (
          <SingleListItem
            key={index}
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={index === selectedIndex}
          />
        ))}
    </ul>
    <br></br>
    <h1 className="note">Click on item to change the colour</h1>
    </div>
    </div>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: [{ text: "Mumbai Indians" }, { text: "Chennai Super Kings" },{ text: "Punjab Kings" },{ text: "Royal Challengers Bangalore" },{ text: "Kolkata Knight Riders" }],
};


const List = memo(WrappedListComponent);

export default List;




