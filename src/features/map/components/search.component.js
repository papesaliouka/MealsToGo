import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const Search = () => {
  const { keyWord, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyword] = useState(keyWord);

  useEffect(() => {
    setSearchKeyword(keyWord);
  }, [keyWord]);

  return (
    <SearchbarContainer>
      <Searchbar
      icon='map'
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => search(searchKeyWord)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchbarContainer>
  );
};

const SearchbarContainer = Styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export default Search;
