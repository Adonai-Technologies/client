import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../Redux/rootSilce";
import axios from "axios";

function AdminAbout() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	const onFinish = async (values) => {
		try {
			dispatch(ShowLoading());
			const response = await axios.post("/api/update-about", {
				...values,
				_id: portfolioData.about._id,
			});
			dispatch(HideLoading());
			if (response.data.success) {
				message.success(response.data.message);
			} else {
				message.error(response.data.message);
			}
		} catch (error) {
			dispatch(HideLoading());
			message.error(error.message);
		}
	};
	return (
		<div>
			<Form
				onFinish={onFinish}
				layout='vertical'
				initialValues={portfolioData.about}>
				<Form.Item name='lottieURL' label='Lottie URL'>
					<input placeholder='lottieURL' />
				</Form.Item>

				<Form.Item name='description' label='Description'>
					<textarea placeholder='Description' />
				</Form.Item>
				<Form.Item name='description2' label='Description2'>
					<textarea placeholder='Description2' />
				</Form.Item>
				<div className='flex justify-end w-full'>
					<button className='px-10 py-2 bg-primary text-white' type='submit'>
						Save
					</button>
				</div>
			</Form>
		</div>
	);
}

export default AdminAbout;
