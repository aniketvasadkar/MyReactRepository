import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function UseStateHookDemo(){

const[name, setName] = useState("Aniket")

return(
        <div>
            <h3>{name}</h3><br/>
            <button className="btn btn-primary" onClick={() => setName("Aniket updated from useState hook")}>Click</button>
        </div>
)
}

export default UseStateHookDemo