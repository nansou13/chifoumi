import React from 'react'
// import { compose } from 'redux'
// import injectSaga from 'utils/injectSaga'
import { BrowserRouter as Router } from 'react-router-dom'
import FormattedMessage from 'components/FormattedMessage'
import Routes from 'containers/Routes'
import { messages } from './messages'
import ScrollToTop from './ScrollToTop'
// import saga from './saga'

const App = () => (
  <>
    <h1>
      <FormattedMessage {...messages.title} />
    </h1>
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  </>
)
// const withSaga = injectSaga({ key: 'AppPage', saga })

export default App
// export default compose(withSaga)(App)
