
const initState={
    posts: [
        {id: 1, title: 'Lord Vaders helmet not that big', body: 'Bacon ipsum dolor amet boudin pig leberkas capicola ground round ball tip t-bone fatback short ribs prosciutto pork belly doner. Biltong beef ribs shankle salami leberkas meatloaf bacon. Drumstick pork belly cupim short ribs turkey capicola short loin shank chicken sausage frankfurter alcatra.'},
        {id: 2, title: 'Michael Myers got a bad sunburn', body: 'Cream cheese gouda cheese on toast. Blue castello cream cheese jarlsberg cheesy feet babybel bocconcini cheesecake bavarian bergkase. St. agur blue cheese airedale st. agur blue cheese taleggio the big cheese monterey jack paneer parmesan. Fondue feta.'},
        {id: 3, title: 'Agent Smith might be schizophrenic', body: 'Chocolate oat cake macaroon. Marzipan wafer sweet. Sweet roll caramels tiramisu. Croissant icing carrot cake gummi bears cupcake jelly cookie sugar plum cupcake. Lemon drops marshmallow carrot cake cotton candy pastry cookie tiramisu danish cupcake. Cotton candy muffin cake marshmallow oat cake gummies.'}
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}



export default rootReducer;