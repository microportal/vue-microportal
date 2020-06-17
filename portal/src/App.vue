<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/dashboard">Dashboard</router-link>
            |
            <router-link to="/settings">Settings</router-link>
        </div>
        <router-view/>
    </div>
</template>
