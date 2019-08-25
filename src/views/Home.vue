<template>
  <div class="home">
    <Header/>
    <main class="main">
      <Banner/>
      <AboutMe/>
      <Relationships/>
      <Requirements/>
      <Users/>
      <SignUp/>
    </main>
    <Footer/>
  </div>
</template>
<script>

  import Header from "../components/layout/Header";
  import Banner from "../components/home/Banner";
  import AboutMe from "../components/home/AboutMe";
  import Requirements from "../components/home/Requirements";
  import Relationships from "../components/home/Relationships";
  import Users from "../components/home/Users";
  import SignUp from "../components/home/SignUp";
  import Footer from "../components/layout/Footer";

  export default {
    name: 'home',
    components: {
      Footer,
      SignUp,
      Users,
      Relationships,
      Requirements,
      AboutMe,
      Banner,
      Header
    },
  }
</script>
