<template>
<div class="m-3 p-3" id="card">
    <h3 class="text-center">{{ tech }}</h3>
    <p class="p-3">{{text}}</p>
    <p class="text-center"><span class="star5_rating" :data-rate="rate"></span></p>
</div>
</template>

<script>
export default {
    props:{
        tech: {
            type: String,
            default: 'Tech'
        },
        text: {
            type: String,
            default: 'Text',
        },
        rate: {
            type: String,
            default: '0',
        }
    },
    // props: [
    //     'tech'
    // ]
}
</script>

<style scoped>
#card {
    max-width: 300px;
    color: black;
    word-break: break-all;
    /* border-radius: 30px;
    background: #474848;
    box-shadow: 5px 5px 10px #3c3d3d, 
                -5px -5px 10px #525353; */
    border-radius: 30px;
    background: #e6e6e6;
    box-shadow:  5px 5px 10px #c4c4c4, 
                 -5px -5px 10px #ffffff;
}
.star5_rating{
    position: relative;
    z-index: 0;
    display: inline-block;
    white-space: nowrap;
    color: #CCCCCC; /* グレーカラー 自由に設定化 */
    /*font-size: 30px; フォントサイズ 自由に設定化 */
}

.star5_rating:before, .star5_rating:after{
    content: '★★★';
}

.star5_rating:after{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #ffcf32; /* イエローカラー 自由に設定化 */
}

.star5_rating[data-rate="3"]:after{ width: 100%; } /* 星3 */
.star5_rating[data-rate="2.5"]:after{ width: 83%; } /* 星2.5 */
.star5_rating[data-rate="2"]:after{ width: 66%; } /* 星2 */
.star5_rating[data-rate="1.5"]:after{ width: 50%; } /* 星1.5 */
.star5_rating[data-rate="1"]:after{ width: 33%; } /* 星1 */
.star5_rating[data-rate="0.5"]:after{ width: 16%; } /* 星0.5 */
.star5_rating[data-rate="0"]:after{ width: 0%; } /* 星0 */
</style>