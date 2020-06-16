<template>
	<v-container>
		<v-row
			class="text-left"
			v-for="(information, index) in news"
			:key="index"
		>
			<v-col>
				<v-card
					class="mx-auto"
					outlined
					:href="information.url"
					target="_blank"
					raised
				>
					<v-list-item three-line>
						<v-list-item-content>
							<div class="overline mb-4">
								{{ information.source.name }}
							</div>
							<div class="overline mb-4">
								{{ convertDateTime(information.publishedAt) }}
							</div>
							<v-list-item-title class="headline mb-1">{{
								information.title
							}}</v-list-item-title>
							<v-list-item-subtitle>{{
								information.author
							}}</v-list-item-subtitle>
							<br />
							<p v-if="information.description">
								{{ information.description }}
							</p>
							<p v-else>{{ information.content }}</p>
							<br />
						</v-list-item-content>
					</v-list-item>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import dayjs from 'dayjs';

@Component
export default class ListNews extends Vue {
	private news: any = '';
	private isError = false;

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	mounted() {
		// eslint-disable-next-line quotes
		const headlineLink = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
		axios
			.get(headlineLink)
			.then(response => {
				this.news = response.data.articles;
				this.isError = false;
			})
			.catch(error => {
				this.news = error;
				this.isError = true;
			})
			.finally(() => {
				document.dispatchEvent(new Event('axios-operation-completed'));
			});
	}

	private convertDateTime(inputDateTime: any) {
		return dayjs(inputDateTime);
	}
}
</script>
