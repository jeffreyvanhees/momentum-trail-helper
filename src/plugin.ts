import { App } from "vue"
import store from "./store"

export interface TrailPluginOptions {
  routes?: any
  url?: string
  absolute: boolean
}

export const trail = (app: App, options?: TrailPluginOptions) => {
  if (options?.routes) {
    store.setRoutes(options.routes)
  }

  if (options?.url) {
    store.setLocation(options.routes!.url, options.url)
  }

  if (options?.absolute) {
    store.setAbsolute(options.absolute)
  }
}
