// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SuperAdmin, VenueAdmin, Venue, Guest, Registration } = initSchema(schema);

export {
  SuperAdmin,
  VenueAdmin,
  Venue,
  Guest,
  Registration
};