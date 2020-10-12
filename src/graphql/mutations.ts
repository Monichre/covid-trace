// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSuperAdmin = /* GraphQL */ `
  mutation CreateSuperAdmin(
    $input: CreateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    createSuperAdmin(input: $input, condition: $condition) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const updateSuperAdmin = /* GraphQL */ `
  mutation UpdateSuperAdmin(
    $input: UpdateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    updateSuperAdmin(input: $input, condition: $condition) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const deleteSuperAdmin = /* GraphQL */ `
  mutation DeleteSuperAdmin(
    $input: DeleteSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    deleteSuperAdmin(input: $input, condition: $condition) {
      id
      name
      username
      email
      owner
    }
  }
`;
export const createVenueAdmin = /* GraphQL */ `
  mutation CreateVenueAdmin(
    $input: CreateVenueAdminInput!
    $condition: ModelVenueAdminConditionInput
  ) {
    createVenueAdmin(input: $input, condition: $condition) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const updateVenueAdmin = /* GraphQL */ `
  mutation UpdateVenueAdmin(
    $input: UpdateVenueAdminInput!
    $condition: ModelVenueAdminConditionInput
  ) {
    updateVenueAdmin(input: $input, condition: $condition) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const deleteVenueAdmin = /* GraphQL */ `
  mutation DeleteVenueAdmin(
    $input: DeleteVenueAdminInput!
    $condition: ModelVenueAdminConditionInput
  ) {
    deleteVenueAdmin(input: $input, condition: $condition) {
      id
      name
      username
      phone_number
      email
      owner
    }
  }
`;
export const createVenue = /* GraphQL */ `
  mutation CreateVenue(
    $input: CreateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    createVenue(input: $input, condition: $condition) {
      id
      name
      address
      website
      type
      qrCode
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
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue(
    $input: UpdateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    updateVenue(input: $input, condition: $condition) {
      id
      name
      address
      website
      type
      qrCode
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
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue(
    $input: DeleteVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    deleteVenue(input: $input, condition: $condition) {
      id
      name
      address
      website
      type
      qrCode
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
export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $input: CreateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    createGuest(input: $input, condition: $condition) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest(
    $input: UpdateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    updateGuest(input: $input, condition: $condition) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest(
    $input: DeleteGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    deleteGuest(input: $input, condition: $condition) {
      id
      name
      phone
      email
      owner
    }
  }
`;
export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $input: CreateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    createRegistration(input: $input, condition: $condition) {
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
        qrCode
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
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $input: UpdateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    updateRegistration(input: $input, condition: $condition) {
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
        qrCode
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
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $input: DeleteRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    deleteRegistration(input: $input, condition: $condition) {
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
        qrCode
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
