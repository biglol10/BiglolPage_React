// Think reducer as a dataLayer
// store: React.js 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 입니다.
// action: 어떤 변화가 일어나야 할 지 나타내는 객체입니다.
// reducer: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체입니다.

export const initialState = {
    jwt_token: null
}

// Dispatching actions into the store and the reducer just listens and knows what to do
const reducer = ( state, action ) => {
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                jwt_token: action.jwt_token
            }
        case 'SET_USER_NULL':
            return{
                ...state,
                jwt_token: null
            }
        default:
            return state;    
    }
}

export default reducer;