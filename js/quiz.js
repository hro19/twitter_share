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
        },

    },

    mounted: function mounted() {
        this.countDown()
    },

    filters: {
        zeropadding: function (timeCount) {
            return ('00' + timeCount).slice(-2)
        }
    },

    watch: {
        timeCount: function () {
            var colon_frash = document.getElementById('colon_frash');
            var colon_frash_list = colon_frash.classList;
            colon_frash_list.add('hide');

            _.delay(function () {
                colon_frash_list.remove('hide');
            }, 500)
        }
    }

})

