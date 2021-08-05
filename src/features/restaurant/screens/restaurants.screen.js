import React from "react";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";
import { View, FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../../src/components/utility/safeArea.component";

const RestaurantList = Styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
`;

const SearchbarContainer = Styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <RestaurantList
        data={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
          { name: "6" },
          { name: "7" },
          { name: "8" },
          { name: "9" },
          { name: "11" },
          { name: "12" },
          { name: "13" },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
