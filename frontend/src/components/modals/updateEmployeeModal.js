import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Moment from "moment";
import Swal from "sweetalert2";
import { updateEmployeeService } from "../../services/employeeServices";
import moment from "moment";

const UpdateEmployeeModal = (props) => {
  //used moment for format date
  let DOBMoment = moment(props?.data?.DOB).format("YYYY-MM-DD");

  let joinDateMoment = moment(props?.data?.joinDate).format("YYYY-MM-DD");

  //useState for set all employee details
  const [employeeName, setEmployeeName] = useState(props?.data?.employeeName);
  const [nameWithInitials, setNameWithInitials] = useState(
    props?.data?.nameWithInitials
  );
  const [displayName, setDisplayName] = useState(props?.data?.displayName);
  const [Gender, setGender] = useState(props?.data?.Gender);
  const [DOB, setDOB] = useState(DOBMoment);
  const [Email, setEmail] = useState(props?.data?.Email);
  const [mobileNumber, setMobileNumber] = useState(props?.data?.mobileNumber);
  const [Designation, setDesignation] = useState(props?.data?.Designation);
  const [employeeType, setEmployeeType] = useState(props?.data?.employeeType);
  const [joinDate, setJoinDate] = useState(joinDateMoment);
  const [Experience, setExperience] = useState(props?.data?.Experience);
  const [Salary, setSalary] = useState(props?.data?.Salary);
  const [personalNotes, setPersonalNotes] = useState(
    props?.data?.personalNotes
  );

  const sendData = async () => {
    const newEmployee = {
      employeeName,
      nameWithInitials,
      displayName,
      Gender,
      DOB,
      Email,
      mobileNumber,
      Designation,
      employeeType,
      joinDate,
      Experience,
      Salary,
      personalNotes,
    };
    //calling employee update function
    let response = await updateEmployeeService(props?.data?._id, newEmployee);

    if (response.ok) {
      //alert box success msg
      Swal.fire({
        icon: "success",
        title: "Employee has updated !",
        showConfirmButton: false,
        timer: 2500,
      });
      window.location.reload(); //reload page
    } else {
      //alert box for error msg
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Employee cannot update!",
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Update People</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={sendData}>
          <div class="form-group" style={{ alignContent: "left" }}>
            <label style={{ color: "#00318C" }} for="inputName">
              Full Name*
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              value={employeeName}
              onChange={(e) => {
                setEmployeeName(e.target.value); //asign values
              }}
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label
                class
                name="float-left"
                style={{ color: "#00318C" }}
                for="inputNameInitials"
              >
                Name with Initials*
              </label>
              <input
                type="text"
                class="form-control"
                id="inputNameWithInitials"
                value={nameWithInitials}
                onChange={(e) => {
                  setNameWithInitials(e.target.value); //asign values
                }}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="inputDisplayName">
                Preffered / Display Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputDisplayName"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value); //asign values
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="gender">
                Gender
              </label>
              <select
                class="custom-select mr-sm-2"
                id="gender"
                value={Gender}
                onChange={(e) => {
                  setGender(e.target.value); //asign values
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="dob">
                Date of Birth
              </label>
              <input
                type="date"
                class="form-control"
                id="dob"
                value={DOB}
                onChange={(e) => {
                  setDOB(e.target.value); //asign values
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="inputEmail4">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value); //asign values
                }}
              />
            </div>
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="contact">
                Mobile Number
              </label>
              <input
                type="number"
                class="form-control"
                id="contact"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value); //asign values
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="designation">
                Designation
              </label>
              <input
                type="text"
                class="form-control"
                id="designation"
                value={Designation}
                onChange={(e) => {
                  setDesignation(e.target.value); //asign values
                }}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="employeeType">
                Employee Type
              </label>
              <select
                class="custom-select mr-sm-2"
                id="employeeType"
                value={employeeType}
                onChange={(e) => {
                  setEmployeeType(e.target.value); //asign values
                }}
              >
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract Basis">Contract Basis</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="joinDate">
                Joined Date
              </label>
              <input
                type="date"
                class="form-control"
                id="joinDate"
                value={joinDate}
                onChange={(e) => {
                  setJoinDate(e.target.value); //asign values
                }}
              />
            </div>
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="experience">
                Experience
              </label>
              <input
                type="text"
                class="form-control"
                id="experience"
                value={Experience}
                onChange={(e) => {
                  setExperience(e.target.value); //asign values
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label style={{ color: "#00318C" }} for="salary">
                Salary
              </label>
              <input
                type="number"
                class="form-control"
                id="salary"
                value={Salary}
                onChange={(e) => {
                  setSalary(e.target.value); //asign values
                }}
              />
            </div>
          </div>
          <div class="form-group">
            <label style={{ color: "#00318C" }} for="personalNotes">
              Personal Notes
            </label>
            <textarea
              class="form-control"
              id="personalNotes"
              rows="3"
              value={personalNotes}
              onChange={(e) => {
                setPersonalNotes(e.target.value); //asign values
              }}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={() => sendData()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default UpdateEmployeeModal;
