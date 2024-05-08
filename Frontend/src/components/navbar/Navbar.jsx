import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const handleLogOff = () => {
        // Delete the JWT token here
        localStorage.removeItem("token");
        // Redirect to the login page
        navigate("/login");
    };

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="navbar bg-base-100 shadow-md mb-4">
            <div className="navbar-start flex items-center">
                <div className="dropdown mr-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleNavigation("/users")}>Staff</a></li>
                        <li><a onClick={() => handleNavigation("/projects")}>Projects</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={() => handleNavigation("/home")}>Stafko.</a>
            </div>
            <div className="navbar-end flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogOff}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NavBar;