import { CgGames } from 'react-icons/cg';
import { GiProgression } from 'react-icons/gi';
import { GiHeartBeats } from 'react-icons/gi';
import { MdDashboardCustomize } from 'react-icons/md';
import { GiDiceTarget } from 'react-icons/gi';
import { PathRoutes } from '@constants/enums';

export const navigationItems = [
	{
		icon: CgGames,
		label: 'Games',
		navigateTo: PathRoutes.Games,
	},
	{
		icon: GiProgression,
		label: 'Progress',
		navigateTo: PathRoutes.Progress,
	},
	{
		icon: GiHeartBeats,
		label: 'Dashboard',
		navigateTo: PathRoutes.Dashboard,
	},
	{
		icon: MdDashboardCustomize,
		label: 'Customize Girl',
		navigateTo: PathRoutes.CustomizeGirl,
	},
	{
		icon: GiDiceTarget,
		label: 'Daily Challenges',
		navigateTo: PathRoutes.DailyChallenges,
	},
];
