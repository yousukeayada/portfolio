<template>
    <div class="mt-5 p-5">
        <h1 class="mb-5 text-center"><span class="material-icons large">person</span>About</h1>
        <!-- <img src="../../static/img/myicon.jpg"><br> -->
        <div class="myicon"></div>
        <table class="mt-5 table table-hover table-borderless text-center">
            <tr><td>Name</td><td>ユー</td></tr>
            <tr><td>Position</td><td>情報系専攻の大学院生</td></tr>
            <tr><td>Study</td><td>無線LAN、強化学習</td></tr>
            <tr><td>Like</td><td>アニメ、漫画/THE IDOLM@STER/ONE PIECE</td></tr>
        </table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    font-family: Times, serif;
    color: white;
}
.material-icons.large {
    font-size: 45px;
}
.myicon {
    background-image: url("https://yousukeayada.github.io/general/assets/img/myicon.jpg");
    border-radius: 50%;
    background-position: 50% 50%;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
table {
    max-width: 500px;
    margin: 0 auto;
    color: white;
    border-radius: 10px;
    background: #474848;
    box-shadow: 5px 5px 10px #3c3d3d, 
                -5px -5px 10px #525353;
}
</style>