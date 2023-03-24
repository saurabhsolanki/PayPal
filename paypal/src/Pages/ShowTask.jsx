import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/ShowTask.css'
import UpdateTask from './UpdateTask'

const ShowTask = ({data,DeleteTask, getTask}) => {


    const toggleTask=(id,status)=>{
        axios.patch(`http://localhost:8080/task/${id}`,status).then((res)=>{
            console.log(res.data.message)
            getTask()
        })
      }
  return (
    <div>
      <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Task Name</th>
                <th style={{textAlign:"center"}}>Task Assignee</th>
                <th style={{textAlign:"center"}}>Task Types</th>
                <th style={{textAlign:"center"}}>Task Status</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((item,index)=>{
                    return(
                        <tr key={item._id}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.title}</td>
                            <td>{item.assignee}</td>
                            <td>{item.types}</td>
                            <td><Button  variant='outline' onClick={()=>toggleTask(item._id, {status:!item.status})}>{item.status?"Done":"Not Done"}</Button></td>
                            <td>
                                <UpdateTask item={item} getTask={getTask}/> {" "}
                                <button className="btn btn-delete" onClick={()=>DeleteTask(item._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default ShowTask
