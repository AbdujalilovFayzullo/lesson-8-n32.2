import React, { useEffect } from 'react';
import './home.scss'
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from '../redux/user/usersActions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  const fetchUsers = async () => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await res.data;
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div>
      <h1 className='home__title'>Posts</h1>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h3>{error}</h3> : null}
      {users.length > 0 ? (
        <ul className='home__list'>
          {users.map((posts) => (
            <li className='home__item' key={posts.id}>{posts.id} {posts.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
