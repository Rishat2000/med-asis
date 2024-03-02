import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ChatPage from '../pages/ChatPage/ChatPage';
import GuidePage from '../pages/GuidePage/GuidePage';

export default function MainRoutes() {
	const PUBLIC_ROUTES = [
		{ id: 1, path: '/', element: <HomePage /> },
		{ id: 2, path: '/chat', element: <ChatPage /> },
		{ id: 3, path: '/guide', element: <GuidePage /> },
	];
	return (
		<Routes>
			{PUBLIC_ROUTES.map((route) => (
				<Route key={route.id} path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
