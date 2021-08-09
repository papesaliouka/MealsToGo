import React, { useContext, useState} from "react";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const Search = () => {
  const { keyWord, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyword] = useState(keyWord);

  return (
    <SearchbarContainer>
      <Searchbar
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
  padding: ${(props) => props.theme.space[1]};
`;

export default Search;