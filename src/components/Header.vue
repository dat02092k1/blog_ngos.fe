<template>
    <div class="container flex justify-between mt-4">
        <div class="branding text-2xl font-semibold">
        <router-link :to="{ name: 'home' }">FireBlogs</router-link>
      </div>

      <div class="nav-links">
        <ul class="mr-[32px] font-medium">
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'home' }">Blogs</router-link>
            <router-link class="link" :to="{ name: 'home' }">User</router-link>
        </ul>
      </div>
    </div>
</template>

<style scoped>
.nav-links {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
}

.nav-links ul {
        margin-right: 32px;
}
.nav-links ul .link {
          margin-right: 32px;
        }

.nav-links ul  .link:last-child {
          margin-right: 0;
        }
      
</style>