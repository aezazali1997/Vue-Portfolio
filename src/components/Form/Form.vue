<template>
  <div :class="classes.formContainer">
    <div :class="classes.formWrapper">
      <div :class="classes.containerInfo">
        <h1 :class="classes.title">Contact me</h1>
        <div>
          <p>Office Location</p>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.office"></span>
            <span>Remote office</span>
          </div>
        </div>
        <div>
          <p>Phone no</p>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.phone"></span>
            <span>+92-335-5555555</span>
          </div>
        </div>
        <div>
          <p>Email</p>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.email"></span> <span>sktmind@gmail.com</span>
          </div>
        </div>
        <h1 :class="classes.title">Social links</h1>
        <div>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.twitter"></span>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
          </div>
        </div>
        <div>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.linkedin"></span>
            <a href="https://www.linkedin.com" target="_blank">Linkedin</a>
          </div>
        </div>
        <div>
          <div :class="classes.iconTxtContainer">
            <span :class="classes.github"></span
            ><a href="https://www.github.com" target="_blank">Github</a>
          </div>
        </div>
      </div>
      <div :class="classes.messageContainer">
        <h1 :class="classes.title__extend">message me</h1>
        <form :class="classes.form" @submit="formSubmitted" @submit.prevent>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="formInfo.name"
              required
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="formInfo.email"
              required
            />
          </div>
          <div>
            <label for="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              v-model="formInfo.company"
              required
            />
          </div>
          <div>
            <label for="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              v-model="formInfo.subject"
              required
            />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              v-model="formInfo.description"
              required
            ></textarea>
          </div>
          <input
            id="submit"
            type="submit"
            value="Send message!"
            :class="classes.submitBtn"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Form.ts" />
