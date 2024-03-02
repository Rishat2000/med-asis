import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<span></span>
				<ul className="header__list">
					<li className="header__item">
						<NavLink to={'/'}>ИИ Адинай</NavLink>
					</li>
					<li className="header__item">
						<NavLink to={'/'}>Чат</NavLink>
					</li>
					<li className="header__item">
						<NavLink to={'/'}>Справочник</NavLink>
					</li>
					<li className="header__item">
						<NavLink to={'/'}>Авторизоваться</NavLink>
					</li>
					<li className="header__item">KG</li>
				</ul>
			</div>
		</header>
	);
}
