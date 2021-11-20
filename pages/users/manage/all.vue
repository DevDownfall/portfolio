<template>
    <div>
        <h2>Recently Joined Users</h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  v-for="header in userHeaders"
                  :key="header.value"
                  class="text-left"
                >
                  {{ header.text }}
                </th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="item in users" :key="item.id" @click.prevent="handleBack(`/users/manage/${item.id}`)">
                    <td>{{ item.id }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.password }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.ip_address }}</td>
                    <td>{{ item.province }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.salesRep }}</td>
                    <!-- <td>{{ convertDate(item.CREATED_AT) }}</td> -->
                    <NuxtLink :to="'login'"><v-btn absolute center color='primary' @click.prevent="handleBack(`/quotes/${item.id}`)">View</v-btn></NuxtLink>
                </tr>
            </tbody>
          </template>
        </v-simple-table>
    </div>
</template>
<script>
import * as Functions from '../../../plugins/functions.js'

export default {
    async mounted() {
        // const Users = await this.$axios.get(`http://localhost:8000/api/users/total`)

        this.users = Users.data.results

        await this.setValues()
    },
    data: () => ({
        users: [],
        userData: [],
        messages: {},
        userHeaders: [{ text: "ID", value: "id" },{ text: "Username", value: "name" },{ text: "password", value: "password" },{ text: "email", value: "email" },{ text: "IP Address", value: "ipaddress" },{ text: "Province", value: "province" },{ text: "role", value: "role" },{ text: "Sales Rep", value: "salesrep" }, { text: "Created At", value: "created" }],
        provinces: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
        required: [
            (v) => !!(v) || 'This field is required'
        ],

        handleBack: Functions.handleBack,
    }),

    methods: {
        async submit(id) {
            if(this.messages.password != this.userData.password) {
                const newPass = await this.$axios.get(`http://localhost:8000/api/admin/reset/password?password=cat&userid=${this.$route.params.id}`)
                if(newPass.message == 'success') this.messages.password = newPass.password
            }
            const province = await this.abbreviation(this.messages.province)
            this.messages.province = province
            return 
            await Helper.updateData(`UPDATE users SET ? WHERE id = ?`, [ id])
        },
        async setValues(){
            this.messages.username = this.userData.username
            this.messages.password = this.userData.password
            this.messages.email = this.userData.email
        },
        async abbreviation(province){
            if(province == 'Alberta') var abbreviation = 'AB'
            if(province == 'British Columbia') var abbreviation = 'BC'
            if(province == 'Manitoba') var abbreviation = 'MB'
            if(province == 'New Brunswick') var abbreviation = 'NB'
            if(province == 'Newfoundland and Labrador') var abbreviation = 'NL'
            if(province == 'Nova Scotia') var abbreviation = 'NS'
            if(province == 'Ontario') var abbreviation = 'ON'
            if(province == 'Prince Edward Island') var abbreviation = 'PEI'
            if(province == 'Quebec') var abbreviation = 'QC'
            if(province == 'Saskatchewan') var abbreviation = 'SASK'

            return abbreviation
        }
    }
}
</script>

<style>

</style>