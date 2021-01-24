import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
	search() {
		console.log('search');
	}

	render() {
		return (
			<div>
				<h2>Book Explorer!</h2>
				<FormGroup>
					<InputGroup className="mb-3">
						<FormControl type="text" placeholder="Search for a book."/>
				    <InputGroup.Append onClick={() => this.search()}>
				      <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
				    </InputGroup.Append>
					</InputGroup>
				</FormGroup>
			</div>
		)
	}
}

export default Global;