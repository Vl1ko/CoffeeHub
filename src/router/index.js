import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrachView from '@/views/PrachView.vue'
import BolshView from '@/views/BolshView.vue'
import NalichnViewVue from '@/views/NalichnView.vue'
import BolshCatMilkVue from '@/views/BolshCatMilk.vue'
import BolshCatWaterVue from '@/views/BolshCatWater.vue'
import BolshCatKondVue from '@/views/BolshCatKond.vue'
import BolshCatTopVue from '@/views/BolshCatTop.vue'
import BolshCatSwVue from '@/views/BolshCatSW.vue'
import BolshCatXozVue from '@/views/BolshCatXoz.vue'
import BolshCatUpVue from '@/views/BolshCatUp.vue'
import BolshCatSyr1000Vue from '@/views/BolshCatSyr1000.vue'
import BolshCatSyr330Vue from '@/views/BolshCatSyr330.vue'
import BolshCatSyrProchVue from '@/views/BolshCatProch.vue'
import BolshCatSyrCupsVue from '@/views/BolshCatCups.vue'
import BolshCatSyrCoffeeVue from '@/views/BolshCatCoffee.vue'
import BolshCatSyrDrinksVue from '@/views/BolshCatDrinks.vue'
import NalCatMilkVue from '@/views/NalCatMilk.vue'
import NalCatWaterVue from '@/views/NalCatWater.vue'
import NalCatKondVue from '@/views/NalCatKond.vue'
import NalCatTopVue from '@/views/NalCatTop.vue'
import NalCatSwVue from '@/views/NalCatSW.vue'
import NalCatXozVue from '@/views/NalCatXoz.vue'
import NalCatUpVue from '@/views/NalCatUp.vue'
import NalCatSyr1000Vue from '@/views/NalCatSyr1000.vue'
import NalCatSyr330Vue from '@/views/NalCatSyr330.vue'
import NalCatSyrProchVue from '@/views/NalCatProch.vue'
import NalCatSyrCupsVue from '@/views/NalCatCups.vue'
import NalCatSyrCoffeeVue from '@/views/NalCatCoffee.vue'
import NalCatSyrDrinksVue from '@/views/NalCatDrinks.vue'
import PrachCatSwVue from '@/views/PrachCatSW.vue'
import PrachCatXozVue from '@/views/PrachCatXoz.vue'
import PrachCatUpVue from '@/views/PrachCatUp.vue'
import PrachCatSyr1000Vue from '@/views/PrachCatSyr1000.vue'
import PrachCatSyr330Vue from '@/views/PrachCatSyr330.vue'
import PrachCatSyrProchVue from '@/views/PrachCatProch.vue'
import PrachCatSyrCupsVue from '@/views/PrachCatCups.vue'
import PrachCatSyrCoffeeVue from '@/views/PrachCatCoffee.vue'
import PrachCatSyrDrinksVue from '@/views/PrachCatDrinks.vue'
import PrachCatWaterVue from '@/views/PrachCatWater.vue'
import PrachCatKondVue from '@/views/PrachCatKond.vue'
import PrachCatTopVue from '@/views/PrachCatTop.vue'
import PrachCatMilkVue from '@/views/PrachCatMilk.vue'
import LoyalView from '@/views/Loyal.vue'
import InProgress from '@/views/InProgress.vue'
import SadViewVue from '@/views/SadView.vue'
import SadCatCoffeeVue from '@/views/SadCatCoffee.vue'
import SadCatDrinksVue from '@/views/SadCatDrinks.vue'
import SadCatMilkVue from '@/views/SadCatMilk.vue'
import SadCatSyr1000Vue from '@/views/SadCatSyr1000.vue'
import SadCatSyr330Vue from '@/views/SadCatSyr330.vue'
import SadCatProchVue from '@/views/SadCatProch.vue'
import SadCatCupsVue from '@/views/SadCatCups.vue'
import SadCatSwVue from '@/views/SadCatSW.vue'
import SadCatXozVue from '@/views/SadCatXoz.vue'
import SadCatTopVue from '@/views/SadCatTop.vue'
import SadCatUpVue from '@/views/SadCatUp.vue'
import SadCatKondVue from '@/views/SadCatKond.vue'
import SadCatWaterVue from '@/views/SadCatWater.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'


