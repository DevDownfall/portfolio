<template>
  <div>
    
    <main class="h-screen flex items-center px-6 lg:px-32 bg-gradient-to-b from-royal to-light text-white relative">
      <Navbar />
      <section class="w-full md:w-9/12 xl:w-8/12" >
        <span class="font-bold uppercase tracking-widest">Atomic</span>
        <h1 class="text-3xl lg:text-5xl font-bold text-pink-500" >
          Tail<br/>Design
        </h1>
        <p class="font-bold mb-1 " data-replace='{ "translate-y-12": "translate-y-0" }'>The Design is in the de{Tail}s...</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>
      
      <footer class="absolute right-0 bottom-0 p-6 lg:p-32">
        <p class="font-bold mb-1">Yours Truly,</p>
        <p>Matthew Clarke (Full Stack Developer)</p>
        <div class="animate-bounce w-6 h-6 bg-black">
        <!-- ... -->
      </div>
      </footer>
      
    </main>
    <!-- Page 2 --> 
    <!-- <main id="page2" class="h-screen flex items-center px-6 lg:px-32 bg-gradient-to-b from-royal to-light text-white relative">
      <section class="w-full md:w-9/12 xl:w-8/12">
        <span class="font-bold uppercase tracking-widest">Atomic</span>
        <h1 class="text-3xl lg:text-5xl font-bold text-pink-500">
          Tail<br/>Design
        </h1>
        <p class="font-bold mb-1">The Design is in the de{Tail}s...</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>
      <footer class="absolute right-0 bottom-0 p-6 lg:p-32">
        <p class="font-bold mb-1">Yours Truly,</p>
        <p>Matthew Clarke (Full Stack Developer)</p>
      </footer>
    </main> -->

    
  </div>
  
</template>

<script>
import Navbar from '../../buckystyle-fantasy/Website/components/Navbar.vue';
export default {
  components: {
    Navbar: () => import(`~/components/Navbar.vue`)
  },
};
</script>
<style scoped>

#page2 {
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  animation: expand .8s ease forwards;
  background-color: var(--secondary-color);
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all .8s ease;
}
</style>
