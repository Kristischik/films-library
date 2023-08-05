import {ReactElement} from "react";


export type Episode = {
  name: string,
  description: string,
  poster: string,
  release_date: string,
  season_number: number,
  episode_number: number,
  year: number,
  popularity: number,
  rating: number,
  vote_count: number,
  genres: [],
  credits: [],
}

export type EpisodeList = Episode[];

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