export function createStore(rootReducer, initialState) {
    // будут исп-ся замыкания
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribers = []

    return {
        // action === {type: 'INCREMENT'}
        dispatch(action) { // нужно что-то изменить, что-то поменялось
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) { // все слушатели, которые слушают этот объект
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}