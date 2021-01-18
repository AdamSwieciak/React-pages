import React, { useCallback, useRef } from 'react';
import { withRouter } from 'react-router';
import app from '../../firebase';
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap';

const SignUp = ({ history }) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			try {
				await app
					.auth()
					.createUserWithEmailAndPassword(
						emailRef.current.value,
						passwordRef.current.value,
					);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history],
	);

	return (
		<div>
			<Container fluid>
				<Row className='vh-100'>
					<Col xs={12} md={6} className='m-auto'>
						<Form className='p-4' onSubmit={handleSignUp}>
							<Card className='p-5'>
								<Form.Group controlId='formBasicEmail'>
									<h1 className='text-center'>Sign up</h1>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										ref={emailRef}
										type='email'
										name='email'
										placeholder='Enter email'
									/>
								</Form.Group>
								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										ref={passwordRef}
										type='password'
										name='password'
										placeholder='Password'
									/>
									<Button type='submit' className='w-100 mt-4'>
										Sing up
									</Button>
								</Form.Group>
							</Card>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default withRouter(SignUp);
