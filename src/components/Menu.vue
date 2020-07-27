<template>
    <div>
        <h1> {{ title }} </h1>
        <p> {{ test }} </p>
    </div>
</template>

<script>
export default {
    name: 'PandoraMenu',
    props: {
        title: String
    }, 
    data() {
        return {
            test: "Hola"
        }
    }
}
</script>

<style scoped>

</style>