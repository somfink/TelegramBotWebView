import CustomizeCharacter from '@pages/CustomizeCharacter';
import { PathRoutes } from './enums';
import Dashboard from '@pages/Dashboard';
import Progress from '@pages/Progress';
import DailyChallenges from '@pages/DailyChallenges';
import Games from '@pages/Games';

export const routes = [
	{
		path: PathRoutes.Dashboard,
		element: <Dashboard />,
	},
	{
		path: PathRoutes.CustomizeGirl,
		element: <CustomizeCharacter />,
	},
	{
		path: PathRoutes.Progress,
		element: <Progress />,
	},
	{
		path: PathRoutes.DailyChallenges,
		element: <DailyChallenges />,
	},
	{
		path: PathRoutes.Games,
		element: <Games />,
	},
];
