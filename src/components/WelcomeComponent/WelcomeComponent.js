import React from 'react';
import './WelcomeComponent.scss';
import { Row, Col, Button } from 'react-bootstrap';

const WelcomeComponent = () => {
	return (
		<>
			<Row className='w-100 m-0 align-items-center justify-content-center pt-5 pb-5 text-center content'>
				<Col xs={12} md={7}>
					<h1>Hello fellow developer!</h1>
				</Col>
				<Col xs={12} md={7}>
					<p>
						Do as much as you can in a amount of time. Do not push it, 1-4 hours are
						totally okay. Just show us yours skills. Sass/styled-components, Bem and
						React preferred. But use anuthing you know, like or want.
					</p>
					<p>And most importantly - have fun!</p>
				</Col>
				<Col xs={12} md={7}>
					<Button className='m-2' variant='primary'>
						Button with a label
					</Button>
					<Button className='m-2' variant='outline-primary'>
						This button looks empty
					</Button>
				</Col>
			</Row>
			<Row className='w-100 m-0 align-items-center justify-content-center pt-5 pb-5 text-center'>
				<Col xs={12} md={7}>
					<h2>Open API show off</h2>
				</Col>
				<Col xs={12} md={7}>
					<p>
						It's up to you display down there and how you styled it. Use fetch/axios
						(preffered) or if you're alredy tired of this task - get the data from a
						JSON object. Lazy loading is optional but highly appreciated. List of APIs
						you could ude: https://github.com/public-apis/public-apis
					</p>
				</Col>
			</Row>
		</>
	);
};

export default WelcomeComponent;
