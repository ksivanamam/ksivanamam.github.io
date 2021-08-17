<template>
	<div class="content">
		<div>
			<h1 class="title">{{ german.title }}</h1>
		</div>
		<div>
			<h2 class="subTitle anim-typewriter">{{ german.subTitle }}</h2>
		</div>
		<p v-for="p in german.paragraphs" :key="p.id">
			{{  p.text }}
		</p>
		<a v-for="l in german.links" :key="l.id" :href="l.page" target="_blank" :id="l.style">
			{{ l.text }}
		</a>
	</div>
</template>

<script setup>
	import {
		reactive
	} from 'vue'


	const german = reactive({
		title: 'Hi :)',
		subTitle: 'Ich heisse Kabilan Sivanamam.',
		paragraphs: [{
			id: 1,
			text: 'Ich bin ein ausgebildeter Betriebsinformatiker und ein absoluter Informatik-Allrounder. Ich packe gerne an bei der Einrichtung von Netzwerken, arbeite aber auch gerne vor dem Laptop und schreibe Code.'
		}, {
			id: 2,
			text: `Im Moment arbeite ich hauptsächlich an kleinen privaten Projekten wie die Entwicklung von Discord Bots und einer Sport-App.`
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
	})
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