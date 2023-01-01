import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { getNoteByCategory} from "../notas";

const Search = () => {
  const [ note , setNote] = useState()
  const navigation = useNavigate()
 
  const handleChange = e => { 
    let value = e.target.value
    setNote(getNoteByCategory(value))
  }

  const handleClick = () => {
    let input = note.category
    navigation(`/category/${input}`)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }


  return(
    <div className="form-control ">
      <form className="input-group" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search…"  onChange={handleChange} className="input input-bordered" />
        <button onClick={handleClick} className="btn btn-square"><FaSearch /></button>
     </form>
    </div>  
  )
}
export default Search