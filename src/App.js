import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect } from "react";
import Loader from "./Components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./Redux/rootSilce";
import Admin from "./Admin";

function App() {
	const { loading, portfolioData } = useSelector((state) => state.root);
	const dispatch = useDispatch();
	const getPortfolioData = async () => {
		try {
			dispatch(ShowLoading());
			const response = await axios.get("/api/get-portfolio-data");
			dispatch(SetPortfolioData(response.data));
			dispatch(HideLoading());
		} catch (error) {
			dispatch(HideLoading());
		}
	};

	useEffect(() => {
		if (!portfolioData) {
			getPortfolioData();
		}
	}, [portfolioData]);

	return (
		<BrowserRouter>
			{loading ? <Loader /> : null}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/admin' element={<Admin/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
