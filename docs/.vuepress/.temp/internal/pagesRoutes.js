import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Welcome to Breezzy SaaS UI packages"},["/index.html","/README.md"]],
  ["v-eb1c736e","/components/input-text.html",{"title":"input-text"},["/components/input-text","/components/input-text.md"]],
  ["v-3b610ddc","/components/input-textarea.html",{"title":"input-textarea"},["/components/input-textarea","/components/input-textarea.md"]],
  ["v-5e18942c","/components/main-icon.html",{"title":"main-icon"},["/components/main-icon","/components/main-icon.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
