const initialState={
    name:[],
    craft:[],
    numOfPeople:0
}
const satelliteReducer=(state=initialState,action) =>{
    switch(action.type){
        case 'FETCH_NAMES':
        console.log('in fetch')
        const names=[];
        const crafts = [];
        let number;
        fetch('http://api.open-notify.org/astros.json')
        .then((response) => response.json())
        .then((data) => {
            number=data.number;
            data.people.forEach(object => {
                crafts.push(object.craft)
                names.push(object.name)
            });
        })
            return{
                ...state,
                name :names,
                craft :crafts,
                numOfPeople :number
            }
        default:
        return state;
    }
}

export default satelliteReducer;