<template>
	<div class="content">
		<div>
			<h1 v-if="german" class="title" @click="changeLanguage">{{ germanContent.title }}
			</h1>
			<h1 v-else class="title" @click="changeLanguage">{{ englishContent.title }}</h1>
		</div>
		<div>
			<h2 v-if="german" class="subTitle anim-typewriter">{{ germanContent.subTitle }}</h2>
			<h2 v-else class="subTitle anim-typewriter">{{ englishContent.subTitle }}</h2>
		</div>
		<div v-if="german">
			<p v-for="p in germanContent.paragraphs" :key="p.id">
				{{  p.text }}
			</p>
		</div>
		<div v-else>
			<p v-for="p in englishContent.paragraphs" :key="p.id">
				{{  p.text }}
			</p>
		</div>
		<div v-if="german">
			<a v-for="l in germanContent.links" :key="l.id" :href="l.page" target="_blank" :id="l.style">
				{{ l.text }}
			</a>
		</div>
		<div v-else>
			<a v-for="l in englishContent.links" :key="l.id" :href="l.page" target="_blank" :id="l.style">
				{{ l.text }}
			</a>
		</div>
		<div class="stack">
			<div v-if="german">
				<p>Mein Technology Stack:</p>
			</div>
			<div v-else>
				<p>My Technology stack:</p>
			</div>
			<div v-if="german">
				<div v-for="t in tags" :key="t-id" class="tag"
					:style="{ color: t.color, backgroundColor: t.backgroundColor }">
					{{ t.name }}
				</div>
			</div>
			<div v-else>
				<div v-for="t in tags" :key="t-id" class="tag"
					:style="{ color: t.color, backgroundColor: t.backgroundColor }">
					{{ t.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/*import {
		reactive
	} from 'vue'*/

	export default {
		data() {
			return {
				german: true,
				germanContent: {
					title: 'Hi :)',
					subTitle: 'Ich heisse Kabilan Sivanamam.',
					paragraphs: [{
						id: 1,
						text: 'Ich bin ein ausgebildeter Informatiker und ein IT-Allrounder. Ich packe gerne an beim Einrichten von Netzwerken, arbeite aber auch gerne vor dem Laptop und schreibe Code.'
					}, {
						id: 2,
						text: `Im Moment arbeite ich hauptsächlich an kleinen privaten Projekten wie die Entwicklung von Discord-Bots und einer Sport-App.`
					}, {
						id: 3,
						text: 'In meiner Freizeit sitze ich aber nicht nur vor dem Laptop. Wenn ich gerade nicht in der Emme schwimme, gehe ich gerne klettern oder spiele Gitarre. 🎸'
					}],
					links: [{
						id: 1,
						text: 'LinkedIn',
						page: 'https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/',
						style: 'linkedIn'
					}, {
						id: 2,
						text: 'GitHub',
						page: 'https://github.com/ksivanamam',
						style: 'gitHub'
					}]
				},
				englishContent: {
					title: 'Hi :)',
					subTitle: 'My name is Kabilan Sivanamam.',
					paragraphs: [{
						id: 1,
						text: `I studied computer science and I'm an IT allrounder. I like to get my hands dirty setting up labs but I also like to cozy up and write code on my computer.`
					}, {
						id: 2,
						text: `Currently I'm working on small projects like a private and a public Discord bot and I'm also developing a workout app.`
					}, {
						id: 3,
						text: `But I'm not always working on stuff. In my free time I like to swim, climb, and play the guitar. 🎸`
					}],
					links: [{
						id: 1,
						text: 'LinkedIn',
						page: 'https://www.linkedin.com/in/kabilan-sivanamam-3607b5172/',
						style: 'linkedIn'
					}, {
						id: 2,
						text: 'GitHub',
						page: 'https://github.com/ksivanamam',
						style: 'gitHub'
					}]
				},
				tags: [{
					id: 1,
					name: '#vue',
					color: '#fff',
					backgroundColor: '#42b883'
				}, {
					id: 3,
					name: '#vuetify',
					color: '#fff',
					backgroundColor: '#89CFF0'
				}, {
					id: 4,
					name: '#node',
					color: '#fff',
					backgroundColor: '#6cc24a'
				}, {
					id: 5,
					name: '#ionic',
					color: '#fff',
					backgroundColor: '#00758f'
				}, {
					id: 6,
					name: '#mysql',
					color: '#fff',
					backgroundColor: '#FFCA28'
				}, {
					id: 7,
					name: '#firebase',
					color: '#fff',
					backgroundColor: '#FFA500'
				}, {
					id: 8,
					name: '#knex',
					color: '#fff',
					backgroundColor: '#FFA500'
				}]
			}
		},
		methods: {
			changeLanguage() {
				console.log(this.german)
				this.german = !this.german
			}
		}
	}
</script>

<style scoped>
	.title {
		width: 3ch;
		animation: typing .75s steps(4), blink .2s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
	}

	@keyframes typing {
		from {
			width: 0
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent
		}
	}
</style>