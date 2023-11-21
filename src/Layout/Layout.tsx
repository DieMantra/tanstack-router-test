import { Link, LinkOptions, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactNode } from 'react';
import { router } from '../Router';

export default function Layout() {
	return (
		<>
			<div>
				<NavigationLink to='/'>Home</NavigationLink>
				<NavigationLink to='/blogs'>blogs</NavigationLink>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools router={router} />
		</>
	);
}
interface NavigationLinkProps {
	to?: LinkOptions['to'];
	children?: ReactNode;
}
function NavigationLink({ to, children }: NavigationLinkProps) {
	return (
		<Link
			to={to}
			activeProps={{
				className: 'border-b-2 border-blue-500',
			}}
		>
			{children}
		</Link>
	);
}
