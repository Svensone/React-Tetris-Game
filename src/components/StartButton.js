import React from "react";
import PropTypes from "prop-types";

import { StyledStartButton } from "./styles/StyledStartButton";
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

StartButton.propTypes = {};

export default StartButton;
