<template>
    <div class='toggle-button' @click="$store.commit('toggleAbout')">
    <div class='line'></div> 
    <div class='line'></div>
    <div class='line'></div>
    <div class='line'></div>
    <div class='line'></div>
    <div class='line'></div>
    <span> {{ text }} </span>
    </div>
</template>
<script>
export default {
    name: "ButtonComponent",
    props: {
        text: {
            type: String,
            required: false
            }
    }
}
</script>