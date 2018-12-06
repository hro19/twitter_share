// vueインスタンス設定（your_name:入力した名前を管理する）
var yourNameClass = new Vue({
    el: '#your_name',
    data: function data() {
        return {
            your_name: "",
        };
    },

    methods: {
        naming: function naming() {
            var urlParam = location.search.substring(1);

            // パラメータが存在確認、無ければ何もしない
            if (urlParam) {
                // 「&」が含まれている場合は「&」で分割
                var param = urlParam.split('&');
                // パラメータを格納する用の配列を用意
                var paramArray = [];
                // 用意した配列にパラメータを格納
                for (i = 0; i < param.length; i++) {
                    var paramItem = param[i].split('=');
                    paramArray[paramItem[0]] = paramItem[1];
                }
                // パラメータyour_nameをdecode
                this.your_name = decodeURI(paramArray.your_name)
            }
        }
    },

    mounted: function mounted() {
        this.naming()
    }
})
