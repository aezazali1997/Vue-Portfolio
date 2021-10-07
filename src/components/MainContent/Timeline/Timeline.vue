<template>
  <div :class="classes.timelineWrapper">
    <TimelineTop />
    <div v-if="loading">Loading</div>
    <div v-for="(projectByYear, index) in Projects" :key="index">
      <Project
        :date="projectByYear.year"
        :projects="projectByYear.projects"
        :side="index % 2 === 0 ? true : false"
      />
    </div>
    <TimelineBottom />
  </div>
</template>
<script lang="ts" src="./Timeline.ts" />
