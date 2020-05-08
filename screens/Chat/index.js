import Chat from './Chat'
import { connect } from 'react-redux'
import { sendMessage, getChat, clearChat } from 'app/redux/user'

const mapStateToProps = ({ user }) => ({
  messages: user.chatMessages,
  loading: user.loading
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, { getChat, sendMessage, clearChat })(Chat)
