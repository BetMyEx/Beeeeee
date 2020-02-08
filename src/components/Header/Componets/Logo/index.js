import React from "react";
import PropTypes from 'prop-types'
import './style.css'

class Logo extends React.Component {
    render() {
        return <div className={`logo ${this.props.position}Logo`}></div>;
    }

}
Logo.defaultProps = {
    position : 'header'
};
Logo.propTypes = {
    position: PropTypes.oneOf(['footer', 'header'])
}

export default Logo;