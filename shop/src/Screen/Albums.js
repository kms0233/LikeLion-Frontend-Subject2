import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../public/data';
import '../public/App.css';

export const Albums = () => {
	const navigation = useNavigate();

	const handleOnClick = ( URI, item ) =>
		navigation(URI, { state: item });

  return (
	<Container>
		<Row className="mt-5">
			{
				data.map((item) => {
					return (
						<Col key={item.title} onClick={() => { handleOnClick(`/detail/${item.title}`, item)}}>
								<img src={require(`../public/img/${item.title}.jpg`)} className="albumImgs"/>
								<h5 className="mt-2">{item.title}</h5>
								<p className="albumCaption">{item.caption}</p>
						</Col>
					);
				}
			)}
		</Row>
	</Container>
  )
}
