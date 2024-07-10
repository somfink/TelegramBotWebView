import { Navigate, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@constants/routes';
import NavigationLayout from '@pages/NavigationLayout';
import { PathRoutes } from '@constants/enums';

const router = createBrowserRouter([
	{
		path: '/',
		element: <NavigationLayout />,
		children: [
			{ index: true, element: <Navigate to={PathRoutes.Dashboard} replace /> },
			...routes,
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
