import GradientButton, { code as gradientCode, hint as gradientHint } from './GradientButton'
import CenterLineButton, { code as centerLineCode, hint as centerLineHint } from './CenterLineButton'

export const BUTTONS = [
  { id: 'gradient', label: 'Gradient', Component: GradientButton, code: gradientCode, hint: gradientHint },
  { id: 'center-line', label: 'Center Line', Component: CenterLineButton, code: centerLineCode, hint: centerLineHint },
]
