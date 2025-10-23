<script setup lang="ts">
const { count, increment } = useCounter()
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">ทดสอบ</button>
    </div>
</template>
