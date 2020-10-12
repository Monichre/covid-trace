/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSuperAdminInput = {
  id?: string | null,
  name?: string | null,
  username?: string | null,
  email: string,
};

export type ModelSuperAdminConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelSuperAdminConditionInput | null > | null,
  or?: Array< ModelSuperAdminConditionInput | null > | null,
  not?: ModelSuperAdminConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateSuperAdminInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  email?: string | null,
};

export type DeleteSuperAdminInput = {
  id?: string | null,
};

export type CreateVenueAdminInput = {
  id?: string | null,
  name?: string | null,
  username?: string | null,
  phone_number?: string | null,
  email: string,
};

export type ModelVenueAdminConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelVenueAdminConditionInput | null > | null,
  or?: Array< ModelVenueAdminConditionInput | null > | null,
  not?: ModelVenueAdminConditionInput | null,
};

export type UpdateVenueAdminInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  phone_number?: string | null,
  email?: string | null,
};

export type DeleteVenueAdminInput = {
  id?: string | null,
};

export type CreateVenueInput = {
  id?: string | null,
  name: string,
  address: string,
  website?: string | null,
  type: string,
  qrCode?: string | null,
  venueOwnerId?: string | null,
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  website?: ModelStringInput | null,
  type?: ModelStringInput | null,
  qrCode?: ModelStringInput | null,
  and?: Array< ModelVenueConditionInput | null > | null,
  or?: Array< ModelVenueConditionInput | null > | null,
  not?: ModelVenueConditionInput | null,
};

export type UpdateVenueInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  website?: string | null,
  type?: string | null,
  qrCode?: string | null,
  venueOwnerId?: string | null,
};

export type DeleteVenueInput = {
  id?: string | null,
};

export type CreateGuestInput = {
  id?: string | null,
  name: string,
  phone: string,
  email: string,
  venueGuestsId?: string | null,
};

export type ModelGuestConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGuestConditionInput | null > | null,
  or?: Array< ModelGuestConditionInput | null > | null,
  not?: ModelGuestConditionInput | null,
};

export type UpdateGuestInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  venueGuestsId?: string | null,
};

export type DeleteGuestInput = {
  id?: string | null,
};

export type CreateRegistrationInput = {
  id?: string | null,
  time: string,
  date: string,
  partySize: number,
  venueVisitsId?: string | null,
  registrationVenueId?: string | null,
  registrationGuestId?: string | null,
};

export type ModelRegistrationConditionInput = {
  time?: ModelStringInput | null,
  date?: ModelStringInput | null,
  partySize?: ModelIntInput | null,
  and?: Array< ModelRegistrationConditionInput | null > | null,
  or?: Array< ModelRegistrationConditionInput | null > | null,
  not?: ModelRegistrationConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRegistrationInput = {
  id: string,
  time?: string | null,
  date?: string | null,
  partySize?: number | null,
  venueVisitsId?: string | null,
  registrationVenueId?: string | null,
  registrationGuestId?: string | null,
};

export type DeleteRegistrationInput = {
  id?: string | null,
};

export type ModelSuperAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelSuperAdminFilterInput | null > | null,
  or?: Array< ModelSuperAdminFilterInput | null > | null,
  not?: ModelSuperAdminFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVenueAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelVenueAdminFilterInput | null > | null,
  or?: Array< ModelVenueAdminFilterInput | null > | null,
  not?: ModelVenueAdminFilterInput | null,
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  website?: ModelStringInput | null,
  type?: ModelStringInput | null,
  qrCode?: ModelStringInput | null,
  and?: Array< ModelVenueFilterInput | null > | null,
  or?: Array< ModelVenueFilterInput | null > | null,
  not?: ModelVenueFilterInput | null,
};

export type ModelGuestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGuestFilterInput | null > | null,
  or?: Array< ModelGuestFilterInput | null > | null,
  not?: ModelGuestFilterInput | null,
};

export type ModelRegistrationFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  date?: ModelStringInput | null,
  partySize?: ModelIntInput | null,
  and?: Array< ModelRegistrationFilterInput | null > | null,
  or?: Array< ModelRegistrationFilterInput | null > | null,
  not?: ModelRegistrationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateSuperAdminMutationVariables = {
  input: CreateSuperAdminInput,
  condition?: ModelSuperAdminConditionInput | null,
};

