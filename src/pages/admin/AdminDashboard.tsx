import { Auth, API } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { listVenues } from '../../graphql/queries'
import {
  Button,
  Modal,
  Col,
  Table,
  Row,
  Page,
  ButtonGroup,
} from '@geist-ui/react'
import { CreateVenue } from '../../components/CreateVenue'
import QR from 'qrcode.react'

export interface AdminDashboardProps {}

const AdminDashboard: React.SFC<AdminDashboardProps> = () => {
  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible((visible) => !visible)

  const [tableData, setTableData] = useState(null)
  const [qrOpen, setQrOpen] = useState(false)
  const [authenticatedAdmin, setAuthenticatedAdmin] = useState()

  const [currentVenue, setCurrentVenue] = useState(null)
  const handler = () => setQrOpen(true)

  const session = Auth.currentSession().then((res) => {
    console.log('res: ', res)
  })

  const closeHandler = () => {
    setQrOpen(false)
  }

  const getVenues = async () => {
    const operation = (actions, rowData) => {
      const updateCurrentVenue = () => {
        setCurrentVenue(rowData)
      }
      return (
        <Button auto size='mini' onClick={updateCurrentVenue}>
          QR Code
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
        operation,
      }))
      setTableData(data)
    }
  }

  // useEffect(() => {
  //   getVenues()
  // }, [])

  useEffect(() => {
    getVenues()
  }, [])

  // useEffect(() => {
  //   if (!authenticatedAdmin) {
  //     Auth.currentAuthenticatedUser().then(async ({ attributes, username }) => {
  //       await subscription(username)
  // const Authorization = `${(await Auth.currentSession())
  //   .getAccessToken()
  //   .getJwtToken()}`
  //       // console.log('Authorization: ', Authorization)
  //       // const authedAdmin = await getAuthUser({ username, Authorization })
  //       // console.log('authedAdmin: ', authedAdmin)

  //       // const existingAdmins = await listUsersByType({
  //       //   groupname: 'superAdmin',
  //       //   Authorization,
  //       // })
  //       // console.log('existingAdmins: ', existingAdmins)

  //       // const existingVenueAdmins = await listUsersByType({
  //       //   groupname: 'venueAdmin',
  //       //   Authorization,
  //       // })
  //       // console.log('existingVenueAdmins: ', existingVenueAdmins)

  //       setAuthenticatedAdmin({ ...attributes, username })
  //     })
  //   }
  //   //   if (authenticatedAdmin) {
  //   //     getVenues().then((res) => setVenues(res))
  //   //   }
  // }, [authenticatedAdmin])

  return (
    <Page>
      <ButtonGroup>
        <Button onClick={toggle}>Create Venue</Button>
      </ButtonGroup>
      <Row>
        <Col>
          <Modal open={visible} onClose={closeHandler}>
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
          {tableData && (
            <Table data={tableData}>
              <Table.Column prop='name' label='name' />
              <Table.Column prop='website' label='website' />
              <Table.Column prop='address' label='address' />
              <Table.Column prop='operation' label='operation' width={150} />
            </Table>
          )}
        </Col>
        <Col span={24}>
          <CreateVenue onClose={toggle} visible={visible} />
        </Col>
      </Row>
    </Page>
  )
}

export default AdminDashboard
