// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable maximumLineLength
'use strict';

module.exports = getTechniques;

function getTechniques() {
	return {
		H30: {
			title: 'H30: Providing link text that describes the purpose of a link for anchor elements',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H30'
		},
		H37: {
			title: 'H37: Using alt attributes on img elements',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H37'
		},
		H67: {
			title: 'H67: Using null alt text and no title attribute on img elements for images that AT should ignore',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H67'
		},
		G94: {
			title: 'G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G94'
		},
		H36: {
			title: 'H36: Using alt attributes on images used as submit buttons',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H36'
		},
		H24: {
			title: 'H24: Providing text alternatives for the area elements of image maps ',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H24'
		},
		G73: {
			title: 'G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G73'
		},
		G74: {
			title: 'G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G74'
		},
		H2: {
			title: 'H2: Combining adjacent image and text links for the same resource',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H2'
		},
		H53: {
			title: 'H53: Using the body of the object element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H53'
		},
		G92: {
			title: 'G92: Providing long description for non-text content that serves the same purpose and presents the same information',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G92'
		},
		H35: {
			title: 'H35: Providing text alternatives on applet elements ',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H35'
		},
		G158: {
			title: 'G158: Providing an alternative for time-based media for audio-only content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G158'
		},
		G159: {
			title: 'G159: Providing an alternative for time-based media for video-only content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G159'
		},
		G166: {
			title: 'G166: Providing audio that describes the important video content and describing it as such',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G166'
		},
		G87: {
			title: 'G87: Providing closed captions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G87'
		},
		G93: {
			title: 'G93: Providing open (always visible) captions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G93'
		},
		G69: {
			title: 'G69: Providing an alternative for time based media',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G69'
		},
		G78: {
			title: 'G78: Providing a second, user-selectable, audio track that includes audio descriptions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G78'
		},
		G173: {
			title: 'G173: Providing a version of a movie with audio descriptions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G173'
		},
		G8: {
			title: 'G8: Providing a movie with extended audio descriptions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G8'
		},
		G9: {
			title: 'G9: Creating captions for live synchronized media',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G9'
		},
		G54: {
			title: 'G54: Including a sign language interpreter in the video stream',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G54'
		},
		G81: {
			title: 'G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G81'
		},
		G150: {
			title: 'G150: Providing text based alternatives for live audio-only content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G150'
		},
		G151: {
			title: 'G151: Providing a link to a text transcript of a prepared statement or script if the script is followed',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G151'
		},
		G157: {
			title: 'G157: Incorporating a live audio captioning service into a Web page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G157'
		},
		H42: {
			title: 'H42: Using h1-h6 to identify headings',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H42'
		},
		H93: {
			title: 'H93: Ensuring that id attributes are unique on a Web page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H93'
		},
		H44: {
			title: 'H44: Using label elements to associate text labels with form controls',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H44'
		},
		H65: {
			title: 'H65: Using the title attribute to identify form controls when the label element cannot be used',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H65'
		},
		H49: {
			title: 'H49: Using semantic markup to mark emphasized or special text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H49'
		},
		H63: {
			title: 'H63: Using the scope attribute to associate header cells and data cells in data tables',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H63'
		},
		H43: {
			title: 'H43: Using id and headers attributes to associate data cells with header cells in data tables',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H43'
		},
		H39: {
			title: 'H39: Using caption elements to associate data table captions with data tables',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H39'
		},
		H73: {
			title: 'H73: Using the summary attribute of the table element to give an overview of data tables',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H73'
		},
		H71: {
			title: 'H71: Providing a description for groups of form controls using fieldset and legend elements ',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H71'
		},
		H85: {
			title: 'H85: Using OPTGROUP to group OPTION elements inside a SELECT',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H85'
		},
		H48: {
			title: 'H48: Using ol, ul and dl for lists or groups of links',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H48'
		},
		G141: {
			title: 'G141: Organizing a page using headings',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G141'
		},
		G57: {
			title: 'G57: Ordering the content in a meaningful sequence',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G57'
		},
		G96: {
			title: 'G96: Providing textual identification of items that otherwise rely only on sensory information to be understood',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G96'
		},
		G14: {
			title: 'G14: Ensuring that information conveyed by color differences is also available in text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G14'
		},
		G182: {
			title: 'G182: Ensuring that additional visual cues are available when text color differences are used to convey information',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G182'
		},
		F23: {
			title: 'F23: Failure of  1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F23'
		},
		G18: {
			title: 'G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G18'
		},
		G145: {
			title: 'G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G145'
		},
		F24: {
			title: 'F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F24'
		},
		G142: {
			title: 'G142: Using a technology that has commonly-available user agents that support zoom',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G142'
		},
		G140: {
			title: 'G140: Separating information and structure from presentation to enable different presentations',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G140'
		},
		C22: {
			title: 'C22: Using CSS to control visual presentation of text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/C22'
		},
		C30: {
			title: 'C30: Using CSS to replace text with images of text and providing user interface controls to switch',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/C30'
		},
		G17: {
			title: 'G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G17'
		},
		G56: {
			title: 'G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G56'
		},
		G148: {
			title: 'G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G148'
		},
		G156: {
			title: 'G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G156'
		},
		G175: {
			title: 'G175: Providing a multi color selection tool on the page for foreground and background colors',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G175'
		},
		H87: {
			title: 'G146: Using liquid layout',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G146'
		},
		C19: {
			title: 'C19: Specifying alignment either to the left OR right in CSS',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/C19'
		},
		G172: {
			title: 'G172: Providing a mechanism to remove full justification of text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G172'
		},
		G169: {
			title: 'G169: Aligning text on only one side',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G169'
		},
		G188: {
			title: 'G188: Providing a button on the page to increase line spaces and paragraph spaces',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G188'
		},
		C21: {
			title: 'C21: Specifying line spacing in CSS',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/C21'
		},
		SCR20: {
			title: 'SCR20: Using both keyboard and other device-specific functions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/SCR20'
		},
		F10: {
			title: 'F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F10'
		},
		F40: {
			title: 'F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F40'
		},
		F41: {
			title: 'F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F41'
		},
		SCR33: {
			title: 'SCR33: Using script to scroll content, and providing a mechanism to pause it',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/SCR33'
		},
		SCR22: {
			title: 'SCR22: Using scripts to control blinking and stop it in five seconds or less',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/SCR22'
		},
		G187: {
			title: 'G187: Using a technology to include blinking content that can be turned off via the user agent',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G187'
		},
		G152: {
			title: 'G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G152'
		},
		G186: {
			title: 'G186: Using a control in the Web page that stops moving, blinking, or auto-updating content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G186'
		},
		G191: {
			title: 'G191: Providing a link, button, or other mechanism that reloads the page without any blinking content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G191'
		},
		F4: {
			title: 'F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F4'
		},
		F47: {
			title: 'F47: Failure of Success Criterion 2.2.2 due to using the blink element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F47'
		},
		G5: {
			title: 'G5: Allowing users to complete an activity without any time limit',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G5'
		},
		SCR14: {
			title: 'SCR14: Using scripts to make nonessential alerts optional',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/SCR14'
		},
		G105: {
			title: 'G105: Saving data so that it can be used after a user re-authenticates',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G105'
		},
		G181: {
			title: 'G181: Encoding user data as hidden or encrypted data in a re-authorization page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G181'
		},
		G19: {
			title: 'G19: Ensuring that no component of the content flashes more than three times in any 1-second period',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G19'
		},
		G176: {
			title: 'G176: Keeping the flashing area small enough',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G176'
		},
		H64: {
			title: 'H64: Using the title attribute of the frame and iframe elements',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H64'
		},
		G1: {
			title: 'G1: Adding a link at the top of each page that goes directly to the main content area',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G1'
		},
		G123: {
			title: 'G123: Adding a link at the beginning of a block of repeated content to go to the end of the block',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G123'
		},
		G124: {
			title: 'G124: Adding links at the top of the page to each area of the content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G124'
		},
		H69: {
			title: 'H69: Providing heading elements at the beginning of each section of content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H69'
		},
		H25: {
			title: 'H25: Providing a title using the title element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H25'
		},
		H4: {
			title: 'H4: Creating a logical tab order through links, form controls, and objects',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H4'
		},
		H77: {
			title: 'H77: Identifying the purpose of a link using link text combined with its enclosing list item',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H77'
		},
		H78: {
			title: 'H78: Identifying the purpose of a link using link text combined with its enclosing paragraph',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H78'
		},
		H79: {
			title: 'H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H79'
		},
		H80: {
			title: 'H80: Identifying the purpose of a link using link text combined with the preceding heading element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H80'
		},
		H81: {
			title: 'H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H81'
		},
		H33: {
			title: 'H33: Supplementing link text with the title attribute',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H33'
		},
		G125: {
			title: 'G125: Providing links to navigate to related Web pages',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G125'
		},
		G64: {
			title: 'G64: Providing a Table of Contents',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G64'
		},
		G63: {
			title: 'G63: Providing a site map',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G63'
		},
		G161: {
			title: 'G161: Providing a search function to help users find content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G161'
		},
		G126: {
			title: 'G126: Providing a list of links to all other Web pages',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G126'
		},
		G185: {
			title: 'G185: Linking to all of the pages on the site from the home page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G185'
		},
		G130: {
			title: 'G130: Providing descriptive headings',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G130'
		},
		G131: {
			title: 'G131: Providing descriptive labels',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G131'
		},
		G149: {
			title: 'G149: Using user interface components that are highlighted by the user agent when they receive focus',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G149'
		},
		G165: {
			title: 'G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G165'
		},
		G195: {
			title: 'G195: Using an author-supplied, highly visible focus indicator',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G195'
		},
		C15: {
			title: 'C15: Using CSS to change the presentation of a user interface component when it receives focus',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/C15'
		},
		SCR31: {
			title: 'SCR31: Using script to change the background color or border of the element with focus',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/SCR31'
		},
		H59: {
			title: 'H59: Using the link element and navigation tools',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H59'
		},
		H57: {
			title: 'H57: Using language attributes on the html element ',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H57'
		},
		H58: {
			title: 'H58: Using language attributes to identify changes in the human language ',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H58'
		},
		H40: {
			title: 'H40: Using description lists',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H40'
		},
		H54: {
			title: 'H54: Using the dfn element to identify the defining instance of a word',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H54'
		},
		H60: {
			title: 'H60: Using the link element to link to a glossary',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H60'
		},
		G62: {
			title: 'G62: Providing a glossary',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G62'
		},
		G70: {
			title: 'G70: Providing a function to search an online dictionary',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G70'
		},
		G102: {
			title: 'G102: Providing the expansion or explanation of an abbreviation',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G102'
		},
		G55: {
			title: 'G55: Linking to definitions',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G55'
		},
		H28: {
			title: 'H28: Providing definitions for abbreviations by using the abbr element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H28'
		},
		G97: {
			title: 'G97: Providing the first use of an abbreviation immediately before or after the expanded form',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G97'
		},
		G86: {
			title: 'G86: Providing a text summary that can be understood by people with lower secondary education level reading ability',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G86'
		},
		G103: {
			title: 'G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G103'
		},
		G79: {
			title: 'G79: Providing a spoken version of the text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G79'
		},
		G153: {
			title: 'G153: Making the text easier to read',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G153'
		},
		G160: {
			title: 'G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G160'
		},
		H62: {
			title: 'H62: Using the ruby element',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H62'
		},
		G107: {
			title: 'G107: Using \'activate\' rather than \'focus\' as a trigger for changes of context',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G107'
		},
		H32: {
			title: 'H32: Providing submit buttons',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H32'
		},
		G61: {
			title: 'G61: Presenting repeated components in the same relative order each time they appear',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G61'
		},
		G197: {
			title: 'G197: Using labels, names, and text alternatives consistently for content that has the same functionality',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G197'
		},
		H83: {
			title: 'H83: Using the target attribute to open a new window on user request and indicating this in link text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H83'
		},
		G83: {
			title: 'G83: Providing text descriptions to identify required fields that were not completed',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G83'
		},
		G84: {
			title: 'G84: Providing a text description when the user provides information that is not in the list of allowed values',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G84'
		},
		G85: {
			title: 'G85: Providing a text description when user input falls outside the required format or values',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G85'
		},
		G89: {
			title: 'G89: Providing expected data format and example',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G89'
		},
		G184: {
			title: 'G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G184'
		},
		H90: {
			title: 'H90: Indicating required form controls using label or legend',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H90'
		},
		G177: {
			title: 'G177: Providing suggested correction text',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G177'
		},
		G98: {
			title: 'G98: Providing the ability for the user to review and correct answers before submitting',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G98'
		},
		G99: {
			title: 'G99: Providing the ability to recover deleted information',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G99'
		},
		G155: {
			title: 'G155: Providing a checkbox in addition to a submit button',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G155'
		},
		G164: {
			title: 'G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G164'
		},
		G168: {
			title: 'G168: Requesting confirmation to continue with selected action',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G168'
		},
		G71: {
			title: 'G71: Providing a help link on every Web page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G71'
		},
		G193: {
			title: 'G193: Providing help by an assistant in the Web page',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/G193'
		},
		F77: {
			title: 'F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/F77'
		},
		H91: {
			title: 'H91: Using HTML form controls and links',
			url: 'http://www.w3.org/TR/WCAG20-TECHS/H91'
		},
		F102: {
			title: 'F102: Failure of Success Criterion 1.4.10 due to content disappearing and not being available when content has reflowed',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F102'
		},
		F103: {
			title: 'F103: Failure of Success Criterion 4.1.3 due to providing status messages that cannot be programmatically determined through role or properties',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F103'
		},
		F104: {
			title: 'F104: Failure of Success Criterion 1.4.12 due to clipped or overlapped content when text spacing is adjusted',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F104'
		},
		F105: {
			title: 'F105: Failure of Success Criterion 2.5.1 due to providing functionality via a path- based gesture without simple pointer alternative',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F105'
		},
		F106: {
			title: 'F106: Failure due to inability to deactivate motion actuation',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F106'
		},
		G216: {
			title: 'G216: Providing single point activation for a control slider',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G216'
		},
		G215: {
			title: 'G215: Providing controls to achieve the same result as path based or multipoint gestures',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G215'
		},
		F100: {
			title: 'F100: Failure of Success Criterion 1.3.4 due to showing a message asking to reorient device',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F100'
		},
		G214: {
			title: 'G214: Using a control to allow access to content in different orientations which is otherwise restricted',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G214'
		},
		C40: {
			title: 'C40: Creating a two-color focus indicator to ensure sufficient contrast with all components',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C40'
		},
		F99: {
			title: 'F99: Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F99'
		},
		SCR39: {
			title: 'SCR39: Making content on focus or hover hoverable, dismissible, and persistent',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39'
		},
		G212: {
			title: 'G212: Using native controls to ensure functionality is triggered on the up-event.',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G212'
		},
		F98: {
			title: 'F98: Failure due to interactions being limited to touch-only on touchscreen devices',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F98'
		},
		G213: {
			title: 'G213: Provide conventional controls and an application setting for motion activated input',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G213'
		},
		ARIA24: {
			title: 'ARIA24: Semantically identifying a font icon with role="img"',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24'
		},
		F97: {
			title: 'F97: Failure due to locking the orientation to landscape or portrait view',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F97'
		},
		F52: {
			title: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded ',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F52'
		},
		G209: {
			title: 'G209: Provide sufficient contrast at the boundaries between adjoining colors',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G209'
		},
		C39: {
			title: 'C39: Using the CSS reduce-motion query to prevent motion',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C39'
		},
		G207: {
			title: 'G207: Ensuring that a contrast ratio of 3:1 is provided for icons',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207'
		},
		C38: {
			title: 'C38: Using CSS width, max-width and flexbox to fit labels and inputs',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C38'
		},
		C34: {
			title: 'C34: Using media queries to un-fixing sticky headers / footers',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C34'
		},
		C36: {
			title: 'C36: Allowing for text spacing override',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C36'
		},
		C37: {
			title: 'C37: Using CSS max-width and height to fit images',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/css/C37'
		},
		F95: {
			title: 'F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F95'
		},
		F96: {
			title: 'F96: Failure due to the accessible name not containing the visible label text',
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/failures/F96'
		}
	};
}
