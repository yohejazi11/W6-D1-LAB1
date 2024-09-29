import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="bg-[] flex justify-between items-center px-[10%]">
            <ul className="flex gap-x-9 items-center ">
            <li className="bg-[#4f2ab8] text-cyan-300 rounded-sm py-[16px] px-[32px]"><Link to='/register'>التسجيل</Link></li>
                <li><Link to='/camp'>معلومات المعسكر</Link></li>
                <li><Link to='/home'>الرئيسية</Link></li>


            </ul>
            <img className="w-[20vw]" src="https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h.png"></img>

        </div>
    )
}

export default Nav
