<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <el-button @click="startHacking">Start</el-button>
            <router-link tag="span"
                         to="/cascader">
                cascader
            </router-link>
            <router-link tag="span"
                         to="/form">
                form
            </router-link>
            <router-link tag="span"
                         to="/tree">
                tree
            </router-link>

            <router-link tag="span"
                         to="/rt">
                rt
            </router-link>
            <router-link tag="span"
                         to="/po">
                po
            </router-link>
            <router-link tag="span"
                         to="/formvali">
                formvali
            </router-link>

            <router-link tag="span"
                         to="/mx">
                mx
            </router-link>
            <router-link tag="span"
                         to="/lo">
                lo
            </router-link>
            <router-link tag="span"
                         to="/formRset">
                formRset
            </router-link>
            <router-link tag="span"
                         to="/propsTest">
                propsTest
            </router-link>
            <router-link tag="span"
                         to="/keyTest">
                keyTest
            </router-link>

        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        startHacking() {
            this.$notify({
                title: 'It works!',
                type: 'success',
                message:
                    "We've laid the ground work for you. It's time for you to build something epic!",
                duration: 5000
            });
        }
    }
};
</script>

<style>
#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}
</style>
