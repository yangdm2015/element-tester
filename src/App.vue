<template>
    <div id="app">
        <el-container>
            <el-header height="120px">
                <img src="./assets/logo.png"
                     class="logo">
                <h1>
                    vue element-ui 实例</h1>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-radio-group v-model="isCollapse"
                                    style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="1-4-1"
                             class="el-menu-vertical-demo"
                             @open="handleOpen"
                             @close="handleClose"
                             :collapse="isCollapse"
                             :router="true"
                             :defaultActive="defaultActive"
                             @select="goLink">

                        <div v-for="(item,index) in $router.options.routes.filter(i=>i.name)"
                             :key="item.path">

                            <el-submenu :index="index"
                                        v-if="item.children">
                                <i class="el-icon-menu"></i>
                                <el-menu-item v-for="child in item.children"
                                              :key="child.path"
                                              :index="child.path">{{child.name}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else
                                          :index="item.path">
                                <i class="el-icon-location"></i>{{item.name}}
                            </el-menu-item>
                        </div>
                        <!-- <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">
                                keyTest
                               
                            </span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">
                                <router-link tag="span"
                                             to="/vuexTest">
                                    vuexTest
                                </router-link>
                            </span>
                        </el-menu-item> -->
                        <!-- <el-submenu index="1">
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
                        </el-menu-item> -->
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>

                        <router-view></router-view>

                    </el-main>
                    <el-footer>
                        copyRight: yangshan08
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        goLink(index, indexPath) {
            // debugger;
        },
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
    },
    computed: {
        defaultActive() {
            return this.$route.fullPath;
        }
    }
};
</script>

<style>
.logo {
    width: 100px;
    height: 100px;
    float: left;
}
#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}
.menu-wrap {
    max-width: 200px;
}
</style>
