import { RouterGlobal } from "./router"

let routes: RouterGlobal
let location: URL | undefined
let absolute = false

export default {
  setRoutes: (payload: RouterGlobal) => (routes = payload),

  /** @ts-expect-error */
  getRoutes: () => (typeof window !== "undefined" && window.trail ? window.trail : routes),

  setLocation: (url: string, path?: string) => {
    location = path ? new URL(path, url) : undefined
  },

  getLocation: () => location,

  getAbsolute: () => absolute,

  setAbsolute: (value: boolean) => (absolute = value),
}
