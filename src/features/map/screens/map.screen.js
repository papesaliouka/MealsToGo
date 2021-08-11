import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import Styled from "styled-components/native";
import { View } from "react-native";

import Search from "..//components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
const Map = Styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const dif = northeastLat - southwestLat;
    setLatDelta(dif);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout onPress={()=> navigation.navigate('RestaurantDetails',{ restaurant})}>
                <MapCallout restaurant={restaurant} />
                </MapView.Callout>              

            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
