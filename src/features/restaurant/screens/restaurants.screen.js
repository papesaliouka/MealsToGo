import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import Styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../../src/components/utility/safeArea.component";

import Search from "../components/search.component";

const RestaurantList = Styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
`;

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}

const LoadingContainer = Styled.View`
position: absolute; top: 50%; left: 50%;
`;

const Loading = Styled(ActivityIndicator)`
  margin-left: -25px;
`;
