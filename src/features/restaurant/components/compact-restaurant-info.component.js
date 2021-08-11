import React from "react";
import Styled from "styled-components/native";
import { Platform } from "react-native";

import WebView from "react-native-webview";

import { Text } from "../../../components/typography/text.component";

const CompactImage = Styled.Image`
  border-radius: 10px;
  width:120px;
  height:100px;
`;

const CompactWebView = Styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = Styled.View`
  padding:10px;
  max-width:120px;
  align-items:center;
`;
const isAndroid = Platform.OS === "android";

const Image = isAndroid ? CompactWebView : CompactImage;

const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <>
      <Item>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text> {restaurant.name} </Text>
      </Item>
    </>
  );
};

export default CompactRestaurantInfo;
