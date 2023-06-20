import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BiMessageSquareAdd} from "react-icons/bi";
import {MdOutlineZoomInMap} from "react-icons/md";
import {MdOutlineZoomOutMap} from "react-icons/md";
import {RiDeleteBin5Fill} from "react-icons/ri";
import viteLogo from '/vite.svg'
import './App.css'
import Galaxy from './Components/Galaxy'
import { useRef } from 'react'
import Header from './Components/Header';


const App = () => {
  const [newName,setNewName] = useState("");
  const newId = useRef(4);
  const [newDiameter,setNewDiameter] = useState(0);
  const [newNumber,setNewNumber] = useState("");
  const [galaxies,setGalaxies] =useState ([
    {
      id : 1,
      name : 'Andromeda',
      diameter : 220000
    },
    {
      id : 2,
      name : 'Bima Sakti',
      diameter : 100000
    },
    {
      id : 3,
      name : 'Triangulum',
      diameter : 60000
    },
  ]);

  const [editID,setEditId] = useState (0);  
  
  return(
    <>
    <Header/>
    <main>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {
            galaxies.map((galaxy,index) => {
                return <Galaxy key={index} id={galaxy.id} name={galaxy.name} diameter={galaxy.diameter}/>
            })
        } 
    </div>

    {/* Tambah */}
    <form className="card"> 
        <h2>Tambah</h2>
        <label>
        ID : 
        <input
        type='text'
        value={newId.current}
        disabled
         />
        </label>
        <label>
        Nama : 
        <input
        type='text'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
         />
        </label>
        <label>
        Diameter : 
        <input
        type='number'
        value={newDiameter}
        onChange={(e) => setNewDiameter(e.target.value)}
         />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setGalaxies([{
              id:newId.current++,
              name:newName,
              diameter:newDiameter
            },
            ...galaxies,
            ]);
          }}
        >
          <BiMessageSquareAdd/>
          Tambah depan
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setGalaxies([
              ...galaxies,
              {
              id:newId.current++,
              name:newName,
              diameter:newDiameter
            },
            ]);
          }}
        >
          <BiMessageSquareAdd/>
          Tambah belakang
        </button>
    </form>

    {/* Edit */}
    <form className='card'>
      <h3>Edit/Hapus Berdasarkan ID</h3>
      <label>
        ID:
        <input 
        type ='number'
        value={editID}
        onChange={(e) => setEditId(e.target.value)}
         />
         Nama
         <input 
         type='text'
         value={galaxies.find((galaxy)=>galaxy.id==editID)?.name||""}
         onChange={(e) => {
          galaxies.map((galaxy)=>{
            if(galaxy.id==editID) {
              galaxy.name=e.target.value;
              setGalaxies([...galaxies])
            }
          })
         }}
         />
         Diameter
         <button onClick={(e) =>{ e.preventDefault(); setGalaxies(galaxies.map((i) => i.id == editID ? {...i,diameter:i.diameter+1} : i)) }}><MdOutlineZoomOutMap/>Perbesar</button>
         <button onClick={(e) =>{e.preventDefault(); setGalaxies(galaxies.map((i) => i.id == editID ? {...i,diameter:i.diameter-1} : i ))}}><MdOutlineZoomInMap/> Perkecil</button>
         <button onClick={(e) =>{e.preventDefault(); setGalaxies(galaxies.filter((i) => i.id != editID))}}><RiDeleteBin5Fill/>Hapus</button>
          </label>
    </form>

    {/* Hapus */}
    <div className='card'>
      <h2>Hapus</h2>
      <button onClick={() => setGalaxies(galaxies.slice(1))}><RiDeleteBin5Fill/>Depan</button>
      <button onClick={() => setGalaxies(galaxies.slice(0,-1))}><RiDeleteBin5Fill/>Belakang</button>
      <button onClick={() => setGalaxies([])}>
      <RiDeleteBin5Fill/>
        Semua</button>
      </div>
    </main>
    </>
  );  

  
}
export default App
