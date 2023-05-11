import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import album1 from '../img/album1.jpg';
import album2 from '../img/album2.jpg';
import album3 from '../img/album3.jpg';

function Album(){
  return(
    <Container>
      <Row className="mt-5 pt-5 pb-3">
        <Col>
          <Image src={album1} style={{width:'350px', height:'350px'}}/><br />
          <strong>화양연화 pt.2</strong><br />
          The 4th Mini Album
        </Col>
        <Col>
          <Image src={album2} style={{width:'350px', height:'350px'}}/><br />
          <strong>LOVE YOURSELF 轉 'Tear'</strong><br />
          The 3rd Album
        </Col>
        <Col>
          <Image src={album3} style={{width:'350px', height:'350px'}}/><br />
          <strong>MAP OF THE SOUL : 7</strong><br />
          The 4th Album
        </Col>
      </Row>
    </Container>

  );
}

export default Album;