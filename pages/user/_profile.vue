<template>
<div>
  <Navbar />
  <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden" v-if="param = true">
    <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
      <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0">
      <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="h-24 w-24 object-cover rounded-full">
        <h1 class="text-2xl font-semibold">Antonia Howell</h1>
        <h4 class="text-sm font-semibold">Joined Since '19</h4>
      </div>
    </div>
    <div class="grid grid-cols-12 bg-white ">

    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

      <a href="#" class="text-sm p-2 bg-red-700 text-white text-center rounded font-bold">Basic Information</a>

      <a v-if="!this.user.loggedIn" href="#" class="text-sm p-2 bg-red-200 text-center rounded font-semibold hover:bg-red-700 hover:text-gray-200">Manage User</a>

    </div>

    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form id="/" class="flex flex-col space-y-8">

          <div>
            <h3 class="text-2xl font-semibold">Basic Information</h3>
            <hr>
          </div>
            <div class="form-item">

            <!-- <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div class="flex justify-between">
                        <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div class="flex">
                                    <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" class="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin" placeholder="Search">
                            </div>
                        </div>
                    </div>
                </div> -->


            <label class="text-xl ">Full Name</label>
            <input type="text" value="Antonia P. Howell" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled>
          </div>

          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

            <div class="form-item w-full">
              <label class="text-xl ">Username</label>
              <input type="text" value="antonia" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
            </div>

            <div class="form-item w-full">
              <label class="text-xl ">Email</label>
              <input type="text" value="Email" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold ">More About Me</h3>
            <hr>
          </div>

          <div class="form-item w-full">
            <label class="text-xl ">Biography</label>
            <textarea cols="30" rows="10" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
          </div>

          <div>
            <h3 class="text-2xl font-semibold">My Social Media</h3>
            <hr>
          </div>

          <div class="form-item">
            <label class="text-xl ">Instagram</label>
            <input type="text" value="https://instagram.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
          </div>
          <div class="form-item">
            <label class="text-xl ">Facebook</label>
            <input type="text" value="https://facebook.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>
          </div>
          <div class="form-item">
            <label class="text-xl ">Twitter</label>
            <input type="text" value="https://twitter.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled>
          </div>

        </form>

        <hr class="mt-6 border-b-1 border-blueGray-300"><br>
        <h1 class="text-yellow-500 text-xl">Pending Quotes</h1><br>

        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
              <thead>
                  <tr>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 tracking-wider">ID</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Fullname</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Email</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Phone</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Status</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Created At</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                  </tr>
              </thead>
              <tbody class="bg-white">
                  <tr v-for='item in pendingQuotes' :key="item.id">
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="flex items-center">
                              <div>
                                  <div class="text-sm leading-5 text-gray-800">{{item.id}}</div>
                              </div>
                          </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-gray-900">{{item.first_name}} {{item.last_name}}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">{{item.email}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">+{{item.phone_number}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                          <span class="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden class="absolute inset-0 bg-yellow-500 opacity-50 rounded-full"></span>
                          <span class="relative text-xs">{{item.status}}</span>
                      </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 text-sm leading-5">{{convertDate(item.CREATED_AT)}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button class="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none" @click="changeStatus('rejected', item.id)">Reject</button>
                        <button class="px-5 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none" @click="confirmQuote(item.id)">Confirm</button>
                        <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" @click="handleBack(`/quotes?id=${item.id}`)">View Details</button>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <hr class="mt-6 border-b-1 border-blueGray-300"><br>
        <h1 class="text-green-600 text-xl">Completed Quotes</h1><br>

        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
              <thead>
                  <tr>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 tracking-wider">ID</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Fullname</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Email</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Phone</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Status</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Created At</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                  </tr>
              </thead>
              <tbody class="bg-white">
                  <tr v-for='item in completedQuotes' :key="item.id">
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="flex items-center">
                              <div>
                                  <div class="text-sm leading-5 text-gray-800">{{item.id}}</div>
                              </div>
                          </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-gray-900">{{item.first_name}} {{item.last_name}}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">{{item.email}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">+{{item.phone_number}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                          <span class="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span class="relative text-xs">{{item.status}}</span>
                      </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 text-sm leading-5">{{convertDate(item.CREATED_AT)}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                          <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" @click="handleBack(`/quotes?id=${item.id}`)">View Details</button>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300"><br>
        <h1 class="text-red-500 text-xl">Rejected Quotes</h1><br>

        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
              <thead>
                  <tr>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 tracking-wider">ID</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Fullname</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Email</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Phone</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Status</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 tracking-wider">Created At</th>
                      <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                  </tr>
              </thead>
              <tbody class="bg-white">
                  <tr v-for='item in rejectedQuotes' :key="item.id">
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="flex items-center">
                              <div>
                                  <div class="text-sm leading-5 text-gray-800">{{item.id}}</div>
                              </div>
                          </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-gray-900">{{item.first_name}} {{item.last_name}}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">{{item.email}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">+{{item.phone_number}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                          <span class="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                          <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span class="relative text-xs">{{item.status}}</span>
                      </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 text-sm leading-5">{{convertDate(item.CREATED_AT)}}</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                          <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" @click="handleBack(`/quotes?id=${item.id}`)">View Details</button>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <Modal v-show="isModalVisible" type='reject' @close="closeModal()"/>
      </div>
    </div>
  </div>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
import * as Functions from '../../plugins/functions.js'
import { APIPath } from '../../plugins/variables'

// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;

// var pusher = new Pusher('c04d3ec52439130bafc4', {
//   cluster: 'us2'
// });

// var channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//   app.messages.push(JSON.stringify(data));
// });

export default {
    async mounted() {
        const Info = await axios.get(`${APIPath}v1/profile/user?id=${this.$route.query.id}`)
        this.information = Info.data.user.info
        this.pendingQuotes = Info.data.user.quotes.filter((i) => i.status == 'pending')
        this.rejectedQuotes = Info.data.user.quotes.filter((i) => i.status == 'rejected')
        this.completedQuotes = Info.data.user.quotes.filter((i) => i.status == 'confirmed')
    },
    data: () => ({
        information: {},
        user: {},
        currentage: 1,
        pendingQuotes: [],
        completedQuotes: [],
        rejectedQuotes: [],
        manage: false,
        showModal: false,
        isModalVisible: false,
        quoteHeaders: [{ text: "Business Name", value: "name" },{ text: "Sales Representative", value: "salesRep" },{ text: "Status", value: "status" },{ text: "Date", value: "date" }],

        // methods
        handleBack: Functions.handleBack,
        convertDate: Functions.convertDate,
    }),
    components: {
      Navbar: () => import('/components/Navbar.vue'),
      Modal: () => import('/components/Modal.vue'),
    },
    methods: {
      managePortion(){
        this.manage = true
      },
      async changeStatus(value, id){
        await axios.post(`${APIPath}v1/quotes/edit`, {
          id: id, 
          status: value
        }).then((response) => {
          if(response){
            this.handleBack(`/user?id=${this.$route.query.id}`)
          }else {
            console.log('false')
          }
        })
      },
      async confirmQuote(id){
        await axios.post(`${APIPath}v1/receipt/create`, {
          id: id
        }).then((response) => {
          if(response){
            console.log('Quote Confirmed')
          }

        })
      }
    }
}
</script>

<style>
    .title {
        position: absolute;
        margin-left: 20px
    }
</style>