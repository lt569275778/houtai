<template>
    <div>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            sessionStorage.removeItem('fundId');
            var param = {
                channelId: this.$route.query.channelId,
                productId: this.$route.query.productId,
                identificationNumber: this.$route.query.identificationNumber
            };
            this.$axios.post(this.$api.getRequestId, param).then(function(result) {
                if(result.data.requestId) {
                    sessionStorage.setItem('fundId', result.data.requestId);
                    this.$router.push({path: "fundDetail"});
                }else{
                    this.$message.error("未查询到该客户报告信息");
                }
            }.bind(this));
        }
    }

</script>
