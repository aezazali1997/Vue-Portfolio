<template>
  <div :class="[date ? classes.dateWrapper : classes.none]">
    <div>{{ date }}</div>
  </div>
</template>
<script lang="ts" src="./ProjectDate.ts" />
