import {ReactElement} from "react";


export type Post = {
  id: number,
  primaryImage:{url: string} ,
  titleText: {text: string},
  releaseYear: {year: number},
}

export type PostsList = Post[];

export enum MenuButtonTypes {
  Home = "home",
  Trends = "trends",
  Favourites = "favourites",
  Settings = "settings",
}

export type MenuButton = {
  key: MenuButtonTypes;
  title: string;
  icon: ReactElement;
};

export type MenuButtonListType = MenuButton[];

export enum TabsTypes {
  Rating = "Rating",
  Year = "Year",
}

export type Tab = {
  key: TabsTypes;
  title: string;
};

export type TabsListType = Tab[];

export type Children = ReactElement | ReactElement[];
export enum Theme {
  Light = "light",
  Dark = "dark",
}
