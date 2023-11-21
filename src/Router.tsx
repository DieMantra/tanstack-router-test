import { RootRoute, Route, Router } from '@tanstack/react-router';
import Index from './Index';
import Layout from './Layout/Layout';
import BlogPage from './blogs/BlogPage';

// Create a root route
const rootRoute = new RootRoute({
	component: Layout,
});

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Index,
});

const blogPageRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/blogs',
	component: BlogPage,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, blogPageRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
