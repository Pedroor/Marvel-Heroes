import react from "react";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { showMessage } from "react-native-flash-message";
import { HeroTypes } from "../common/types/Heroes";
import { Alert } from "react-native";

interface FavoriteHeroesProviderProps {
  children: ReactNode;
}

interface FavoriteHeroesContextData {
  favoriteHeroes: HeroTypes[];
  handleAddHeroToFavoriteList: (hero: HeroTypes) => void;
}

export const FavoriteHeroesContext = createContext<FavoriteHeroesContextData>(
  {} as FavoriteHeroesContextData
);

export function FavoriteHeroesProvider({
  children,
}: FavoriteHeroesProviderProps) {
  const [favoriteHeroes, setFavoriteHeroes] = useState<HeroTypes[]>([]);

  function handleAddHeroToFavoriteList(hero: HeroTypes) {
    let existingProduct = favoriteHeroes.find(
      heroList => heroList.id === hero.id
    );

    if (!existingProduct) {
      Alert.alert(
        `Do you want to add ${hero.name} on your hero favorites?`,
        "",

        [
          {
            text: "No",
          },
          {
            text: "Yes",
            onPress: () => {
              showMessage({
                message: "Hero successfully added!",
                description: "See your list of favorites on the home screen.",
                type: "success",
                icon: "auto",
                floating: true,
                duration: 2000,
                position: "top",
              }),
                setFavoriteHeroes([...favoriteHeroes, hero]);
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      let newHeroesFavoriteList = favoriteHeroes.filter(
        heroList => heroList.id !== hero.id
      );

      Alert.alert(
        `${hero.name} it is already on your favorites list.`,
        "You want to remove it?",

        [
          {
            text: "No",
          },
          {
            text: "Yes",
            onPress: () => {
              setFavoriteHeroes(newHeroesFavoriteList),
                showMessage({
                  message: "Hero successfully deleted!",
                  description: "See your list of favorites on the home screen.",
                  type: "danger",
                  icon: "auto",
                  floating: true,
                  duration: 2000,
                  position: "top",
                });
            },
          },
        ],
        { cancelable: true }
      );
    }
  }

  return (
    <FavoriteHeroesContext.Provider
      value={{ favoriteHeroes, handleAddHeroToFavoriteList }}
    >
      {children}
    </FavoriteHeroesContext.Provider>
  );
}

export function useFavoriteHeroes() {
  const context = useContext(FavoriteHeroesContext);

  return context;
}
