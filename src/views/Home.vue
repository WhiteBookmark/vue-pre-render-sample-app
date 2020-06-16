<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListNews msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListNews from '@/components/ListNews.vue';

export default {
	name: 'Home',
	components: {
		ListNews
	}
};
</script>
