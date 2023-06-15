import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Hello and welcome to the Home Page</h1>

      <table className="homepage-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mohit</td>
            <td>2023-06-01</td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Subodh</td>
            <td>2023-05-15</td>
            <td>Publisher</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aditi</td>
            <td>2023-06-07</td>
            <td>Reviewer</td>
            <td>Inactive</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Sara</td>
            <td>2023-05-20</td>
            <td>Moderator</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mohak</td>
            <td>2023-06-09</td>
            <td>Publisher</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Manisha</td>
            <td>2023-05-28</td>
            <td>Reviewer</td>
            <td>Suspended</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mansi Gupta</td>
            <td>2023-06-04</td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Rahul</td>
            <td>2023-05-18</td>
            <td>Publisher</td>
            <td>Inactive</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Vivek</td>
            <td>2023-06-11</td>
            <td>Moderator</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Himanshu</td>
            <td>2023-05-25</td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
