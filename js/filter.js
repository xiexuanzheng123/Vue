Vue.filter('reverse',function(value){
    return value.split('').reverse().join('');
});
Vue.filter('uppercase',function(value){
    return value.toUpperCase();
});
new Vue({
    el: '#app',
    data: {
        message: 'www.runoob.com'
    }
});