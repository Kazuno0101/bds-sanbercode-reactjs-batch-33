import React, { useContext } from 'react';
import { MobileContext } from './MobileContext';

const MobileHome = () => {
	const { mobile } = useContext(MobileContext);
	const platformList = (andro, ios) => {
		if (andro === 1 && ios === 1) {
			return 'Android & IOS';
		} else if (andro === 1) {
			return 'Android';
		} else if (ios === 1) {
			return 'IOS';
		}
	};

	const isFree = (harga) => {
		if (harga === 0) {
			return 'Free';
		} else {
			return harga;
		}
	};

	const convertSize = (size) => {
		let dump;
		if (size >= 1000) {
			dump = size / 1000;
			if (size % 1000 === 0) {
				return `${dump}GB`;
			} else {
				size -= dump * 1000;
				return `${dump}GB ${size}MB`;
			}
		} else {
			return size;
		}
	};
	return (
		<>
			{mobile.map((item, index) => {
				return (
					<div className="flex my-4 overflow-hidden bg-white rounded-lg shadow-lg" key={index}>
						<div className="w-1/3">
							<img className="fakeimg" src={item.image_url} alt={item.name} />
						</div>
						<div className="w-2/3 p-4">
							<h1 className="text-2xl font-bold text-gray-900">
								{item.name} - {item.category}
							</h1>
							<p className="mt-2 text-sm text-gray-600">{item.description}</p>
							<div className="flex mt-2 item-center">
								Release Year : {item.release_year}
								Price: {isFree(item.price)}
								Rating: {item.rating}
								Size: {convertSize(item.size)}
							</div>
							<div className="flex justify-between mt-3 item-center">
								<h1 className="text-xl font-bold text-gray-700">
									Platform :{' '}
									{platformList(item.is_android_app, item.is_ios_app)}
								</h1>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default MobileHome;
