import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Page404 from '../screens/error404';

let routes = [
	{
		name: 'main',
		url: '/',
		component: Home,
		exact: true
	},
	{
		name: 'home',
		url: '/page/:page',
		component: Home,
		exact: true
	},
	{
		name: 'setting',
		url: '/setting/:id',
		component: Setting,
		exact: true
	},
	{
		url: '**',
		component: Page404
	}
];

let routesMap = {};

routes.forEach((route) => {
	if (route.hasOwnProperty('name')) {
		routesMap[route.name] = route.url;
	}
});

let urlBuilder = function (name, params) {
	if (!routesMap.hasOwnProperty(name)) {
		return null;
	}

	let url = routesMap[name]; // news/:id

	for (let key in params) {
		url = url.replace(':' + key, params[key]);
	}

	return url;
}

export default routes;
export { urlBuilder };
