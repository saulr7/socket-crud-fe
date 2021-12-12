import React, {useContext, useState} from 'react';
import {SocketContext} from '../context/SocketContext';

const BandAdd = () => {
	const [name, setName] = useState('');
	const {socket} = useContext(SocketContext);

	const addBand = name => {
		socket.emit('add-band', {name});
	};

	const onSubmit = evt => {
		evt.preventDefault();

		if (!name) {
			return;
		}

		addBand(name);
		setName('');
	};

	return (
		<>
			<h3> Add </h3>

			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="txtBand"
					id="txtBand"
					className="form-control"
					placeholder="Add Band"
					value={name}
					onChange={({target}) => setName(target.value)}
				/>
			</form>
		</>
	);
};

export default BandAdd;
