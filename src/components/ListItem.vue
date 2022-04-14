<template>
  <div>
    <ul class='news-list'>
      <li v-for='item in listItems' v-bind:key='item.id' class='post'>
        <!-- 포인트 영역 -->
        <div class='points'>
          {{ item.points || 0 }}
        </div>
        <!-- 타이틀 영역 -->
        <div>
          <p class='news-title'>
            <template v-if='item.domain'>
              <a v-bind:href='item.url'>
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to='`item/${item.id}`'>
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class='link-text'>
            {{ item.time_ago }} by
            <router-link 
              v-if='item.user'
              v-bind:to='`/user/${item.user}`'>
              {{ item.user }}
            </router-link>
            <a v-else v-bind:href='item.url'>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news'){
        return this.$store.state.news;
      }
      else if(name === 'ask'){
        return this.$store.state.ask;
      }
      else if(name === 'jobs'){
        return this.$store.state.jobs;
      }

      return undefined;
    }
  },
  created() {
    const name = this.$route.name;
    let routeName;
    if(name === 'news'){
      routeName = 'FETCH_NEWS';
    }
    else if(name === 'ask'){
      routeName = 'FETCH_ASK';
    }
    else if(name === 'jobs'){
      routeName = 'FETCH_JOBS';
    }
    this.$store.dispatch(routeName);
  }
}
</script>

<style scopped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  display:flex;
  list-style:none;
  align-items:center;
  border-bottom: 1px solid #eee;
}
.points {
  width:80px;
  height:60px;
  display:flex;
  align-items:center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin:0;
}
.link-text {
  color: #828282;
}
</style>