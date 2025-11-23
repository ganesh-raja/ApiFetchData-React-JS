import { useEffect, useState } from 'react'
import Form from './Form'
import Item from './Item'

function App() {

  const APIUrl = "https://jsonplaceholder.typicode.com/"

  const [data, setData] = useState("users")

  const [items, setItems] = useState([])

  const [flag, setFlag] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setLoading(true)
    setFlag(null)
    const fetchitems = async () =>{
      try{
        const response = await fetch(`${APIUrl}${data}`)
        if (!response.ok) throw Error ("Reload the Application")
        const result = await response.json()        
        setItems(result)                
      }catch(Err){
        console.log(Err.message)
        setFlag(Err.message)
      }      
    }

    setTimeout(()=>{      
      fetchitems () 
      setLoading(false)     
    }, 500)
    
  }, [data])

  return (
    <>
    <Form 
      data = {data}
      setData = {setData}
    />
    {flag && <p className='msg error'>{flag}</p>}
    {loading && <p className='msg load'>Data is Loading...</p>}
    {!flag && !loading &&
    <Item items={items} />
    }
    </>    
  )
}

export default App
