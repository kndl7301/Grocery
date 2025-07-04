import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BASE_URL = process.env.REACT_APP_API_URL || "https://grocerry-rkt8.onrender.com";
function TopSearchesTable() {
  const [topTerms, setTopTerms] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/search/top`)
      .then(res => setTopTerms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
     
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">Product / Word</th>
            <th scope="col">Searched Times </th>
          </tr>
        </thead>
        <tbody>
          {topTerms.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center">Veri bulunamadı.</td>
            </tr>
          ) : (
            topTerms.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.isim}</td>
                <td>{item.count}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TopSearchesTable;
