import { Grid, Row, Col } from 'react-bootstrap';

const Body = ({children}) => (
  <Grid>
    <Row>
      <Col xs={12} md={10}>
      {children}
      </Col>
    </Row>
  </Grid>
)

export default Body;