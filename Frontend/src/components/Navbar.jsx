
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogOff = () => {
        // Delete the JWT token here
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <div className="flex items-center">
                {/* Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleNavigation('/home')}>Home</a></li>
                        <li><a onClick={() => handleNavigation('/users')}>Users</a></li>
                    </ul>
                </div>

                {/* Título "Stafko." */}
                <div className="ml-4">
                    <a className="btn btn-ghost text-xl" onClick={() => handleNavigation('/home')}>Stafko.</a>
                </div>
            </div>

            <div className="flex gap-2">
                {/* Barra de búsqueda */}
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>

                {/* Dropdown de usuario */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogOff}>Log Off</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
