<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="danger" fixed="top">
    <b-navbar-brand>
      <router-link class="text-white" to="/">{{title}}</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <router-link class="text-white px-3" to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="text-white px-3" to="/skill">Skill</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="text-white px-3" to="/works">Works</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="text-white px-3" to="/contact">Contact</router-link>
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Portfolio'
        }
    }
}
</script>
