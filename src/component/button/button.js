import React from "react";
import PropTypes from "prop-types";
import styles from "./page.module.css"

const Button = (props) => {
    return (
        <div className={styles.container_btn}>
            <a href={props.link} className={styles.btn}>{props.name}</a>
        </div>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Button;
