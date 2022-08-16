import React from 'react';

function App (): React.ReactElement {
	function saySomething (
		thingOne: string,
		thingTwo: string
	): string {
		return thingOne + ' ' + thingTwo;
	}

	return (
		<div className="App">
			{saySomething('Hello', 'there')}
		</div>
	);
}

export default App;
