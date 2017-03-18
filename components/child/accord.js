var accord = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Accordion with symbols</h2>
        <p>In this example we have added a "plus" sign to each button. When the user clicks on the button, the "plus" sign is replaced with a "minus" sign.</p>
        <button className="accordion">Section 1</button>
        <div className="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button className="accordion">Section 2</button>
        <div className="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button className="accordion">Section 3</button>
        <div className="panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  }
});
// Export the component back for use in other files
module.exports = accord;