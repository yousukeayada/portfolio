<template>
    <div class="mt-5 p-5">
        <h1 class="mb-5 text-center"><img src="../../static/img/link.png">Link</h1>
        <div class="link">
        <a class="m-3 p-5" href="https://github.com/yousukeayada/" target="_blank">GitHub</a>
        <a class="m-3 p-5" href="https://qiita.com/ysk0832/" target="_blank">Qiita</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    color: white;
}
.link {
    display: flex;
    justify-content: center;
}
a {
    color: white;
    border-radius: 10px;
    background: #474848;
    box-shadow: 5px 5px 10px #3c3d3d, 
                -5px -5px 10px #525353;
}
a:hover {
    text-decoration: none;
    background-color: #525353;
}
</style>