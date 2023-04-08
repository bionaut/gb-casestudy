// [ note ]
// there are many ways to do this, this is just one of them
// this might be soon obsolete though, as NextJs is working on a built-in solution
// and also, we might not need this since there's only one route :)

import { z, ZodSchema } from 'zod'

export const routes = {
  home: {
    path: '/',
    params: {},
  },
  product: {
    path: '/product/:productId',
    params: {
      productId: z.string(),
    },
  },
  about: {
    path: '/about',
    params: {},
  },
}

type Keys = keyof typeof routes

export function route<K extends Keys, P extends Record<keyof (typeof routes)[K]['params'], string>>(
  // should be one of the keys of the routes object
  routeKey: K,
  params?: P,
) {
  const routeDef = routes[routeKey]

  // check if the route exists
  if (!routeDef) {
    throw new Error(`Route ${routeKey} does not exist`)
  }

  // check if the params are correct
  let resultPath = routeDef.path
  for (const key in params) {
    if (!routeDef.params.hasOwnProperty(key)) {
      throw new Error(`Route ${routeKey} does not have a param for ${key}`)
    } else {
      const param = params[key]
      const paramSchema: ZodSchema = (routeDef.params as any)[key]
      resultPath = resultPath.replace(`:${key}`, paramSchema.parse(param))
    }
  }

  return resultPath
}
