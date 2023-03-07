import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { AddEmployeeService } from "../../services/employeeServices";

export const AddEmployeeModal = (props) => {
  //useStates for set employee details
  const [employeeName, setEmployeeName] = useState("");
  const [nameWithInitials, setNameWithInitials] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Designation, setDesignation] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [Experience, setExperience] = useState("");
  const [Salary, setSalary] = useState("");
  const [personalNotes, setPersonalNotes] = useState("");

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

    if (!Gender) {
      Swal.fire({
        icon: "error",
        text: "Please select the gender",
      });
    } else if (!employeeType) {
      Swal.fire({
        icon: "error",
        text: "Please select the Employee type",
      });
    } else {
      //calling employee adding function
      let response = await AddEmployeeService(newEmployee);

      if (response.ok) {
        //alert box for success msg
        Swal.fire({
          icon: "success",
          title: "Employee has saved !",
          showConfirmButton: false,
          timer: 2500,
        });
        window.location.reload(); //page refress
      } else {
        //alert box for error msg
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Employee cannot add !",
        });
      }
    }
  };
  return (
    <div>
      {/* modal for add employee details form */}
      <Modal.Header closeButton>
        <Modal.Title>Add People</Modal.Title>
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
                <option selected>Select Gender</option>
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
                <option selected>Select Type</option>
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
        {/* button for close modal */}
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        {/* button for send data  */}
        <Button variant="primary" onClick={() => sendData()}>
          Add People
        </Button>
      </Modal.Footer>
    </div>
  );
};
