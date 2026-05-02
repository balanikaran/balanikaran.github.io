/// <reference types="astro/client" />
/// <reference types="astro/env" />

declare module "astro-icon/components" {
  import type { HTMLAttributes } from "astro/types"

  export interface IconProps extends HTMLAttributes<"svg"> {
    name: string
    "is:inline"?: boolean
    title?: string
    desc?: string
    size?: number | string
    width?: number | string
    height?: number | string
  }

  export const Icon: (props: IconProps) => any
}
