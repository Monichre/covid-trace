import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Divider,
  Input,
  Fieldset,
  Button,
  Select,
  Row,
  Spacer,
  Dot,
  Text,
  ButtonGroup,
  Col,
  Modal,
} from '@geist-ui/react'
import { useEffect, useState } from 'react'
import { createVenue, createVenueAdmin } from '../graphql/mutations'
import { API } from 'aws-amplify'
import { QrCodeModal } from './QrCode/QrCodeModal'
import { CreditCardForm } from './CreditCardForm/CreditCardForm'

export interface CreateVenueFormProps {
  visible: boolean
  onClose: any
}

export const CreateVenue: React.SFC<CreateVenueFormProps> = ({
  visible,
  onClose,
}) => {
  const { register, handleSubmit, errors, setValue, watch } = useForm<
    FormData
  >()
  const [qrCodeUrl, setQrCodeUrl] = useState(null)

  const watchVenueName = watch('venueName') // you can supply default value as second argument

  const handleVenueType = (type) => {
    setValue('venueType', type)
  }
  const saveQrCode = (qrCodeS3BucketLink) => {
    setQrCodeUrl(qrCodeS3BucketLink)
    onClose()
  }
  const onSubmit = async (values) => {
    const {
      address,
      email,
      name: firstName,
      lastName,
      venueType,
      venueName,
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
      const { id } = owner
      // @ts-ignore
      const { data } = await API.graphql({
        query: createVenue,
        variables: {
          input: {
            name: venueName,
            address,
            venueOwnerId: id,
            qrCode: qrCodeUrl,
            website,
            type: venueType,
          },
        },
      })
      console.log('data: ', data)
      if (data && data.createVenue) {
        onClose()
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
      <QrCodeModal
        closeHandler={closeHandler}
        open={qrOpen}
        saveQrCode={saveQrCode}
        venueName={watchVenueName}
      />

      <Modal.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset>
            <Fieldset.Title>Create A New Venue</Fieldset.Title>
            <Fieldset.Subtitle>
              Enter the following information
            </Fieldset.Subtitle>
            <Row>
              <Col span={6}>
                <Input ref={register({ required: true })} name='venueName'>
                  Venue Name
                </Input>
              </Col>
              <Col span={6}>
                <Input ref={register({ required: true })} name='address'>
                  Address
                </Input>
              </Col>
              <Col span={6}>
                <Input ref={register({ required: true })} name='website'>
                  Website
                </Input>
              </Col>
              <Col span={6}>
                <Dot type='warning'>
                  <Text small>Venue: Type</Text>
                </Dot>
                <Spacer y={0.5} />

                <Select
                  placeholder='Choose one'
                  // @ts-ignore
                  name='venueType'
                  onChange={handleVenueType}
                >
                  <Select.Option value='Restaurant'>Restaurant</Select.Option>
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
              <Col span={8}>
                <Input ref={register({ required: true })} name='name'>
                  First Name
                </Input>
              </Col>
              <Col span={8}>
                <Input ref={register({ required: true })} name='lastName'>
                  Last Name
                </Input>
              </Col>
              <Col span={8}>
                <Input ref={register({ required: true })} name='email'>
                  Email
                </Input>
              </Col>
            </Row>

            <Row>
              <CreditCardForm />
            </Row>
            <Divider />

            <Fieldset.Footer>
              <Fieldset.Footer.Status>
                {errors
                  ? `${Object.keys(errors)
                      .map((key) => `${key} ${errors[key].type}`)
                      .join(', ')}`
                  : 'Waiting'}
              </Fieldset.Footer.Status>

              <Fieldset.Footer.Actions>
                <ButtonGroup>
                  <Button auto onClick={handler}>
                    Create QR Code
                  </Button>
                  <button disabled={!qrCodeUrl} type='submit'>
                    Save
                  </button>
                </ButtonGroup>
              </Fieldset.Footer.Actions>
            </Fieldset.Footer>
          </Fieldset>
        </form>
      </Modal.Content>

      <Modal.Action passive onClick={onClose}>
        Cancel
      </Modal.Action>
    </Modal>
  )
}
