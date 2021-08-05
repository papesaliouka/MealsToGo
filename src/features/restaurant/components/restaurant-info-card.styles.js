import {Card} from 'react-native-paper'
import Styled from "styled-components/native";

export const Info = Styled.View`
  padding:${(props) => props.theme.space[3]};
`;
export const Rating = Styled.View`
  flex-direction:row;
  padding-top:${(props) => props.theme.space[2]};
  padding-bottom:${(props) => props.theme.space[2]};
`;

export const Section = Styled.View`
  flex-direction: row;
  align-items:center;
`;

export const Icon = Styled.Image`
  width: 15px;
  height: 15px;
`;

export const SectionEnd = Styled.View`
  flex-direction:row;
  flex:1;
  justify-content:flex-end;
`;

export const Adress = Styled.Text`
  font-family : ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = Styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props)=> props.theme.space[3]}
`;

export const RestaurantCardCover = Styled(Card.Cover)`
  padding:${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  `;
