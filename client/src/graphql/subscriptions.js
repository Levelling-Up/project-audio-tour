/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack {
    onUpdateTrack {
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack {
    onDeleteTrack {
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
export const onCreatePointOfInterest = /* GraphQL */ `
  subscription OnCreatePointOfInterest {
    onCreatePointOfInterest {
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
export const onUpdatePointOfInterest = /* GraphQL */ `
  subscription OnUpdatePointOfInterest {
    onUpdatePointOfInterest {
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
export const onDeletePointOfInterest = /* GraphQL */ `
  subscription OnDeletePointOfInterest {
    onDeletePointOfInterest {
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
export const onCreateTour = /* GraphQL */ `
  subscription OnCreateTour {
    onCreateTour {
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
export const onUpdateTour = /* GraphQL */ `
  subscription OnUpdateTour {
    onUpdateTour {
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
export const onDeleteTour = /* GraphQL */ `
  subscription OnDeleteTour {
    onDeleteTour {
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
