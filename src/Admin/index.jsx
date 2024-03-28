import React from "react";
import Header from "../Components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
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
						<TabPane tab='Experience' key='3'>
							<AdminExperiences />
						</TabPane>
						<TabPane tab='Courses' key='5'></TabPane>
						<TabPane tab='Contact' key='7'></TabPane>
					</Tabs>
				</div>
			)}
		</div>
	);
}

export default Admin;
