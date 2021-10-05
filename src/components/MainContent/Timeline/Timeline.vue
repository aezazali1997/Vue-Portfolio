<template>
	<div :class="classes.timelineWrapper">
		<TimelineTop />
		<div v-if="loading">Loading</div>
		<div v-for="(project, index) in result.allProjects" :key="project.id">
			<Project
				:date="dateComputed(project.start)"
				:side="index % 2 === 0 ? true : false"
			/>
		</div>
		<TimelineBottom />
	</div>
</template>
<script lang="ts" src="./Timeline.ts" />
