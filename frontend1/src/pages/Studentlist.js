import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import Table from 'react-bootstrap/Table';
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import Navbar from "../components/Navbar";

const Studentlist = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        <Navbar/>
        <table className="ww">
          
                  <tr>
                    <th>First Name</th>
                     <th>Last Name</th>
                      <th>phone number</th>
                       <th>Age</th>
                       <th>Posision</th>
                       <th>Date</th>
                  </tr>
                </table>
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
   
    </div>
  )
}

export default Studentlist;