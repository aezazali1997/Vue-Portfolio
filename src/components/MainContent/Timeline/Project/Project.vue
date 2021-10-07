<template>
  <div :class="classes.wrapper">
    <ProjectDate :date="date" />
    <div v-for="(project, index) in projects" :key="index">
      <ProjectInfo :side="side" :project="project" />
    </div>
  </div>
</template>
<script lang="ts" src="./Project.ts" />
