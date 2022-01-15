<template>
  <div>
    <header class="w-full absolute left-0 top-0 p-6 lg:p-32">
    <div class="flex justify-between">
      <div>
        <h1 class="text-3xl font-bold">Downfall</h1>
        <span>Design is everything...</span>
      </div>
      
      <div>
        <ul class="flex">
          <li class="ml-24">
            <div class="" >
              <a href="" class='hover:animate-spin'>
                <div class="flex items-center justify-end">
                  <div class="w-10 border-b border-solid border-white"></div>
                    <h1 class="ml-3 text-3xl font-bold">1</h1>
                </div>
                <div class="text-right">Projects</div>
              </a>
            </div>
          </li>
          <li class="ml-24">
            <a href="">
              <div class="flex items-center justify-end">
                <div class="w-10 border-b border-solid border-white hover:bg-royal"></div>
                  <h1 class="ml-3 text-3xl font-bold">2</h1>
              </div>
              <div class="text-right">Components</div>
            </a>
          </li>
          <li class="ml-24">
            <a href="">
              <div class="flex items-center justify-end">
                <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">3</h1>
              </div>
              <div class="text-right">CSS Modules</div>
            </a>
          </li>

          <li class="ml-24">
            <a href="">
              <div class="flex items-center justify-end">
                <div class="w-10 border-b border-solid border-white"></div>
                  <h1 class="ml-3 text-3xl font-bold">4</h1>
              </div>
              <div class="text-right">Build & Deploy</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  </div>
</template>

<script>
import axios from "axios";
import * as Functions from "../plugins/functions.js";
import { APIPath } from "../plugins/variables.js";

export default {
  async mounted() {
        
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  data() {
    return {
      profilePhoto: "https:tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
      dialog: false,
      drawer: false,
      group: null,
      user: {
        loggedIn: false,
        userID: 0,
        role: 1,
        username: "guest",
      },
      nav: [
      ],
      loggedInNav: [
        {
          icon: "summary",
          text: "Summary",
          title: "Brings you to quote page",
          active: true,
        },
        {
          icon: "quote/list",
          text: "Quote",
          title: "Brings you to quote page",
          active: true,
        },
        {
          icon: "orders",
          text: "Orders",
          title: "About this demo",
          active: false,
        },
      ],
      adminNav: [
        {
          icon: "quote/list",
          text: "Quote",
          title: "Brings you to quote page",
        },
        {
          icon: "orders",
          text: "Orders",
          title: "About this demo",
        },
        {
          icon: "dashboard",
          text: "Dashboard",
          title: "About this demo",
        },
      ],
    };
  },

  methods: {
    handleBack: Functions.handleBack,
  },
};
</script>
<style scoped>

</style>
