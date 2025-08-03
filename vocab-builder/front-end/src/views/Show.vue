<template>
  <div class="ui container">
    <h1 class="ui header">
      <i class="eye icon"></i>
      <div class="content">
        Word Details
        <div class="sub header">View word translations</div>
      </div>
    </h1>

    <div class="ui segments">
      <div class="ui segment">
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="germany flag"></i> German</div>
          <input type="text" readonly :value="word.german" />
        </div>
      </div>

      <div class="ui segment">
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="united kingdom flag"></i> English
          </div>
          <input type="text" readonly :value="word.english" />
        </div>
      </div>

      <div class="ui segment">
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="vietnam flag"></i> VietNam</div>
          <input type="text" readonly :value="word.vietnam" />
        </div>
      </div>

      <div class="ui segment">
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="japan flag"></i> Japan</div>
          <input type="text" readonly :value="word.japan" />
        </div>
      </div>

      <div class="ui segment">
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="italy flag"></i> Italy</div>
          <input type="text" readonly :value="word.italy" />
        </div>
      </div>
    </div>

    <div class="ui center aligned segment">
      <router-link
        :to="{ name: 'edit', params: { id: $route.params.id } }"
        class="ui orange button"
      >
        <i class="edit icon"></i>
        Edit Word
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";

export default {
  name: "show",
  data() {
    return {
      word: {},
    };
  },
  async mounted() {
    try {
      this.word = await api.getWord(this.$route.params.id);
    } catch (error) {
      this.flash("Error loading word details. Please try again.", "error");
    }
  },
};
</script>

<style scoped>
.ui.container {
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
}

.ui.header {
  margin-bottom: 2em;
}

.ui.header .icon {
  margin-right: 1em;
  color: #3498db;
}

.ui.segments {
  margin: 1.5em 0;
}

.ui.segment {
  margin-bottom: 1em;
}

.ui.segment:last-child {
  margin-bottom: 0;
}

.ui.labeled.input {
  margin-bottom: 0;
}

.ui.button {
  margin-top: 2em;
  padding: 0.7em 1.5em;
  font-weight: 500;
}

.ui.button:hover {
  opacity: 0.9;
}
</style>
