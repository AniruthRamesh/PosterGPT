import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from 'react-type-animation';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState} from "react"
import axios from "axios"

function App() {
  const [house,setHouse] = useState("")
  const [vibe,setVibe] = useState("")
  const [character,setCharacter] = useState("")
  const [prompt,setPrompt] = useState("")
  const [email,setEmail] = useState("")
  const [toggle,setToggle] = useState(false)
  const [submit,setSubmit] = useState(false)


  const handleVibe = (option)=>{
   setVibe(option) 
  }

  const handleHouse = (option)=>{
    setHouse(option) 
   }

   const handleSubmit = async ()=>{

    setSubmit(true);
    const response = await axios.post("https://postergptserver.onrender.com/api/prompts",{House:house, Vibe:vibe, character:character, prompt:prompt, emailid:email})
    if(response.status==200)
      {
        console.log(response)
      }
   }

   const handleToggle = ()=>{
    setToggle(true)
   }

   const handleSave = ()=>{
    setToggle(false)

   }

  return (
    <div className="container">
  
      <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <div className="container m-1 p-4 text-light text-center" style={{marginLeft:"10rem", color:"black"}}>
          <TypeAnimation className="text-dark fw-bold"
          sequence={[
            'posterGPT', // Types 'One'
            2000, // Waits 1s
            '', // Deletes 'One' and types 'Two'
            () => {
              console.log('Sequence completed'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em', display: 'inline-block',fontFamily:"Courier New" }}
        />
      </div>
              <div className="row">
              <div className="col-4">
              <div class="dropup-center dropup">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Vibe
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={()=>handleVibe("Lofi")}>Lofi</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleVibe("CyberPunk")}>CyberPunk</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleVibe("Anime")}>Anime</a></li>
                  </ul>
                </div>
              </div>

                <div className="col-4">
                <div class="dropup-center dropup">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    House
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={()=>handleHouse("Spectreseek")}>Spectreseek</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleHouse("Alterok")}>Alterok</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleHouse("Gaudmire")}>Gaudmire</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleHouse("Erevald")}>Erevald</a></li>
                  </ul>
                </div>
                </div>

                <div className="col-4">
                {!toggle && <button className='btn btn-dark rounded-3' onClick={handleToggle}>Character</button>}
                {toggle && <>
                            <input type="form" onChange={(e)=>setCharacter(e.target.value)}/><button className='btn btn-dark rounded-3 mt-1' onClick={handleSave}>save</button>
                          </>}
                </div>

              </div>

                <form>
                  <div className="form-group mt-4">
                    <label htmlFor="promptInput text-light" style={{color:"white"}}>Prompt</label>
                    <input type="text" className="form-control rounded-4" id="promptInput" placeholder="Lofi Naruto in futuristic Shinobi Village" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="emailInput" style={{color:"white"}}>Email</label>
                    <input type="email" className="form-control rounded-4" id="emailInput" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <button className="btn btn-dark rounded-4 mt-4" type="button" onClick={handleSubmit}>Generate</button>
                  {submit && <><p className='text-light fw-bold fs-4 font-weight-bold mt-3' style={{fontSize:"20px; font"}}>Request Submitted</p></>}
                </form>



               



            
          </div>
        </div>
      </div>



<div className='mt-5'>
      <h3 className='text-center mb-4' style={{ color: 'black' }}>

      <TypeAnimation className="text-light fw-bold"
          sequence={[
            'Sample ', // Types 'One'
            2000, // Waits 1s
            '', // Deletes 'One' and types 'Two'
            () => {
              console.log('Sequence completed'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '0.8em', display: 'inline-block',fontFamily:"Courier New", }}
        />

      </h3>
      <div className="row mt-5 d-flex flex-row justify-content-center align-items-center">
      <div className="col-md-3">
        <div className="card" style={{borderColor:'black'}}>
          <img src="./images/narutocy.png" className="card-img-top card-img" alt="placeholder" />
          <div className="card-body" style={{backgroundColor:'black'}}>
            <h5 className="card-title text-center">CyberPunk Naruto</h5>
            
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{borderColor:'black'}}>
          <img src="./images/goku.png" className="card-img-top card-img" alt="placeholder" />
          <div className="card-body" style={{backgroundColor:'black'}}>
            <h5 className="card-title text-center">Lofi Goku</h5>
        
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{borderColor:'black'}}>
          <img src="./images/tanjiro_kamado.png" className="card-img-top card-img" alt="placeholder" />
          <div className="card-body" style={{backgroundColor:'black'}}>
            <h5 className="card-title text-center">Vin Kamado</h5>
          
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{borderColor:'black'}}>
          <img src="./images/luffy.png" className="card-img-top card-img" alt="placeholder" />
          <div className="card-body" style={{backgroundColor:'black'}}>
            <h5 className="card-title text-center">WW-II Luffy</h5>
            
          </div>
        </div>
      </div>
    </div>
</div>









    </div>

    </div>
  )
}

export default App
