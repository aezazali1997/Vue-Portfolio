<template>
  <div :class="classes.projectInfoWrapper">
    <ProjectTimeline :side="side" :project="project" />
  </div>
</template>
<script lang="ts" src="./ProjectInfo.ts" />
