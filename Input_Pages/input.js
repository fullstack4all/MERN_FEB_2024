




import React, { useReducer, useEffect } from "react";

import { validate } from '../Validators/validatos';

// import './input.css'

const InputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators)
            };

            case 'TOUCH':
                return{
                    ...state,
                    isTouched : true
                }
        default:
            return state;
    }
};

const Input = props => {

    const [inputState, dispatch] = useReducer(InputReducer, { 
        value: '', 
        isValid: false,
        isTouched : false
        
    });

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(()=>{
        props.onInput(id, value, isValid)
    }, [id, value, isValid, onInput])
    const tuchHandler = ()=>{
        dispatch({
            type:'TOUCH'
        })
    }
    const changerHandler = event => {

        dispatch({
            type: 'CHANGE', 
            value: event.target.value,
            validators: props.validators
        })
       
    };


    const element = props.element === 'input' ? (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changerHandler}
            onBlur={tuchHandler}
            value={inputState.value}
        />
    ) :
        (
            <textarea
                id={props.id}
                rows={props.row || 3}
                onBlur={tuchHandler}
                onChange={changerHandler}
                value={inputState.value}
            />
        );

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control-invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid &&  inputState.isTouched && <p>{props.errorText} </p>}
            
        </div>
         
    )
}

export default Input;

