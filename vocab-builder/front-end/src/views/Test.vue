<template>
    <div class="ui container">
      <!-- Search Bar -->
      <div class="ui segment">
        <div class="ui icon input">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search any word..."
            class="search-input"
          />
          <i class="search icon"></i>
        </div>
      </div>
  
      <!-- Word Stats -->
      <div class="ui segment">
        <h4 class="ui header">Word Statistics</h4>
        <div class="ui statistics">
          <div class="statistic">
            <div class="value">{{ totalWords }}</div>
            <div class="label">Total Words</div>
          </div>
          <div class="statistic">
            <div class="value">{{ germanWords }}</div>
            <div class="label">German Words</div>
          </div>
          <div class="statistic">
            <div class="value">{{ englishWords }}</div>
            <div class="label">English Words</div>
          </div>
          <div class="statistic">
            <div class="value">{{ vietnamWords }}</div>
            <div class="label">Vietnamese Words</div>
          </div>
          <div class="statistic">
            <div class="value">{{ japanWords }}</div>
            <div class="label">Japanese Words</div>
          </div>
          <div class="statistic">
            <div class="value">{{ italyWords }}</div>
            <div class="label">Italian Words</div>
          </div>
        </div>
      </div>
  
      <!-- Filtered Words List -->
      <div class="ui segment">
        <div class="ui celled list">
          <div v-for="word in filteredWords" :key="word._id" class="item">
            <div class="content">
              <div class="header">Words</div>
              <div class="description">
                <div v-if="word.german">German: {{ word.german }}</div>
                <div v-if="word.english">English: {{ word.english }}</div>
                <div v-if="word.vietnam">Vietnamese: {{ word.vietnam }}</div>
                <div v-if="word.japan">Japanese: {{ word.japan }}</div>
                <div v-if="word.italy">Italian: {{ word.italy }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from "../helpers/helpers";
  
  export default {
    name: "Test",
    data() {
      return {
        searchTerm: "",
        words: [],
      };
    },
    computed: {
      filteredWords() {
        const search = this.searchTerm.toLowerCase();
        return this.words.filter((word) => {
          return [
            word.german,
            word.english,
            word.vietnam,
            word.japan,
            word.italy,
          ].some(
            (value) => value && value.toString().toLowerCase().includes(search)
          );
        });
      },
      totalWords() {
        let count = 0;
        this.words.forEach((word) => {
          if (word.german && word.german.trim() !== "") count++;
          if (word.english && word.english.trim() !== "") count++;
          if (word.vietnam && word.vietnam.trim() !== "") count++;
          if (word.japan && word.japan.trim() !== "") count++;
          if (word.italy && word.italy.trim() !== "") count++;
        });
        return count;
      },
      germanWords() {
        return this.words.filter(
          (word) => word.german && word.german.trim() !== ""
        ).length;
      },
      englishWords() {
        return this.words.filter(
          (word) => word.english && word.english.trim() !== ""
        ).length;
      },
      vietnamWords() {
        return this.words.filter(
          (word) => word.vietnam && word.vietnam.trim() !== ""
        ).length;
      },
      japanWords() {
        return this.words.filter(
          (word) => word.japan && word.japan.trim() !== ""
        ).length;
      },
      italyWords() {
        return this.words.filter(
          (word) => word.italy && word.italy.trim() !== ""
        ).length;
      },
    },
    async mounted() {
      try {
        this.words = await api.getWords();
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .search-input {
    width: 100%;
    max-width: 500px;
  }
  
  .ui.statistics {
    margin: 1rem 0;
  }
  
  .ui.list {
    margin-top: 20px;
  }
  </style>
  