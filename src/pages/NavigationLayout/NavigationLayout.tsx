import { Link, Outlet } from 'react-router-dom';
import { navigationItems } from './constants';

const NavigationLayout = () => {
	return (
		<div className='w-full h-full relative bg-gradient-to-t from-red-200 to-red-50'>
			<div className='w-full h-full pb-32'>
				<Outlet />
			</div>
			<nav className='flex justify-center w-full absolute bottom-9 left-0 px-8'>
				<ul className='flex justify-evenly w-full'>
					{navigationItems.map(({ icon: Icon, navigateTo }, index) => (
						<Link to={navigateTo} key={index}>
							<li
								className={`rounded-full bg-red-300 p-4 border-2 border-red-100 shadow-lg`}
							>
								<Icon className='text-4xl text-white' />
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default NavigationLayout;
