import React from 'react';
import { Component } from 'react';
import 'tachyons';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
	render() {
		return (
			<div className="flex flex-column">
			<h1 className="tc">My Favorite Books</h1>
				<BookList />
				<BookDetail className='tc' />
			</div>
		);
	}
}