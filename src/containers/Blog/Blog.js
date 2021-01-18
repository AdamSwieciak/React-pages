import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import uniqid from 'uniqid';

import './Blog.scss';
import * as acctionTypes from '../../store/action';
import Post from '../../components/Posts/Post';

class Blog extends Component {
	componentDidMount() {
		this.fetchData();
	}

	// Fetch data
	fetchData() {
		let picture = '/v1/images/search';
		let nbpTables = 'http://api.nbp.pl/api/exchangerates/tables/a/';

		const reqPicture = axios.get(picture);
		const reqNbpTables = axios.get(nbpTables);

		axios
			.all([reqPicture, reqNbpTables])
			.then(
				axios.spread((...responses) => {
					this.props.onUrl(responses[0].data[0].url, 0);
					this.props.onUrl(responses[0].data[0].url, 1);
					this.props.onCurrency(responses[1].data[0].rates[1]);
				}),
			)
			.catch((error) => {
				console.log(error);
				this.props.onError();
			});
	}

	addPosts() {
		this.props.addPost();
	}

	render() {
		let posts = (
			<Container>
				<Row className='text-center justify-content-center'>
					<h3>Something went wrong</h3>
				</Row>
			</Container>
		);

		if (!this.props.error) {
			posts = this.props.state.map((post) => {
				return (
					<Post
						data={post.data}
						key={post.id}
						url={post.url}
						title={post.title}
						paragraph={post.paragraph}
					/>
				);
			});
		}

		return (
			<div>
				{this.props.counterPosts.map(() => (
					<Row key={uniqid()} className='w-100 m-0'>
						{posts}
					</Row>
				))}
				<Row className='justify-content-center w-100 m-0'>
					<Button
						className='m-5'
						variant='outline-primary'
						onClick={this.props.addPost}
					>
						Load more...
					</Button>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state.posts,
		error: state.error,
		counterPosts: state.counterPosts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUrl: (data, id) =>
			dispatch({ type: acctionTypes.FETCH_URL, url: data, id: id }),
		onCurrency: (data) =>
			dispatch({ type: acctionTypes.FETCH_CURRENCY, currency: data }),
		onError: () => dispatch({ type: acctionTypes.ERROR }),
		addPost: () => dispatch({ type: acctionTypes.ADD_POST }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
