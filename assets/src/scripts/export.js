// This script is loaded when a user is on the [ Export ] page

import Cookies from 'js-cookie';

jQuery( function ( $ ) {
	let myExportForm = $( '#pb-export-form' );
	myExportForm.on( 'submit', function ( e ) {
		// Stop form from submitting
		e.preventDefault();
		$( '#pb-export-button' ).attr( 'disabled', true );
		// Init Clock
		let clock = null;
		let seconds = $( '#pb-sse-seconds' );
		let minutes = $( '#pb-sse-minutes' );
		function pad( val ) {
			return val > 9 ? val : '0' + val;
		}
		// Init Event Data
		let eventSourceUrl = PB_ExportToken.ajaxUrl + ( PB_ExportToken.ajaxUrl.includes( '?' ) ? '&' : '?' ) + $.param( myExportForm.find( ':checked' ) );
		let evtSource = new EventSource( eventSourceUrl );
		evtSource.onopen = function () {
			// Hide button
			$( '#pb-export-button' ).hide();
			// Start Clock
			let sec = 0;
			seconds.html( '00' );
			minutes.html( '00:' );
			clock = setInterval( function () {
				seconds.html( pad( ++sec % 60 ) );
				minutes.html( pad( parseInt( sec / 60, 10 ) ) + ':' );
			}, 1000 );
			// Warn the user if they navigate away
			$( window ).on( 'beforeunload', function () {
				// In some browsers, the return value of the event is displayed in this dialog. Starting with Firefox 44, Chrome 51, Opera 38 and Safari 9.1, a generic string not under the control of the webpage will be shown.
				// @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#Notes
				return PB_ExportToken.unloadWarning;
			} );
		};
		evtSource.onmessage = function ( message ) {
			let bar = $( '#pb-sse-progressbar' );
			let info = $( '#pb-sse-info' );
			let data = JSON.parse( message.data );
			switch ( data.action ) {
				case 'updateStatusBar':
					bar.progressbar( { value: parseInt( data.percentage, 10 ) } );
					info.html( data.info );
					break;
				case 'complete':
					evtSource.close();
					$( window ).unbind( 'beforeunload' );
					if ( data.error ) {
						bar.progressbar( { value: false } );
						info.html( data.error + ' ' + PB_ExportToken.reloadSnippet );
						if ( clock ) {
							clearInterval( clock );
						}
					} else {
						window.location = PB_ExportToken.redirectUrl;
					}
					break;
				default:
					break;
			}
		};
		evtSource.onerror = function () {
			evtSource.close();
			$( '#pb-sse-progressbar' ).progressbar( { value: false } );
			$( '#pb-sse-info' ).html( 'EventStream Connection Error ' + PB_ExportToken.reloadSnippet );
			$( window ).unbind( 'beforeunload' );
			if ( clock ) {
				clearInterval( clock );
			}
		};
	} );
	$( '#pb-export-button' ).click( function ( e ) {
		e.preventDefault();
		$( '.export-file-container' ).unbind( 'mouseenter mouseleave' ); // Disable Download & Delete Buttons
		$( '.export-control button' ).prop( 'disabled', true );
		myExportForm.submit();
	} );

	/* Show and hide download & delete button */
	$( '.export-file-container' ).hover(
		function () {
			$( this )
				.children( '.file-actions' )
				.css( 'visibility', 'visible' );
		},
		function () {
			$( this )
				.children( '.file-actions' )
				.css( 'visibility', 'hidden' );
		}
	);

	/* Remember User Checkboxes */
	myExportForm
		.find( 'input' )
		.each( function () {
			let name = $( this ).attr( 'name' );
			let val = Cookies.get( 'pb_' + name );
			let v;
			// Defaults
			if ( typeof val === 'undefined' ) {
				// Defaults
				if (
					name === 'export_formats[pdf]' ||
					name === 'export_formats[mpdf]' ||
					name === 'export_formats[epub]' ||
					name === 'export_formats[mobi]'
				) {
					$( this ).prop( 'checked', true );
				} else {
					$( this ).prop( 'checked', false );
				}
			} else {
				// Toggle based on user's cookie
				if ( typeof val === 'boolean' ) {
					v = val;
				} else {
					v = val === 'true';
				}
				$( this ).prop( 'checked', v );
			}
			if ( $( this ).attr( 'disabled' ) ) {
				$( this ).prop( 'checked', false );
			}
		} )
		.change( function () {
			Cookies.set( 'pb_' + $( this ).attr( 'name' ), $( this ).prop( 'checked' ), {
				path: '/',
				expires: 365,
			} );
		} );
} );
