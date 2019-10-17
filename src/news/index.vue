<template>
    <div>
        <h1>{{count}}</h1>
        <Button @click="getCountAdd(1)">Click Add</Button>
        <Button @click="getCountReduce(1)">Click Reduce</Button>
    </div>
</template>
<script>
import store from "../store/index";
import {mapGetters,mapActions} from "vuex";
import {Button} from "ant-design-vue";
export default {
    store,
    components:{
        Button
    },
    computed:mapGetters(["count"]),
    methods:{
        ...mapActions(['getCountAdd','getCountReduce'])
    }
}
</script>
<style scoped>

</style>