const router = createRouter({
    // history: createWebHistory(
    //     import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // },
        {
            path: '/loyal',
            name: 'loyal',
            component: LoyalView
        },
        {
            path: '/prachechniy',
            name: 'prachechniy',
            component: PrachView
        },
        {
            path: '/bolshevikov',
            name: 'bolshevikov',
            component: BolshView
        },
        {
            path: '/nalichnaya',
            name: 'nalichnaya',
            component: NalichnViewVue
        },
        {
            path: '/sadovaya',
            name: 'sadovaya',
            component: SadViewVue
        },
        {
            path: '/bolshevikov/milk',
            name: 'milk',
            component: BolshCatMilkVue
        },
        {
            path: '/bolshevikov/water',
            name: 'water',
            component: BolshCatWaterVue
        },
        {
            path: '/bolshevikov/kond',
            name: 'kond',
            component: BolshCatKondVue
        },
        {
            path: '/bolshevikov/top',
            name: 'top',
            component: BolshCatTopVue
        },
        {
            path: '/bolshevikov/sw',
            name: 'sw',
            component: BolshCatSwVue
        },
        {
            path: '/bolshevikov/xoz',
            name: 'xoz',
            component: BolshCatXozVue
        },
        {
            path: '/bolshevikov/up',
            name: 'up',
            component: BolshCatUpVue
        },
        {
            path: '/bolshevikov/syr1000',
            name: 'syr1000',
            component: BolshCatSyr1000Vue
        },
        {
            path: '/bolshevikov/syr330',
            name: 'syr330',
            component: BolshCatSyr330Vue
        },
        {
            path: '/bolshevikov/proch',
            name: 'proch',
            component: BolshCatSyrProchVue
        },
        {
            path: '/bolshevikov/cups',
            name: 'cups',
            component: BolshCatSyrCupsVue
        },
        {
            path: '/bolshevikov/coffee',
            name: 'coffee',
            component: BolshCatSyrCoffeeVue
        },
        {
            path: '/bolshevikov/drinks',
            name: 'drinks',
            component: BolshCatSyrDrinksVue
        },
        {
            path: '/nalichnaya/milk',
            name: 'milk1',
            component: NalCatMilkVue
        },
        {
            path: '/nalichnaya/water',
            name: 'water1',
            component: NalCatWaterVue
        },
        {
            path: '/nalichnaya/kond',
            name: 'kond1',
            component: NalCatKondVue
        },
        {
            path: '/nalichnaya/top',
            name: 'top1',
            component: NalCatTopVue
        },
        {
            path: '/nalichnaya/sw',
            name: 'sw1',
            component: NalCatSwVue
        },
        {
            path: '/nalichnaya/xoz',
            name: 'xoz1',
            component: NalCatXozVue
        },
        {
            path: '/nalichnaya/up',
            name: 'up1',
            component: NalCatUpVue
        },
        {
            path: '/nalichnaya/syr1000',
            name: 'syr10001',
            component: NalCatSyr1000Vue
        },
        {
            path: '/nalichnaya/syr330',
            name: 'syr3301',
            component: NalCatSyr330Vue
        },
        {
            path: '/nalichnaya/proch',
            name: 'proch1',
            component: NalCatSyrProchVue
        },
        {
            path: '/nalichnaya/cups',
            name: 'cups1',
            component: NalCatSyrCupsVue
        },
        {
            path: '/nalichnaya/coffee',
            name: 'coffee1',
            component: NalCatSyrCoffeeVue
        },
        {
            path: '/nalichnaya/drinks',
            name: 'drinks1',
            component: NalCatSyrDrinksVue
        },
        {
            path: '/prachechniy/milk',
            name: 'milk2',
            component: PrachCatMilkVue
        },
        {
            path: '/prachechniy/water',
            name: 'water2',
            component: PrachCatWaterVue
        },
        {
            path: '/prachechniy/kond',
            name: 'kond2',
            component: PrachCatKondVue
        },
        {
            path: '/prachechniy/top',
            name: 'top2',
            component: PrachCatTopVue
        },
        {
            path: '/prachechniy/sw',
            name: 'sw2',
            component: PrachCatSwVue
        },
        {
            path: '/prachechniy/xoz',
            name: 'xoz2',
            component: PrachCatXozVue
        },
        {
            path: '/prachechniy/up',
            name: 'up2',
            component: PrachCatUpVue
        },
        {
            path: '/prachechniy/syr1000',
            name: 'syr10002',
            component: PrachCatSyr1000Vue
        },
        {
            path: '/prachechniy/syr330',
            name: 'syr3302',
            component: PrachCatSyr330Vue
        },
        {
            path: '/prachechniy/proch',
            name: 'proch2',
            component: PrachCatSyrProchVue
        },
        {
            path: '/prachechniy/cups',
            name: 'cups2',
            component: PrachCatSyrCupsVue
        },
        {
            path: '/prachechniy/coffee',
            name: 'coffee2',
            component: PrachCatSyrCoffeeVue
        },
        {
            path: '/prachechniy/drinks',
            name: 'drinks2',
            component: PrachCatSyrDrinksVue
        },
        {
            path: '/sadovaya/milk',
            name: 'milk3',
            component: SadCatMilkVue
        },
        {
            path: '/sadovaya/water',
            name: 'water3',
            component: SadCatWaterVue
        },
        {
            path: '/sadovaya/kond',
            name: 'kond3',
            component: SadCatKondVue
        },
        {
            path: '/sadovaya/top',
            name: 'top3',
            component: SadCatTopVue
        },
        {
            path: '/sadovaya/sw',
            name: 'sw3',
            component: SadCatSwVue
        },
        {
            path: '/sadovaya/xoz',
            name: 'xoz3',
            component: SadCatXozVue
        },
        {
            path: '/sadovaya/up',
            name: 'up3',
            component: SadCatUpVue
        },
        {
            path: '/sadovaya/syr1000',
            name: 'syr10003',
            component: SadCatSyr1000Vue
        },
        {
            path: '/sadovaya/syr330',
            name: 'syr3303',
            component: SadCatSyr330Vue
        },
        {
            path: '/sadovaya/proch',
            name: 'proch3',
            component: SadCatProchVue
        },
        {
            path: '/sadovaya/cups',
            name: 'cups3',
            component: SadCatCupsVue
        },
        {
            path: '/sadovaya/coffee',
            name: 'coffee3',
            component: SadCatCoffeeVue
        },
        {
            path: '/sadovaya/drinks',
            name: 'drinks3',
            component: SadCatDrinksVue
        },
        {
            path: '/comming-soon',
            name: 'comming-soon',
            component: InProgress
        }
    ]
})

export default router