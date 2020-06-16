<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<h2>Pre-rendered Page</h2>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				href="https://github.com/WhiteBookmark/vue-pre-render-sample-app"
				target="_blank"
				text
			>
				<span class="mr-2">Github</span>
				<v-icon>{{ Icon.mdiOpenInNew }}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<list-news></list-news>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ListNews from '@/components/ListNews.vue';
import Component from 'vue-class-component';
import { mdiOpenInNew } from '@mdi/js';

@Component({
	components: {
		ListNews,
	},
})
export default class App extends Vue {

	get Icon() {
		return { mdiOpenInNew };
	}
}
</script>
