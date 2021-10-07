<template>
  <div :class="classes.line">
    <ProjectImage
      :side="side"
      :thumbnail="project.thumbnail"
      :title="project.title"
      :description="project.summary"
    />
    <ProjectPipe :side="side" />
  </div>
</template>
<script lang="ts" src="./ProjectTimeline.ts" />
