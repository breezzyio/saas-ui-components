<template>
     <component v-bind:is="component" class="w-12 h-12 text-icongray flex-shrink-0"/>
</template>
<script>

import IconTenants from './icons/IconTenants'
import IconReviews from './icons/IconReviews'
import IconCompany from './icons/IconCompany'


export default {
     name: 'MainIcon',
     props:['component'],
     components: {
          IconTenants,
          IconReviews,
          IconCompany
     },
}
</script>