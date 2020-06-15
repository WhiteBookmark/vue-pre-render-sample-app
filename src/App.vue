<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<h2>Pre-render Example</h2>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				href="https://github.com/WhiteBookmark/vue-pre-render-sample-app"
				target="_blank"
				text
			>
				<span class="mr-2">Github</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
	name: 'App',

	components: {
		HelloWorld
	},

	data: () => ({
		//
	})
});
</script>
