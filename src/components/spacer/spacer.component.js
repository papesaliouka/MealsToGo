import Styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};
const Spacer = Styled.View`
${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
