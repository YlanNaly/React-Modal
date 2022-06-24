import React from "react";
import { useState } from "react";
import'./modal.css';
import client from "./Requete";

export default function Modal({ show , closeModalHandler}){   
    const [Name, setname] = useState('');
    const [Company, setCompany] = useState('');
    const [Phone, setPhone] = useState('');
    const [Website, setWebsite] = useState('');
    const [Username, setUsername] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');

    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(Username, Name,Company,Website,Phone,Email,Address);
     };
  
     const addPosts = (Username, Name,Company,Website,Phone,Email,Address) => {
        client
           .post('https://jsonplaceholder.typicode.com/users', {
             username : Username,
             Name : Name ,
             company : Company,
             website : Website,
             phone : Phone,
             Email : Email,
             Address : Address
           })
           .then((response) => {
              setPosts([response.data, ...posts]);
           });
        setname('');
        setCompany('');
        setPhone('');
        setUsername('');
        setWebsite('');

     };

     const Take =(e)=>{
        setname(e.target.value);
     }
     const Take1 =(e)=>{
        setUsername(e.target.value);
     }
     const Take2 =(e)=>{
        setCompany(e.target.value);
     }
     const Take3 =(e)=>{
        setPhone(e.target.value);
     }
     const Take4 =(e)=>{
        setWebsite(e.target.value);
     }
     const Take5 =(e)=>{
        setEmail(e.target.value);
     }
     const Take6 =(e)=>{
        setAddress(e.target.value);
     }

     
    return(
        <>
      <div className="modal-wrapper"
      style={{
        transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
      >
        <div className="modal-header" onClick={closeModalHandler}>
            <b className="add" > ADD ME </b>
            <span className="close-modal-btn"onClick={closeModalHandler} >X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={Take} placeholder="Name"/>
                <input type="text" onChange={Take1} placeholder="Username"/>
                <input type="text" onChange={Take2} placeholder="Email"/>
                <input type="text" onChange={Take3}  placeholder="Company"/>
                <input type="text" onChange={Take4} placeholder="Address"/>
                <input type="text" onChange={Take5} placeholder="Phone"/>
                <input type="text" onChange={Take6} placeholder="Website"/>
                <button className="btn-cancel" >Add User</button>
                </form>

            </div>
            <div className="modal-footer">
               
            </div>
        </div>
      </div>
      </>      
    )
}