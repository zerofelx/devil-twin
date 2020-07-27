<template>
    <div>
        <h1>{{ title }}</h1>

        <label for="pass1">Contraseña de la red</label> <br>
        <input type="password" name="contraseña" id="pass1" v-model="pass1"> <br>

        <label for="pass2">Repetir contraseña</label> <br>
        <input type="password" name="repetir contraseña" id="pass2" v-model="pass2"> <br>

        <input type="submit" value="Enviar" @click="sendData()">
    </div>
</template>

<script>
import dbconnect from '@/dbconnect.js' 

export default {
    name: "ConfigView",
    data() {
        return {
            title: "Configuración del Módem",
            pass1: "",
            pass2: ""
        }
    },
    methods: {
        sendData() {
            if (this.pass1 === this.pass2) {
                dbconnect.insert(this.pass1, this.pass2)
            }
        }
    }

}
</script>

<style scoped>

</style>