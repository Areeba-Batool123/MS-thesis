import React from 'react';
import './FacultyTable.css'
const FacultyTable = () => {
  const facultyData = [
    {
      sno: 1,
      name: "Dr. Najeed Ahmed Khan",
      email: "najeed@cloud.neduet.edu.pk",
      specialization: "Computer Vision, Image Processing, Artificial Intelligence",
    },
    {
      sno: 2,
      name: "Dr. Muhammad Mubashir Khan",
      email: "mmkhan@cloud.neduet.edu.pk",
      specialization:
        "Post-quantum cryptography to future proof against attacks, Cyber Crimes, Cybersecurity, Network Security, Privacy, Blockchain, Quantum Key Distribution, and more …",
    },
    {
      sno: 3,
      name: "Dr. Shariq Mahmood Khan",
      email: "shariq@cloud.neduet.edu.pk",
      specialization:
        "Internet-of-Things (IoT) Security, Unmanned Aerial Vehicles (UAVs) and Drones, Mobile Phone Security, Blockchain, 5G networks performance analysis, The secure and energy efficient data routing in the IoT-based networks, To propose secure scheme for the isolation of black hole attack in mobile ad hoc networks, Wireless Sensor Networks: Through Analysis in Healthcare systems, Secure Programming",
    },
    {
      sno: 4,
      name: "Dr. Waseemullah",
      email: "waseemu@cloud.neduet.edu.pk",
      specialization: "Image Processing, Databases and Software Engineering",
    },
    {
      sno: 5,
      name: "Dr. Umer Farooq",
      email: "umer@cloud.neduet.edu.pk",
      specialization:
        "Data Science, Artificial intelligence, Generative AI, Machine Learning, Image Processing, Computer Vision, Big data, Data Warehousing, Microservices architecture",
    },
    {
      sno: 6,
      name: "Dr. Maria Andaleeb Siddiqui",
      email: "mandleeb@cloud.neduet.edu.pk",
      specialization: "Machine Learning, Speech Processing",
    },
    {
      sno: 7,
      name: "Dr. Murk Marvi",
      email: "marvi@cloud.neduet.edu.pk",
      specialization: "Machine Learning, Neural Networks, Data Science, Internet-of-Things",
    },
  ];

  return (
    <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>S. No</th>
          <th>Faculty Member</th>
          <th>Email</th>
          <th>Specialisation/Proposed Projects</th>
        </tr>
      </thead>
      <tbody>
        {facultyData.map((faculty) => (
          <tr key={faculty.sno}>
            <td>{faculty.sno}</td>
            <td>{faculty.name}</td>
            <td>{faculty.email}</td>
            <td>{faculty.specialization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FacultyTable;
