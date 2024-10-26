

export default function Navbar() {

    return (

       <nav >


         <div className="bg-gray-500 h-24">

          

            <div >
                <h1 className="text-2xl font-bold text-white items-center py-5 mx-4  ">Welcome to Nextjs</h1>
            </div>
            

            <div className="flex justify-end items-end gap-4 w-100 mx-40 mb-20  ">
                <div className="bg-slate-900  px-5   text-white w-100 text-center  " >About</div>
                <div className="bg-slate-900  px-5   text-white w-100 text-center  ">Help</div>

            </div>
        </div>



       </nav>
    )
}