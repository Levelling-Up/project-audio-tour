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
      pointsOfInterest {
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
        pointsOfInterest {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
