import React, {useReducer, useCallback} from "react";

import Input from "./input";

import { VALIDATORS_MINLENGTH, VALIDATOR_REQUIRE } from "../Validators/validatos";

const formReducer = (state, action)=>{
    switch(action.type){
        case 'Input-Change':
            let formisValid = true;

            for(const inputID in state.inputs){
                if(inputID === actionb.inputID){
                    formisValid = formisValid && action.isValid;
                }
                else {
                    formisValid = formisValid && state.inputs[inputID].isValid
                }
            }

            return{
                ...state, 
                inputs:{
                    ...state.inputs,
                    [actio.inputs]:{value:action.value, isValid: action.isValid }
                },
                isValid : formisValid
            };
            default:
                return state;
    }
}

const NewPlaces   = ()=>{

    const [formState, despatch] = useReducer(formReducer,{
        inputs:{
            title:{
                value:'',
                isValid:false
            }
        },
        isValid: false
    });

    const InputHandler = useCallback((id, value, isValid)=>{
        despatch({
            type:'Input-Change',
            value: value,
            isValid: isValid, 
            inputID: id
        })
    },[])
    return(
        <form>
            <Input
            id='title'
            element='input'
            type = 'text'
            lable = 'Title'
            validators= {[VALIDATOR_REQUIRE()]}
            errorText = 'Please enter some value first!'
            onInput = {InputHandler}
            />
            <button type="submit" disabled={!formState.isValid} value='Add Place'>Add place</button>
        </form>
    )
}
export default NewPlaces;
