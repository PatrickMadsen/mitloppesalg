import Data from "../../../db/loppemarkeder.json"
import { useState } from "react"
import Edit from "./edit"
import Create from "./create"

export default () => {
    const [editId, setEditId] = useState()

    const slet = async (index) => {
        Data.loppemarkeder.splice(index, 1)
        const JSONdata = JSON.stringify(Data)
        const endpoint = '/api/writeFile'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSONdata
        }
    
        const response = await fetch(endpoint, options)
        if(response.status == 400){
            console.log(response.data)
            return ""
        }

    }

    const edit = (index) => {
        console.log(index)
    }

    return(
        <div className="container">
            <Edit index={editId} />
            <Create />
            <table className="table table-striped">
                <tbody>
                    {
                        Data.loppemarkeder.map((i, index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{i.navn}</td>
                                    <td className="col-1"><a onClick={() => setEditId(index)} className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#edit">Edit</a></td>
                                    <td className="col-1"><button onClick={() => slet(index)} type="button" className="btn btn-danger">Slet</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create">Create New</button>
            </div>
            <div className="space"></div>
        </div>
    )
}