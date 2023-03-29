<template>
  <div class="col-lg-3 mb-4">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center">
          <img
            src="@/../public/images/profile.jpg"
            alt="Profile"
            width="36"
            height="36"
            class="rounded-circle"
          />
          <div class="ps-3">
            <p class="my-0 fs-5 fw-semibold">Baskara Putra</p>
            <p class="my-0 fs-6 text-secondary">wordfangs@email.com</p>
          </div>
        </div>
      </li>
      <li class="list-group-item text-secondary" @click="$emit('changeComponent', 'personal-info')">
        <a><i class="fa-solid fa-user pe-2"></i>Personal Info</a>
      </li>
      <li class="list-group-item text-secondary" @click="$emit('changeComponent', 'favorite-recipes')">
        <i class="fas fa-heart pe-2"></i>Favorited Recipes
      </li>
      <li class="list-group-item text-secondary" @click="$emit('changeComponent', 'my-recipe')"> 
        <i class="fa-solid fa-burger pe-2"></i>My Recipe
      </li>
    </ul>
  </div>
</template>