import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tr from "./tr";
import { Table } from 'react-bootstrap';

export function EmployeeList(props) {

  const [result,setResult] = useState([]); 
  useEffect(()=>{
    const promise = axios.get('https://jsonplaceholder.typicode.com/users');
    
    promise.then((response)=>{
         setResult(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[]
  )
 

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <input
            className="dataTable-input"
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>
      <div className="dataTable-container">
        <Table id="datatablesSimple " striped bordered hover responsive="xl">
          <thead>
          <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
              <th>address</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
              <th>address</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </tfoot>
          <tbody>
            {
              result.map((e)=>(
                 <Tr name={e.name} username={e.username} email={e.email} company={e.company.name} address={e.address.city} phone={e.phone} website={e.website} />
              ))
            }
          </tbody>
        </Table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
