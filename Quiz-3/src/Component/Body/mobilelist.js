import React from 'react';
import { MobileProvider } from '../../Context/MobileContext';
import MobileListContent from '../../Context/MobileList';

const MobileList = () => {
	return (
		<>
			<MobileProvider>
				<MobileListContent />
			</MobileProvider>
		</>
	);
};

export default MobileList;
