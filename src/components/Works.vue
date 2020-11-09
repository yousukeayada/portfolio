<template>
    <div class="mt-5 p-5">
        <h1 class="text-center"><span class="material-icons large">work_outline</span>Works</h1>
        <div class="works my-5">
            <b-card
                title="ポートフォリオ"
                img-src="https://yousukeayada.github.io/portfolio/static/img/home.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="work-card m-2 p-3"
            >
                <b-card-text>
                このサイトです。Vue.js を使って開発しました。ニューモーフィズムを取り入れてみました。
                </b-card-text>

                <a class="p-2" href="https://github.com/yousukeayada/portfolio" target="_blank">GitHub</a>
            </b-card>

            <b-card
                title="Discord 音楽 Bot"
                img-src="https://yousukeayada.github.io/portfolio/static/img/discord-music-bot.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="work-card m-2 p-3"
            >
                <b-card-text>
                Discord で通話相手と音楽を一緒に聴ける Bot です。
                </b-card-text>

                <a class="p-2" href="https://qiita.com/ysk0832/items/372e5beb80df7f752bb5" target="_blank">Qiita</a>
            </b-card>

            <b-card
                title="Todo 管理＆通知アプリ"
                img-src="https://yousukeayada.github.io/portfolio/static/img/spring-todo.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="work-card m-2 p-3"
            >
                <b-card-text>
                Todo を管理し、締切の近いものを Discord に通知してくれるアプリ。
                </b-card-text>

                <a class="p-2" href="https://github.com/yousukeayada/spring-todo" target="_blank">GitHub</a>
            </b-card>

            <b-card
                title="High Talk"
                img-src="https://yousukeayada.github.io/portfolio/static/img/high-talk.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="work-card m-2 p-3"
            >
                <b-card-text>
                KDG HACKS 2020 で制作した、話題を提供してくれる Web 会議アプリ&Discord Bot。最優秀賞をいただきました。
                </b-card-text>

                <a class="p-2" href="https://drive.google.com/file/d/1zC55XYd7tvirQ7XZJhg_7OFgSKl_Sini/view?usp=sharing" target="_blank">Slide</a>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    font-family: Times, serif;
}
.material-icons.large {
    font-size: 45px;
}
.works {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.work-card {
    /* border-radius: 30px;
    background: #474848;
    box-shadow: 5px 5px 10px #3c3d3d, 
                -5px -5px 10px #525353; */
    border-radius: 10px;
    background: #e6e6e6;
    box-shadow:  5px 5px 10px #c4c4c4, 
                 -5px -5px 10px #ffffff;
}
a {
    color: black;
    text-decoration: none;
    /* border-radius: 10px;
    background: #474848;
    box-shadow: 5px 5px 10px #3c3d3d, 
                -5px -5px 10px #525353; */
    border-radius: 5px;
    background: #e6e6e6;
    box-shadow:  5px 5px 10px #c4c4c4, 
                 -5px -5px 10px #ffffff;
}
a:hover {
    background-color: #a2a3a3;
}
</style>