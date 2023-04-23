import im from "./images/code3.png";
import im2 from "./images/code1.png";
import im3 from "./images/code2.png";
const Answers = () => {
  return (
    <div>
      <h1>1) &nbsp; Explain what the simple List component does?</h1>
      <br></br>
      <p>
        The List component in our React application renders an unordered list of
        items passed to it as props. Each item is represented as a memoized
        functional component named "SingleListItem". The component receives
        various props such as the item's index, a boolean value indicating
        whether the item is selected or not, a click handler function, and the
        item's display text.<br></br>
        <br></br>
        The List component maintains its own state using the useState hook to
        keep track of the selected item's index. Whenever an item is clicked,
        the handleClick function is invoked with the clicked item's index. The
        function then updates the component's state using the setSelectedIndex
        function.<br></br>
        <br></br>
        Each SingleListItem component receives an isSelected prop which is a
        boolean value that reflects whether the item at the given index is
        currently selected, based on the selected index stored in the List
        component's state. If the index matches the selected index, the item is
        highlighted with a green background, otherwise, it has a red background.
        <br></br>
        <br></br>
        The List component also uses the useEffect hook to reset the selected
        index to null whenever there is a change in the items prop. This ensures
        that any previously selected item is deselected when the list is updated
        with new items. Additionally, the List component has a default props
        definition for the items prop, setting it to null if not provided.
        <br></br>
        <br></br>
        In summary, the List component provides a mechanism for users to select
        a single item from a list of items and displays visual feedback on which
        item is currently selected. It uses various React hooks such as
        useState, useEffect, and memo to maintain its state and optimize its
        rendering performance.<br></br>
        <br></br>
      </p>
      <br></br>
      <br></br>
      <h1>2) &nbsp; What problems / warnings are there with code?</h1>
      <br></br>
      <p>
        <img src={im} alt=""></img>
      </p>{" "}
      <br></br>
      <h1>
        3) &nbsp;Please fix, optimize, and/or modify the component as much as
        you think is necessary.
      </h1>
      <br></br>
      <br></br>
      <p></p>
      <img src={im2} alt=""></img>
      <br></br>
      <img src={im3} alt=""></img>
    </div>
  );
};

export default Answers;
