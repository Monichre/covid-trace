// @ts-nocheck

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
import { createVenue, createVenueAdmin } from '../graphql/mutations'
import { API } from 'aws-amplify'
import { QrCodeModal } from './QrCode/QrCodeModal'

export interface CreateVenueFormProps {
  visible: boolean
  onClose: any
}

export const CreateVenue: React.SFC<CreateVenueFormProps> = ({
  visible,
  onClose,
}) => {
  const { register, handleSubmit, errors, setValue } = useForm<FormData>()
  const [venue, setVenue] = useState(null)
  const [venueOwner, setVenueOwner] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleVenueType = (type) => {
    setValue('venueType', type)
  }
  const onSubmit = async (values) => {
    const {
      address,
      email,
      name: firstName,
      lastName,
      venueType,
      venue,
      website,
    } = values
    const name = `${firstName} ${lastName}`
    // @ts-ignore
    const {
      // @ts-ignore
      data: { createVenueAdmin: owner },
    } = await API.graphql({
      query: createVenueAdmin,
      variables: { input: { email, name } },
    })

    if (owner) {
      setVenueOwner(owner)
      const { id } = owner
      // @ts-ignore
      const { data } = await API.graphql({
        query: createVenue,
        variables: {
          input: {
            name: venue,
            address,
            venueOwnerId: id,
            website,
            type: venueType,
          },
        },
      })
      if (data && data.createVenue) {
        setVenue(data.createVenue)
        setSubmitted(true)
      }
    }
  }

  useEffect(() => {
    register('venueType') // custom register Antd input
  }, [register])

  const [qrOpen, setQrOpen] = useState(false)
  const handler = () => setQrOpen(true)

  const closeHandler = () => {
    setQrOpen(false)
  }

  return (
    <Modal open={visible} onClose={onClose} width='100vw'>
      <QrCodeModal closeHandler={closeHandler} open={qrOpen} />
      <Page size='medium'>
        <Page.Header>
          <h2>Header</h2>
        </Page.Header>
        <Page.Content>
          {submitted && (
            <Card shadow>
              <User
                src='https://unix.bio/assets/avatar.png'
                name={venueOwner.name}
              >
                {venueOwner.email}
              </User>
              <Description
                title={venue.name}
                content={() => (
                  <div>
                    <Text>{venue.address}</Text>
                    <Text>{venue.website}</Text>
                  </div>
                )}
              />
            </Card>
          )}
          {!submitted && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fieldset>
                <Fieldset.Title>Create A New Venue</Fieldset.Title>
                <Fieldset.Subtitle>
                  Enter the following information
                </Fieldset.Subtitle>
                <Row>
                  <Col>
                    <Input ref={register({ required: true })} name='venue'>
                      Name
                    </Input>
                  </Col>
                  <Col>
                    <Input ref={register({ required: true })} name='address'>
                      Address
                    </Input>
                  </Col>
                  <Col>
                    <Input ref={register({ required: true })} name='website'>
                      Website
                    </Input>
                  </Col>
                  <Col>
                    <Dot type='warning'>
                      <Text small>Venue: Type</Text>
                    </Dot>
                    <br />

                    <Select
                      placeholder='Choose one'
                      name='venueType'
                      onChange={handleVenueType}
                    >
                      <Select.Option value='Restaurant'>
                        Restaurant
                      </Select.Option>
                      <Select.Option value='Construction Site'>
                        Construction Site
                      </Select.Option>
                      <Select.Option value='Office'>Office</Select.Option>
                      <Select.Option value='Gallery'>Gallery</Select.Option>
                    </Select>
                  </Col>
                </Row>

                <Divider />
                <Fieldset.Title>Owner</Fieldset.Title>
                <Row>
                  <Col>
                    <Input ref={register({ required: true })} name='name'>
                      First Name
                    </Input>
                  </Col>
                  <Col>
                    <Input ref={register({ required: true })} name='lastName'>
                      Last Name
                    </Input>
                  </Col>
                  <Col>
                    <Input ref={register({ required: true })} name='email'>
                      Email
                    </Input>
                  </Col>
                </Row>

                <Fieldset.Footer>
                  <Fieldset.Footer.Status>
                    {errors
                      ? `${Object.keys(errors)
                          .map((key) => `${key} ${errors[key].type}`)
                          .join(', ')}`
                      : 'Waiting'}
                  </Fieldset.Footer.Status>
                  <Fieldset.Footer.Actions>
                    <Button auto onClick={handler}>
                      Create QR Code
                    </Button>
                  </Fieldset.Footer.Actions>

                  <Fieldset.Footer.Actions>
                    <button type='submit'>Save</button>
                  </Fieldset.Footer.Actions>
                </Fieldset.Footer>
              </Fieldset>
            </form>
          )}
        </Page.Content>
        <Page.Footer>
          <h2>Footer</h2>
        </Page.Footer>
      </Page>
    </Modal>
  )
}
