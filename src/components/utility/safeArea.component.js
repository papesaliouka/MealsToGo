import Styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = Styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}; 
`;
