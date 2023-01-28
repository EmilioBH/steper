<template>
    <div class="frame">
        <div class="container">
            <div class="nav-side">
                <div class="step-list" >
                    <step-router class="step-router" v-for="step in steperData" :key="step.id" :data="step"/>
                </div>
            </div>
            <div class="steper">
                <div class="steper-container">
                    <router-view/>
                </div>
                <div class="bottom-btn">
                    <button @click="goBack">Go Back</button>
                    <button class="next-btn" @click="nextPage" >Next step</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import StepRouter from '@/components/StepRouter.vue';
    import router from '@/router';

    interface Data {
        id: string,
        step: string
    }

    let page = 1;

    const steperData: Data[] = [
        {
            id: '1',
            step: 'Your Info'
        },
        {
            id: '2',
            step: 'Select Plan'
        },
        {
            id: '3',
            step: 'Add-ons'
        },
        {
            id: '4',
            step: 'Summary'
        },
    ];

    const nextPage = () => {
        if(page<4){
            console.log('anterior: ',page);
            page++;
            console.log('actual: ',page);
            router.push({name: `step${page}`})
        }
    }

    const goBack = () => {
        if(page>1){
            page--;
            router.push({name: `step${page}`})
        }
    }


</script>

<style scoped>
    .frame{
        width: 98vw;
        height: 98vh;
        display: flex;
        justify-content: center;
    }
    .container{
        display: flex;
        flex-direction: row;
        margin: auto;
        width: 80vw;
        height: 80vh;
        background-color: white;
        border-radius: 10px;
        box-shadow: 10px 10px 30px -3px rgba(0,0,0,0.75);
    }
    .nav-side{
        width: 30%;
        height: 95%;
        background-image: url('../assets/images/bg-sidebar-desktop.svg');
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        margin: auto 1.25rem;
        border-radius: 10px;
    }
    .steper{
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 80%;
    }
    .step-router{
        margin-bottom: 1rem;
    }
    .step-list{
        margin: 3rem;
    }
    .bottom-btn{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .steper-container{
        margin: auto;
        width: 80%;
        height: 80%;
        padding-right: 1.75rem;
    }
</style>