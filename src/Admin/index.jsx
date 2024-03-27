import React from "react";
import Header from "../Components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;

function Admin() {
	const { portfolioData } = useSelector((state) => state.root);
	return (
		<div>
			<Header />
			{portfolioData && (
				<div className='mt-5 p-5 font-semibold'>
					<Tabs defaultActiveKey='1'>
						<TabPane tab='Intro' key='1'>
							<AdminIntro />
						</TabPane>
						<TabPane tab='About' key='2'>
							<AdminAbout />
						</TabPane>
						<TabPane tab='Skills' key='3'></TabPane>
						<TabPane tab='Projects' key='4'></TabPane>
						<TabPane tab='Courses' key='5'></TabPane>
						<TabPane tab='Experience' key='6'></TabPane>
						<TabPane tab='Contact' key='7'></TabPane>
					</Tabs>
				</div>
			)}
		</div>
	);
}

export default Admin;
