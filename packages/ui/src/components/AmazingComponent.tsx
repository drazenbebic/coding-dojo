import React from "react"

export type AmazingComponentProps = {
  name: string
}

export function AmazingComponent({ name }: AmazingComponentProps) {
  return (
    <h1>{name} is amazing</h1>
  )
}