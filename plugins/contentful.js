const contentful = require("contentful")

const config = {
  space: process.env.key.CTF_SPACE_ID,
  accessToken: process.env.key.CTF_CDA_ACCESS_TOKEN
}

const blogConfig = {
  space: process.env.key.CTF_BLOG_SPACE_ID,
  accessToken: process.env.key.CTF_BLOG_CDA_ACCESS_TOKEN
}

module.exports = {
  createClient() {
    return contentful.createClient(config)
  },
  createBlogClient() {
    return contentful.createClient(blogConfig)
  }
}
