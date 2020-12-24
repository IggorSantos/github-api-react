import React,{useState,useEffect} from 'react'

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
      setUsers(response)
      console.log(users)

    }
    getUsers()
  },)


  return (
    <div>
    <input type="text" onChange={event => setInput(event.target.value)} />
    <button type="submit" onClick={() => setSearch(input)} >
      Pesquisar
    </button>
{users.login}

    </div>
  );
}

export default App;
