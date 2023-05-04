import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../public/img/LovePoem.jpg';
import img2 from '../public/img/Lilac.jpg';
import img3 from '../public/img/Palette.jpg';
import '../public/App.css';

export const Albums = () => {
  return (
	<Container>
		<Row className="mt-5">
			<Col>
				<img src={img1} className="albumImgs"/>
				<h5 className="mt-2">Love poem</h5>
				<p className="albumCaption">The 5th Mini Album</p>
			</Col>
			<Col>
				<img src={img2} className="albumImgs"/>
				<h5 className="mt-2">LILAC</h5>
				<p className="albumCaption">The 5th Album</p>
			</Col>
			<Col>
				<img src={img3} className="albumImgs"/>
				<h5 className="mt-2">Palette</h5>
				<p className="albumCaption">The 4th Album</p>
			</Col>
		</Row>
	</Container>
  )
}
