<script setup>
import { onMounted, ref, watchEffect } from 'vue';
const theme = ref('dark');

const light = "light";

const updateTheme = () => {
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        theme.value = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add(light)
        theme.value = light
    }
    document.querySelector('html').setAttribute('data-theme', theme.value);
    window.localStorage.theme = theme.value;
}

const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? light : 'dark';
    window.localStorage.theme = theme.value;
    updateTheme()
};

onMounted(() => {
    updateTheme()
})



</script>
<template>
    <header class="fixed top-5 w-full px-1 z-50 md:px-5">
        <div class="container mx-auto bg-gradient-to-r from-accent/85 to-info/85 text-accent-content navbar rounded-full px-5 backdrop-blur-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gradient-to-r from-accent to-info font-bold text-lg">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <!-- <li>
                            <a>Parent</a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> -->
                    </ul>
                </div>
                <span class="btn btn-ghost text-xl">ADCP</span>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 font-bold text-lg">
                    <li>
                        <a href="#home">
                            <div class="font-bold group transition-all duration-300 ease-in-out text-black">
                                <span
                                    class="hover:cursor-pointer bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Inicio
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <div class="font-bold group transition-all duration-300 ease-in-out text-black">
                                <span
                                    class="hover:cursor-pointer bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Proyectos
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#timeline">
                            <div class="font-bold group transition-all duration-300 ease-in-out text-black">
                                <span
                                    class="hover:cursor-pointer bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Timeline
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <div class="font-bold group transition-all duration-300 ease-in-out text-black">
                                <span
                                    class="hover:cursor-pointer bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Contacto
                                </span>
                            </div>
                        </a>
                    </li>
                    <!-- <li>
                        <details>
                            <summary>Parent</summary>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> -->
                </ul>
            </div>
            <div class="navbar-end">
                <label class="swap swap-rotate">

                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller" @input="toggleTheme" />

                    <!-- sun icon -->
                    <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <!-- moon icon -->
                    <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>

                </label>
            </div>
        </div>
    </header>
</template>