export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Welcome to Breezzy SaaS UI packages",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Installation",
      "slug": "installation",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649482498000,
    "contributors": [
      {
        "name": "Claudiu Plesa",
        "email": "claudiu.plesa@magicpixel.ro",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
