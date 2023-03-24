import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./CSS/TaskPage.css";
import AddSprint from "./Sprint/AddSprint";

const init = {
  title: "",
  assignee: "",
  status: false,
  types: "",
};

const TaskPage = () => {
  const [form, setForm] = useState(init);
  const [data, setData] = useState([]);
  const toast = useToast();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(form)
    axios.post("http://localhost:8080/task", form).then((res) => {
      console.log(res.data.message);
      toast({
        title: `${res.data.message}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      getTask();
    });
  }

  const getTask = () => {
    axios.get("http://localhost:8080/task").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const DeleteTask = (id) => {
    axios.delete(`http://localhost:8080/task/${id}`).then((res) => {
      toast({
        title: `${res.data.message}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      getTask();
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div id="mainTaskDiv">
      <div id="weekMainDiv">
        <AddSprint />
      </div>

      <div id="taskDiv">
        <AddTask handleChange={handleChange} handleSubmit={handleSubmit} />
        <ShowTask data={data} DeleteTask={DeleteTask} getTask={getTask} />
      </div>
    </div>
  );
};

export default TaskPage;
