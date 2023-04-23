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