import {useDispatch, useSelector} from 'react-redux';
import {setAge, setGender} from './actions/userActions';
import {getAge, getGender} from './selectors/selectors';
function useStoreHooks() {
  const dispatch = useDispatch();
  const set_age = data => dispatch(setAge(data));
  const set_gender = data => dispatch(setGender(data));
  const selectorAge = useSelector(getAge());
  const selectorGender = useSelector(getGender());
  return {
    set_age,
    set_gender,
    selectorAge,
    selectorGender,
  };
}

export default useStoreHooks;
