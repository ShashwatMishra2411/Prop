import React from 'react'
import '../App.css'

function Card({prop}){
    return (
        <>
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.body}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </>
    );
}

export default Card