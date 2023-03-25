import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, Radio, RadioGroup, Select, Stack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'


const UpdateTask = ({item,getTask}) => {
    const [form,setForm]=useState({...item})

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      }

      function handleSubmit(e,id) {
        e.preventDefault();
        // console.log(form,id)
        axios.patch(`https://paypal-c1m0.onrender.com/task/${id}`,form).then((res)=>{
            console.log(res.data.message)
            getTask()
        })
      }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} bg={'#48bb78'} >
         Edit
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
            <FormLabel>Task Name:- {item.title}</FormLabel>
              <Input placeholder='Enter Your Task Name...' name="title" onChange={handleChange}/>

              
                <Select placeholder="Select Assignee" name="assignee" onChange={handleChange} defaultValue={item.assignee}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </Select>
                <br />

                <RadioGroup name="types" defaultValue={item.types}>
                    <Stack direction='row'>
                    <Radio colorScheme='green'  value='bug,' onChange={handleChange}>Bug</Radio>
                    <Radio colorScheme='green'  value='feature' onChange={handleChange}>Feature</Radio>
                    <Radio colorScheme='green'  value='story' onChange={handleChange}>Story</Radio>
                    </Stack>
                </RadioGroup>
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme='blue' onClick={(e)=>handleSubmit(e,item._id)}>Update</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default UpdateTask
