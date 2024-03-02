import React from 'react';
import './SideBar.scss';
import Search from '../../assests/img/search.svg';

export default function SideBar() {
	return (
		<>
			<div className="sidebar">
				<div className="sidebar__row">
					<div className="sidebar__search">
						<img src={Search} alt="search" />
						<input type="text" className="sidebar__input" placeholder="Найтти пациента" />
					</div>
					<button type="button" className="sidebar__add">
						Новый пациент
					</button>
					<ul className="sidebar__list">
						<li className="sidebar__item">Жадиева Адинай</li>
						<li className="sidebar__item">Жунусов Акбар</li>
						<li className="sidebar__item">Керимкулова Акылай</li>
						<li className="sidebar__item">Айдарбекова Сезим</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Жадиева Адинай</li>
						<li className="sidebar__item">Жунусов Акбар</li>
						<li className="sidebar__item">Керимкулова Акылай</li>
						<li className="sidebar__item">Айдарбекова Сезим</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Жадиева Адинай</li>
						<li className="sidebar__item">Жунусов Акбар</li>
						<li className="sidebar__item">Керимкулова Акылай</li>
						<li className="sidebar__item">Айдарбекова Сезим</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Жадиева Адинай</li>
						<li className="sidebar__item">Жунусов Акбар</li>
						<li className="sidebar__item">Керимкулова Акылай</li>
						<li className="sidebar__item">Айдарбекова Сезим</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
						<li className="sidebar__item">Алымбеков Арстанбек</li>
					</ul>
				</div>
			</div>
		</>
	);
}
