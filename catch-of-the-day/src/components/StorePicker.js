import React from 'react';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		//1. Stop the form from submitting
		event.preventDefault();
		//2. get the text from that input
		const storeName = this.myInput.value.value;
		//3. Change the to /store/xyz
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<React.Fragment>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>
					<input type="text" ref={this.myInput} required placeholder="Store Name" />
					<button type="submit">Visit Store</button>
				</form>
			</React.Fragment>
		);
	}
}

export default StorePicker;