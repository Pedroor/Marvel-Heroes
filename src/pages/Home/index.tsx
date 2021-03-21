import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useHeroesQuery } from "../../hooks/useHeroesQuery";
import { s } from "react-native-size-matters";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import NotFound from "../../assets/notFound.gif";

import { HeroTypes } from "../../common/types/Heroes";

import {
  Container,
  ButtonContainer,
  OrderByButton,
  Input,
  InputArea,
  TitleName,
} from "./styles";

import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Loading } from "../../components/Loading";

import { useFavoriteHeroes } from "../../hooks/useFavoriteHeroes";

export function Home() {
  const [offSet, setOffSet] = useState(0);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [orderByButtonIsActive, setOrderByButtonIsActive] = useState(false);

  const flalistRef: React.RefObject<FlatList> = useRef(null);

  const { generateHtml, favoriteHeroes } = useFavoriteHeroes();
  const heroesQuery = useHeroesQuery(name, orderBy, offSet);

  useEffect(() => {
    generateHtml();
  }, [favoriteHeroes]);

  const renderHeroCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return <HeroCard item={item} />;
  };

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
                value={name}
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
            </InputArea>
            <OrderByButton isActive={orderByButtonIsActive}>A-Z</OrderByButton>
          </ButtonContainer>
          <Loading title={"Loading ..."} />
        </Container>
      ) : (
        <Container>
          <Header hasButton={true} hasGoBackButton={false} />
          <ButtonContainer>
            <InputArea>
              <FontAwesome name="search" size={24} color="black" />
              <Input
                value={name}
                placeholder="Search for..."
                onChangeText={value => setName(value)}
              />
              <FontAwesome
                name="trash-o"
                size={24}
                color="black"
                onPress={() => setName("")}
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
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TitleName>Not Found ): </TitleName>
                <Image
                  source={NotFound}
                  style={{ width: s(300), height: s(300) }}
                />
              </View>
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
