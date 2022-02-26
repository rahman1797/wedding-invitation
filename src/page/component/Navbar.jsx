import React from 'react'
import ScrollspyNav from "react-scrollspy-nav";

export default function Navbar() {
  return (
	  <>
	<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
	  <div class="navbar-header">
		<a class="navbar-brand" href="#">WebSiteName</a>
	  </div>
	<ScrollspyNav
		scrollTargetIds={["section_1", "section_2", "section_3"]}
		offset={100}
		activeNavClass="is-active"
		scrollDuration="1000"
		headerBackground="true"
	>
		<ul className='nav navbar-nav'>
			<li><a href="#home">Header</a></li>
			<li><a href="#greeting">Greeting</a></li>
			<li><a href="#section-event">Section 2</a></li>
		</ul>
	</ScrollspyNav>
	</div>
	</nav>
	<div>
	<div style={{"height": "400px"}}><span>Welcome!</span></div>
	<div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
	<div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
	<div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
  </div>
  </>
  )
}
