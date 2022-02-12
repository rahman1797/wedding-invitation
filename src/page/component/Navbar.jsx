import React, { Component } from 'react';
import $ from 'jquery'

export default class navbar extends Component {

    componentDidMount(){
        this.offcanvasMenu();
        this.burgerMenu();
    }

    offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};

    burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

  render() {
    return (
        <nav className="fh5co-nav mx-auto" role="navigation">
            <div className="container blur-background-header  mx-auto">
                <div className="row ">
                    <div className="col-4">
                        <div id="fh5co-logo"><a href="index.html"></a></div>
                    </div>
                    <div className="col-8 text-right menu-1">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#greeting">Greeting</a></li>
                            <li><a href="contact.html">Kontak</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
}

