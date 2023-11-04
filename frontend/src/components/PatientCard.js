import React from 'react';
import { Link } from "react-router-dom";
import './PatientCard.css'; // Create the corresponding CSS file

function PatientCard({ number, name, details }) {
    return (
        <Link to={`/profile/${name}`}>
            <div className="patient-card">
                <div>
                <div className="patient-header">
                    <div className="patient-number">{number}</div>
                    <div className="patient-name">{name}</div>
                </div>
                <div className="patient-details">{details}</div>
                </div>
            </div>
        </Link>
    );
}

export default PatientCard;