import React from 'react';
import HomePage from './pages/HomePage';
import {SocketProvider} from './context/SocketContext';

const BandNameApp = () => (
	<SocketProvider>
		<HomePage />
	</SocketProvider>
);
export default BandNameApp;
