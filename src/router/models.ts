import type { RouteLocationRaw } from 'vue-router'

export const RouteNames = {
  Home: 'Home',
  About: 'About',
} as const
export type RouteName = typeof RouteNames[keyof typeof RouteNames]

export class RouteLocations {
  static toHome(): RouteLocationRaw {
    return {
      name: RouteNames.Home,
    }
  }
  static toAbout(): RouteLocationRaw {
    return {
      name: RouteNames.About,
    }
  }
}
