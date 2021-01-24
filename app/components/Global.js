import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}


	search() {
		const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
			.then(response => response.json())
			.then(json => console.log(json));
	}

	render() {
		return (
			<div className="Global">
				<h2>Book Explorer!</h2>
				<Form>
					<Form.Group>
						<InputGroup className="mb-3">
							<Form.Control 
							type="text" 
							placeholder="Search for a book."
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.search();
								}
							}}
							/>
					    <InputGroup.Append onClick={() => this.search()}>
					      <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
					    </InputGroup.Append>
						</InputGroup>
					</Form.Group>
				</Form>
			</div>
		)
	}
}

export default Global;