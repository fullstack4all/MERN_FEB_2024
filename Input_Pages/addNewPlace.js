
import React, {useCallback, useReducer} from "react";
import Input from "./input";
import { VALIDATORS_MINLENGTH, VALIDATOR_REQUIRE } from '../Validators/validatos'
import Button from "./Button";



const formReducer  = (state, action)=>{
    switch(action.type){
        case 'Input-Change':

        let formIsValid = true;

        for(const inputID in state.inputs){
            if(inputID === action.inputID){
                formIsValid = formIsValid && action.isValid;
            }else{
                formIsValid = formIsValid && state.inputs[inputID].isValid
            }

        }
         return{
            ...state,
            inputs:{
                ...state.inputs,
                [action.inputID]: {value: action.value , isValid: action.isValid}
            },
            isValid :formIsValid
         };
          
            default:
            return state;
    }
};   

const NewPlaces = () => {

 const [formState, despatch] =   useReducer(formReducer,{
        inputs:{
            title:{
                value:'',
                isValid: false
            },
            description:{
                value:'',
                isValid: false
            }
        },
        isValid: false
    });

        const InputHandler = useCallback((id, value , isValid)=>{
            despatch({
                type:'Input-Change',
                value: value,
                isValid : isValid,
                inputID : id
            })
        }, [])
       

    return (
        <form className="place_form">
            <Input 
                id='title'
                element='input' 
                type='text' 
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText=' Please enter some valid title'
                onInput= {InputHandler}
                
             />
             <Input
             id = 'description'
             element = 'textarea'
             label  = 'Description'
             validators = {[VALIDATORS_MINLENGTH(5)]}
             errorText = 'Please enter some valid description (at least 5 char long)'
             onInput = {InputHandler}
             
             />
            <Button type= 'submit' disabled={!formState.isValid} value="Login">Login</Button>
               
        </form>
    )
}

export default NewPlaces;