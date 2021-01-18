import React, { Suspense } from 'react';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import { Container } from 'react-bootstrap';

function Home() {
	const BlogComponent = React.lazy(() => import('../../containers/Blog/Blog'));

	return (
		<Container fluid>
			<WelcomeComponent />
			<Suspense fallback={<div>Loading...</div>}>
				<BlogComponent />
			</Suspense>
		</Container>
	);
}

export default Home;
