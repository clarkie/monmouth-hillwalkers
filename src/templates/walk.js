import * as React from "react"

import styled from "styled-components"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
import { WalkInfo } from "../components/walkInfo"

const MapRow = styled(Row)`
  left: -20px;
  width: calc(100% + 70px);
  position: relative;
`

const MapImage = styled.div`
  max-width: 100%;
  height: 400px;
  width: 1140px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const MapImageMask = styled.div`
  content: "";
  display: block;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    90deg,
    #fff 0%,
    transparent 5%,
    transparent 95%,
    #fff 100%
  ); ;
`

const WalkPage = props => {
  const { pageContext } = props
  const { id, title, intro, content, info, mapImage, osLink } = pageContext
  console.log("pageContext", pageContext)

  return (
    <Layout>
      <Container className="mb-5">
        <Row className="mt-3">
          <h2>
            Walk No. {id} - {title}
          </h2>
        </Row>
        <WalkInfo {...{ info }} />
        <Row className="my-3">{intro}</Row>
        <MapRow>
          <MapImage src={`/images/walks/${mapImage}`}>
            <MapImageMask />
          </MapImage>
        </MapRow>
        <Row>
          <a href={osLink} target="_blank" rel="noreferrer">
            [OS Map]
          </a>
        </Row>
        {content.map((contentItem, index) => (
          <Row className="mt-3" key={index}>
            {contentItem}
          </Row>
        ))}
      </Container>
    </Layout>
  )
}
export default WalkPage
