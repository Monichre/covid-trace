import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Divider,
  Input,
  Fieldset,
  Button,
  Select,
  Row,
  User,
  Dot,
  Text,
  Description,
  Card,
  Col,
  Page,
  Modal,
} from '@geist-ui/react'
import { useEffect, useState } from 'react'
import { createGuest, createRegistration } from '../graphql/mutations'
import { API } from 'aws-amplify'
import { listGuests, listRegistrations } from '../graphql/queries'
import { useHistory, useLocation, useParams } from 'react-router-dom'

export interface GuestRegistrationProps {}

export interface GuestRegistrationProps {}

export const GuestRegistration: React.SFC<GuestRegistrationProps> = (props) => {
  const location = useLocation()
  const history = useHistory()
  const { id: registrationVenueId }: any = useParams()
  console.log('registrationVenueId: ', registrationVenueId)

  const { register, handleSubmit, errors, setValue } = useForm<FormData>()
  const [guests, setGuests] = useState(null)
  const [registrations, setRegistrations] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const today = new Date()
  const time = `${today.getTime()}`

  const onSubmit = async (values) => {
    const { partySize, email, name, phone } = values

    const {
      data: { createGuest: guest },
    }: any = await API.graphql({
      query: createGuest,
      variables: { input: { email, name, phone } },
    })

    if (guest) {
      const { id } = guest
      const {
        data: { createRegistration: registration },
      }: any = await API.graphql({
        query: createRegistration,
        variables: {
          input: {
            time,
            date: today,
            partySize: parseInt(partySize),
            registrationGuestId: id,
            registrationVenueId,
          },
        },
      })
      console.log('registration: ', registration)
      console.log('guest: ', guest)
      // getRegistrations()
      // getGuests()
      setSubmitted(true)
    }

    // ;("The variables input contains a field name 'time' that is not defined for input object type 'CreateGuestInput' ")
    // if (owner) {"Variable 'input' has coerced Null value for NonNull type 'String!'"
    //   setVenueOwner(owner)
    //   const { id } = owner
    //   // @ts-ignore
    //   const { data } = await API.graphql({
    //     query: createVenue,
    //     variables: {
    //       input: {
    //         name: venue,
    //         address,
    //         venueOwnerId: id,
    //         website,
    //         type: venueType,
    //       },
    //     },
    //   })
    //   if (data && data.createVenue) {
    //     setVenue(data.createVenue)
    //     setSubmitted(true)
    //   }
    // }
  }

  // const getRegistrations = async () => {
  //   const {
  //     data: {
  //       listRegistrations: { items: registrations },
  //     },
  //   }: any = await API.graphql({
  //     query: listRegistrations,
  //   })
  //   console.log('registrations: ', registrations)

  //   setRegistrations(registrations)
  // }

  // const getGuests = async () => {
  //   const {
  //     data: {
  //       listGuests: { items: guests },
  //     },
  //   }: any = await API.graphql({
  //     query: listGuests,
  //   })
  //   console.log('guests: ', guests)

  //   setGuests(guests)
  // }

  // React.useEffect(() => {
  //   getRegistrations()
  //   getGuests()
  // }, [])
  return (
    <Page size='medium'>
      <Page.Content>
        {submitted && <div>Thank you</div>}
        {!submitted && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
              <Fieldset.Title>Register</Fieldset.Title>
              <Fieldset.Subtitle>
                Enter the following information
              </Fieldset.Subtitle>
              <Row>
                <Col>
                  <Input ref={register({ required: true })} name='name'>
                    Name
                  </Input>
                </Col>
                <Col>
                  <Input ref={register({ required: true })} name='phone'>
                    Phone
                  </Input>
                </Col>
                <Col>
                  <Input ref={register({ required: true })} name='email'>
                    Email
                  </Input>
                </Col>
                <Input ref={register({ required: true })} name='partySize'>
                  Party Size
                </Input>
              </Row>
              <Divider />

              <Fieldset.Footer>
                <Fieldset.Footer.Actions>
                  <button type='submit'>Save</button>
                </Fieldset.Footer.Actions>
              </Fieldset.Footer>
            </Fieldset>
          </form>
        )}
        {/* {guests &&
          guests.length &&
          guests.map((guest) => {
            return (
              <Card shadow>
                <User
                  src='https://unix.bio/assets/avatar.png'
                  name={guest.name}
                >
                  {guest.email}
                </User>
              </Card>
            )
          })}

        {registrations &&
          registrations.length &&
          registrations.map((registration) => {
            return (
              <Card shadow>
                <Description
                  title={registration.date}
                  content={() => (
                    <div>
                      <Text>{registration.partySize}</Text>
                    </div>
                  )}
                />
              </Card>
            )
          })} */}
      </Page.Content>
    </Page>
  )
}
