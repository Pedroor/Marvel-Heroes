import React, { useState, useRef } from "react";
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

export function Home() {
  const [offSet, setOffSet] = useState(0);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [orderByButtonIsActive, setOrderByButtonIsActive] = useState(false);

  const flalistRef: React.RefObject<FlatList> = useRef(null);

  const heroesQuery = useHeroesQuery(name, orderBy, offSet);

  const renderHeroCard: ListRenderItem<HeroTypes> = ({ item }) => {
    return <HeroCard item={item} />;
  };
  function orderByFunction() {
    if (orderBy.length === 4) {
      setOrderBy("-name");
      setOrderByButtonIsActive(true);
    } else {
      setOrderBy("name");
      setOrderByButtonIsActive(false);
    }
  }

  function changePage(isIncrease: boolean) {
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
          <Header hasButton={true} />
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
          <Header hasButton={true} />
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
              onPress={() => orderByFunction()}
              isActive={orderByButtonIsActive}
            >
              A-Z
            </OrderByButton>
          </ButtonContainer>

          {heroesQuery.data?.data.results !== undefined &&
            (heroesQuery.data?.data.results?.length === 0 ? (
              <Loading title={"Nothing found ):"} />
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
                    <TouchableOpacity onPress={() => changePage(false)}>
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
                    <TouchableOpacity onPress={() => changePage(true)}>
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
