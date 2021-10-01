<template>
	<div :class="classes.HomeWrapper">
		<h1 :class="classes.blueTxt">Home Page</h1>
		<!-- <div v-for="project in data" :key="project.id">
			<h1>{{ project.title }}</h1>
			{{ project.id }} <br />
			{{ project.subtitle }} <br />
			{{ project.summary }} <br />
			{{ project.projectType }} <br />
			{{ project.start }} <br />
			{{ project.end }} <br />
			{{ project.role }} <br />
			{{ project.challenge }} <br />
			{{ project.url }} <br />
			<div v-for="tech in project.technologies" :key="tech">{{ tech }}</div>
			<img style="width: 200px" :src="project.thumbnail" alt="" /> <br />
			<div v-for="image in project.images" :key="image">
				<img style="width: 200px" :src="image" alt="" />
			</div>
		</div> -->
		<MainContent />
	</div>
</template>
<script lang="ts" src="./Home.ts" />
