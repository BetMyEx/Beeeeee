import React from "react";
import './style.css'
import PropTypes from 'prop-types'
class MenuItem extends React.Component {
    render() {
        return <nav className="menuItem">
            <li className={`menuItem ${this.props.position}MenuItem`}></li>
            <li className={`menuItem ${this.props.position}MenuItem`}></li>
            <li className={`menuItem ${this.props.position}MenuItem`}></li>
            <li className={`menuItem ${this.props.position}MenuItem`}></li>
        </nav>;
    }
}
    MenuItem.defaultProps = {
        position : 'header'
    };
    MenuItem.propTypes = {
        position: PropTypes.oneOf(['footer', 'header'])
    }


export default MenuItem;