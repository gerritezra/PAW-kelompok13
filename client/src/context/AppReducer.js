import {
  STUDENTS_GET,
  STUDENT_GET,
  STUDENT_ADD,
  STUDENT_EDIT,
  STUDENT_DELETE,
  STUDENT_ERROR,
} from "./ActionTypes";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case STUDENTS_GET:
      return { ...state, loading: false, students: payload };
    case STUDENT_GET:
      return { ...state, loading: false, student: payload };
    case STUDENT_ADD:
      return {
        ...state,
        loading: false,
        students: [payload, ...state.students],
      };
    case STUDENT_EDIT:
      return {
        ...state,
        loading: false,
        // Replace the edit student with payload in the list
        students: state.students.map((stu) =>
          stu._id === payload.id ? { ...payload.updatedStudent } : stu
        ),
      };
    case STUDENT_DELETE:
      return {
        ...state,
        loading: false,
        students: state.students.filter((stu) => stu._id !== payload),
      };
    case MAJOR_ERROR:
      return { ...state, loading: false, error: payload };
    case STUDENT_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducer;
