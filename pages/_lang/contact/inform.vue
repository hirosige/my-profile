<template>
  <div>
    <title-hero :title="$t('contact.inform.title')"/>
    <div class="main-contents">
      <h4 class="title is-4 has-text-centered" style="margin-bottom: 50px;">
        <span style="border-bottom: 1px solid; padding-bottom: 5px; color: #1DA08D;">{{ $t('contact.inform.title') }}</span>
      </h4>
      
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <div v-if="formError.length" class="field">
            <div class="notification is-danger sharped" style="padding: 10px; color: #ff3860; background: #ffffff; border: 2px solid #ff3860;">
              <button class="delete" style="background: #ff3860;" @click="closeError" />
              <div v-for="(error, index) in formError" :key="index">
                {{ error }}
              </div>
            </div>
          </div>
          <div v-if="sendComplete" class="field">
            <div class="notification is-primary sharped">
              <button class="delete" style="background: #1DA08D;" @click="closeSuccess" />
              {{ $t('messages.success.inform') }}
            </div>
          </div>
          
          <form @submit.prevent="submitForm">
            <div class="field">
              <i class="fas fa-check green" /> : 必須入力です。
            </div>
            <div class="field">
              <div class="control has-icons-right">
                <input :class="[boxErrors.name.color, boxErrors.name.border]" :placeholder="$t('contact.inform.name')" v-model="name" class="input is-primary sharped" type="text">
                <span class="icon is-small is-right">
                  <i :class="[boxErrors.name.color]" class="fas fa-check green" />
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-right">
                <input :class="[boxErrors.companyName.color, boxErrors.companyName.border]" :placeholder="$t('contact.inform.company_name')" v-model="companyName" class="input is-primary sharped" type="text">
                <span class="icon is-small is-right">
                  <i :class="[boxErrors.companyName.color]" class="fas fa-check green" />
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input :class="[boxErrors.email.color, boxErrors.email.border]" :placeholder="$t('contact.inform.email')" v-model="email" class="input sharped" type="email">
                <span class="icon is-small is-left">
                  <i :class="[boxErrors.email.color]" class="fas fa-envelope" />
                </span>
                <span class="icon is-small is-right">
                  <i :class="[boxErrors.email.color]" class="fas fa-check green" />
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-right">
                <input :class="[boxErrors.subject.color, boxErrors.subject.border]" :placeholder="$t('contact.inform.subject')" v-model="subject" class="input is-primary sharped" type="text">
                <span class="icon is-small is-right">
                  <i :class="[boxErrors.subject.color]" class="fas fa-check green" />
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-right">
                <textarea :class="[boxErrors.description.color, boxErrors.description.border]" :placeholder="$t('contact.inform.description')" v-model="description" class="textarea is-primary sharped" />
                <span class="icon is-small is-right">
                  <i :class="[boxErrors.description.color]" class="fas fa-check green" />
                </span>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button :class="{ 'is-loading': isLoading }" type="submit" class="button is-primary sharped">{{ $t('contact.inform.submit') }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  head() {
    return { title: this.$t("contact.inform.title") }
  },
  data() {
    return {
      formError: new Array(),
      sendComplete: false,
      name: "",
      companyName: "",
      email: "",
      subject: "",
      description: "",
      isLoading: false,
      boxErrors: {
        name: { color: "green", border: "is-primary" },
        companyName: { color: "green", border: "is-primary" },
        email: { color: "green", border: "is-primary" },
        subject: { color: "green", border: "is-primary" },
        description: { color: "green", border: "is-primary" }
      }
    }
  },
  methods: {
    initializeForm: function() {
      this.name = ""
      this.companyName = ""
      this.email = ""
      this.subject = ""
      this.description = ""
      this.boxErrors = {
        name: { color: "green", border: "is-primary" },
        companyName: { color: "green", border: "is-primary" },
        email: { color: "green", border: "is-primary" },
        subject: { color: "green", border: "is-primary" },
        description: { color: "green", border: "is-primary" }
      }
    },
    delayTime: function(sec) {
      return new Promise(resolve => setTimeout(resolve, sec))
    },
    toggleLoading: function() {
      this.isLoading = !this.isLoading
    },
    closeError: function() {
      this.formError = []
      this.boxErrors = {
        name: { color: "green", border: "is-primary" },
        companyName: { color: "green", border: "is-primary" },
        email: { color: "green", border: "is-primary" },
        subject: { color: "green", border: "is-primary" },
        description: { color: "green", border: "is-primary" }
      }
    },
    closeSuccess: function() {
      this.sendComplete = false
    },
    addError: function(error) {
      this.formError.push(error)
    },
    validateForm: function() {
      this.closeError()

      if (this.name === "") {
        this.addError(this.$t("messages.error.inform.name"))
        this.boxErrors.name.color = "red"
        this.boxErrors.name.border = "is-danger"
      }

      if (this.companyName === "") {
        this.addError(this.$t("messages.error.inform.company_name"))
        this.boxErrors.companyName.color = "red"
        this.boxErrors.companyName.border = "is-danger"
      }

      if (this.email === "") {
        this.addError(this.$t("messages.error.inform.email"))
        this.boxErrors.email.color = "red"
        this.boxErrors.email.border = "is-danger"
      }

      if (this.subject === "") {
        this.addError(this.$t("messages.error.inform.subject"))
        this.boxErrors.subject.color = "red"
        this.boxErrors.subject.border = "is-danger"
      }

      if (this.description === "") {
        this.addError(this.$t("messages.error.inform.description"))
        this.boxErrors.description.color = "red"
        this.boxErrors.description.border = "is-danger"
      }

      return this.formError.length === 0
    },
    submitForm: async function() {
      this.toggleLoading()
      await this.delayTime(500)

      if (this.validateForm()) {
        axios({
          method: "post",
          url: "https://fnu6r2jbb2.execute-api.ap-northeast-1.amazonaws.com/v1",
          data: {
            name: this.name,
            company_name: this.companyName,
            email: this.email,
            subject: this.subject,
            body: this.description
          }
        }).then(response => {
          if (response.status === 200) {
            this.sendComplete = true
            this.initializeForm()
            this.toggleLoading()
          }
        })
      } else {
        this.toggleLoading()
      }
    }
  }
}
</script>

<style>
.sharped {
  border-radius: 0;
}

.green {
  color: var(--green);
}

.red {
  color: #ff3860;
}

.green::placeholder {
  color: var(--green);
}

.red::placeholder {
  color: #ff3860;
}

.green::placeholder {
  color: var(--green);
}

.red::placeholder {
  color: #ff3860;
}
</style>
