import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const renderButton = (onClickNumber) => {
    return number.map((item) => (
        <Button key={item} text={item} clickHandler={onClickNumber} />
    ));
};

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">{renderButton(onClickNumber)}</section>
);
Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
