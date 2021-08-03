import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Styled from "styled-components/native";
import { Card } from "react-native-paper";
import Spacer from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Info = Styled(View)`
  padding:${(props) => props.theme.space[3]};
`;
const Rating = Styled(View)`
  flex-direction:row;
  padding-top:${(props) => props.theme.space[2]};
  padding-bottom:${(props) => props.theme.space[2]};
`;

const Title = Styled(Text)`
  font-family : ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Section = Styled(View)`
  flex-direction: row;
  align-items:center;
`;

const SectionEnd = Styled(View)`
  flex-direction:row;
  flex:1;
  justify-content:flex-end;
`;

const Adress = Styled(Text)`
  font-family : ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = Styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
`;

const RestaurantCardCover = Styled(Card.Cover)`
  padding:${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://sajidsaiyed.files.wordpress.com/2016/06/cropped-cover-01.png",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/29/b8/a5/table-bord-de-mer.jpg",
    ],
    adress = "Rufisque",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          <Section>
            {ratingArray.map((rate, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Section>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              {
                <Image
                  source={{
                    uri: icon,
                  }}
                  style={{ width: 25, height: 25 }}
                />
              }
            </Spacer>
          </SectionEnd>
        </Rating>
        <Adress>{adress}</Adress>
      </Info>
    </RestaurantCard>
  );
}
