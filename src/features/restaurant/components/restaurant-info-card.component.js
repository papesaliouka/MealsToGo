import React from "react";

import Spacer from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";

import {
  Info,
  Rating,
  SectionEnd,
  Section,
  RestaurantCard,
  RestaurantCardCover,
  Icon,
  Adress,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
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
        <Text>{name}</Text>
        <Rating>
          <Section>
            {ratingArray.map((rate, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Section>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error" size="caption" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            {
              <Icon
                source={{
                  uri: icon,
                }}
                style={{ width: 25, height: 25 }}
              />
            }
          </SectionEnd>
        </Rating>
        <Adress>{adress}</Adress>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
