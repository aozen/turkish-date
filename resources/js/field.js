Nova.booting((Vue, router) => {
    Vue.component('index-turkish-date', require('./components/Index/DateField'));
    Vue.component('detail-turkish-date', require('./components/Detail/DateField'));
    Vue.component('form-turkish-date', require('./components/Form/DateField'));
})
