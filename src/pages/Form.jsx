
import React, { useState } from "react";
import "../App.css";

function Form() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        console.log({
            name: name,
            age: age,
            contact: contact,

        });
    };


    return (
        <div className="basic-form-wrap">
            <form className="basic-form-card" onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>{name}</p>
                </div>

                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div>
                    <label>Contact: </label>
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
