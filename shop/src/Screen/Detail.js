import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Container, Row, Col, Alert } from 'react-bootstrap'

export const Detail = () => {
	const { state } = useLocation();
	const { title } = useParams();
	const [discount, setDiscount] = useState(true);

	useEffect(() => {
		setTimeout(() => setDiscount(false), 3000);
	}, []);

	if (!state)
		return (
			<div>
				잘못된 접근입니다.
			</div>
		)
  return (
	<>
	{
		discount 
		? <Alert variant='warning'>
			3초안에 구매하면 30프로 할인!!!!
		  </Alert>
		: <div/>
	}
		<Container className='mt-5'>
			<Row>
				<Col>
					<img src={require(`../public/img/${state.title}.jpg`)}
						className='detailImg'/>
				</Col>
				<Col className='mt-4'>
					<h3>{title}</h3>
					<p>{state.caption}</p>
					<p>
						{discount ? state.price * 0.7 : state.price }원</p>
					<button className='orderButton'>주문하기</button>
				</Col>
			</Row>
		</Container>
	</>
  )
}

