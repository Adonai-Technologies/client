import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import axios from "axios";

function App() {
	const [ShowLoading, setShowLoading] = useState(false);

	const getPortFolioData = async () => {
		try {
			const response = await axios.get('/api/get-portfolio-data');
      console.log(response.data)
		} catch (error) {}
	};

	useEffect(() => {
		getPortFolioData();
	}, []);

	return (
		<BrowserRouter>
			{ShowLoading ? <Loader /> : null}
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
