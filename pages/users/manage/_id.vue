<template>
    <div v-if="this.$route.params.id">
        <v-form fluid href='form'>
            <h2>User - {{this.$route.params.id}}</h2>
            <v-row>
                <v-col cols="3">
                    <v-textarea
                        label="Username"
                        no-resize
                        rows="1"
                        :value="userData.username"
                        v-model="messages.username"
                    ></v-textarea>
                </v-col>
                <v-col cols="6">
                    <v-textarea
                        label="Password"
                        no-resize
                        rows="1"
                        v-model="messages.password"
                        :value="userData.password"
                    ></v-textarea>
                </v-col>
                <v-col cols="3">
                    <v-textarea
                        label="Email"
                        no-resize
                        rows="1"
                        :value="this.userData.email"
                        v-model="messages.email"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-select
                        label="Province"
                        v-model="messages.province"
                        :items="provinces"
                        solo
                    >
                    </v-select>
                </v-col>
                <v-col cols="2">
                    <v-select
                        label="Role"
                        v-model="messages.role"
                        :items="roles.map((i) => i.name)"
                        solo
                    >
                    </v-select>
                </v-col>
                <v-col cols="2">
                    <v-select
                        label="SalesRep"
                        v-model="messages.salesRep"
                        :items="[1,2]"
                        solo
                    >
                    </v-select>
                </v-col>
            </v-row>
            <v-btn @click="submit(userData)">Submit</v-btn>
        </v-form>
    </div>
    <div v-else-if="!this.$route.params.id">
        <h1>Please specify a userID</h1>
    </div>
</template>
-
<script>
import * as Functions from '../../../plugins/functions.js'

export default {
    async mounted() {
        // const Data = await this.$axios.get(`http://localhost:8000/api/users/select/${this.$route.params.id}`)
        this.userData = Data.data.Info
        await this.setValues()
    },
    data: () => ({
        userData: [],
        messages: {},
        userHeaders: [{ text: "ID", value: "id" },{ text: "Username", value: "name" },{ text: "password", value: "password" },{ text: "email", value: "email" },{ text: "IP Address", value: "ipaddress" },{ text: "Province", value: "province" },{ text: "role", value: "role" },{ text: "Sales Rep", value: "salesrep" }, { text: "Created At", value: "created" }],
        provinces: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
        roles: [{name: 'User', id: 1}, {name: 'Employee', id: 2}, {name: 'Admin', id: 3}],

        handleBack: Functions.handleBack,
    }),

    methods: {
        async submit(id) {
            if(this.messages.role == 'User'){
                this.messages.role = 1
            }else if(this.messages.role == 'Employee'){
                this.messages.role = 2
            }else {
                this.messages.role = 3
            }

            if(this.messages.password != this.userData.password) {
                const newPass = await this.$axios.get(`http://localhost:8000/api/admin/reset/password?password=cat&userid=${this.$route.params.id}`)
                if(newPass.message == 'success') this.messages.password = newPass.password
            }
            const province = await this.abbreviation(this.messages.province)
            this.messages.province = province

            await this.$axios.post(`http://localhost:8000/api/admin/manage/user/${this.$route.params.id}`, {
                username: this.messages.username,
                email: this.messages.email,
                province: this.messages.province,
                role: this.messages.role,
                salesRep: this.messages.salesRep
            })

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