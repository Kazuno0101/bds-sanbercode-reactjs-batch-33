import React from 'react';
import { MobileProvider } from '../../Context/MobileContext';
import MobileHome from '../../Context/MobileHome';

const Mobile = () => {
	return (
		<>
			<MobileProvider>
				<MobileHome />
			</MobileProvider>
		</>
	);
};

export default Mobile;
