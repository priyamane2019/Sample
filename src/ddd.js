// // src/pages/Register.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addCustomer } from '../features/customers/customersSlice';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCustomer({
//       ...customer,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addCustomer({ ...customer, id: Date.now() }));
//     navigate('/customers');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={customer.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={customer.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Phone:</label>
//         <input type="text" name="phone" value={customer.phone} onChange={handleChange} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
// // src/pages/Customers.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateCustomer, deleteCustomer } from '../features/customers/customersSlice';

// const Customers = () => {
//   const customers = useSelector((state) => state.customers.customers);
//   const dispatch = useDispatch();

//   const [editCustomer, setEditCustomer] = useState(null);
//   const [updatedInfo, setUpdatedInfo] = useState({ name: '', email: '', phone: '' });

//   const handleEdit = (customer) => {
//     setEditCustomer(customer.id);
//     setUpdatedInfo(customer);
//   };

//   const handleUpdate = () => {
//     dispatch(updateCustomer(updatedInfo));
//     setEditCustomer(null);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteCustomer(id));
//   };

//   return (
//     <div>
//       <h2>Customers List</h2>
//       <ul>
//         {customers.map((customer) => (
//           <li key={customer.id}>
//             {editCustomer === customer.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={updatedInfo.name}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
//                 />
//                 <input
//                   type="email"
//                   value={updatedInfo.email}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
//                 />
//                 <input
//                   type="text"
//                   value={updatedInfo.phone}
//                   onChange={(e) => setUpdatedInfo({ ...updatedInfo, phone: e.target.value })}
//                 />
//                 <button onClick={handleUpdate}>Update</button>
//               </div>
//             ) : (
//               <div>
//                 <span>{customer.name} - {customer.email} - {customer.phone}</span>
//                 <button onClick={() => handleEdit(customer)}>Edit</button>
//                 <button onClick={() => handleDelete(customer.id)}>Delete</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Customers;
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './pages/Register';
// import Customers from './pages/Customers';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
