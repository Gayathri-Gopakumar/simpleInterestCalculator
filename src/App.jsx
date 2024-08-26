import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  
const [principle,setPrinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setYear]=useState(0)
const [interest,setInterest]=useState(0)

const[isPrincipleInvalid,setisPrincipleInvalid]=useState(false)
const [isRateInvalid,setisRateInvalid]=useState(false)
const[isYearInvalid,setisYearInvalid]=useState(false)


// input validation function
const validateInput=(inputTag)=>{
  // object destructuring , const{key1,key2,....}=object-name
  const {name,value}=inputTag
  console.log(name,value);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  console.log(!!value.match(/^\d*\.?\d+$/));
  
  if(name=="principle"){
    setPrinciple(value)
    !!value.match(/^\d*\.?\d+$/) ? setisPrincipleInvalid(false) : setisPrincipleInvalid(true)
  }
  else if(name=="rate"){
    setRate(value)
    !!value.match(/^\d*\.?\d+$/) ? setisRateInvalid(false) : setisRateInvalid(true)
  }
  else{
    setYear(value)
    !!value.match(/^\d*\.?\d+$/) ? setisYearInvalid(false) : setisYearInvalid(true)

  }

  
}
// calculate button
const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("submited");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("Please fill form completely")
  }
  
}
// reset button
const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setisPrincipleInvalid(false)
  setisRateInvalid(false)
  setisYearInvalid(false)
}


  return (
    <div style={{minHeight:'100vh',width:'100%'}} className=' d-flex justify-content-center align-items-center bg-dark  '>

        <div style={{width:'600px'}} className='bg-light rounded p-5'>
          <h3>SIMPLE INTEREST CALCULATOR </h3>
          <p>Calculate Your Simple Interst Easily</p>
          <div className='d-flex flex-column justify-content-center align-items-center bg-warning rounded p-2 shadow text-light'>
              <h1>₹ {interest}</h1>
              <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className="mt-5">
            <div className="mb-3">
            <TextField value={principle || ""} onChange={e=>validateInput(e.target)} name='principle' id="outlined-basic1" className='w-100' label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* conditional rendering */}
            {
            isPrincipleInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
            }
            <div className="mb-3">
            <TextField value={rate || ""} onChange={e=>validateInput(e.target)} name='rate' id="outlined-basic2" className='w-100' label="Rate of Interest (p.a)%" variant="outlined" />
            </div>
            {/* conditional rendering */}
            {
            isRateInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid rate Percentage</div>
            }
            <div className="mb-3">
            <TextField value={year || ""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic3" className='w-100' label="Time Period (Years)" variant="outlined" />
            </div>
             {/* conditional rendering */}
             {
            isYearInvalid &&
              <div className="mb-3 text-danger fw-bolder">Invalid year</div>
            }
            <Stack  direction="row" spacing={2}>
              <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">CALCULATE</Button>
              <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
            </Stack>
          </form>
          
        </div>

    </div>
  )
}

export default App
