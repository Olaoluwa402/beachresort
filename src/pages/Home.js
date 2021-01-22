import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import {Link} from 'react-router-dom';
function Home() {
	return (
	<React.Fragment>
	<Hero> 
		<Banner title="luxurious rooms" subtitle="deluxe rooms at $299">
			<Link to="/rooms" className="btn-primary">
				Our rooms
			</Link>
		</Banner>
	</Hero>

	<Services />
	<FeaturedRooms />

	</React.Fragment>
 );
}



export default Home;