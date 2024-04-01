import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../Redux/rootSlice"; // corrected import

function AdminExperiences() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	const { experiences } = portfolioData;
	const [showAddEditModal, setShowAddEditModal] = React.useState(false);
	const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);

	const onFinish = async (values) => {
		try {
			dispatch(ShowLoading());
			const response = await axios.post("/api/add-experience", values);
			if (response.data.success) {
				message.success(response.data.message);
				setShowAddEditModal(false);
				dispatch(HideLoading());
				dispatch(ReloadData(true));
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
			<div className='flex justify-end'>
				<button
					className='bg-primary px-5 py-2 text-white'
					onClick={() => {
						setSelectedItemForEdit(null);
						setShowAddEditModal(true);
					}}>
					Add Experience
				</button>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				{experiences.map((experience, index) => (
					<div
						key={index}
						className='shadow border-2 p-5 border-gray-400 flex flex-col gap-5'>
						<h1 className='text-primary text-xl font-bold'>
							{experience.period}
						</h1>
						<hr />
						<h1>Company : {experience.company}</h1>
						<h1>Role : {experience.title}</h1>
						<h1>Description : {experience.description}</h1>
						<div className='flex justify-end gap-5 mt-5'>
							<button className='bg-secondary text-white px-5 py-2 rounded'>
								Delete
							</button>
							<button className='bg-primary text-white px-5 py-2 rounded'>
								Edit
							</button>
						</div>
					</div>
				))}
			</div>
			<Modal
				visible={showAddEditModal} // corrected prop name
				title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
				footer={null}
				onCancel={() => {
					setShowAddEditModal(false);
				}}>
				<Form layout='vertical' onFinish={onFinish}>
					<Form.Item name='period' label='Period'>
						<Input placeholder='Period' />
					</Form.Item>
					<Form.Item name='company' label='Company'>
						<Input placeholder='Company' />
					</Form.Item>
					<Form.Item name='title' label='Title'>
						<Input placeholder='Job title' />
					</Form.Item>
					<Form.Item name='description' label='Description'>
						<Input.TextArea placeholder='Job description' />
					</Form.Item>
					<div className='flex justify-end'>
						<Button
							className='border-primary text-primary px-5 py-2'
							onClick={() => {
								setShowAddEditModal(false);
							}}>
							Cancel
						</Button>
						<Button
							type='primary'
							htmlType='submit'
							className='bg-primary text-white px-5 py-2'>
							{selectedItemForEdit ? "Update" : "Add"}
						</Button>
					</div>
				</Form>
			</Modal>
		</div>
	);
}

export default AdminExperiences;
