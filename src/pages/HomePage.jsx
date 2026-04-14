import React from 'react';
import Banner from '../component/homePageItem/Banner';
import YourFriends from '../component/homePageItem/YourFriends';
import BannerCard from '../component/homePageItem/BannerCard';

const HomePage = () => {
    return (
        <>
          <Banner></Banner>
          <BannerCard></BannerCard>
          <YourFriends></YourFriends>
        </>
    );
};

export default HomePage;