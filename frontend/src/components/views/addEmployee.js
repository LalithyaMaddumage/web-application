import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  AddEmployeeService,
  getEmployee,
  searchEmployeeService,
} from "../../services/employeeServices";
import { AddEmployeeModal } from "../modals/addEmployeeModal";
import UpdateEmployeeModal from "../modals/updateEmployeeModal";
import DeleteEmployeeModal from "../modals/deleteEmployeeModal";
import ReactPaginate from "react-paginate";

function AddEmployee() {
  //items per page count
  const itemsPerPage = 5;

  // employee list for one page
  const [currentItems, setCurrentItems] = useState([]);
  //page count
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const [EmployeeList, setEmployeelist] = useState([]);
  const [show, setShow] = useState(false);

  const [updateModalData, setUpdateModalData] = useState();

  //function to close all modals
  const handleClose = () => {
    setShow(false);
    setOpenDeleteModal(false);
    setOpenModal(false);
  };

  //function toopen update modal and set data
  const handleShow = (values) => {
    setShow(true);
    setUpdateModalData(values);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleShowAddModal = () => {
    setOpenModal(true);
  };

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState();
  const handleShowDeleteModal = (value) => {
    setOpenDeleteModal(true);
    setDeleteModalData(value);
  };

  //get all employees function
  const getAllEmployee = async () => {
    let response = await getEmployee();

    if (response.ok) {
      setEmployeelist(response.data);
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(response.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(response.data.length / itemsPerPage));
    }
  };

  useEffect(() => {
    getAllEmployee();
  }, [itemOffset, itemsPerPage]);

  //function for filter employee by type
  const searchRecord = async (type) => {
    if (type != "Employee Type") {
      let response = await searchEmployeeService(type);

      if (response.ok) {
        setEmployeelist(response.data);
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(response.data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(response.data.length / itemsPerPage));
      }
    } else {
      getAllEmployee();
    }
  };

  //function for pagination
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % EmployeeList.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div>
        <Row className="rw-head">
          <Col sm={5} className="col-clr">
            <div class="col">
              <h4 className="float-left ">People</h4>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ margin: 60 }} className=" page-component-body">
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div style={{ maxHeight: 2 }}>
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class="btn btn-primary "
              data-toggle="modal"
              onClick={() => handleShowAddModal()}
            >
              Add People
            </button>
          </div>

          <div class="form-group col-md-2">
            <select
              id="inputState"
              class="form-control"
              onChange={(e) => {
                searchRecord(e.target.value);
              }}
            >
              <option selected>Employee Type</option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Contract Basis">Contract Basis</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="table-emp mt-3">
          <div class="row table-head-search"></div>

          <table id="employee" class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th class="text-center">Display Name</th>
                <th class="text-center">Emp ID</th>
                <th class="text-center">Designation</th>
                <th class="text-center">Emp Type</th>
                <th class="text-right">Experience</th>

                <th class="text-center"></th>
              </tr>
            </thead>

            <tbody>
              {/* array mapping for set employee details to table */}
              {currentItems.map((value) => {
                return (
                  <tr>
                    <td className="text-center">{value.employeeName}</td>
                    <td class="text-center">{value._id}</td>
                    <td class="text-center">{value.Designation}</td>
                    <td class="text-center">{value.employeeType}</td>
                    <td class="text-right">{value.Experience}</td>
                    <td class="text-center">
                      <button
                        style={{ textDecoration: "none" }}
                        type="button"
                        class="btn btn-link"
                        onClick={() => handleShow(value)}
                      >
                        Edit
                      </button>
                      <button
                        style={{ textDecoration: "none", color: "red" }}
                        type="button"
                        class="btn btn-link"
                        onClick={() => handleShowDeleteModal(value._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot class="tfoot-light"></tfoot>
          </table>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active" //pagination
        />

        {/* update emplyee modal open */}
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {
            setShow(false);
          }}
        >
          <UpdateEmployeeModal
            onHide={() => {
              setShow(false);
            }}
            data={updateModalData}
          />
        </Modal>

        {/* add employee modal open */}
        <Modal
          show={openModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => {
            setShow(false);
          }}
        >
          <AddEmployeeModal onHide={() => handleClose()} />
        </Modal>

        {/* delete employee modal open */}
        <Modal show={openDeleteModal} onHide={handleClose}>
          <DeleteEmployeeModal
            data={deleteModalData}
            onHide={() => handleClose()}
          />
        </Modal>
      </div>
    </div>
  );
}

export default AddEmployee;
