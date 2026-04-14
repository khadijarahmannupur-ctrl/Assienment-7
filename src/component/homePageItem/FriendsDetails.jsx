import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { CircleLoader } from 'react-spinners';

const FriendsDetails = () => {
    const {id} = useParams();
    const { friends, loading } = useFriends();
    const expectedFriend = friends.find((friend) => String(friend.id) === id);
    console.log(expectedFriend);

    if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <CircleLoader color='#244D3F' />
      </div>
    );
  }
    return (
        <div>
            this is the FriendsDetails page
        </div>
    );
};

export default FriendsDetails;