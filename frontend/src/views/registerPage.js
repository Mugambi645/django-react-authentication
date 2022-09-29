import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
   <>

<div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto border-2">
      <span class="block w-full text-xl uppercase font-bold mb-4 ">Sign up</span>      
        <form class="mb-4 " onSubmit={handleSubmit}>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-md mb-1">Username</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="username" id="username"  onChange={e => setUsername(e.target.value)} placeholder="Enter username" required></input>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-md mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required></input>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-md mb-1">Confirm Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="confirm-password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" required></input>
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Sign up</button>
        </form>

    </div>
  </div>
   </>
  );
}

export default Register;
