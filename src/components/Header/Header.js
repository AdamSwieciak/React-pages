import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../firebase';
import { useHistory } from 'react-router-dom';

function Header() {
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	let loginOutButton;

	currentUser
		? (loginOutButton = (
				<Button
					variant='outline-primary'
					className='m-2'
					onClick={() => app.auth().signOut()}
				>
					Log Out
				</Button>
		  ))
		: (loginOutButton = (
				<Button variant='outline-primary' className='m-2' onClick={logIn}>
					Log In
				</Button>
		  ));

	function singUp() {
		history.push('/signup');
	}

	function logIn() {
		history.push('/login');
	}

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' fixed='top' variant='dark'>
			<Navbar.Brand onClick={() => history.push('/')}>
				React-Bootstrap-Page
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='m-auto'>
					<Nav.Link>What we do?</Nav.Link>
					<Nav.Link>Our projects</Nav.Link>
					<Nav.Link>Testimonials</Nav.Link>
					<Nav.Link>Blog</Nav.Link>
					<Nav.Link>Support</Nav.Link>
				</Nav>
				<Nav>
					{loginOutButton}
					<Button onClick={singUp} variant='primary' className='m-2'>
						Sing Up
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
