<template>
  <form action="#" @submit.prevent="onSubmit" class="ui form">
    <div class="ui error message" v-if="errorsPresent">
      <i class="warning icon"></i>
      Please fill out all fields!
    </div>

    <div class="field">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="germany flag"></i> German</div>
        <input
          type="text"
          placeholder="Enter German word..."
          v-model="word.german"
          :class="{ error: errorsPresent && !word.german }"
        />
      </div>
    </div>

    <div class="field">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="united kingdom flag"></i> English</div>
        <input
          type="text"
          placeholder="Enter English word..."
          v-model="word.english"
          :class="{ error: errorsPresent && !word.english }"
        />
      </div>
    </div>

    <div class="field">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="vietnam flag"></i> VietNam</div>
        <input
          type="text"
          placeholder="Enter Vietnamese word..."
          v-model="word.vietnam"
          :class="{ error: errorsPresent && !word.vietnam }"
        />
      </div>
    </div>

    <div class="field">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="japan flag"></i> Japan</div>
        <input
          type="text"
          placeholder="Enter Japanese word..."
          v-model="word.japan"
          :class="{ error: errorsPresent && !word.japan }"
        />
      </div>
    </div>

    <div class="field">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="italy flag"></i> Italy</div>
        <input
          type="text"
          placeholder="Enter Italian word..."
          v-model="word.italy"
          :class="{ error: errorsPresent && !word.italy }"
        />
      </div>
    </div>

    <div class="ui grid">
      <div class="twelve wide column">
        <button class="ui blue button fluid" type="submit">
          <i class="checkmark icon"></i>
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "word-form",
  props: {
    word: {
      type: Object,
      required: false,
      default: () => {
        return {
          english: "",
          german: "",
          vietnam: "",
          japan: "",
          italy: "",
        };
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    };
  },
  methods: {
    onSubmit() {
      if (
        !this.word.english ||
        !this.word.german ||
        !this.word.vietnam ||
        !this.word.japan ||
        !this.word.italy
      ) {
        this.errorsPresent = true;
        return;
      }
      this.$emit("createOrUpdate", this.word);
    },
  },
};
</script>

<style scoped>
.ui.form {
  max-width: 600px;
  margin: 2em auto;
  padding: 1em;
  background: #f5f6fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 1.5em;
}

.ui.labeled.input {
  margin-bottom: 1em;
}

.ui.input input.error {
  border-color: #e74c3c !important;
  box-shadow: 0 0 0 1px #e74c3c !important;
}

.ui.button {
  border-radius: 4px !important;
  padding: 0.7em 1.5em !important;
  font-weight: 500 !important;
}

.ui.button:hover {
  opacity: 0.9;
}

.ui.error.message {
  margin-bottom: 1.5em;
  padding: 1em;
  border-radius: 4px;
}

.ui.error.message i.icon {
  margin-right: 0.5em;
}
</style>
