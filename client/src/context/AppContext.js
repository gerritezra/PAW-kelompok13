import React, { useReducer, createContext, useContext } from "react";
import axios from "axios";

import reducer from "./AppReducer";
import {
  STUDENTS_GET,
  STUDENT_GET,
  STUDENT_ADD,
  STUDENT_EDIT,
  STUDENT_DELETE,
  STUDENT_ERROR,
} from "./ActionTypes";

const AppContext = createContext();

const initialState = {
  students: [],
  student: {},
  loading: true,
  error: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get all students
  const getStudents = async () => {
    try {
      const { data } = await axios.get("/api/students");

      dispatch({ type: STUDENTS_GET, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: STUDENT_ERROR, payload: err.message.error });
    }
  };

  // Get a single student
  const getStudent = async (stuId) => {
    try {
      const { data } = await axios.get(`/api/students/${stuId}`);

      dispatch({ type: STUDENT_GET, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Add a student
  const addStudent = async (formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/students/create",
        formData,
        config
      );

      dispatch({ type: STUDENT_ADD, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Edit a student
  const editStudent = async (stuId, formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(
        `/api/students/update/${stuId}`,
        formData,
        config
      );

      dispatch({
        type: STUDENT_EDIT,
        payload: { id: stuId, updatedStudent: data },
      });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Delete student
  const deleteStudent = async (stuId) => {
    try {
      await axios.delete(`/api/students/${stuId}`);

      dispatch({ type: STUDENT_DELETE, payload: stuId });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getStudents,
        getStudent,
        addStudent,
        editStudent,
        deleteStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
