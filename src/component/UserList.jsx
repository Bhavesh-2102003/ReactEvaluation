import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList()
{
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    useEffect(()=>{

        const getUserDetails=async()=>{
            let response=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data)
        }
        
        getUserDetails();

    },[])

    const deleteUser=async(id)=>{
        let response=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log("Deleted User");
        setUsers(users.filter(user=>user.id!==id))
    }


    return (
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>User List</h1>
            <button className="btn btn-primary"
            onClick={()=>{navigate("/adduser")}}
            >
              Add User
            </button>
          </div>
          
          <div className="row">
            {users.map(user => (
              <div key={user.id} className="col-12 mb-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{user.name}</h5>
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>{deleteUser(user.id)}}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 mb-2">
                        <p><strong>Username:</strong> {user.username}</p>
                      </div>
                      <div className="col-12 mb-2">
                        <p><strong>Email:</strong> {user.email}</p>
                      </div>
                      <div className="col-12 mb-2">
                        <p><strong>Phone:</strong> {user.phone}</p>
                      </div>
                      <div className="col-12 mb-2">
                        <p><strong>Website:</strong> {user.website}</p>
                      </div>
                      <div className="col-12 mb-2">
                        <p><strong>Company:</strong> {user.company.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default UserList;