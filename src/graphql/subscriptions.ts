// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSuperAdmin = /* GraphQL */ `
  subscription OnCreateSuperAdmin($owner: String!) {
    onCreateSuperAdmin(owner: $owner) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const onUpdateSuperAdmin = /* GraphQL */ `
  subscription OnUpdateSuperAdmin($owner: String!) {
    onUpdateSuperAdmin(owner: $owner) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const onDeleteSuperAdmin = /* GraphQL */ `
  subscription OnDeleteSuperAdmin($owner: String!) {
    onDeleteSuperAdmin(owner: $owner) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const onCreateVenueAdmin = /* GraphQL */ `
  subscription OnCreateVenueAdmin($owner: String) {
    onCreateVenueAdmin(owner: $owner) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const onUpdateVenueAdmin = /* GraphQL */ `
  subscription OnUpdateVenueAdmin($owner: String) {
    onUpdateVenueAdmin(owner: $owner) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const onDeleteVenueAdmin = /* GraphQL */ `
  subscription OnDeleteVenueAdmin($owner: String) {
    onDeleteVenueAdmin(owner: $owner) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue($owner: String) {
    onCreateVenue(owner: $owner) {
      id
      name
      address
      website
      type
      owner {
        id
        name
        username
        phone_number
        email
        owner
      }
      guests {
        nextToken
      }
      visits {
        nextToken
      }
    }
  }
`;
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue($owner: String) {
    onUpdateVenue(owner: $owner) {
      id
      name
      address
      website
      type
      owner {
        id
        name
        username
        phone_number
        email
        owner
      }
      guests {
        nextToken
      }
      visits {
        nextToken
      }
    }
  }
`;
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue($owner: String) {
    onDeleteVenue(owner: $owner) {
      id
      name
      address
      website
      type
      owner {
        id
        name
        username
        phone_number
        email
        owner
      }
      guests {
        nextToken
      }
      visits {
        nextToken
      }
    }
  }
`;
export const onCreateGuest = /* GraphQL */ `
  subscription OnCreateGuest($owner: String) {
    onCreateGuest(owner: $owner) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const onUpdateGuest = /* GraphQL */ `
  subscription OnUpdateGuest($owner: String) {
    onUpdateGuest(owner: $owner) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const onDeleteGuest = /* GraphQL */ `
  subscription OnDeleteGuest($owner: String) {
    onDeleteGuest(owner: $owner) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration($owner: String) {
    onCreateRegistration(owner: $owner) {
      id
      time
      date
      partySize
      venue {
        id
        name
        address
        website
        type
      }
      guest {
        id
        name
        phone
        email
        owner
      }
      owner
    }
  }
`;
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration($owner: String) {
    onUpdateRegistration(owner: $owner) {
      id
      time
      date
      partySize
      venue {
        id
        name
        address
        website
        type
      }
      guest {
        id
        name
        phone
        email
        owner
      }
      owner
    }
  }
`;
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration($owner: String) {
    onDeleteRegistration(owner: $owner) {
      id
      time
      date
      partySize
      venue {
        id
        name
        address
        website
        type
      }
      guest {
        id
        name
        phone
        email
        owner
      }
      owner
    }
  }
`;
