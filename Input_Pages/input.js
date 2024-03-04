import React ,{useEffect , useReducer} from "react";

import { validate } from "../Validators/validatos";

const InputReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE':
            return{
                ...state, 
                value: action.value,
                isvalid: validate(action.value, action.validators)

            };
            case 'TOUCH':
                return{
                    ...state,
                    isTouched :true
                }
                default:
                    return state;

    }
}

const Reducer = props =>{
    const [inputState, disptach] = useReducer(InputReducer,{
        value: '',
        isvalid: false,
        isTouched:false
    })
    const {id, onInput} = props;
    const {value, isvalid} = inputState

    useEffect(()=>{
        props.onInput(id, value ,isvalid)
    },[id,value,isvalid , onInput]
    )
    const tuchHandler = event =>{
        disptach({
            type:'TOUCH',

        })
    }


    const changeHandler = event =>{
        disptach({
            type:'CHANGE',
            value: event.traget.value,
            validators: props.validators
        })
    }

    const element = props.element === 'input' (
        <input
            id= {props.id}
            type= {props.type}
            placeholder= {props.placeholder}
            onChange={changeHandler}
            onBlur={tuchHandler}
            value={inputState.value}
        
        />
    )




    return(
        <div>
            <label></label>
        </div>
    )
}
export default Reducer;