export type CreateSuperAdminMutation = {
  createSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type UpdateSuperAdminMutationVariables = {
  input: UpdateSuperAdminInput,
  condition?: ModelSuperAdminConditionInput | null,
};

export type UpdateSuperAdminMutation = {
  updateSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type DeleteSuperAdminMutationVariables = {
  input: DeleteSuperAdminInput,
  condition?: ModelSuperAdminConditionInput | null,
};

export type DeleteSuperAdminMutation = {
  deleteSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type CreateVenueAdminMutationVariables = {
  input: CreateVenueAdminInput,
  condition?: ModelVenueAdminConditionInput | null,
};

export type CreateVenueAdminMutation = {
  createVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type UpdateVenueAdminMutationVariables = {
  input: UpdateVenueAdminInput,
  condition?: ModelVenueAdminConditionInput | null,
};

export type UpdateVenueAdminMutation = {
  updateVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type DeleteVenueAdminMutationVariables = {
  input: DeleteVenueAdminInput,
  condition?: ModelVenueAdminConditionInput | null,
};

export type DeleteVenueAdminMutation = {
  deleteVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type CreateVenueMutationVariables = {
  input: CreateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type CreateVenueMutation = {
  createVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateVenueMutationVariables = {
  input: UpdateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type UpdateVenueMutation = {
  updateVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteVenueMutationVariables = {
  input: DeleteVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type DeleteVenueMutation = {
  deleteVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateGuestMutationVariables = {
  input: CreateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type CreateGuestMutation = {
  createGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type UpdateGuestMutationVariables = {
  input: UpdateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type UpdateGuestMutation = {
  updateGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type DeleteGuestMutationVariables = {
  input: DeleteGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type DeleteGuestMutation = {
  deleteGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type CreateRegistrationMutationVariables = {
  input: CreateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type CreateRegistrationMutation = {
  createRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateRegistrationMutationVariables = {
  input: UpdateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type UpdateRegistrationMutation = {
  updateRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteRegistrationMutationVariables = {
  input: DeleteRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type DeleteRegistrationMutation = {
  deleteRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetSuperAdminQueryVariables = {
  id: string,
};

export type GetSuperAdminQuery = {
  getSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type ListSuperAdminsQueryVariables = {
  filter?: ModelSuperAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuperAdminsQuery = {
  listSuperAdmins:  {
    __typename: "ModelSuperAdminConnection",
    items:  Array< {
      __typename: "SuperAdmin",
      id: string,
      name: string | null,
      username: string | null,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVenueAdminQueryVariables = {
  id: string,
};

export type GetVenueAdminQuery = {
  getVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type ListVenueAdminsQueryVariables = {
  filter?: ModelVenueAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenueAdminsQuery = {
  listVenueAdmins:  {
    __typename: "ModelVenueAdminConnection",
    items:  Array< {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVenueQueryVariables = {
  id: string,
};

export type GetVenueQuery = {
  getVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListVenuesQueryVariables = {
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenuesQuery = {
  listVenues:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGuestQueryVariables = {
  id: string,
};

export type GetGuestQuery = {
  getGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type ListGuestsQueryVariables = {
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuestsQuery = {
  listGuests:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRegistrationQueryVariables = {
  id: string,
};

export type GetRegistrationQuery = {
  getRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListRegistrationsQueryVariables = {
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegistrationsQuery = {
  listRegistrations:  {
    __typename: "ModelRegistrationConnection",
    items:  Array< {
      __typename: "Registration",
      id: string,
      time: string,
      date: string,
      partySize: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SuperAdminByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSuperAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SuperAdminByEmailQuery = {
  superAdminByEmail:  {
    __typename: "ModelSuperAdminConnection",
    items:  Array< {
      __typename: "SuperAdmin",
      id: string,
      name: string | null,
      username: string | null,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type VenueAdminByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVenueAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VenueAdminByEmailQuery = {
  venueAdminByEmail:  {
    __typename: "ModelVenueAdminConnection",
    items:  Array< {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type VenueByTypeQueryVariables = {
  type?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VenueByTypeQuery = {
  venueByType:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GuestByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GuestByEmailQuery = {
  guestByEmail:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSuperAdminSubscriptionVariables = {
  owner: string,
};

export type OnCreateSuperAdminSubscription = {
  onCreateSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnUpdateSuperAdminSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSuperAdminSubscription = {
  onUpdateSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnDeleteSuperAdminSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSuperAdminSubscription = {
  onDeleteSuperAdmin:  {
    __typename: "SuperAdmin",
    id: string,
    name: string | null,
    username: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnCreateVenueAdminSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateVenueAdminSubscription = {
  onCreateVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnUpdateVenueAdminSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateVenueAdminSubscription = {
  onUpdateVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnDeleteVenueAdminSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteVenueAdminSubscription = {
  onDeleteVenueAdmin:  {
    __typename: "VenueAdmin",
    id: string,
    name: string | null,
    username: string | null,
    phone_number: string | null,
    email: string,
    owner: string | null,
  } | null,
};

export type OnCreateVenueSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateVenueSubscription = {
  onCreateVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateVenueSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateVenueSubscription = {
  onUpdateVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteVenueSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteVenueSubscription = {
  onDeleteVenue:  {
    __typename: "Venue",
    id: string,
    name: string,
    address: string,
    website: string | null,
    type: string,
    qrCode: string | null,
    owner:  {
      __typename: "VenueAdmin",
      id: string,
      name: string | null,
      username: string | null,
      phone_number: string | null,
      email: string,
      owner: string | null,
    } | null,
    guests:  {
      __typename: "ModelGuestConnection",
      nextToken: string | null,
    } | null,
    visits:  {
      __typename: "ModelRegistrationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateGuestSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGuestSubscription = {
  onCreateGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type OnUpdateGuestSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGuestSubscription = {
  onUpdateGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type OnDeleteGuestSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGuestSubscription = {
  onDeleteGuest:  {
    __typename: "Guest",
    id: string,
    name: string,
    phone: string,
    email: string,
    owner: string | null,
  } | null,
};

export type OnCreateRegistrationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRegistrationSubscription = {
  onCreateRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateRegistrationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRegistrationSubscription = {
  onUpdateRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteRegistrationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRegistrationSubscription = {
  onDeleteRegistration:  {
    __typename: "Registration",
    id: string,
    time: string,
    date: string,
    partySize: number,
    venue:  {
      __typename: "Venue",
      id: string,
      name: string,
      address: string,
      website: string | null,
      type: string,
      qrCode: string | null,
    } | null,
    guest:  {
      __typename: "Guest",
      id: string,
      name: string,
      phone: string,
      email: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};
