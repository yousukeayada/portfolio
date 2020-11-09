<template>
<div>
    <h1 class="mt-5 p-5 text-center"><span class="material-icons large">description</span>Skill</h1>
    <h2 class="m-5 p-3 text-success text-center">Language</h2>
    <div class="skill">
        <Card tech='C' text='大学の講義で扱いました。' rate='2'></Card>
        <Card tech='C++' text='研究や Atcoder で使用しています。' rate='3'></Card>
        <Card tech='Java' text='大学の講義で扱いました。' rate='1.5'></Card>
        <Card tech='Spring Boot' text='大学の講義で扱いました。Web アプリ制作経験があります。' rate='1.5'></Card>
        <Card tech='Python' text='API 叩いたりちょっとしたデータ分析をするときによく使います。' rate='2'></Card>
        <Card tech='JavaScriptt' text='基礎的なことはわかります。' rate='1.5'></Card>
        <Card tech='Vue.js' text='このポートフォリオを作るのに勉強しました。' rate='1'></Card>
        <Card tech='Node.js' text='開発のために使っていますが、サーバーサイドとしてはサンプルを動かしたことがある程度です。' rate='1'></Card>
        <Card tech='Go' text='サーバーサイドとして使うために勉強中です。' rate='1'></Card>
        <Card tech='PHP' text='HP 作成経験があります。' rate='1'></Card>
        <Card tech='SQL' text='基本的なクエリはわかります。' rate='1.5'></Card>
        <Card tech='Swift' text='本を読んで触ったことがある程度です。' rate='0.5'></Card>
    </div>

    <h2 class="m-5 p-3 text-info text-center">Cloud</h2>
    <div class="skill">
        <Card tech='Heroku' text='a little' rate='2'></Card>
        <Card tech='AWS' text='a little' rate='2'></Card>
        <Card tech='GCP' text='a little' rate='2'></Card>
    </div>

    <h2 class="m-5 p-3 text-center">Tool</h2>
    <div class="skill">
        <Card tech='Git' text='基本的な操作はできます。チームでの使用経験はまだ浅いです。' rate='2'></Card>
        <Card tech='VS Code' text='a little' rate='2'></Card>
    </div>
</div>
</template>

<script>
import Card from './Card'

export default {
    name: 'Skill',
    components: {
        Card,
  },
}
</script>

<style scoped>
div {
    font-family: Times, serif;
}
.material-icons.large {
    font-size: 45px;
}
.skill {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
h2 {
    /* border-radius: 30px;
    background: #474848;
    box-shadow: inset 5px 5px 10px #3c3d3d, 
                inset -5px -5px 10px #525353; */
    border-radius: 20px;
    background: #e6e6e6;
    box-shadow: inset 5px 5px 10px #c4c4c4, 
                inset -5px -5px 10px #ffffff;
}
</style>