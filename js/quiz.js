// vueインスタンス設定（quizの時間と画面を管理する）
var quizClass = new Vue({
    el: '#quiz',
    data: function data() {
        return {
            timeCount: 30,
            silent: false,
        };
    },

    methods: {
        countDown: function countDown() {
            _this01 = this
            setInterval(function () {
                (_this01.timeCount > 0) ? _this01.timeCount-- : false
                _this01.CountCheck(_this01)
            }, 1000)
        },

        CountCheck: function CountCheck(that) {
            if ([15, 14].indexOf(that.timeCount) >= 0) {
                that.silent = true
            } else if (that.timeCount === 0) {
                location.href = 'answer02.html'
            } else {
                that.silent = false
            }
        }
    },

    mounted: function mounted() {
        this.countDown()
    },

    filters: {
        zeropadding: function (timeCount) {
            return ('00' + timeCount).slice(-2)
        }
    }

})

