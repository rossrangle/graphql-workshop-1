export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum ShowType {
  Movie = 'MOVIE',
  Tv = 'TV'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  shows: Array<Maybe<Show>>;
};

/** A show represents either a movie or TV show */
export type Show = {
  __typename?: 'Show';
  id: Scalars['String'];
  type: ShowType;
  title: Scalars['String'];
  /** User switches this flag when they watch the show */
  watched: Scalars['Boolean'];
  /** This is fetched from the OMDB API */
  rating?: Maybe<Scalars['String']>;
};

export type Id = {
  __typename?: 'Id';
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMyShow?: Maybe<Show>;
  updateMyShow?: Maybe<Show>;
  deleteMyShow?: Maybe<Id>;
};


export type MutationAddMyShowArgs = {
  title: Scalars['String'];
  watched?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};


export type MutationUpdateMyShowArgs = {
  id: Scalars['String'];
  title: Scalars['String'];
  watched?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};


export type MutationDeleteMyShowArgs = {
  id: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

