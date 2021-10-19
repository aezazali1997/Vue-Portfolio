<template>
  <div :class="classes.line">
    <router-link :to="project.id">
      <ProjectImage
        :side="side"
        :thumbnail="project.thumbnail"
        :title="project.title"
        :description="project.summary"
      />
    </router-link>
    <ProjectPipe :side="side" />
  </div>
</template>
<script lang="ts" src="./ProjectTimeline.ts" />
