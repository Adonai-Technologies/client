import React from "react";
import Header from "../../Components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "../Projects";
import Courses from "../Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";

function Home() {
	return (
		<div className='bg-primary px-40 sm:px-3'>
			<Header />
			<div>
				<Intro />
				<About />
				<Experiences />
				<Projects />
				<Courses />
				<Contact />
				<Footer />
				<LeftSider />
			</div>
		</div>
	);
}

export default Home;
