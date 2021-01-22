import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan} from 'react-icons/fa';


class Services extends Component{
	state = {
		Services: [
			{
				icon:<FaCocktail />,
				title: "Free coctail",
				 info:"Lorem ipsum dolor sit amet, consectetur."
			},
			{
				icon:<FaHiking />,
				title: "Endless Hiking",
				 info:"Lorem ipsum dolor sit amet, consectetur."
			},
			{
				icon:<FaShuttleVan />,
				title: "Free ShuttleVan",
				 info:"Lorem ipsum dolor sit amet, consectetur."
			},
			{
				icon:<FaCocktail />,
				title: "Free coctail",
				 info:"Lorem ipsum dolor sit amet, consectetur."
			},
		]
	}
	render(){
		return(
			<section className="services">
				<Title title="services"/>
				<div className="services-center">
					{this.state.Services.map((item, index) => {
						return (<article key={index} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>);
					})}
				</div>
			</section>
		);
	}
}

export default Services;