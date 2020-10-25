<template>
<div>
    <h1 class="mt-5 p-5 text-white text-center">Skill</h1>
    <div class="skill">
        <Card tech='Python' text='a little' rate='2'></Card>
        <Card tech='C' text='大学の講義で扱った。' rate='2'></Card>
        <Card tech='C++' text='研究や Atcoder で使用している。' rate='2'></Card>
        <Card tech='Python' text='a little' rate='2'></Card>
        <Card tech='Swift' text='本を読んで触ったことがある程度。' rate='0.5'></Card>
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
.skill {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
</style>