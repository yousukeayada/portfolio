<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">{{title}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <router-link class="text-white px-3" to="/item1">item1</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="text-white px-3" to="/item2">item2</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="text-white px-3" to="/item3">item3</router-link>
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
