<template>
  <!-- 질문 상세 정보 -->
      <div class='user-container'>
        <div>
          <i class='fas fa-user'></i>
        </div>
        <div class='user-description'>
          <slot name='username'></slot>
          <slot name='time'></slot>
          <slot name='karma'></slot>
        </div>
      </div>
      
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container{
  display:flex;
  align-items:center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left:8px;
}
.time {
  font-size:8px;
}
</style>