import React from 'react';
import './ChatPage.scss';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Navbar/Header';
import SendArrow from '../../assests/img/send-arrow.svg';

export default function ChatPage() {
	return (
		<main>
			<div className="chat">
				<SideBar />
				<div className="chat__row">
					<Header />
					<form className="chat__question">
						<input type="text" placeholder="Задайте свой вопрос..." />
						<button className="chat__button">
							<img src={SendArrow} alt="" />
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
