import { useEffect, useState } from "react"

export default function Component(){

    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [fullname,setFullName] = useState("")

    const displayName = (e) => {
        e.preventDefault()
        const trimmedFirstName = firstname.trim();
        const trimmedLastName = lastname.trim();

        if (trimmedFirstName && trimmedLastName) {
            setFullName(`${trimmedFirstName} ${trimmedLastName}`);
        } else {
            setFullName("");
        }
        setFirstName("")
        setLastName("")
    }

    return(
        <div style={{position:"absolute",top:"50px",left:"30px"}}>
            <h1>Full Name Display</h1>
            <div className="name-field">
                <form onSubmit={displayName}>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" name="first-name" id="first_name" onChange={(e) => setFirstName(e.target.value)} required/>
                <br/>
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" name="last-name" id="last" onChange={(e) => setLastName(e.target.value)} required/>
                <br/>
                <button type="submit">Submit</button>
                </form>

                <h3>{fullname}</h3>
            </div>
        </div>
    )
}