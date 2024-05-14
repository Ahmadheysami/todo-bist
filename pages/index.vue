<script setup lang="js">

</script>

<template>
  <div class="container mx-auto min-h-screen max-sm:px-3">
    <div class="w-[700px] max-md:w-full mx-auto">
      <ClientOnly>
        <AppHeader></AppHeader>
        <div>

          <h1 class=" border w-full text-neutral-800 dark:text-indigo-500 text-4xl">
            TODO Content
          </h1>

          <NuxtLink to="/all">All Todos</NuxtLink>

          <NuxtPage></NuxtPage>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style >

</style>