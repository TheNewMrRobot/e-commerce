const INITIAL_STATE = {
    section:  [
        {
            title: "HATS",
            id:1,
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl:'shop/hats'
       },
        {
            title: "SNEAKERS",
            id:2,
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl:'shop/sneakers'
       },
        {
            title: "JACKETS",
            id:3,
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl:'shop/jackets'
           
       },
        {
            title: "MENS",
            id:4,
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl:'shop/mens',
            size:"large"
            
       },
       {
           title: "WOMENS",
           id:5,
           imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
           size:"large",
           linkUrl:'shop/womens'
           
       }
    ]
}

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return{
                ...state
            }
    }
}

export default directoryReducer;