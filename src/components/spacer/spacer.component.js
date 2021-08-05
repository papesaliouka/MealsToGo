import React from "react";
import { View } from "react-native";
import Styled from "styled-components/native";

const TopSmall = Styled.View`
margin-top: ${(props)=>props.theme.space[1]};
`;

const TopMedium = Styled.View`
margin-top:${(props)=>props.theme.space[2]};
`;

const TopLarge = Styled.View`
margin-top: ${(props)=>props.theme.space[3]};
`;
const LeftSmall = Styled.View`
margin-left: ${(props)=>props.theme.space[1]};
`;

const LeftMedium = Styled.View`
margin-left:${(props)=>props.theme.space[2]};
`;

const LeftLarge = Styled.View`
margin-left: ${(props)=>props.theme.space[3]};
`;

export default function Spacer({ variant }) {
  if (variant == "top.medium") {
    return <TopMedium />;
  }
  if (variant == "top.large") {
    return <TopLarge />;
  }
  if (variant == "left.medium") {
    return <LeftMedium />;
  }
  if (variant == "left.large") {
    return <LeftLarge />;
  }
  if (variant == "left.small") {
    return <LeftSmall />;
  }
  return <TopSmall />;
}


