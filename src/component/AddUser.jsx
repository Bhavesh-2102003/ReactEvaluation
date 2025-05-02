import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser()
{

    const [name,setName]=useState(null);
    const [username,setUsername]=useState(null);
    const [email,setEmail]=useState(null);
    const [phone,setPhone]=useState(null);
    const [website,setWebsite]=useState(null);
    const [company,setCompany]=useState(null);
    const navigate=useNavigate();

    const handleSubmit=async(event)=>{
        event.preventDefault();

        let body={
            "name":name,
            "username":username,
            "email":email,
            "phone":phone,
            "website":website,
            "company":{
                "name":company
            }
        }

        

        let response=await axios.post("https://jsonplaceholder.typicode.com/users",body);
        console.log("Added User",response);
        navigate("/")
    }

    return (
        <div className="container mt-4">
          <div className="card">
            <div className="card-header">
              <h4>Add New User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={(event)=>{handleSubmit(event)}}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" 
                    onChange={(event)=>{setName(event.target.value)}}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" 
                    onChange={(event)=>{setUsername(event.target.value)}}/>
                  </div>
                </div>
      
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" 
                    onChange={(event)=>{setEmail(event.target.value)}}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" 
                    onChange={(event)=>{setPhone(event.target.value)}}/>
                  </div>
                </div>
      
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="website" className="form-label">Website</label>
                    <input type="url" className="form-control" id="website" 
                    onChange={(event)=>{setWebsite(event.target.value)}}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="company" 
                    onChange={(event)=>{setCompany(event.target.value)}}/>
                  </div>
                </div>
      
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default AddUser;