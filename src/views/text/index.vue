<template>
   
        <div class="content">
            <div class="content_head">
                哈哈哈哈哈哈哈哈哈哈
            </div>
            <div class="paper">
                <TestPaper :data=list></TestPaper>
            </div>
        </div>
  
</template>

<script setup lang="ts">
import TestPaper from '@/components/TestPaper.vue';

const list = [
    { id: "1", title: "天", child: [1, 2, 3] },
    { id: "2", title: "地", child: [5, 6, 7] },
    { id: "3", title: "人", child: [8, 9, 0] },
]
</script>

<style scoped>


.content {
    width: 100%;
    height: auto;
    background-color: rgb(247, 245, 242);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.content_head, .paper{
    width: 1000px;
    background-color: aliceblue;

}
.content_head{
    margin-top: 20px;
    padding-top: 20px;
    height: 50px;
    text-align: center;
    
}
</style>