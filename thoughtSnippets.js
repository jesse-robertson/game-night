



const h = text=>x=>console.log(text);


const getState = (...stuff)=> {
    var fakeState ={};
    
    Object.defineProperty(fakeState, 'entity', {
        get: () => {
            console.log('entity');
            return {};
        },
        enumerable: true
    });
    
    return fakeState;
};


// const mockStore = {getState, dispatch:h('dispatch'),subscribe:h('subscribe')};
// const thing = <GameContainer store={mockStore} />;
// console.log(new thing.type({store:mockStore}));

