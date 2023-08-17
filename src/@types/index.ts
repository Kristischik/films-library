import {ReactElement} from "react";


export type Post = {
  _id: string,
  id: string,
  primaryImage: {
    id: string,
    width: number,
    height: number,
    url: string,
    caption: {
      plainText: string,
      __typename: string,
    },
    __typename: string,
  },
  titleType: {
    text: string,
    id: string,
    isSeries: boolean,
    isEpisode: boolean,
    __typename: string,
  },
  titleText: {
    text: string,
    __typename: string,
  },

  originalTitleText: {
    text: string,
    __typename: string,
  },
  releaseYear: {
    year: number,
    endYear: number,
    __typename: string,
  },
  releaseDate: {
    day: number,
    month:number,
    year:number,
    __typename: string,
  }

  ratingsSummary: {
    aggregateRating: number,
    voteCount: number,
    __typename: string,
  }
  episodes: number,
  genres: {
    genres:  [
      text: string,
    id: string,
    __typename: string,
    ]
    __typename: string,
  }

  plot: {
    plotText: {
      plainText: string,
      __typename: string,
  }
      language: {
        id: string,
        __typename: string,
      }
    __typename: string,
  }

  onSaveClick?: () => void;
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
