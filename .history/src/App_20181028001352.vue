<template>
    <div id="app">
        <img src="./assets/logo.png">

        <el-row>
            <el-col :span="3">
                <el-radio-group v-model="isCollapse"
                                style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1"
                         class="el-menu-vertical-demo"
                         @open="handleOpen"
                         @close="handleClose"
                         :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3"
                                  disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
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
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        startHacking() {
            this.$notify({
                title: 'It works!',
                type: 'success',
                message:
                    "We've laid the ground work for you. It's time for you to build something epic!",
                duration: 5000
            });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
