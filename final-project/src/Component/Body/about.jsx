import React from 'react';
import HomeTemplate from '../Template/home';

const Content = () => {
	return (
		<div className="min-h-screen">
			<div className="relative overflow-hidden bg-white dark:bg-gray-800 lg:flex lg:items-center ">
				<div className="z-20 w-full px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
					<h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
						<span className="block">Mother hearth host your travel</span>
					</h2>
					<p className="mt-4 text-gray-400 text-md">
						The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as
						three of the most magnificient &amp; awe inspiring.
					</p>
					<div className="lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex mt-12 rounded-md shadow">
							<button
								type="button"
								className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
							>
								Get started
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-8 p-8 lg:p-24">
					<img src="/images/landscape/3.jpg" className="w-1/2 rounded-lg" alt="Tree" />
					<div>
						<img src="/images/landscape/2.jpg" className="mb-8 rounded-lg" alt="Tree" />
						<img src="/images/landscape/4.jpg" className="rounded-lg" alt="Tree" />
					</div>
				</div>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<>
			<HomeTemplate>
				<Content />
			</HomeTemplate>
		</>
	);
};

export default About;
