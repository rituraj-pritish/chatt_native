import Users from './Users'
import { connect } from 'react-redux'

import { getUsers } from 'app/redux/user'

const mapStateToProps = ({ user, auth }) => {
  const usersExceptCurrentUser = user.users.filter(
    item => item.uid !== auth.user.uid
  )
  return {
    users: usersExceptCurrentUser
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, { getUsers })(Users)
