import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteUser, getuser } from "../Api/Api";
import {Link} from 'react-router-dom'

const Userlist = () => {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    const response = await getuser();
    // console.log(response.data);
    setUser(response.data);
  };

  const removeUser = async (id) => {
    await deleteUser(id);
    getAllUser();
  };


  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value) => {
            const { name, email, phone, address, id } = value;
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                <Link  to={`/Update-user/${id}`}> <button>Edit</button></Link></td>
               <td>
                <button onClick={() => removeUser(id)}>Remove</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Userlist;
