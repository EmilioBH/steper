<template>
    <div class="step-box">
        <div class="circle">
            <p class="circle-step">{{ data.id }}</p>
        </div>
        <div class="step-box-text">
            <span class="step-num">Step {{ data.id }}</span>
            <span class="step-info">{{ data.step }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
   defineProps(['data']);
</script>

<style scoped>
    .step-box{
        display: flex;
        flex-direction: row;
    }

    .step-box-text{
        display: flex;
        flex-direction: column;
    }

    .circle{
        border: 2px solid white;
        padding: 0.7rem 1rem;
        border-radius: 2rem;
    }

    .circle-step{
        margin: 0;
        color: white;
    }

    .step-box-text{
        margin-top: 0.25rem;
        padding-left: 0.5rem;
        color: white;
    }
</style>