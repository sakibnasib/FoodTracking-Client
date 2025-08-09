import { Link,NavLink } from 'react-router';

import { Tooltip } from "react-tooltip";
import useAuth from '../../hook/useAuth';
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  const {user,logOut,loading}=useAuth();
  
  const handleLogOut=()=>{
    logOut()
    .then(() =>{
            
        })
        .catch(error =>{
            console.log(error)
        })
  }
  // if(loading)return <Loading/>
    return (
       <div className="navbar bg-primary-content shadow-sm px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to=''
        className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
        >
            Home
            </NavLink></li>
        <li><NavLink to='/allfood'
        className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
        >
           AllFood
            </NavLink></li>
           
        { user && <>
        <li><NavLink to='/addfood'
        className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
        >
            Add Food
            </NavLink></li>
            <li><NavLink to='/myaddfood'
            className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
            >
            MyAddFood
            </NavLink></li>
        </>}
         <li><NavLink to='/about'className={({ isActive }) =>
                isActive ? "text-violet-600 underline font-semibold" : ""
              }>About</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">🥗FoodTracking</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><NavLink to=''
       className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
       >
            Home
            </NavLink></li>
        <li><NavLink to='/allfood'
        className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
        >
            AllFood
            </NavLink></li>
         { user && <>
        <li><NavLink to='/addfood'
        className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
        >
            Add Food
            </NavLink></li>
            <li><NavLink to='/myaddfood'
            className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }
            >
            MyAddFood
            </NavLink></li>
        </>}
 
            <li><NavLink to='/about'className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }>About</NavLink></li>

              <li><NavLink to='/contactUs'className={({ isActive }) =>
                isActive ? "text-green-400 underline font-semibold" : ""
              }>ContactUs</NavLink></li>

    </ul>
  </div>
  <div className="navbar-end">
     {user? <>
     <Link to='/addtocart' className='pr-2'><FaCartArrowDown size={25} /></Link>
     <div className="dropdown dropdown-end">
      
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full">
                  {/* <img alt="" src={user.photoURL} /> */}
                  <p id="my-anchor-element">
                    {" "}
                    <img alt="" src={user.photoURL} />
                  </p>
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                    place="left"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content ">
                <li>
                  <button
                    onClick={handleLogOut}
                    className="  font-medium btn btn-soft btn-primar rounded-full "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
     </> : <>
         <div className="flex">
   <button className='btn btn-outline btn-info ml-3'> <Link to="/login">Login</Link></button>
   <button className='btn btn-outline btn-info'><Link to="/register">Register</Link></button>
   </div>
        </>}
  
  </div>
</div>
    );
};

export default Navbar;