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
  const [anime,setAnime] = useState("")
  const [prompt,setPrompt] = useState("")
  const [email,setEmail] = useState("")

  const handleVibe = (option)=>{
   setVibe(option) 
  }

  const handleHouse = (option)=>{
    setHouse(option) 
   }

   const handleAnime = (option)=>{
    setAnime(option) 
   }

   const handleSubmit = async ()=>{
    const response = await axios.post("http://localhost:4000/api/prompts",{})
   }

  return (
    <div className="container">
  
      <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <div className="container p-5 text-light" style={{marginLeft:"10rem"}}>
          <TypeAnimation className="text-light"
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
                <div class="dropup-center dropup">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Anime
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={()=>handleAnime("Naruto")}>Naruto</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleAnime("Ichigo")}>Ichigo</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>handleAnime("Eren Yeager")}>Eren Yeager</a></li>
                  </ul>
                </div>
                </div>

              </div>

                <form>
                  <div className="form-group mt-4">
                    <label htmlFor="promptInput text-light" style={{color:"white"}}>Prompt</label>
                    <input type="text" className="form-control rounded-4" id="promptInput" placeholder="i want a cool looking monkey in anime style" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="emailInput" style={{color:"white"}}>Email</label>
                    <input type="email" className="form-control rounded-4" id="emailInput" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <button className="btn btn-light rounded-4 mt-4" type="button" onClick={handleSubmit}>Generate</button>
                </form>



            
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default App
