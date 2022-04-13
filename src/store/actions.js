import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem} from '../api/index.js';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
            .then(rep => {
                context.commit('SET_NEWS', rep.data);
            })
            .catch(ex => {
                console.log(ex);
            });
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(ex => {
                console.log(ex);
            });
    },
    FETCH_ASK({commit}){
        fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data);
            })
            .catch(ex => {
                console.log(ex);
            });
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(({data})=>{
                commit('SET_USER', data)
            })
            .catch(ex=>{
                console.log(ex);
            })
    },
    FETCH_ITEM({ commit }, id){
        fetchCommentItem(id)
            .then(({data})=>{
                commit('SET_ITEM', data)
            })
            .catch(ex=>{
                console.log(ex);
            })
    },
}