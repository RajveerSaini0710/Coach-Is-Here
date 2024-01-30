
<template>
    <div class="card flex justify-center">
        <h1>Coach Detail</h1>
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script >
import AutoComplete from 'primevue/autocomplete';

export default {
    components: {
        AutoComplete

    }
}
</script>
