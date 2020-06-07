import {connect} from 'react-redux';
import Splash from '../../components/Spash';
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(Splash);
