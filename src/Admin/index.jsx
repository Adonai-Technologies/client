import React from "react";
import Header from "../Components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import { useSelector } from "react-redux";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
const { TabPane } = Tabs;

function Admin() {
	const { portfolioData } = useSelector((state) => state.root);
	return (
		<div>
			<Header />
			<h1 className='text-2xl p-5 font-semibold text-primary'>Admin Panel</h1>
			{portfolioData && (
				<div className=' p-5 font-semibold sm:overflow-x-auto'>
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
						<TabPane tab='Projects' key='4'>
							<AdminProjects />
						</TabPane>
						<TabPane tab='Courses' key='5'>
							<AdminCourses />
						</TabPane>
						<TabPane tab='Contact' key='6'>
							<AdminContact />
						</TabPane>
					</Tabs>
				</div>
			)}
		</div>
	);
}

export default Admin;
