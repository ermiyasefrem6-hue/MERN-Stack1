import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import Navbar from './Navbar'
import Form from 'react-bootstrap/Form';
/*import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';*/

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
const url = "https://mern-stack1-backend.onrender.com"
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [Age, setAge] = useState('')
  const [Posion, setPosion] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {firstName,lastName ,numberPhone ,Age ,Posion}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setFirstName('')
      setLastName('')
      setNumberPhone('')
      setAge('')
      setPosion('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
    <Navbar></Navbar>
    <div style={{width:'500px', marginLeft:'100px', marginRight:'100px'}}>
      <h3>School</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName}
        className={emptyFields.includes('firstName') ? 'error' : ''}
      />

      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLastName(e.target.value)} 
        value={lastName}
        className={emptyFields.includes('lastName') ? 'error' : ''}
      />

      <label> Number Phone :</label>
      <input 
        type="text" 
        onChange={(e) => setNumberPhone(e.target.value)} 
        value={numberPhone}
        className={emptyFields.includes('numberPhone') ? 'error' : ''}
      />
  <label> Age:</label>
      <input 
        type="text" 
        onChange={(e) => setAge(e.target.value)} 
        value={Age}
        className={emptyFields.includes('Age') ? 'error' : ''}
      />
<label>Posion</label>
<input  type="text" 
        onChange={(e) => setPosion(e.target.value)} 
        value={Posion}
        className={emptyFields.includes('Posion') ? 'error' : ''}/>
     

  <br></br>

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  )
}

export default WorkoutForm  
