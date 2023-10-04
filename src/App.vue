<template>
  <div>
    <h1>Soy el componente padre</h1>
    <router-link to="/"><q-btn color="white" text-color="black" label="Standard" /></router-link>
    <router-link to="/compras"><q-btn color="primary" label="Primary" /></router-link>
    <router-link to="/ventas"> <q-btn color="secondary" label="Secondary" /></router-link>
    <router-view></router-view>
  </div>
</template>
