<template>
    <transition name="slide">
        <div class="modal-mask">
            <div class="modal-wrapper">
                    <slot name="body"></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['modalClass'],
        methods: {
            closeModal(event) {
                this.$emit('modal-closed', false);
            }
        }
    }
</script>