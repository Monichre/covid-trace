import { Auth, API } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { listVenueAdmins, listVenues } from '../../graphql/queries'
import {
  Button,
  Modal,
  Col,
  Table,
  Row,
  Divider,
  ButtonGroup,
  Text,
} from '@geist-ui/react'
import { CreateVenue } from '../../components/CreateVenue'
import QR from 'qrcode.react'
import { useLocation } from 'react-router-dom'
import { deleteVenue } from '../../graphql/mutations'

export interface AdminDashboardProps {}

export const AdminDashboard: React.SFC<AdminDashboardProps> = () => {
  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible((visible) => !visible)

  const [venueTableData, setVenueTableData] = useState(null)
  const [venueAdminTableData, setVenueAdminTableData] = useState(null)

  const [qrOpen, setQrOpen] = useState(false)
  const [currentVenue, setCurrentVenue] = useState(null)

  const closeHandler = () => {
    setQrOpen(false)
  }

  const getVenues = async () => {
    const showQrCode = (actions, { rowValue }) => {
      console.log('rowValue: ', rowValue)

      const updateCurrentVenue = () => {
        setCurrentVenue(rowValue)
        setQrOpen(true)
      }
      return (
        <Button auto size='mini' onClick={updateCurrentVenue}>
          QR Code
        </Button>
      )
    }
    const showDelete = (actions, { rowValue }) => {
      const { id } = rowValue

      const deleteTheVenue = async () => {
        const {
          data: { deleteVenue: deletedVenue },
        }: any = await API.graphql({
          query: deleteVenue,
          variables: { input: { id } },
        })
        console.log('deletedVenue: ', deletedVenue)
        if (deletedVenue) {
          actions.remove()
        }
      }

      return (
        <Button auto size='mini' onClick={deleteTheVenue}>
          Delete
        </Button>
      )
    }

    const { data: graphqlData }: any = await API.graphql({
      query: listVenues,
    })

    const venues = graphqlData.listVenues.items
    if (venues && venues.length) {
      const data = venues.map((venue) => ({
        ...venue,
        showQrCode,
        showDelete,
      }))
      setVenueTableData(data)
    }
  }

  const getAdmins = async () => {
    const {
      data: {
        listVenueAdmins: { items: venueAdmins },
      },
    }: any = await API.graphql({
      query: listVenueAdmins,
    })
    console.log('venueAdmins: ', venueAdmins)
    if (venueAdmins && venueAdmins.length) {
      const data = venueAdmins.map((admin) => ({
        ...admin,
      }))
      setVenueAdminTableData(data)
    }
  }

  useEffect(() => {
    getVenues()
    getAdmins()
  }, [])

  return (
    <>
      <Modal open={qrOpen} onClose={closeHandler}>
        <Modal.Title>Scan This</Modal.Title>

        <Modal.Content style={{ margin: 'auto' }}>
          {currentVenue && (
            <QR
              value={`${window.location.href}/${currentVenue.name}/guest-registration`}
            />
          )}
        </Modal.Content>

        <Modal.Action passive onClick={closeHandler}>
          Close
        </Modal.Action>
      </Modal>
      <div>
        <Row justify='space-between'>
          <Col span={6}>
            <Text h1>Admin Dashboard</Text>
          </Col>
          <Col span={6}>
            <ButtonGroup>
              <Button onClick={toggle}>Create Venue</Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Divider />
        <Text h2>Venue Admins/Owners</Text>
        <Row>
          <Col>
            {venueTableData && (
              <Table data={venueTableData}>
                <Table.Column prop='name' label='name' />
                <Table.Column prop='website' label='website' />
                <Table.Column prop='address' label='address' />
                <Table.Column prop='showQrCode' label='View QR' width={150} />
                <Table.Column
                  prop='showDelete'
                  label='Delete Venue'
                  width={150}
                />
              </Table>
            )}
          </Col>

          <Col span={24}>
            <CreateVenue onClose={toggle} visible={visible} />
          </Col>
        </Row>
        <Divider />
        <Text h2>Venue Admins/Owners</Text>
        <Row>
          <Col>
            {venueAdminTableData && (
              <Table data={venueAdminTableData}>
                <Table.Column prop='name' label='name' />
                <Table.Column prop='email' label='email' />
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}
