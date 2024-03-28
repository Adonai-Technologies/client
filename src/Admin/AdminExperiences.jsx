import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form } from "antd";

function AdminExperiences() {
	const dispatch = useDispatch();
	const { portfolioData } = useSelector((state) => state.root);
	const { experiences } = portfolioData;
	const { showAddEditModal, setShowAddEditModel } = React.useState(false);
	const { selectedItemForEdit, setSelectedItemForEdit } = React.useState(null);
	return (
		<div>
			<div className='grid grid-cols-4 gap-5'>
				{experiences.map((experience) => (
					<div className='shadow border-2 p-5 border-gray-400 flex flex-col gap-5'>
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
				open={showAddEditModal}
				title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}>
				<Form layout='vertical'>
					<Form.Item name='period' label='Period'>
						<input placeholder='Period' />
					</Form.Item>
					<Form.Item name='company' label='Company'>
						<input placeholder='Company' />
					</Form.Item>
					<Form.Item name='title' label='Title'>
						<input placeholder='job title' />
					</Form.Item>
					<Form.Item name='description' label='Description'>
						<textarea placeholder='Job description' />
					</Form.Item>
					<div className='flex'>
						<button className='border-primary text-primary px-5 py-2'>Cancel</button>
						<button className='bg-primary text-white px-5 py-2'>
							{selectedItemForEdit ? "Update" : "Add"}
						</button>
					</div>
				</Form>
			</Modal>
		</div>
	);
}

export default AdminExperiences;
