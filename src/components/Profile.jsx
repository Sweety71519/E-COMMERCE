import React from 'react'

export default function Profile() {
    var [user, setUser] = useState({
        img:""
    })
    async function getAPIData(){
        var response=await fetch("/user",{
            method:"get",
            headers:{
                "content-type":"application/json"
            }

        })
        response=response.json()
        var item=response.find((x)=>x.id===Number(localStorage.getItem("userid")))
        if(item)
        setUser(item)

    }
  return (
     <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <div className="col-md-6">
                    {
                        user.pic?
                        <img src={`/images/${user.pic}`} height="500px" width="100%" alt=""></img>:
                        <img src={`/images/noimage.png`} height="500px" width="100%" alt=""></img>
                    }
                    <h5 className='bg-secondary text-light p-2 text-center mt-3'>Buyer Profile</h5>
                    <tabl className="table table-bordered">
                        <tr>
                            <th>Name</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>User Name</th>
                            <td>{user.userame}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>Pin</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{user.city}</td>
                        </tr>
                        <tr>
                            <button >Update Profile</button>
                        </tr>
                    </tabl>
                </div>
            </div>
        </div>

     </div>
  )
}
