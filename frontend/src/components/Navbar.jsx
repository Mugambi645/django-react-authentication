import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
      
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          {user ? (
            <>
             <div class="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
              <div>
              <Link to="/">Home</Link>
              </div>
             <div>
             <Link to="/protected">Protected Page</Link>
             </div>
             <div>
             <button onClick={logoutUser}>Logout</button>
             </div>
              </div>
            </>
          ) : (
            <>
             <div class="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
              <div>
              <Link to="/login">Login</Link>
              </div>
             <div>
             <Link to="/register">Register</Link>
             </div>
            
              </div>
            </>
          )}
        </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
