import {useDispatch, useSelector} from 'react-redux';
import {setAge, setGender} from './actions/userActions';
import {setRoom, findRoom} from './actions/roomActions';
import {getAge, getGender} from './selectors/selectors';
function useStoreHooks() {
  const dispatch = useDispatch();
  const set_age = data => dispatch(setAge(data));
  const set_gender = data => dispatch(setGender(data));
  const set_room = (data, history) => dispatch(setRoom(data, history));
  const getRoom = () => dispatch(findRoom());
  const selectorAge = useSelector(getAge());
  const selectorGender = useSelector(getGender());
  return {
    set_age,
    set_gender,
    set_room,
    getRoom,
    selectorAge,
    selectorGender,
  };
}

export default useStoreHooks;
