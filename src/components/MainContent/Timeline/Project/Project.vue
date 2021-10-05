<template>
	<div :class="classes.wrapper">
		<ProjectDate :date="date" />
		<ProjectInfo :side="side" />
	</div>
</template>
<script lang="ts" src="./Project.ts" />
