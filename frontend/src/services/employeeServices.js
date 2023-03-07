import axios from "axios";

const HOST = "http://localhost:5000/employee";

//for add employee details
export const AddEmployeeService = async (payload) => {
  try {
    const response = await axios.post(`${HOST}/addEmployee`, payload);
    if (response) {
      return {
        ok: true,
      };
    }
  } catch (err) {
    return {
      ok: false,
      err: err.response.data.status,
    };
  }
};

//for retrive the all records
export const getEmployee = async () => {
  try {
    const response = await axios.get(`${HOST}/viewEmployee`);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for update details
export const updateEmployeeService = async (id, payload) => {
  try {
    const response = await axios.post(`${HOST}/updateEmployee/${id}`, payload);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for delete details
export const deleteEmployeeService = async (id) => {
  try {
    const response = await axios.delete(`${HOST}/deleteEmployee/${id}`);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for search details
export const searchEmployeeService = async (type) => {
  try {
    const response = await axios.post(`${HOST}/searchEmployee/${type}`);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};
