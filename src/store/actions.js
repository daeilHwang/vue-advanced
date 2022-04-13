import {fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js';

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
                console.log(data);
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
    }
}