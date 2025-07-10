import "./App.css";

// //Form Managment
// import { useState } from 'react'
// function App() {
//   const [formData, setFormData] = useState({
//     firstName:"",
//     lastName:"",
//     city:"",
//     gender:"",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//       <div>
//         <form onSubmit={handleSubmit} >
//           <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='Enter first name ' />
//           <br />
//           <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Enter last name ' />
//           <br />
//           <select name='city' value={formData.city} onChange={handleChange}>
//             <option value="">Select City</option>
//             <option value="Dhaka">Dhaka</option>
//             <option value="Chittagong">Chittagong</option>
//             <option value="Rajshahi">Rajshahi</option>
//             <option value="Sylhet">Sylhet</option>
//             <option value="Cimilla">Comilla</option>
//             <option value="Jessore">Jessore</option>
//             <option value="Khulna">Khulna</option>
//             <option value="Barisal">Barisal</option>
//           </select>
//           <br />
//           <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/> Male
//           <input type='radio' name='gender' value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female
//           <br />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>

//   )
// }

// export default App

// //UseEffect

// import { useEffect , useState } from 'react'
// function App() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data =await response.json();
//       setUsers(data);
//     };
//     fetchUsers();
//   }, []);

//   console.log(users);

//   return (
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             <h1>{user.name}</h1>
//             <p>{user.email}</p>
//           </div>
//         ))}

//       </div>

//   )
// }

// export default App

// //UseEffect Understanding arg and uses

// import { useEffect, useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("count", count);
//   }, [count]);

//   return <div>
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//   </div>

// }
//   export default App;

// //React Router dom

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// //Link - Basic navigation

// import { NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function Navigation() {
//   return (
//     <nav>
//       <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
//       <br />
//       <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
//       About
//       </NavLink>
//     </nav>
//   );
// }
// export default Navigation;

//Link - Basic navigation

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
