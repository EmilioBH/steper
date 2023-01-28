import { createRouter, createWebHistory } from 'vue-router'
import FormStepOne from '@/components/FormStepOne.vue'
import SelectPlanStepTwo from '@/components/SelectPlanStepTwo.vue'
import PickAddStepThree from '@/components/PickAddStepThree.vue';
import FinishUpStepFour from '@/components/FinishUpStepFour.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'step1',
      component: FormStepOne
    },
    {
      path: '/select-plan',
      name: 'step2',
      component: SelectPlanStepTwo 
    },
    {
      path: '/add-ons',
      name: 'step3',
      component:  PickAddStepThree
    },
    {
      path: '/finish-up',
      name: 'step4',
      component: FinishUpStepFour
    }
  ]
})

export default router
