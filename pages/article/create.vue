<template>
  <div class="mt-0 lg:mt-20">
    <form class="px-4 lg:px-32" @submit.prevent="submit">
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="w-full lg:w-2/3">
          <h4 class="text-2xl mb-8 font-medium">Create New Article</h4>
          <div class="mb-4">
            <label class="block text-gray-700 text-base" for="title">
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Enter your Article Title"
              v-model="title"
            />
          </div>
          <div>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              id="description"
              cols="30"
              rows="30"
              placeholder="Write your story"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <h4 class="font-medium text-2xl mb-8">Publication Detail</h4>
          <div class="mb-6">
            <label class="block text-gray-700 text-base" for="description">
              Short Description
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="short_description"
              id="short_description"
              cols="30"
              rows="10"
              placeholder="Enter your Article Short Description"
              v-model="short_description"
            ></textarea>
          </div>
          <div>
            <p class="text-base">Thumbnail</p>
            <label class="block">
              <input
                type="file"
                class="block w-full text-sm rounded border border-gray-400 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#E9ECEF] file:text-[#6C757D] hover:file:bg-violet-100"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </label>
          </div>
          <div class="mt-6">
            <label class="block">Categories</label>
            <div class="dropdown w-full">
              <select
                name="category_id"
                id="category_id"
                v-model="category_id"
                class="dropdown-select"
              >
                <option value="">Select Category</option>
                <option
                  v-for="cate in category"
                  :key="cate.id"
                  :value="cate.id"
                >
                  {{ cate.title }}
                </option>
              </select>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex items-center justify-between w-full mb-8">
              <span>Published</span>
              <label for="is_visible" class="flex items-center cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                  <!-- input -->
                  <input
                    v-model="is_visible"
                    id="is_visible"
                    type="checkbox"
                    class="sr-only"
                  />
                  <!-- line -->
                  <div
                    class="w-10 h-4 bg-[#1976D2] rounded-full shadow-inner"
                  ></div>
                  <!-- dot -->
                  <div
                    class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="bg-[#ED3237] text-white py-3 px-4 w-full lg:w-auto"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      title: "",
      short_description: "",
      description: "",
      category_id: "",
      is_visible: false,
      category: [],
      file: "",
    };
  },
  async fetch() {
    await this.getcategory();
  },
  computed: {
    ...mapGetters({
      token: "auth/token",
    }),
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    async getcategory() {
      const { data } = await axios.get(
        "https://restify-sahaware-boilerplate.herokuapp.com/api/article-category"
      );
      this.category = data.content;
    },
    async submit() {
      let datas = {
        title: this.title,
        short_description: this.short_description,
        description: this.description,
        category_id: this.category_id,
        is_visible: String(this.is_visible),
        image: this.file,
      };
      const tokens = Cookies.get("token");
      const { data } = await axios.post(
        "https://restify-sahaware-boilerplate.herokuapp.com/api/article/create",
        datas,
        {
          headers: {
            Authorization: "Bearer " + tokens,
          },
        }
      );
      this.$router.push({ path: "/article" });
      this.name = "";
      this.email = "";
      this.password = "";
      this.phone = "";
    },
  },
};
</script>
<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
  overflow: hidden;

  background: white;
  border: 1px solid;
  border-color: grey;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.dropdown:before,
.dropdown:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px dashed;
  border-color: #888888 transparent;
  pointer-events: none;
}

.dropdown:before {
  border-bottom-style: solid;
  border-top: none;
}

.dropdown:after {
  margin-top: 7px;
  border-top-style: solid;
  border-bottom: none;
}

.dropdown-select {
  position: relative;
  width: 130%;
  margin: 0;
  padding: 6px 8px 6px 10px;
  height: 28px;
  line-height: 14px;
  font-size: 12px;
  color: #62717a;
  text-shadow: 0 1px white;
  background: #f2f2f2;
  background: rgba(0, 0, 0, 0) !important;
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
}

.dropdown-select:focus {
  z-index: 3;
  width: 100%;
  color: #394349;
  outline: 2px solid #49aff2;
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: -2px;
}

.dropdown-select > option {
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #f2f2f2;
  border-radius: 3px;
  cursor: pointer;
}

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #1976d2;
}
</style>
