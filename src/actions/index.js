export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const REMEMBER = 'REMEMBER'
export const MEM_ADD = 'MEM_ADD'
export const MEM_CLR = 'MEM_CLR'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation =(op)=> {
    return({type:CHANGE_OPERATION, payload:op})
}
export const clearDisplay =()=> {
    return({type:CLEAR_DISPLAY, payload: 0})
}

export const remember =(opt)=> {
    if (opt === 1){
        return({type:REMEMBER})
    }else if (opt === 2){
        return({type:MEM_ADD})
    }else{
        return({type:MEM_CLR})
    }
}
