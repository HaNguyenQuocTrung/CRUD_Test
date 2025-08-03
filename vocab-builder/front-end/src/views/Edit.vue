<template>
  <div>
    <h1 class="ui header">
      <i class="edit icon"></i>
      <div class="content">
        Edit Word
        <div class="sub header">Update word details</div>
      </div>
    </h1>
    <word-form @createOrUpdate="createOrUpdate" :word="word"></word-form>
  </div>
</template>

<script>
import WordForm from "../components/WordForm.vue";
import { api } from "../helpers/helpers";

export default {
  name: "edit",
  components: {
    "word-form": WordForm,
  },
  data: function () {
    return {
      word: {},
    };
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  },
  methods: {
    createOrUpdate: async function (word) {
      try {
        await api.updateWord(word);
        this.flash("Word updated successfully!", "success");
        this.$router.push(`/words/${word._id}`);
      } catch (error) {
        this.flash("Error updating word. Please try again.", "error");
      }
    },
  },
};
</script>

<style scoped>
.ui.header {
  margin-bottom: 2em;
}

.ui.header .icon {
  margin-right: 1em;
  color: #3498db;
}
</style>
