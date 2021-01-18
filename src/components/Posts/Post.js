import React from 'react';
import './Post.scss';
import { Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

function Post(props) {
	let field;
	props.url.length === 0
		? (field = (
				<h5>
					Kurs: {props.data.currency} {props.data.mid}
				</h5>
		  ))
		: (field = (
				<LazyLoad>
					<img src={props.url} alt={props.title} />
				</LazyLoad>
		  ));

	return (
		<Col xs={12} lg={3} className='justify-content-center'>
			<div className='square'>
				{field}
				<h6>{props.title}</h6>
				<p>{props.paragraph}</p>
			</div>
		</Col>
	);
}

export default Post;
