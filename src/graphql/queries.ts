// tslint:disable
// this is an auto generated file. This will be overwritten

export const getSuperAdmin = /* GraphQL */ `
  query GetSuperAdmin($id: ID!) {
    getSuperAdmin(id: $id) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const listSuperAdmins = /* GraphQL */ `
  query ListSuperAdmins(
    $filter: ModelSuperAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuperAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        owner
      }
      nextToken
    }
  }
`;
export const getVenueAdmin = /* GraphQL */ `
  query GetVenueAdmin($id: ID!) {
    getVenueAdmin(id: $id) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const listVenueAdmins = /* GraphQL */ `
  query ListVenueAdmins(
    $filter: ModelVenueAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenueAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        phone_number
        email
        owner
      }
      nextToken
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
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
export const listVenues = /* GraphQL */ `
  query ListVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        website
        type
      }
      nextToken
    }
  }
`;
export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        owner
      }
      nextToken
    }
  }
`;
export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
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
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        date
        partySize
        owner
      }
      nextToken
    }
  }
`;
export const superAdminByEmail = /* GraphQL */ `
  query SuperAdminByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelSuperAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    superAdminByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        username
        email
        owner
      }
      nextToken
    }
  }
`;
export const venueAdminByEmail = /* GraphQL */ `
  query VenueAdminByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelVenueAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    venueAdminByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        username
        phone_number
        email
        owner
      }
      nextToken
    }
  }
`;
export const venueByType = /* GraphQL */ `
  query VenueByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    venueByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        website
        type
      }
      nextToken
    }
  }
`;
export const guestByEmail = /* GraphQL */ `
  query GuestByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    guestByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phone
        email
        owner
      }
      nextToken
    }
  }
`;
