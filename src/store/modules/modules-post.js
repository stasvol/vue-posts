export default {
    actions: {
       async fetchPost(ctx, limit= 5 ) {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit)
            const posts = await response.json()
            // this.posts = posts
           ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
       allPosts(state) {
         return state.posts
       },
        countPosts(state, getters) {
           // return state.posts.length
           return getters.validPosts.length
        },
        validPosts(state) {
          return  state.posts.filter(post => post.title && post.body)
        }
    },
}