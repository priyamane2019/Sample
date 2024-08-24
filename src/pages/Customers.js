import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCustomer, deleteCustomer } from '../customers/customersSlice';
import { Link } from 'react-router-dom';

const Customers = () => {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const [editCustomer, setEditCustomer] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ name: '', email: '', phone: '' });

  const handleEdit = (customer) => {
    setEditCustomer(customer.id);
    setUpdatedInfo(customer);
  };

  const handleUpdate = () => {
    dispatch(updateCustomer(updatedInfo));
    setEditCustomer(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  return (
    <div>
      <h2>Customers List</h2>
      <table style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Contact No</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              {editCustomer === customer.id ? (
                <>
                  <td style={{ border: '1px solid black', padding: '5px' }}>
                    <input
                      type="text"
                      value={updatedInfo.name}
                      onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
                    />
                  </td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>
                    <input
                      type="email"
                      value={updatedInfo.email}
                      onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
                    />
                  </td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>
                    <input
                      type="text"
                      value={updatedInfo.phone}
                      onChange={(e) => setUpdatedInfo({ ...updatedInfo, phone: e.target.value })}
                    />
                  </td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>
                    <button onClick={handleUpdate}>Update</button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{customer.name}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{customer.email}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{customer.phone}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>
                    <button onClick={() => handleEdit(customer)}>Edit</button>
                    <button onClick={() => handleDelete(customer.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Go to Register Page</Link>
    </div>
  );
};

export default Customers;
