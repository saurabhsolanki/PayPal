import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";

import './CSS/AddTask.css'

const AddTask = ({handleChange,handleSubmit}) => {
  return (
    <div>
      <form id="addTaskForm">
        <Input type="text" name="title" placeholder="Enter Your Task" onChange={handleChange}/>

        <Select placeholder="Select Assignee" name="assignee" onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </Select>

        <RadioGroup name="types">
            <Stack direction='row'>
            <Radio colorScheme='green'  value='bug' onChange={handleChange}>Bug</Radio>
            <Radio colorScheme='green'  value='feature' onChange={handleChange}>Feature</Radio>
            <Radio colorScheme='green'  value='story' onChange={handleChange}>Story</Radio>
            </Stack>
        </RadioGroup>

        <Button bg={'#48bb78'} color={'white'} _hover={{bg: '#305766'}} onClick={(e)=>handleSubmit(e)}>ADD</Button>
      </form>
    </div>
  );
};

export default AddTask;
