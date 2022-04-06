import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MobileContext = createContext();

export const MobileProvider = (props) => {
	const [mobile, setMobile] = useState([]);
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps`);

			setMobile(
				result.data.map((x) => {
					return {
						id: x.id,
						name: x.name,
						description: x.description,
						category: x.category,
						release_year: x.release_year,
						size: x.size,
						price: x.price,
						rating: x.rating,
						image_url: x.image_url,
						is_android_app: x.is_android_app,
						is_ios_app: x.is_ios_app,
					};
				})
			);
		};

		fetchData();
	}, []);

	return (
		<MobileContext.Provider
			value={{
				mobile,
				setMobile,
				currentId,
				setCurrentId,
			}}
		>
			{props.children}
		</MobileContext.Provider>
	);
};
