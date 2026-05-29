import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
  
    <div className="workout-details">
      
      <table className='ww'>
          
          <tr>
            <td>{workout.firstName}</td> 
            <td>{workout.lastName}</td>
            <td>{workout.numberPhone}</td>
            <td>{workout.Age}</td>
            <td>{workout.Posion}</td>
            <td>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</td>
            <td>  <span className="material-symbols-outlined" onClick={handleClick}>delete</span></td>
          </tr>
        </table>
      {/* <h4>{workout.title}</h4>
      <p><strong>First Name: </strong></p>
      <p><strong>Last Name: </strong></p>
      <p><strong>Phone Number: </strong></p>
       <p><strong>Course: </strong></p>
      <p></p>
     */}
    </div>
  )
}
export default WorkoutDetails