import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div className="pa3 tc">Select a book to get started!</div>;
		}
		return (
			<div className="tc col-sm-4 list-group">
				<h3>{this.props.book.title}</h3>
				<div>author: {this.props.book.author}</div>
				<div>pages: {this.props.book.pages}</div>
				<div>{this.props.book.about}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook 
	};
}

export default connect(mapStateToProps)(BookDetail)