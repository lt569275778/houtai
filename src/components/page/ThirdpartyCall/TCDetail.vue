<template>
    <div class="div_overflow">
        <div>
            <person-info></person-info>
        </div>
        <div>
            <el-tabs v-model="activeName">
                <el-tab-pane label="缴存记录" name="first">
                    <pay-record></pay-record>
                </el-tab-pane>
                <el-tab-pane label="贷款记录" name="second">
                    <loans-record></loans-record>
                </el-tab-pane>
                <el-tab-pane label="报告信息" name="three">
                    <report-info></report-info>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<style>
    .autab{width:94%; margin:0 auto; background:#f3f4f8; margin:15px auto; border-radius:5px; padding:10px 0;}
    .autab_td1{color:#a0a0a0; text-align:right; height:40px; line-height:40px; width:12%; padding-right:1%;}
    .div_overflow {position:absolute; width:100%;height:100%; overflow:auto;}
</style>

<script>
    export default {
        data(){
            return {
                activeName: 'first'
            }
        },
        components: {
            payRecord: resolve => {require(['../orgindata/fsfund/payRecord.vue'], resolve)},
            loansRecord: resolve => {require(['../orgindata/fsfund/loansRecord.vue'], resolve)},
            reportInfo: resolve => {require(['../orgindata/fsfund/reportInfo.vue'], resolve)},
            personInfo: resolve => {require(['./PersonInfo.vue'], resolve)}
        },
    }

</script>
