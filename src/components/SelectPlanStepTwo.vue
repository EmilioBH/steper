<template>
    <h1 class="title">Select your plan</h1>
    <p class="subtitle">You have the option of monthly or yearly billing.</p>
    <div class="container">
        <div class="plan-options">
            <CardPlan />
        </div>
    </div>
</template>

<script setup lang="ts">
    import CardPlan from './CardPlan.vue';
</script>

<style scoped>

</style>