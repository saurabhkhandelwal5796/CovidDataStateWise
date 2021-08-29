/**
 * url: https://api.covid19india.org/data.json
 * headings: active,confirmed,deaths,deltaconfirmed,lastupdated
 * step1 : define useEffect and pass function in it
 * step 2 : define getData()
 * step 3 : getdata in res,convert from json and save in josnRes
 * step 4 : useState => setdata(jsonRes.statewise)
 * 
 * step 5 : install bootstrap for css
 */


import React, { useState,useEffect } from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Statewise = () => {
    const [data, setdata] = useState([])

const getData = async  () => {

    let res =  await fetch('https://api.covid19india.org/data.json'); // used await here,because promise is given here
    let jsonRes = await res.json()                                          // use await here,because promise is given here
    console.log(jsonRes); // This gives us the api data
    console.log(jsonRes.statewise); // This gives us the api data
    setdata(jsonRes.statewise)
  

}
// Now to get the api data, we need the useState Hooks




    
    // in js we can easily call the api, but in react we have to use useEffect, in directly calls the function which posses the api call
    useEffect  ( ()=>{getData( )},[] )





    // Jsx part starts:
    return (
        <>
         <div className="animation-area">
		<ul className="box-area">

            {/* uppar ke do lines moving backgnd ke liye hai */}
        <h1 className = 'main-heading text-center  text-uppercase text-white bg-dark '> India Covid-19 dash board </h1>
<div className = 'container-fluid mt-5'>









{/* Table starts from here */}

    <div className = 'table-responsive'>

        {/* Now we make a table */}
        <table className = 'table table-hover  ' >
            <thead className = 'thead-dark'>
            <tr>
                <th>State</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>DeltaConfirmed</th>
                <th>Last Updated Time</th>
            </tr>
            </thead>
            {/* The thead gives underline */}






        {/* Now we apply map method on list to print the data in table format */}
        {
            data.map( (element,index,array)=>{return(
            
            <>
            <tr>
                
                <td >{element.state}</td>
                <td>{element.confirmed}</td>
                <td>{element.recovered}</td>
                <td>{element.deaths}</td>
                <td>{element.active}</td>
                <td>{element.lastupdatedtime}</td>
             
            </tr>
            
             </> )} )
        }


        </table>
        </div>
        </div>   



    






{/* moving background animation starts */}

       
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			
		</ul>
	</div> 
       
           
        </>
    )
}

export default Statewise
