const VALIDATORS_TYPE_REQUIRE= 'REQUIRE';
const VALIDATORS_TYPE_MINLENGTH= 'MINLENGTH';
const VALIDATORS_TYPE_MAXLENGTH= 'MAXLENGTH';
const VALIDATORS_TYPE_MIN= 'MIN';
const VALIDATORS_TYPE_MAX= 'MAX';
const VALIDATORS_TYPE_EMAIL= 'EMAIL';
const VALIDATORS_TYPE_FILE= 'FILE';

export const VALIDATOR_REQUIRE = ()=>({type : VALIDATORS_TYPE_REQUIRE});
export const VALIDATOR_FILE = ()=>({type : VALIDATORS_TYPE_FILE});

export const VALIDATORS_MINLENGTH = val=>({
    type : VALIDATORS_TYPE_MINLENGTH,
    val:val
});
export const VALIDATORS_MAXLENGTH = val=>({
    type : VALIDATORS_TYPE_MAXLENGTH,
    val:val
});

export const VALIDATORS_MAX = val =>({type: VALIDATORS_TYPE_MAX, val: val})
export const VALIDATORS_MIN = val =>({type: VALIDATORS_TYPE_MIN, val: val})
export const VALIDATORS_EMAIL = () =>({type: VALIDATORS_TYPE_EMAIL})


export const validate = (value, validators)=>{
    let isvalid = true;

    for(const validator of validators){
        if(validator.type === VALIDATORS_TYPE_REQUIRE){
            isvalid = isvalid && value.length >0;
        }
        if(validator.type === VALIDATORS_TYPE_MINLENGTH){
            isvalid  = isvalid && value.trim().length >= validator.val
        }
        if(validator.type === VALIDATORS_TYPE_MAXLENGTH){
            isvalid  = isvalid && value.trim().length <= validator.val
        }
        if(validator.type === VALIDATORS_TYPE_MAX){
            isvalid  = isvalid && +value <= validator.val
        }
        if(validator.type === VALIDATORS_TYPE_MIN){
            isvalid  = isvalid && +value >= validator.val
        }
        if(validator.type === VALIDATORS_TYPE_EMAIL){
            isvalid  = isvalid && /^\S+@\S+\.\S+$/.test(value)
        }
    }
    return isvalid
}


