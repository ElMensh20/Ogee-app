import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rooms.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  addRoom,
  selectRoom
} from '../../Reducer/RoomSlice';
const Rooms = () => {
  const Rooms = useSelector(selectRoom);
  const dispatch = useDispatch();
  return (
    <div className={styles.Rooms}>
      <ul>
        {Rooms.map((room) => (
          <li key={room}>{room}</li>
        ))}
      </ul>
      <button onClick={()=>dispatch(addRoom("room1"))}>add room</button>
    </div>
  )
};

Rooms.propTypes = {};

Rooms.defaultProps = {};

export default Rooms;
