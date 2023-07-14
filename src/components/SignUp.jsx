// import React, { useState } from 'react'

// export default function SignUp() {
//     var [user, setUser] = useState({
//         name: "",
//         username: "",
//         email: "",
//         password: "",
//         cpassword: ""
//     })
//     function getInputData(e) {


//     }
//     async function postData(e){
//         e.preventDefault()
//         if(data.password===data.cpassword){
//             var response= await fetch("/user",{
//                 method:"get",
//                 headers:{
//                     "content-type":"application/json"
//                 }
//             })
//             response=await response.json()
//             // var item=response.slice(1).find((x) => x.username)===data.username{
//             //     Alert("User Name Already Exist.")
//             // }
//             // else{

//             // }

//         }
       
       

//     }
//     return (
//         <div className="container-fluid my-5">
//             <div className="w-100">
//                 <div className="w-75 card py-5 px-3 m-auto"></div>
//                 <h5 className='text-center p-3 bg-secondary text-light'><span className='bg-warning'>Create</span>Your Account</h5>
//                 <form onSubmit={postData}>
//                 <div className="md-6"></div>
//                 <label>Full Name</label>
//                 </form>
//             </div>
//         </div>
//     )
// }
