import React, { useEffect, useState } from "react";
import "./Doctors.css";
import DoctorsCard from "./../DoctorsCard/DoctorsCard";

const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    useEffect(() => {
        fetch("https://powerful-springs-25358.herokuapp.com/doctors")
            .then((res) => res.json())
            .then((data) => setAllDoctors(data));
    }, []);
    return (
        <div>
            <div className="mb-5 doctors-img custom-margin">
                <h1 className="pt-3 ps-5" style={{ color: "#003f91" }}>Our Doctors</h1>
                <h4 className="pt-1 ps-5" style={{ color: "#003f91" }}>Home / Doctors</h4>
            </div>


            <div className="container mb-5 mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {allDoctors.map((allDoctor) => (
                        <DoctorsCard
                            key={allDoctor.key}
                            allDoctor={allDoctor}
                        ></DoctorsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;