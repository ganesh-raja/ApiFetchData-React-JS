import Button from "./Button"

const Form = ({data, setData}) =>{
    return(
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <Button 
                ButtonText = "users"
                data = {data}
                setData = {setData}
            />
            <Button 
                ButtonText = "posts"
                data = {data}
                setData = {setData}
            />
            <Button 
                ButtonText = "comments"
                data = {data}
                setData = {setData}
            />
            <Button 
                ButtonText = "albums"
                data = {data}
                setData = {setData}
            />
        </form>
    )
}

export default Form