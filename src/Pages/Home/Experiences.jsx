import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { ExperiencesData } from '../../Resources/Experiences';

function Experiences() {
    const [SelectedItemIndex, setSelectedItemIndex] = React.useState(0)
    return (
        <div>
            <SectionTitle Title="Experience" />
            <div className="flex">
                <div className="flex flex-col gap-5">
                    {
                        ExperiencesData.map((experience, index) => (
                            <div className='p-5'>
                                <h1 className={`text-xl ${setSelectedItemIndex === index ? 'text-tertiary border-tertiary' : 'text-white'}`}>{experience.period}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default Experiences;
