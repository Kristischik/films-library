

export interface Episode {
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

export enum TabsTypes {
  Text1 = "text1",
  Text2 = "text2",
}

export type Tab = {
  key: TabsTypes;
  title: string;
};

export type TabsListType = Tab[];