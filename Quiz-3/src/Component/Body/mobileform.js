import React from 'react';
import { MobileProvider } from '../../Context/MobileContext';
import MobileFormContent from '../../Context/MobileForm';

const MobileForm = () => {
	return (
		<>
			<MobileProvider>
				<MobileFormContent />
			</MobileProvider>
		</>
	);
};

export default MobileForm;
