import React from 'react'
import { SkeletonStyleProps } from './SkeletonStyleProps'

export const SkeletonThemeContext = React.createContext<SkeletonStyleProps>({})

export const SkeletonTheme = SkeletonThemeContext.Provider
