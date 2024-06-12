import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, changeData] = useState(
       {
        title:""
       }
        
    )

    const deleteCourse=(id)=>{
        let input = {"_id":id} 
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("successfully deleted")

                    }
                    else{
                        alert("error")
                    }
                
            }
        ).catch().finally()
    }

    const [result,changeResult] = useState([])
    const inputHandler = (event) => {
        changeData({...data, [event.target.name]:event.target.value})
    }
        
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                
                changeResult(response.data)
           }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
       
  return (
    <div>
        <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">title</label>
                                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>search</button>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xll-12">

    <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">duration</th>
      <th scope="col">date</th>
      <th scope="col">venue</th>
      <th scope="col">tname</th>
    </tr>
  </thead>
  <tbody>

    {
        result.map(
            (value,index)=>{
                return <tr>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.duration}</td>
                <td>{value.date}</td>
                <td>{value.venue}</td>
                <td>{value.tname}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                </td>

                
              </tr>
            }
        )
    }
    
    
  </tbody>
</table>

    </div>
</div>

    </div>
  )
}

export default Search