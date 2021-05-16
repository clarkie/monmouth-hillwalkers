import * as React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

import badge from "../images/badge.png"

const WalkLink = styled(Link)`
  color: #963027;
`
const WalkSubheader = styled(Row)`
  color: #666;
`

const WalkListContainer = styled(Row)`
  margin-top: 15px;
  margin-bottom: 15px;
`

const WalkListItem = ({ id, title, slug, distance, totalClimb, extraInfo }) => (
  <WalkListContainer>
    <Container>
      <Row>
        <WalkLink to={slug}>
          Walk No {id} - {title}
        </WalkLink>
      </Row>
      <WalkSubheader>
        {distance} miles long and a total climb of {totalClimb}ft.{" "}
        {extraInfo ? extraInfo : null}
      </WalkSubheader>
    </Container>
  </WalkListContainer>
)

const WalksPage = ({ pageContext }) => {
  const { walks } = pageContext
  return (
    <Layout>
      <Container>
        <Row className="mt-3 ml-1">
          <h3>Celebrate Our 40th Anniversary with us and enjoy a local walk</h3>
        </Row>

        <Row>
          <Col sm={4} lg={3}>
            <img src={badge} alt="Monmouth Walkers badge" width="100%" />
          </Col>
          <Col sm={8} lg={9} className="align-self-center">
            <Container fluid className="">
              <Row>
                Monmouth Rambling &amp; Hillwalking Club first started walking
                as a group in 1981. Since then our members have enjoyed walking
                countless miles in and around the Monmouth area. We are lucky to
                have some of the UK’s most beautiful and accessible countryside
                on our doorstep.
              </Row>
              <Row className="mt-3">
                From the town centre you can walk along the Wye Valley, climb
                the Kymin or visit beautiful woodlands.
              </Row>
              <Row className="mt-3">
                To enjoy some of our favourite walks, select from the list to
                find a map and walk instructions.
              </Row>
            </Container>
          </Col>
        </Row>
        {walks.map(walk => (
          <WalkListItem key={walk.id} {...walk} />
        ))}
      </Container>
    </Layout>
  )
}
export default WalksPage
