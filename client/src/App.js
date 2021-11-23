import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useAppContext } from "./context/AppContext";

import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import StudentList from "./components/student/StudentList";
import StudentDetails from "./components/student/StudentDetails";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";

const App = () => {
  const { getStudents } = useAppContext();

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={StudentList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/students/add' component={AddStudent} />
          <Route exact path='/students/edit/:id' component={EditStudent} />
          <Route exact path='/students/:id' component={StudentDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
