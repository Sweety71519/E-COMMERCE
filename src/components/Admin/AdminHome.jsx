import React from 'react'
import SideBar from './SideBar'

export default function AdminHome() {
  return (
   <div className="container-fluid my-3">
    <div className="row">
      <div className="col-md-2">
        <SideBar/>
      </div>
      <div className="col-md-10">
        <h5 className='bg-primary p-2 rounded text-light text-center'>Maincategory</h5>
        <div className="row mt-3">
          <div className="col-md-6">
            <img src="/images/p24.jpg" width="100%" height="375px" alt=''/>
          </div>
          <div className="col-md-6">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Sweety Sharma</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>Sweety Sharma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
   </div>
  )
}
