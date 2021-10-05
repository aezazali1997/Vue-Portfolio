<template>
	<div :class="[side ? classes.imgContainerLeft : classes.imgContainerRight]">
		<img :class="classes.image" src="@/assets/project-1.jpg" alt="" />
		<div :class="classes.mainTxt">Universal Aviations</div>
		<div :class="classes.desc">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
			dolores.
		</div>
	</div>
</template>
<script lang="ts" src="./ProjectImage.ts" />
