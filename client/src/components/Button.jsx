var React = require('react');

var buttonStyle = {
borderStyle: "solid",
  borderWidth: "2px",
  color: "#000",
  borderColor: "#000",
  backgroundColor: "transparent"
};

var Button = React.createClass({
  render: function () {
    return (
      <button
        style={buttonStyle}
                onClick={this.props.handleClick}>{this.props.label}</button>

    );
  }
});

module.exports = Button;