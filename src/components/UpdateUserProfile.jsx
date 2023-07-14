// import React, { useEffect, useState } from 'react'

// export default function UpdateUserProfile() {
//     var [data, setData] = useState({
//         name: "",
//         username: "",
//         email: "",
//         password: "",
//         cpassword: "",
//         address:"",
//         state:"",
//         pin:"",
//         city:""
//     })
//     function getInputFile(){

//     }
//     async function getInputData(e) {
//      var response=await fetch("/user/"+localStorage.getItem("userid"),{
//         method:"get",
//         headers:{
//             "conetnt-type":"application/json"
//         }
//      })

//     }
//     async function postData(e) {
//         e.preventDefault()

//         if (data.password === data.cpassword) {
//             var response = await fetch("/user/"+localStorage.getItem("userid"),{
//                 method: "put",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             response = await response.json()
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
//                 <h5 className='text-center p-3 bg-secondary text-light'><span className='bg-warning'>Update</span>Your Account</h5>
//                 <form onSubmit={postData}>
//                     <div className="md-6">
//                         <label>Pic</label>
//                         <input type="file" name="name" required onChange={getInputData} className="form-control" value={user.name}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Email</label>
//                         <input type="email" name="email" required onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Password</label>
//                         <input type="password" name="password" required onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Confirm Password</label>
//                         <input type="text" name="cpassword" required onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Address</label>
//                         <input type="text" rows="2" name="address" onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Full Name</label>
//                         <input type="text" name="name" required onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Full Name</label>
//                         <input type="text" name="name" required onChange={getInputData}></input>
//                     </div>
//                     {/* <div className="md-6">
//                         <label>Full Name</label>
//                         <input type="text" name="name" required onChange={getInputData}></input>
//                     </div>
//                     <div className="md-6">
//                         <label>Full Name</label>
//                         <input type="text" name="name" required onChange={getInputData}></input>
//                     </div> */}
//                     <div className="md-6">
//                         <label>Full Name</label>
//                         <button type='submit'className='btn btn-secondary w-100'>Update</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
