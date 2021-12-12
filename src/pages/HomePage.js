import React, {useContext} from 'react';
import BandAdd from '../components/BandAdd';
import BandList from '../components/BandList';
import {SocketContext} from '../context/SocketContext';

const HomePage = function () {
	const {online} = useContext(SocketContext);

	return (
		<div className="container">
			<div className="alert">
				<p>
            Service status:
					{online ? (
						<span className="text-success">Online</span>
					) : (
						<span className="text-danger">Offline</span>
					)}
				</p>

				<h1>Band Name</h1>
				<hr />

				<div className="row">
					<div className="col-8">
						<BandList/>
					</div>
					<div className="col-4">
						<BandAdd />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
