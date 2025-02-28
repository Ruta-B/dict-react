import "./Dictionary.css"
import React, {useState } from "react";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefaukt();
        alert(`Searching for ${keyword}..`)
    }
    function handleChange(event) {
        setKeyword(event.target.value)
    }
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleChange}/>
        </form>
    </div>
}