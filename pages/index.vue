<template>
  <div>
    <Navbar />
    <main class="h-full flex items-center px-6 lg:px-32 bg-purple-900 text-white">

    </main>
    <Footer />
  </div>
  
</template>

<script>
export default {
  async mounted() {

  },

  data: () => ({
    currentMachine: "",
    currentPower: "",
    information: [],
    machines: [],
    options: [],
    additions: [],
    powers: [],
    totalMachineCost: 0,
    totalOptionCost: 0,
    totalCost: 0,
    selectedMachine: [],
    checkedOptions: [],
    selectedAddition: [],
    messages: {},
    quantity: "1",
    educationalDiscount: false,
    additionPrice: [],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    numRules: [
      (v) => !!v || "Phone Number is required",
      (v) =>
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v) ||
        "Phone Number must be valid",
    ],
    partHeaders: [
      { text: "Laser System", value: "name" },
      { text: "Power", value: "power" },
      { text: "Unit Price", value: "price" },
      { text: "Quantity", value: "quantity" },
      { text: "Total", value: "total" },
    ],
    additionHeaders: [
      { text: "Name", value: "name" },
      { text: "Power", value: "power" },
      { text: "Price", value: "price" },
      { text: "", value: "" },
      { text: "Total", value: "total" },
    ],
    discountHeaders: [
      { text: "Item", value: "item" },
      { text: "Discount", value: "discount" },
      { text: "", value: "" },
      { text: "Total", value: "total " },
    ],
    components: {
      Navbar: () => import('~/components/Navbar.vue'),
      Footer: () => import('~/components/Footer.vue'),
    }

  }),

  methods: {
    selectMachine() {
      const machines = this.machines.filter(
        (i) => i.name == this.currentMachine
      );
      this.powers = machines.map((i) => i.power);
    },
    selectPower() {
      var machine = this.machines.filter(
        (i) => i.name == this.currentMachine && i.power == this.currentPower
      );
      var machine = machine.filter((i) => (i.quantity = `<input type="text">`));

      this.selectedMachine = machine;
    },
    addCommas(nStr) {
      nStr += "";
      var x = nStr.split(".");
      var x1 = x[0];
      var x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    },
    setTotal(price, quantity, options) {
      const reducedCost =
        parseInt(price * quantity) +
        parseInt(
          options
            .map((i) => i.price)
            .reduce((x, y) => parseInt(x) + parseInt(y))
        );
      this.totalCost = reducedCost;
      return this.addCommas(reducedCost);
    },

    addAddition(id, price) {
      const exist = this.additionPrice.filter((i) => i.id == id);
      if (exist[0]) {
        this.additionPrice = this.additionPrice.filter((i) => i.id != id);
      } else {
        this.additionPrice.push({ id: id, price: price });
      }
    },

    splitString() {
      return
      console.log(this.selectedMachine[0])
      var fixedString = string;
      var fixedString = fixedString.split(':');
      let i = 0
      fixedString.forEach(s => {
        console.log(s)
        i++
        return s
      })
    }
  },

  // {{/*<ul><li v-for="(power, p) in this.selectedMachine[0]" :key="'D' + p">{{splitString(power.power_control)}}</li></ul><br>*/}}
  // {{/*<ul><li v-for="(motion, m) in this.selectedMachine[0]" :key="'C' + m">{{splitString(motion.motion_control)}}</li></ul><br> */}}
};
</script>
<style scoped>
  .v-application a {
    color: #374151
  }
</style>
