import React, { PropTypes } from 'react';

const ReusablePopup = ({ children, wrapperStyle, contentStyle, containerStyle, mainContainerStyle }) => (
  <div className="reusable-popup-main-container" style={mainContainerStyle}>
    <div className="reusable-popup-container" style={containerStyle}>
      <div className="reusable-popup-content" style={contentStyle}>
        <div className="reusable-popup-wrapper" style={wrapperStyle}>
          { children }
        </div>
      </div>
    </div>
  </div>
);

ReusablePopup.propTypes = {
  children: PropTypes.any,
  mainContainerStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
};

export default ReusablePopup;

