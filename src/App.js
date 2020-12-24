import React,{useState,useEffect} from 'react'
import './index.css'

function App() {
  const [users,setUsers] = useState([])
  const [input,setInput] = useState([])
  const [search,setSearch] = useState([])

  useEffect( () => {
    async function getUsers(){
      const response = await fetch(`https://api.github.com/users/${search}`).then((responseServer) => {
        if(responseServer.ok){
          return responseServer.json()
        }else{
          return Promise.reject("User not found")
        }
      })
      if(!response){
        console.log("Usuario não encontrado")
      }
      setUsers(response)
      console.log(users)

    }
    getUsers()
  },)


  return (
    <div id="container">
     <main>
      <input type="text" placeholder="Pesquise um usuario" onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={() => setSearch(input)} >
       Pesquisar
      </button>
    </main>
    <div id="content">

    <img src={users.avatar_url ? users.avatar_url : "https://via.placeholder.com/150/771796"} alt="Foto do Perfil" />
    <div className="content-bio">
      {users.bio}
    </div>
    </div>
  </div>


  );
}

export default App;
