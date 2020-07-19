import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogs: [
            {
                title: "blog title 1",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt m",
                author: "Christina Plate"
            },
            {
                title: "blog title 2",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt m",
                author: "Chulakshi Ranathunga"
            }
        ],
        
    },
    
    getters: {
        getPosts: (state) => {
            return state.blogs;
        }
    },

    actions: {
        addNewBlog({ commit }, blogItem){
            commit('NEW_BLOG', blogItem);
        },

        deleteBlog({ commit }, blogItem){
            commit('DELETE_BLOG', blogItem);
        }
    },
    mutations:{
        NEW_BLOG(state, blogItem){
            state.blogs.push(blogItem)
        },
        DELETE_BLOG(state, blogItem){
            var index = state.blogs.indexOf(blogItem);
            state.blogs.slice(index, 1);
        }
    },
});

// export default store;

