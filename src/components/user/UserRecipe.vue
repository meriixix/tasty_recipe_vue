<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div
        class="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center"
      >
        <div class="mb-3 mb-sm-0">
          <p class="my-0 fs-4 fw-semibold">My Recipe</p>
          <p class="my-0 text-secondary">Add your original recipe here</p>
        </div>
        <div>
          <router-link tag="button" to="/user/new-recipe" class="btn add-btn px-3 py-2 rounded-pill">
            <i class="fa-solid fa-circle-plus pe-2"></i>Add Recipe
          </router-link>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
      <div class="row">
      
        <!-- <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Thai Edamame Salad</h4>
                  </div>
                  <p>Created at 4 Apr 2020 12:12</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 1.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Crispy Carrot Fries</h4>
                  </div>
                  <p>Created at 28 Feb 2020 9:06</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 2.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Crispy Carrot Fries</h4>
                  </div>
                  <p>Created at 16 Jul 2020 16:42</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 3.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Crispy Carrot Fries</h4>
                  </div>
                  <p>Created at 15 Jan 2020 22:43</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 4.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Crispy Carrot Fries</h4>
                  </div>
                  <p>Created at 16 Jul 2020 16:42</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 5.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 my-2">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="mb-0">BREAKFAST</p>
                  <div class="h-50">
                    <h4 class="fs-5 mb-0">Crispy Carrot Fries</h4>
                  </div>
                  <p>Created at 23 Mar 2020 14:52</p>
                </div>

                <div class="d-flex">
                  <img
                    src="assets/Food 6.png"
                    alt=""
                    width="90"
                    height="80"
                    class="rounded"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 pt-3 border-top">
                <button class="btn delete-btn px-3 py-2 rounded-pill">
                  Delete
                </button>
                <button class="btn edit-btn px-3 py-2 rounded-pill">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div> -->

      </div>
    </li>
  </ul>
</template>