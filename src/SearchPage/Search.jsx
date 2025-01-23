import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./Search.css";
import Navbar from "./Navbar";
import Footer from './Footer.jsx';

function Search() {
  const [data, setData] = useState([]); // Full data from Excel
  const [filteredData, setFilteredData] = useState([]); // Filtered data for the table
  const [search, setSearch] = useState(""); // Global search query
  const [filters, setFilters] = useState({
    name: "",
    supervisor: "",
    batch: "",
    department: "",
    thesisName: "",
    driveLink: ""
  });

  // Load Excel file data
  useEffect(() => {
    const fetchData = async () => {
      const file = "/Book1.xlsx"; // Path to the Excel file in the public folder
      try {
        const response = await fetch(file);
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook = XLSX.read(e.target.result, { type: "binary" });
          const sheetName = workbook.SheetNames[0]; // Get the first sheet
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON

          // Normalize keys to match React table references
          const normalizedData = jsonData.map((row) => ({
            name: row["Name"] || row["name"] || "",
            supervisor: row["Supervisor"] || row["supervisor"] || "",
            batch: row["Batch"] || row["batch"] || "",
            department: row["Department"] || row["department"] || "",
            thesisName: row["Thesis Name"] || row["thesisName"] || "",
            driveLink: row["Drive Link"] || row["driveLink"] || ""
          }));

          setData(normalizedData);
          setFilteredData(normalizedData);
        };
        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    };

    fetchData();
  }, []);

  // Handle global search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  // Handle filter inputs
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value.toLowerCase() };
    setFilters(newFilters);

    const filtered = data.filter((row) =>
      Object.entries(newFilters).every(
        ([key, filterValue]) =>
          !filterValue || String(row[key]).toLowerCase().includes(filterValue)
      )
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-10">
        {/* Search and Filter Inputs */}
        <h1
          className="max-w-full font-extrabold text-center pt-0 mx-auto text-transparent bg-clip-text ml-10 bg-gradient-to-r from-[#4A90E2] to-[#002B5C] my-1 mb-5 leading-snug"
          id="margin2"
          style={{ fontSize: "4rem", whiteSpace: "nowrap" }} // Ensures the heading doesn't wrap
        >
          MS Thesis Management System
        </h1>
        <h1
          id="colour1"
          className="max-w-full font-extrabold text-center pt-0 mx-auto text-transparent bg-clip-text ml-10 bg-gradient-to-r from-[#4A90E2] to-[#002B5C] my-1 mb-5 leading-snug"
        >
          Search
        </h1>
        <div className="mb-4 flex flex-wrap gap-4" id="margin">
          <input
            type="text"
            placeholder="Global Search..."
            value={search}
            onChange={handleSearch}
            className="p-2 border rounded w-1/6"
            
          />
          <input
            type="text"
            name="name"
            placeholder="Filter by Name"
            value={filters.name}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6"
          />
          <input
            type="text"
            name="supervisor"
            placeholder="Filter by Supervisor"
            value={filters.supervisor}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6"
          />
          <input
            type="number"
            name="batch"
            placeholder="Filter by Batch"
            value={filters.batch}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6 "
          />
          <input
            type="text"
            name="department"
            placeholder="Filter by Department"
            value={filters.department}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6"
          />
          <input
            type="text"
            name="thesisName"
            placeholder="Filter by Thesis Name"
            value={filters.thesisName}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6"
          />
          <input
            type="text"
            name="driveLink"
            placeholder="Filter by Drive Link"
            value={filters.driveLink}
            onChange={handleFilterChange}
            className="p-2 border rounded w-1/6"
          />
        </div>

        {/* Data Table */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Supervisor</th>
              <th className="border border-gray-300 p-2">Batch</th>
              <th className="border border-gray-300 p-2">Department</th>
              <th className="border border-gray-300 p-2">Thesis Name</th>
              <th className="border border-gray-300 p-2">Drive Link</th>
            </tr>
          </thead>
          <tbody>
  {filteredData.length > 0 ? (
    filteredData.map((row, index) => (
      <tr key={index}>
        <td className="border border-gray-300 p-2">{row.name}</td>
        <td className="border border-gray-300 p-2">{row.supervisor}</td>
        <td className="border border-gray-300 p-2">{row.batch}</td>
        <td className="border border-gray-300 p-2">{row.department}</td>
        <td className="border border-gray-300 p-2">{row.thesisName}</td>
        <td className="border border-gray-300 p-2">
          {row.driveLink ? (
            <a href={row.driveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {row.driveLink}
            </a>
          ) : (
            "No Link"
          )}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="border border-gray-300 p-4 text-center" colSpan={6}>
        No Data Found
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Search;
