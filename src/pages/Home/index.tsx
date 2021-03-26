import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { HeroTypes } from "../../common/types/Heroes";

import {
  Container,
  ButtonContainer,
  OrderByButton,
  Input,
  InputArea,
} from "./styles";

import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../utils/index";

import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";
import { useDebounce } from "use-debounce";

export function Home() {
  const [offSet, setOffSet] = useState(0);
  const [displayValue, setDisplayValue] = useState("");
  const [value] = useDebounce(displayValue, 500);
  const [orderBy, setOrderBy] = useState("name");
  const [orderByButtonIsActive, setOrderByButtonIsActive] = useState(false);

  const flalistRef: React.RefObject<FlatList> = useRef(null);

  const { generateHtml, favoriteHeroes } = useFavoriteHeroes();
  const heroesQuery = useHeroesQuery(value, orderBy, offSet);

  useEffect(() => {
    generateHtml();
  }, [favoriteHeroes]);

  const renderHeroCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return <HeroCard item={item} />;
  };

  if (heroesQuery.isError) {
    ErrorMessage();
    return (
      <>
        <Container>
          <Header hasButton={true} hasGoBackButton={false} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={displayValue}
                placeholder="Search for..."
                onChangeText={value => setDisplayValue(value)}
              />
            </InputArea>
            <OrderByButton isActive={orderByButtonIsActive}>A-Z</OrderByButton>
          </ButtonContainer>
          <Loading title={"Something went wrong"} isError={true} />
        </Container>
      </>
    );
  }

  function handleOrderByFunction() {
    if (orderBy.length === 4) {
      setOrderBy("-name");
      setOrderByButtonIsActive(true);
    } else {
      setOrderBy("name");
      setOrderByButtonIsActive(false);
    }
  }

  function handleChangePage(isIncrease: boolean) {
    if (isIncrease) {
      setOffSet(offSet + 20);
      flalistRef.current?.scrollToOffset({ animated: true, offset: 0 });
    } else {
      if (offSet === 0) {
        return;
      } else {
        setOffSet(offSet - 20);
        flalistRef.current?.scrollToOffset({ animated: true, offset: 0 });
      }
    }
  }

  return (
    <>
      {heroesQuery.isLoading ? (
        <Container>
          <Header hasButton={true} hasGoBackButton={false} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={displayValue}
                placeholder="Search for..."
                onChangeText={value => setDisplayValue(value)}
              />
            </InputArea>
            <OrderByButton isActive={orderByButtonIsActive}>A-Z</OrderByButton>
          </ButtonContainer>
          <Loading title={"Loading ..."} isError={false} />
        </Container>
      ) : (
        <Container>
          <Header hasButton={true} hasGoBackButton={false} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={displayValue}
                placeholder="Search for..."
                onChangeText={value => setDisplayValue(value)}
              />
              <FontAwesome
                name="trash-o"
                size={24}
                color="black"
                onPress={() => {
                  setDisplayValue("");
                }}
              />
            </InputArea>
            <OrderByButton
              onPress={() => handleOrderByFunction()}
              isActive={orderByButtonIsActive}
            >
              A-Z
            </OrderByButton>
          </ButtonContainer>

          {heroesQuery.data?.data.results !== undefined &&
            (heroesQuery.data?.data.results?.length === 0 ? (
              <Loading title={"Not Found ):"} isError={true} />
            ) : (
              <FlatList
                data={heroesQuery.data?.data.results}
                renderItem={renderHeroCard}
                showsVerticalScrollIndicator={false}
                ref={flalistRef}
                style={{ marginBottom: 10 }}
                ListFooterComponent={() => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity onPress={() => handleChangePage(false)}>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Previous Page</Text>
                        <AntDesign
                          name="left"
                          size={24}
                          color="black"
                          style={{ paddingLeft: 10 }}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleChangePage(true)}>
                      <View style={{ flexDirection: "row" }}>
                        <AntDesign
                          name="right"
                          size={24}
                          color="black"
                          style={{ paddingRight: 10 }}
                        />
                        <Text>Next Page</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            ))}
        </Container>
      )}
    </>
  );
}
