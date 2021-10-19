<template>
  <div id="navbar" :class="classes.navbar">
    <div></div>
    <div>
      <router-link :class="classes.link" to="/">Home</router-link>
      <router-link :class="classes.link" to="/portfolio">Portfolio</router-link>
      <router-link :class="classes.link" to="/about">About</router-link>
      <router-link :class="classes.link" to="/contact">Contact</router-link>
    </div>
  </div>
  <router-view />
</template>
<script lang="ts" src="./App.ts" />
