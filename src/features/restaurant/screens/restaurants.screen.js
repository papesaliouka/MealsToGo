import React from "react";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantScreenContainer = Styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}; 
`;

const SearchbarContainer = Styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = Styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export default function RestaurantsScreen() {
  return (
    <RestaurantScreenContainer>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </RestaurantScreenContainer>
  );
}
