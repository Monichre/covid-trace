import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class SuperAdmin {
  readonly id: string;
  readonly name?: string;
  readonly username?: string;
  readonly email: string;
  constructor(init: ModelInit<SuperAdmin>);
  static copyOf(source: SuperAdmin, mutator: (draft: MutableModel<SuperAdmin>) => MutableModel<SuperAdmin> | void): SuperAdmin;
}

export declare class VenueAdmin {
  readonly id: string;
  readonly name?: string;
  readonly username?: string;
  readonly phone_number?: string;
  readonly email: string;
  constructor(init: ModelInit<VenueAdmin>);
  static copyOf(source: VenueAdmin, mutator: (draft: MutableModel<VenueAdmin>) => MutableModel<VenueAdmin> | void): VenueAdmin;
}

export declare class Venue {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly website?: string;
  readonly type: string;
  readonly qrCode?: string;
  readonly owner?: VenueAdmin;
  readonly guests?: Guest[];
  readonly visits?: Registration[];
  constructor(init: ModelInit<Venue>);
  static copyOf(source: Venue, mutator: (draft: MutableModel<Venue>) => MutableModel<Venue> | void): Venue;
}

export declare class Guest {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly venueGuestsId?: string;
  constructor(init: ModelInit<Guest>);
  static copyOf(source: Guest, mutator: (draft: MutableModel<Guest>) => MutableModel<Guest> | void): Guest;
}

export declare class Registration {
  readonly id: string;
  readonly time: string;
  readonly date: string;
  readonly partySize: number;
  readonly venue?: Venue;
  readonly guest?: Guest;
  readonly venueVisitsId?: string;
  constructor(init: ModelInit<Registration>);
  static copyOf(source: Registration, mutator: (draft: MutableModel<Registration>) => MutableModel<Registration> | void): Registration;
}