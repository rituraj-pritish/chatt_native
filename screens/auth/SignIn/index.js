import SignIn from './SignIn'
import { connect } from 'react-redux'
import { signIn, authStateChangeHandler } from 'app/redux/auth'

const mapStateToProps = state => ({
  loading: state.auth.loading
})

export default connect(mapStateToProps, { signIn, authStateChangeHandler })(
  SignIn
)
