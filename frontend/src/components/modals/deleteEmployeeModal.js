import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { deleteEmployeeService } from "../../services/employeeServices";

const DeleteEmployeeModal = (props) => {
  const deleteData = async () => {
    let response = await deleteEmployeeService(props.data);

    if (response.ok) {
      //alert box for success msg
      Swal.fire({
        icon: "success",
        title: "Employee has deleted !",
        showConfirmButton: false,
      });
      window.location.reload(); //reload page
    } else {
      //alert box for error msg
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Employee cannot delete!",
      });
    }
  };

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Delete People</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{ color: "red" }}>
          Are you sure do you want to delete this employee ?
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={deleteData}>
          Confirm
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default DeleteEmployeeModal;
