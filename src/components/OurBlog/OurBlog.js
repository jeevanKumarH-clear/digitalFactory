/* eslint-disable max-len */
import React from 'react';
import BlogCards from './BlogCards';
import Heading from './Heading';
import ViewMoreTwo from './ViewMoreTwo';

const OurBlog = (context) =>
	<div className="ourBlog">
		<Heading { ...context }/>
		<h2 className="H2">OUR LATEST MEDIA</h2>
		<p className="blogPara">Join us and receive Inbound exclusive advertising tips that we most effectively share with our subscribers.And be the first to learn about new content updates.</p>
		<BlogCards { ...context }/>
		<ViewMoreTwo/>
	</div>;

export default OurBlog;
