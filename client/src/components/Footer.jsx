import React from 'react';
import FontIcon from 'material-ui/FontIcon';

var style = {
    backgroundColor: "#d1d1d1",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
    zIndex: "99",
      backgroundColor: "#fff",
        fontSize: "12px",
        fontColor: "#000"
};

var phantom = {
  display: 'block',
  padding: '0px',
  height: '40px',
  width: '100%',
}

const Footer = React.createClass({
    render: function() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}> 
                Check this out on github     -                        
                  <a target="_blank" href="https://github.com/91integ25/Finalproject">
                   <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
            </div>
        );
    }
});

export default Footer; 