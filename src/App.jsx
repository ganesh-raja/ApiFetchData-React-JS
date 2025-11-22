import { useEffect, useState } from 'react'
import Form from './Form'
import Item from './Item'

function App() {

  const APIUrl = "https://jsonplaceholder.typicode.com/"

  const [data, setData] = useState("users")

  const [items, setItems] = useState([])

  useEffect(() =>{
    const fetchitems = async () =>{
      try{
        const response = await fetch(`${APIUrl}${data}`)
        if (!response.ok) throw Error ("Reload the Application")
        const result = await response.json()        
        setItems(result)
      }catch(Err){
        console.log(Err.Message)
      }      
    }

    fetchitems ()
  }, [data])

  return (
    <>
    <Form 
      data = {data}
      setData = {setData}
    />
    <Item items={items} />
    </>
  )
}

export default App
