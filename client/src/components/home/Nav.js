import { Link } from "react-router-dom";
import {BiSearch,BiCart} from "react-icons/bi";
import { useDispatch, useSelector  } from "react-redux";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
import Search from "./Search";

const Nav = () => {
    const {userToken, user} = useSelector(state => state.authReducer)
    const {searchBar} = useSelector((state)=>state.globalReducer)
    const {items,total} = useSelector(state => state.cartReducer)  
    const dispatch = useDispatch();
    return(
        <>
            <div className="nav">
                <div className="my-container">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <img className="h-20 w-32 mb-3 inline" src="/logo.png" alt="logo.png" />
                            <span className="inline -ml-6 font-bold text-2xl font-brandTitle text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-fuchsia-400">E-Bazaar</span>
                        </Link>
                        <ul className="flex items-center">
                            <li className="nav-li"><BiSearch size={25} onClick={()=>dispatch(toggleSearchBar())}/></li>
                            
                            {userToken ? <li className="nav-li">
                                <Link className="nav-link" to="/user">{user?.name}</Link>
                                </li> : <li className="nav-li">
                                    <Link className="nav-link" to="/login">Sign In</Link>
                                </li> }
                                
                            <li className="nav-li relative">
                                <Link to="/cart">
                                    <BiCart size={28}/>
                                    <span className="nav-circle">{items}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Search/> 
        </>
    )
}

export default Nav;