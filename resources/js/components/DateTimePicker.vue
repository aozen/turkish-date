<script>
    import flatpickr from 'flatpickr'
    import {Turkish} from 'flatpickr/dist/l10n/tr'
    import 'flatpickr/dist/themes/airbnb.css'

    export default {
        props: {
            field: {
                required: true,
            },
            value: {
                required: false,
            },
            placeholder: {
                type: String,
                default: () => {
                    return moment().format('d-M-Y')
                },
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            dateFormat: {
                type: String,
                default: 'Y-m-d H:i:S',
            },
            twelveHourTime: {
                type: Boolean,
                default: false,
            },
            enableTime: {
                type: Boolean,
                default: true,
            },
            enableSeconds: {
                type: Boolean,
                default: true,
            }
        },

        data: () => ({ flatpickr: null }),

        mounted() {
            this.$nextTick(() => {
                this.flatpickr = flatpickr(this.$refs.datePicker, {
                    enableTime: this.enableTime,
                    enableSeconds: this.enableSeconds,
                    onClose: this.onChange,
                    dateFormat: this.dateFormat,
                    locale: Turkish,
                    allowInput: true,
                    time_24hr: !this.twelveHourTime,
                })
            })
        },

        methods: {
            onChange(event) {
                this.$emit('change', this.$refs.datePicker.value)
            },
        },
    }
</script>

<template>
    <input
        :disabled="disabled"
        :dusk="field.attribute"
        :class="{'!cursor-not-allowed': disabled}"
        :value="value"
        :name="field.name"
        ref="datePicker"
        type="text"
        placeholder=" ">
</template>

<style scoped>
    .\!cursor-not-allowed {
        cursor: not-allowed !important;
    }
</style>
