import React from 'react';
import './Allservices.css'
import dental from '../../images/ourservices/tooth.png'
import medicine from '../../images/ourservices/medicine.png'
import Phiseotherapy from '../../images/ourservices/Physiotherapy.png'
import pregnent from '../../images/ourservices/gynecologist.png'
import surgery from '../../images/ourservices/General_Surgery.png'
import urology from '../../images/ourservices/Dermotology & Cosmetology.png'
import Allservice from '../Allservice/Allservice';




const Allservices = () => {
    const allServices = [
        {
            _id: 1,
            name: 'General Medicine ',
            description: 'This field of medicine deals with non-surgical treatment of diseases by diagnosis through study and management with medication.',
            img: medicine,
        },
        {
            _id: 2,
            name: 'Physiotherapy',
            description: 'Physiotherapy is a health care profession which assists people to restore, maintain and maximize their strength, function, movement, and overall well-being.',
            img: Phiseotherapy,
        },
        {
            _id: 3,
            name: 'General Surgery',
            description: "Health Solution is Best Hospital For General Surgery In Dhaka. At least a five-year general medical procedure residency should be finished.",
            img: surgery,
        },
        {
            _id: 4,
            name: 'Gynecologist',
            description: 'A gynecologist arrangement is exhorted for yearly screening and any time a lady has worries about manifestations like pelvic, vulvar, or vaginal torment or sporadic uterine dying.',
            img: pregnent,
        },
        {
            _id: 5,
            name: 'Dermotology & Cosmetology',
            description: 'Healthy skin and beautiful appearance symbolise health and self-nurture and gives a sense of confidence. Being the largest organ of body, skin deserves  to sustain optimal health.',
            img: urology,
        },
        {
            _id: 6,
            name: 'Dental treatments',
            description: 'Dental treatments are carried out by a dental team, which often consists of a dentist and dental auxiliaries (dental assistants, dental hygienists, dental technicians, as well as dental therapists).',
            img: dental,
        },
    ]
    return (
        <div>
            <div className='text-center my-5'>
                <h3 className='fw-bold' style={{color:"#003f91"}}>Our Services  </h3>
                <h1>Services We Provide</h1>
            </div>
            <div className='allServices-container container gap-4'>
                {
                    allServices.map(allSservice => <Allservice
                        key={allSservice._id}
                        allSservice={allSservice}
                    ></Allservice>)
                }
            </div>
        </div>
    );
};

export default Allservices;