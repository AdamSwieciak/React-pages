import React, { useCallback, useContext, useRef } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap';

const Login = ({ history }) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			try {
				await app
					.auth()
					.signInWithEmailAndPassword(
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

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<Container fluid>
				<Row className='vh-100'>
					<Col xs={12} md={6} className='m-auto'>
						<Form xs={12} md={8} className='p-4' onSubmit={handleLogin}>
							<Card className='p-5'>
								<Form.Group controlId='formBasicEmail'>
									<h1 className='text-center'>Log in</h1>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										ref={emailRef}
										name='email'
										type='email'
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
										Log In
									</Button>
									<p className='pt-3'>
										If you do not have an account, register
										<Link to='/signup'> Click</Link>
									</p>
								</Form.Group>
							</Card>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default withRouter(Login);
