import React, {Component} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render(){

		let {loading, featuredRooms:rooms} = this.context;
		
		rooms = rooms.map(room => {
			return (<Room key={room.id} room={room} />)
		});

		return(
			<React.Fragment>
				<section className="featured-rooms">
					<Title title="Featured rooms" />
					<div className="featured-rooms-center">
						{loading? (<Loading />) : rooms}
					</div>
				</section>
			</React.Fragment>
		);
	}
}


export default FeaturedRooms;