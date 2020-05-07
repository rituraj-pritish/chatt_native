import MessageItem from './MessageItem'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  currentUser: state.auth.user.uid
})

export default connect(mapStateToProps)(MessageItem)
