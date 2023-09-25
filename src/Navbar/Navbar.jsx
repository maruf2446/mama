// import img1 from '../../../mama//src/assets/bk.jpg'

const Navbar = () => {

    const navOption = <>
        <li className="text-white" tabIndex={0}>
            <details>
                <summary className="font-semibold text-lg">Solutions</summary>
                <ul className="p-2">
                    <li><a className="bg-blue-500">AnyCaaS</a></li>
                    <li><a className="bg-blue-500">AnyBaaS</a></li>
                    <li><a className="bg-blue-500">AnyPaaS</a></li>
                </ul>
            </details>
        </li>
        <li><a className="font-semibold text-white text-lg" href="#">Services</a></li>
        <li><a className="font-semibold text-white text-lg" href="#">About Us</a></li>
    </>

    return (
        <div className="navbar bg-blue-400 px-20 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <div>
                    <img className='w-36 h-7' src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="border px-4 py-2 text-white font-semibold text-2xl rounded-md">Countact Us</button>
            </div>
        </div>
    );
};

export default Navbar;