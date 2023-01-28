<template>
    <h1 class="title">Personal info</h1>
    <p class="subtitle">Please provide your name. email adress, and phone number.</p>
    <div class="form-input">
        <label for="name">Name</label>
        <input type="text" />
    </div>
    <div class="form-input">
        <label for="email">Email Address</label>
        <input type="text" />
    </div>
    <div class="form-input">
        <label for="phone">Phone Number</label>
        <input type="text" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .form-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
</style>