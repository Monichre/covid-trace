import { Auth, API } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { getVenue, listVenueAdmins, listVenues } from '../../graphql/queries'
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
import { Link, useHistory, useLocation } from 'react-router-dom'
import { deleteVenue, deleteVenueAdmin } from '../../graphql/mutations'
import { withAuthenticator } from '@aws-amplify/ui-react'

export interface AdminDashboardProps {}

const AdminD: React.SFC<AdminDashboardProps> = () => {
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

    const venues = await Promise.all(
      graphqlData.listVenues.items.map(async (venue) => {
        const { id } = venue
        console.log('id: ', id)

        const {
          data: { getVenue: venueData },
        }: any = await API.graphql({
          query: getVenue,
          variables: { id },
        })
        console.log('venueData: ', venueData)
        return { ...venueData, showQrCode, showDelete }
      })
    )

    setVenueTableData(venues)
  }

  const getAdmins = async () => {
    const showDelete = (actions, { rowValue }) => {
      const { id } = rowValue

      const deleteTheAdmin = async () => {
        const {
          data: { deleteVenueAdmin: deletedAdmin },
        }: any = await API.graphql({
          query: deleteVenueAdmin,
          variables: { input: { id } },
        })
        console.log('deletedAdmin: ', deletedAdmin)
        if (deletedAdmin) {
          actions.remove()
        }
      }

      return (
        <Button auto size='mini' onClick={deleteTheAdmin}>
          Delete
        </Button>
      )
    }
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
        showDelete,
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
            <Link to={`/venues/${currentVenue.id}/guest-registration`}>
              <QR
                value={`${window.location.href}/venues/${currentVenue.id}/guest-registration`}
              />
            </Link>
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
        <Text h2>Venues</Text>
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
                <Table.Column prop='showDelete' label='Delete' />
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}
export const AdminDashboard = withAuthenticator(AdminD)
