

export const NewsReducer = (state,action) =>{
    switch(action.type){
case "GET_NEWS":
    return{
        ...state,
        newsAll : action.payload
    }
    }
}