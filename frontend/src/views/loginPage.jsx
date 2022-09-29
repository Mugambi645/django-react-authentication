import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
<>

    <div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto border-2">
      <span class="block w-full text-xl uppercase font-bold mb-4 ">Login</span>      
        <form class="mb-4 " onSubmit={handleSubmit}>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-md mb-1">Username</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="username" id="username" placeholder="Enter username"></input>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-md mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"></input>
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>

    </div>
  </div>

</>
  );
};

export default LoginPage;
