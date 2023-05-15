import { Container, Row, Col } from "react-bootstrap";
import { Lilac, LovePoem, Palette } from './image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css'
import { Link } from "react-router-dom";

function Albums() {
  const albumList = [
    { "id": "LovePoem", "title": LovePoem, "subtitle": "The 5th Mini Album" },
    { "id": "Lilac", "title": Lilac, "subtitle": "The 5th Album" },
    { "id": "Palette", "title": Palette, "subtitle": "The 4th Album" },
  ];
  return (
    <Container className="albums p-5">
      <Row className="album-row">
        {albumList.map(album =>
          <Col className="m-3" key={album.id}>
            <Row>
              <div>
                <Link to={`/detail/${album.id}`}
                  state={{
                    subtitle: album.subtitle,
                    img: album.title
                  }}
                >
                  <img className="albums-img" src={album.title} alt={album.id} />
                </Link>
                <p className="album-title">{album.id}</p>
                <p className="album-subtitle">{album.subtitle}</p>
              </div>
            </Row>
          </Col>)
        }
      </Row>
    </Container>
  );
}

export default Albums;