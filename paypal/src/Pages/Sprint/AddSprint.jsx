import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/AddSprint.css";

const init = {
  sprint: "",
};

const AddSprint = () => {
  const [form, setForm] = useState(init);
  const [data, setData] = useState([]);

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
    axios.post("http://localhost:8080/sprint", form).then((res) => {
      console.log(res.data.message);
      getWeek();
    });
  }

  const getWeek = () => {
    axios.get("http://localhost:8080/sprint").then((res) => {
      setData(res.data);
    });
  };

  const deleteWeek = (id) => {
    axios.delete(`http://localhost:8080/sprint/${id}`).then((res) => {
      console.log(res);
      getWeek();
    });
  };

  useEffect(() => {
    getWeek();
  }, []);
  return (
    <div>
      <Box spacing={3} display='flex' gap='10px'>
        <Input variant="filled" type="text" placeholder="Enter Your Sprint Name..." name="sprint" onChange={handleChange}/>
        <Button colorScheme="blue" onClick={(e) => handleSubmit(e)}>
          Add Sprint
        </Button>
      </Box>

      {data?.map((e, i) => (
        <div id="weekListDiv">
          <Box w="100%">
            <Text fontSize="md" as="b">
              {e.sprint}
            </Text>
            <Button colorScheme="red" onClick={() => deleteWeek(e._id)}>
              Delete
            </Button>
          </Box>
          <br />
        </div>
      ))}
    </div>
  );
};

export default AddSprint;
