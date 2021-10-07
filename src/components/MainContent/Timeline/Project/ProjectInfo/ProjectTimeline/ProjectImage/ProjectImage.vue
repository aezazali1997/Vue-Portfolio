<template>
  <div :class="[side ? classes.imgContainerLeft : classes.imgContainerRight]">
    <img :class="classes.image" :src="thumbnail" alt="" />
    <div :class="classes.mainTxt">{{ title }}</div>
    <div :class="classes.desc">
      {{ description }}
    </div>
  </div>
</template>
<script lang="ts" src="./ProjectImage.ts" />
