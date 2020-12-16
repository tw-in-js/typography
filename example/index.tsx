/* eslint-env browser */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, render } from 'preact'
import 'preact/devtools'

import { setup } from 'twind'

// eslint-disable-next-line unicorn/import-index
import typography from '../src/index'

import App from './app'

setup({
  plugins: {
    ...typography(),
  },
})

render(<App />, document.body)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
