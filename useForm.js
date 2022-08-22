import { useState } from "react"


export const useForm = (initialForm = {}) => {
    
    const [formState, setformState] = useState(initialForm)

     
    const onInputChange = ({target}) => {
        const {name,value} = target
        //console.log(name, value)
        //console.log(target)
        setformState({
            ...formState,
            [ name ]: value,
            //description: value,
            
        })
        
    }
    
    const onResetForm= () => {
         setformState(initialForm)
        
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        
    }
    

}
