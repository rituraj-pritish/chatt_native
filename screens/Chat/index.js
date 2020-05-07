import Chat from './Chat'
import { connect } from 'react-redux'
import { sendMessage, getChat } from 'app/redux/user'

const mapStateToProps = ({ user }) => ({
  messages: user.chatMessages,
  loading: user.loading
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, { getChat, sendMessage })(Chat)
