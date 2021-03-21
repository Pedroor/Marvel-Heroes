import react from "react";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-community/async-storage";
import { HeroTypes } from "../common/types/Heroes";
import { Alert } from "react-native";
import * as Sharing from "expo-sharing";
import * as Print from "expo-print";

interface FavoriteHeroesProviderProps {
  children: ReactNode;
}

interface FavoriteHeroesContextData {
  favoriteHeroes: HeroTypes[];
  handleAddHeroToFavoriteList: (hero: HeroTypes) => void;
  createPDF: () => Promise<void>;
  generateHtml: () => Promise<void>;
}

export const FavoriteHeroesContext = createContext<FavoriteHeroesContextData>(
  {} as FavoriteHeroesContextData
);

export function FavoriteHeroesProvider({
  children,
}: FavoriteHeroesProviderProps) {
  const [favoriteHeroes, setFavoriteHeroes] = useState<HeroTypes[]>([]);
  const [html, setHtml] = useState("");

  useEffect(() => {
    getStore();
  }, []);

  async function setStore(favoriteHeroes: HeroTypes[]) {
    await AsyncStorage.setItem("@FavoriteList", JSON.stringify(favoriteHeroes));
  }
  async function getStore() {
    let teste = await AsyncStorage.getItem("@FavoriteList");
    if (teste) {
      setFavoriteHeroes(JSON.parse(teste));
    } else {
      return;
    }
    generateHtml();
  }

  async function createPDF() {
    await generateHtml();

    const { uri } = await Print.printToFileAsync({ html });
    sharePDF(uri);
  }

  function sharePDF(uri: string) {
    const options = {
      mimeType: "application/pdf",
      dialogTitle: "Compartilhar Documento",
      UTI: "application/pdf",
    };
    Sharing.shareAsync(uri, options);
  }

  async function generateHtml() {
    let htmlString: string = "";
    htmlString = "<h1>Lista de personagens</h1>";
    await favoriteHeroes.map(hero => {
      htmlString += `<div> <h1>${hero.name}</h1> <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}"  /></div>\n`;
    });

    setHtml(htmlString);
  }

  function handleAddHeroToFavoriteList(hero: HeroTypes) {
    let existingHero = favoriteHeroes.find(heroList => heroList.id === hero.id);

    if (!existingHero) {
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
              setFavoriteHeroes([...favoriteHeroes, hero]),
                showMessage({
                  message: "Hero successfully added!",
                  description: "See your list of favorites on the home screen.",
                  type: "success",
                  icon: "auto",
                  floating: true,
                  duration: 2000,
                  position: "top",
                }),
                setStore(favoriteHeroes);
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
              setStore(favoriteHeroes);
            },
          },
        ],
        { cancelable: true }
      );
    }
  }

  return (
    <FavoriteHeroesContext.Provider
      value={{
        favoriteHeroes,
        handleAddHeroToFavoriteList,
        createPDF,
        generateHtml,
      }}
    >
      {children}
    </FavoriteHeroesContext.Provider>
  );
}

export function useFavoriteHeroes() {
  const context = useContext(FavoriteHeroesContext);

  return context;
}
