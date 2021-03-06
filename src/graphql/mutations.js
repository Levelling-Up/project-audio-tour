/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrack = /* GraphQL */ `
  mutation CreateTrack(
    $input: CreateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    createTrack(input: $input, condition: $condition) {
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
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack(
    $input: UpdateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    updateTrack(input: $input, condition: $condition) {
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
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack(
    $input: DeleteTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    deleteTrack(input: $input, condition: $condition) {
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
export const createPointOfInterest = /* GraphQL */ `
  mutation CreatePointOfInterest(
    $input: CreatePointOfInterestInput!
    $condition: ModelPointOfInterestConditionInput
  ) {
    createPointOfInterest(input: $input, condition: $condition) {
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
export const updatePointOfInterest = /* GraphQL */ `
  mutation UpdatePointOfInterest(
    $input: UpdatePointOfInterestInput!
    $condition: ModelPointOfInterestConditionInput
  ) {
    updatePointOfInterest(input: $input, condition: $condition) {
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
export const deletePointOfInterest = /* GraphQL */ `
  mutation DeletePointOfInterest(
    $input: DeletePointOfInterestInput!
    $condition: ModelPointOfInterestConditionInput
  ) {
    deletePointOfInterest(input: $input, condition: $condition) {
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
export const createTour = /* GraphQL */ `
  mutation CreateTour(
    $input: CreateTourInput!
    $condition: ModelTourConditionInput
  ) {
    createTour(input: $input, condition: $condition) {
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
export const updateTour = /* GraphQL */ `
  mutation UpdateTour(
    $input: UpdateTourInput!
    $condition: ModelTourConditionInput
  ) {
    updateTour(input: $input, condition: $condition) {
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
export const deleteTour = /* GraphQL */ `
  mutation DeleteTour(
    $input: DeleteTourInput!
    $condition: ModelTourConditionInput
  ) {
    deleteTour(input: $input, condition: $condition) {
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
export const createCode = /* GraphQL */ `
  mutation CreateCode(
    $input: CreateCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    createCode(input: $input, condition: $condition) {
      id
      code
      claimed
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateCode = /* GraphQL */ `
  mutation UpdateCode(
    $input: UpdateCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    updateCode(input: $input, condition: $condition) {
      id
      code
      claimed
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteCode = /* GraphQL */ `
  mutation DeleteCode(
    $input: DeleteCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    deleteCode(input: $input, condition: $condition) {
      id
      code
      claimed
      email
      createdAt
      updatedAt
    }
  }
`;
