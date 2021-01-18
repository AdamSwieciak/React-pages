import * as acctionTypes from './action';

const initialState = {
	posts: [
		{
			id: 0,
			url: '',
			data: '',
			title: 'APIs without Auth',
			paragraph: 'might be much quicker and easier to implement',
		},
		{
			id: 1,
			url: '',
			data: '',
			title: 'If the API does not work',
			paragraph: 'check a different one, also remember about CORS',
		},
		{
			id: 2,
			url:
				'https://ocdn.eu/images/pulscms/ODE7MDA_/9ef1f700e6b994341a2e2a851290291f.jpg',
			data: '',
			title: 'Use images in place of',
			paragraph:
				'the placeholders above. Or divs with some data. Whatever you like',
		},
		{
			id: 3,
			url: '',
			data: '',
			title: 'Use real world data',
			paragraph: 'remember to use external data from an API or a JSON object',
		},
	],
	error: false,
	counterPosts: ['1'],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case acctionTypes.FETCH_URL:
			return {
				...state,
				posts: [...state.posts].map((post, id) =>
					id === action.id
						? {
								id: id,
								url: action.url,
								data: '',
								title: post.title,
								paragraph: post.paragraph,
						  }
						: post,
				),
			};
		case acctionTypes.ERROR:
			return {
				...state,
				error: true,
			};
		case acctionTypes.FETCH_CURRENCY:
			return {
				...state,
				posts: [...state.posts].map((post, id) =>
					id === 3
						? {
								id: id,
								url: post.url,
								data: action.currency,
								title: post.title,
								paragraph: post.paragraph,
						  }
						: post,
				),
			};
		case acctionTypes.ADD_POST:
			return {
				...state,
				counterPosts: state.counterPosts.concat('1'),
			};
		default:
			return state;
	}
};

export default reducer;
