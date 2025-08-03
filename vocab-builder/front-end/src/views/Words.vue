<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
        <th>German</th>
          <th>English</th>
          <th>VietNam</th>
          <th>Japan</th>
          <th>Italian</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.german }}</td>
        <td>{{ word.english }}</td>
        <td>{{ word.vietnam }}</td>
        <td>{{ word.japan }}</td>
        <td>{{ word.italy }}</td>
        <td width="75" class="center aligned">
          <button
            class="ui blue button"
            @click="$router.push({ name: 'show', params: { id: word._id } })"
            title="Show word details"
          >
            <i class="eye icon"></i>
            Show
          </button>
        </td>
        <td width="75" class="center aligned">
          <button
            class="ui orange button"
            @click="$router.push({ name: 'edit', params: { id: word._id } })"
            title="Edit word"
          >
            <i class="edit icon"></i>
            Edit
          </button>
        </td>
        <td width="75" class="center aligned">
          <button
            class="ui red button"
            @click="onDestroy(word._id)"
            title="Delete word"
          >
            <i class="trash icon"></i>
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "words",
  data() {
    return {
      words: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deleteWord(id);
      this.flash("Word deleted sucessfully!", "success");
      const newWords = this.words.filter((word) => word._id !== id);
      this.words = newWords;
    },
  },
  async mounted() {
    this.words = await api.getWords();
  },
};
</script>

<style scoped>
/* Add SemUI CSS for button colors */
.ui.blue.button {
  background-color: #2185d0 !important;
  color: white !important;
}

.ui.orange.button {
  background-color: #f2711c !important;
  color: white !important;
}

.ui.red.button {
  background-color: #db2828 !important;
  color: white !important;
}

/* Ensure good contrast for red-green color blindness */
.ui.button {
  border-radius: 4px;
  padding: 0.5em 1em;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.ui.button:hover {
  opacity: 0.9;
}

/* Add tooltips for better accessibility */
.ui.button[title] {
  cursor: pointer;
}
</style>
