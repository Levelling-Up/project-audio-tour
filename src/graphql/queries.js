/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
      id
      name
      language
      audioUrl
      pointOfInterestId
      createdAt
      updatedAt
    }
  }
`;
export const listTracks = /* GraphQL */ `
  query ListTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        language
        audioUrl
        pointOfInterestId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPointOfInterest = /* GraphQL */ `
  query GetPointOfInterest($id: ID!) {
    getPointOfInterest(id: $id) {
      id
      name
      imageUrl
      lat
      lon
      tourId
      tracks {
        items {
          id
          name
          language
          audioUrl
          pointOfInterestId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPointOfInterests = /* GraphQL */ `
  query ListPointOfInterests(
    $filter: ModelPointOfInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPointOfInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imageUrl
        lat
        lon
        tourId
        tracks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTour = /* GraphQL */ `
  query GetTour($id: ID!) {
    getTour(id: $id) {
      id
      name
      imageUrl
      author
      pointsOfInterests {
        items {
          id
          name
          imageUrl
          lat
          lon
          tourId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTours = /* GraphQL */ `
  query ListTours(
    $filter: ModelTourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUrl
        author
        pointsOfInterests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCode = /* GraphQL */ `
  query GetCode($id: ID!) {
    getCode(id: $id) {
      id
      code
      claimed
      email
      createdAt
      updatedAt
    }
  }
`;
export const listCodes = /* GraphQL */ `
  query ListCodes(
    $filter: ModelCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        claimed
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const byTour = 
`query MyQuery {
  listPointOfInterests(filter: {tourId: {eq: "03ac3526-e26d-4cbb-90b2-b5a498cfd4b5"}}) {
    items {
      tourId
      imageUrl
      id
      name
    }
  }
}`;

export const byLangByPoi = 
`query MyQuery2 {
  listTracks(filter: {language: {eq: "english"}, and: {pointOfInterestId: {eq: "efe46e1c-4ed6-4b70-befa-4f395ee75da5"}}}) {
    items {
      audioUrl
      id
      language
      name
      pointOfInterestId
    }
  }
}`;