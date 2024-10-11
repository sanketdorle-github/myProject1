import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./css/tenders_list.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Blog4 = () => {


    const [tendersData, setTendersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Items to display per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://54.169.90.210:3000/get_tender_by_organisationid",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "bearer 123",
                        },
                        body: JSON.stringify({
                            "organisation_id": 7
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setTendersData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const calculateDaysLeft = (closingDate) => {
        const currentDate = new Date();
        const closingDateObj = new Date(closingDate);
        const timeDifference = closingDateObj - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return daysLeft >= 0 ? daysLeft : 0; // Return 0 if the date has passed
    };
    if (loading) {
        return <p>Loading tenders...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Pagination logic
    const totalPages = Math.ceil(tendersData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tendersData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        // <div className="blog-area style-grid">
        <div className="container">
        <h2 className="table-heading">Tender Information</h2>
        <div className="table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th className="organisation-chain">Organisation Chain</th>
                  <th>Published Date</th>
                  <th className="opening-date">Opening Date</th>
                  <th className="closing-date">Closing Date</th>
                  <th>Price</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((tender, index) => (
                    <tr key={tender.id}>
                      <td>{indexOfFirstItem + index + 1}</td>
                      <td>{tender.tender_organisation_chain}</td>
                      <td>{tender.tender_e_Published_date}</td>
                      <td>{tender.tender_opening_date}</td>
                      <td>
                        {tender.tender_closing_date} <br />
                        <span className="days-left">{calculateDaysLeft(tender.tender_closing_date)} days left</span>
                      </td>
                      <td><span>INR <br /><span>{tender.price}</span></span></td>
                      <td>{tender.location}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>No tenders available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

        // </div>

    );
};

export default Blog4;
