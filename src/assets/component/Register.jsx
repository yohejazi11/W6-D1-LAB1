import Nav from './Nav.jsx'
function Register() {
    return (
        <div className='h-[100vh]'>
            <Nav></Nav>

            <div className='w-[100%] flex justify-center mt-[10vh]  '>
                <div className='flex flex-col bg-[#e7ddff] w-[50%] rounded-md h-[60vh] justify-center items-center gap-y-[16px]'>
                    <h1 className='font-bold text-[2rem] text-[#4f2ab8]'>تسجيل الدخول</h1>
                    <input className='rounded-sm px-[32px] py-[16px] bg-[#e7ddff] text-black w-[40%] border-[2px] border-slate-800' type='email' placeholder='الايميل'></input>
                    <input className='rounded-sm px-[32px] py-[16px] bg-[#e7ddff] text-black w-[40%] border-[2px] border-slate-800' type='password' placeholder='كلمة السر'></input>
                    <button className='rounded-sm px-[32px] py-[16px] bg-[#4f2ab8] text-cyan-300 w-[40%]'>تسجيل الدخول</button>
                    <p>نسيت كلمة المرور</p>
                </div>
            </div>
        </div>
    )
}

export default Register
