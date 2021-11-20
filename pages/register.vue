<template>
    <div>
    <Navbar />
    <section class="absolute w-full top-0">
      <div class="absolute top-0 w-full h-full " style="background-image: url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot;); background-size: 100%; background-repeat: no-repeat;"></div>
      <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
              <div class="w-full lg:w-4/12 px-4 pt-32">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                      <div class="rounded-t mb-0 px-6 py-6">
                          <div class="text-center mb-3">
                              <h6 class="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                          <div class="btn-wrapper text-center">
                              <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition: all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/tailwindcss-starter-project/static/media/github.4ffd4fe7.svg">Github</button>
                              <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition: all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/tailwindcss-starter-project/static/media/google.87be59a1.svg">Google</button>
                          </div>
                          <hr class="mt-6 border-b-1 border-gray-400">
                      </div>
                      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <div class="text-gray-500 text-center mb-3 font-bold"><small>Or sign in with credentials</small></div>
                          <form>
                              <div class="relative w-full mb-3">
                                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Username</label>
                                  <input type="username" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Username" style="transition: all 0.15s ease 0s;" :v-model="this.username" required alphabet>
                              </div>
                              <div class="relative w-full mb-3">
                                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Password</label>
                                  <input type="password" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style="transition: all 0.15s ease 0s;" :v-model="this.password.password" required>
                              </div>
                              <div class="relative w-full mb-3">
                                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Confirm Password</label>
                                  <input type="password" class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style="transition: all 0.15s ease 0s;" :v-model="this.password.confirm" required>
                              </div>
                              <div>
                                  <label class="inline-flex items-center cursor-pointer">
                                    <input id="customCheckLogin" type="checkbox" class="form-checkbox text-gray-800 ml-1 w-5 h-5" style="transition: all 0.15s ease 0s;"><span class="ml-2 text-sm font-semibold text-gray-700">Remember me</span></label>
                              </div>
                              <div class="text-center mt-6">
                                  <button class="bg-red-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style="transition: all 0.15s ease 0s;" @click="register()">Sign In</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="flex flex-wrap mt-6">
                      <div class="w-1/2"><a href="#pablo" class="text-grey-700"><small>Forgot password?</small></a></div>
                      <div class="w-1/2 text-right"><a href="#pablo" class="text-gray-700"><small>Create new account</small></a></div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, maxLength, minLength } from '@vuelidate/validators'

export default {
  
  async mounted() {

  },

  data: () => ({
    v$: useValidate(),
    username: '',
    email: '',
    password: {
      password: '',
      confirm: ''
    },
    emailRules: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  validations() {
    return {
      username: { required },
      email: { required },
      password: {
        password: { required},
        confirm: { required }
      }
    }
  },

  methods: {
    async register() {
        this.v$.validate();
        await this.$axios.post(`${this.$root._data.APIPath}v1/auth/register`, {
            username: this.messages.username,
            password: this.messages.password,
            email: this.messages.email
        }, {withCredentials: true})
        window.location.href=`/`
    }
  },

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
</style>
