import 'styled-components'
import { defaltTheme } from '../styles/themes/default'

type ThemeType = typeof defaltTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
