import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./css/tenders_list.css"; // Assuming you are using the same CSS as the first table

const BlogDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://54.169.90.210:3000/get_tender_details_byid",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "bearer 123",
            },
            body: JSON.stringify({
              tender_id: "2024_anmc_1101008_1",
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className=" container table-container">
      <h2 className="table-heading">Tender Details</h2>
      <div className="table-container">
        {/* Basic Details Table */}
        <h2>Basic Details</h2>
        <table>
          <tbody>
            {Object.entries(data.basic_details).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace(/_/g, " ")}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="table-container">
        {/* Covers Information Table */}
        <h2>Covers Information</h2>
        {data.covers_information.map((cover, index) => (
          <div key={index}>
            <h3>Cover {cover.cover_no}</h3>
            <table>
              <tbody>
                <tr>
                  <td>Cover Type</td>
                  <td>{cover.cover_type}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    {Array.isArray(cover.description) ? (
                      <ul>
                        {cover.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      cover.description
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Document Type</td>
                  <td>{cover.document_type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <hr />
      <div className="table-container">
        {/* Critical Dates Table */}
        <h2>Critical Dates</h2>
        <table>
          <tbody>
            {Object.entries(data.critical_dates).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace(/_/g, " ")}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <hr />
        <div className="table-container">
        {/* EMD Fee Details Table */}
        <h2>EMD Fee Details</h2>
        <table>
          <tbody>
            {Object.entries(data.emd_fee_details).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace(/_/g, " ")}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="table-container">
        {/* Payment Instruments Table */}
        <h2>Payment Instruments</h2>
        <table>
          <thead>
            <tr>
              <th>Bank Name</th>
            </tr>
          </thead>
          <tbody>
            {data.payment_instruments.online_bankers.map((bank, index) => (
              <tr key={index}>
                <td>{bank.bank_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr />
      <div className="table-container">
        {/* Tender Fee Details Table */}
        <h2>Tender Fee Details</h2>
        <table>
          <tbody>
            {Object.entries(data.tender_fee_details).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace(/_/g, " ")}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="table-container">
        {/* Tender Inviting Authority Table */}
        <h2>Tender Inviting Authority</h2>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{data.tender_inviting_authority.name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{data.tender_inviting_authority.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="table-container">
        {/* Tender Documents Table */}
        {data.tenders_documents.map((docCategory, index) => (
          <div key={index}>
            {Object.keys(docCategory).map((docKey, i) => (
              <div key={i}>
                {/* <h3>{docKey.replace(/_/g, " ")}</h3> */}
                <h3>Nit Document</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Document Name</th>
                      <th>Document Size (KB)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docCategory[docKey].map((doc, j) => (
                      <tr key={j}>
                        <td>{doc.description}</td>
                        <td>{doc.document_name}</td>
                        <td>{doc.document_size_in_kb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
        </div>
        <hr />
        <div className="table-container">


        {/* Work Item Details Table */}
        <h2>Work Item Details</h2>
        <table>
          <tbody>
            {Object.entries(data.work_item_details).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace(/_/g, " ")}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogDetail;
