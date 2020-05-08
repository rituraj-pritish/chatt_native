import SignUp from './SignUp'
import { connect } from 'react-redux'
import { signUp } from 'app/redux/auth'

export default connect(null, { signUp })(SignUp)
