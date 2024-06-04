import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../components/staff/UserContext";

const UserNavBar = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchUserData = async () => {
            if (token) {
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };

                    const userResponse = await axios.get('http://localhost:8055/users/me?fields=*,avatar', config);
                    setUser(userResponse.data.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [setUser]);

    const handleLogOff = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
        setUser(null);
        navigate("/login");
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar bg-base-100 shadow-md mb-4 sticky top-0 z-50">
            <div className="navbar-start flex items-center">
                <a className="btn btn-ghost text-xl" onClick={() => handleNavigation("/userhome")}>Stafko.</a>
            </div>
            <div className="navbar-end flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user && user.avatar ? (
                                <img alt="User Avatar" src={`http://localhost:8055/assets/${user.avatar}`} />
                            ) : (
                                <img alt="Default Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            )}
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a onClick={handleLogOff}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserNavBar;
