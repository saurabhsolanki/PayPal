import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import TaskPage from '../Pages/TaskPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/task' element={<TaskPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
