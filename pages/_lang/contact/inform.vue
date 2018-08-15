<template>
  <div>
    <title-hero :title="$t('contact.inform.title')"/>
    <div class="main-contents">
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.name')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.company_name')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.email')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.subject')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea :placeholder="$t('contact.inform.description')" class="textarea is-primary sharped" />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" @click.prevent="submit" >{{ $t('contact.inform.submit') }}</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// import axios from "axios"
const sgMail = require("@sendgrid/mail")

export default {
  methods: {
    submit: async function() {
      console.log("hello")

      sgMail.setApiKey(
        "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"
      )

      const msg = {
        to: "hirosige1@gmail.com",
        from: "hirosige1@gmail.com",
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        "no-cors": true
      }

      sgMail.send(msg)
      // await axios({
      //   method: "post",
      //   url: "https://api.sparkpost.com/api/v1/transmissions?num_rcpt_errors=3",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: "Bearer 01b4664639664410f800db92f77649be5421d590"
      //   },
      //   data: {
      //     campaign_id: "postman_inline_both_example",
      //     recipients: [{ address: "hirosige1@gmail.com" }],
      //     content: {
      //       from: {
      //         email: "hiroshige.negishi@suneikii.com",
      //         name: "Example Company"
      //       },
      //       subject: "SparkPost inline template example",
      //       html:
      //         "<html><body>Here is your inline html, {{first_name or 'you great person'}}!<br></body></html>",
      //       text:
      //         "Here is your plain text, {{first_name or 'you great person'}}!"
      //     }
      //   }
      // }).then(function(response) {
      //   console.log(response)
      // })
    }
  }
}
</script>

<style>
.sharped {
  border-radius: 0;
}

input::placeholder {
  color: var(--green);
}

textarea::placeholder {
  color: var(--green);
}
</style>
