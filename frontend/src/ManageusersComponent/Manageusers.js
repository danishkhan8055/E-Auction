import './Manageusers.css';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { _apiurluser } from '../apiURLs';
import { Link, useNavigate } from 'react-router-dom';

function Manageusers() {

  const [userDetails, setUserDetails] = useState([]); 
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get(_apiurluser + "fetch?role=user").then((response) => {
        setUserDetails(response.data); 
    });
  }, []); // Add empty dependency array to prevent infinite loop

  const manageuserstatus = (_id, s) => {
    let updatedDetails;
    if (s === "block") {
      updatedDetails = {"condition_obj": {"_id": _id}, "set_condition": {"status": 0}};
    } else if (s === "verify") {
      updatedDetails = {"condition_obj": {"_id": _id}, "set_condition": {"status": 1}};
    } else if (s === "delete") {
      updatedDetails = {"data": {"_id": _id}};
    } else if (s === "toggleActive") {
      // Toggle the active/inactive status
      updatedDetails = {"condition_obj": {"_id": _id}, "set_condition": {"isActive": true}};
    }

    axios.patch(_apiurluser + "update", updatedDetails)
      .then((response) => {
        // Directly update state instead of reloading the page
        setUserDetails(prevDetails => {
          return prevDetails.map(user => {
            if (user._id === _id) {
              return s === "delete"
                ? null
                : { ...user, isActive: !user.isActive }; // Toggle 'isActive' status
            }
            return user;
          }).filter(Boolean); // Remove deleted user
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-12">
            <h1 className="display-5 text-uppercase mb-4">
              View & Manage <span className="text-primary">User Details</span>
            </h1>
            <div className="table-responsive">
              <table className="manageusers-table">
                <thead>
                  <tr>
                    <th>RegID</th>
                    <th>Name</th>    
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.map((row) => (
                    <tr key={row._id}>
                      <td>{row._id}</td>
                      <td>{row.name}</td>   
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.gender}</td>
                      <td>{row.info}</td>
                      <td>
                        {row.status === 0 && (
                          <button className="status-btn verify" onClick={() => manageuserstatus(row._id, "verify")}>
                            Verify User
                          </button>
                        )}
                        {row.status === 1 && (
                          <button className="status-btn block" onClick={() => manageuserstatus(row._id, "block")}>
                            Block User
                          </button>
                        )}
                        {row.isActive ? (
                          <button className="status-btn inactive" onClick={() => manageuserstatus(row._id, "toggleActive")}>
                            Deactivate
                          </button>
                        ) : (
                          <button className="status-btn active" onClick={() => manageuserstatus(row._id, "toggleActive")}>
                            Activate
                          </button>
                        )}
                      </td>
                      <td>
                        <button className="status-btn delete" onClick={() => manageuserstatus(row._id, "delete")}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>  
  );
}

export default Manageusers;
