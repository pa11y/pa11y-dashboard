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

module.exports = getStandards;

function getStandards() {
	return [
		{
			title: 'WCAG2A',
			rules: [
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Img element with empty alt text must have absent or empty title attribute.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Img element is marked so that it is ignored by Assistive Technology.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Ensure that the img element\'s alt text serves the same purpose and presents the same information as the image.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Image submit button missing an alt attribute. Specify a text alternative that describes the button\'s function, using the alt attribute'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Ensure that the image submit button\'s alt text identifies the purpose of the button.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Ensure that the area element\'s text alternative serves the same purpose as the part of image map image it references.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Img element inside a link must not use alt text that duplicates the text content of the link.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Img element inside a link must not use alt text that duplicates the content of a text link beside it.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Object elements must contain a text alternative after all other alternatives are exhausted.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet elements must contain a text alternative in the element\'s body, for browsers without support for the applet element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_1.G158',
					description: 'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_2.1_2_3.G69,G78,G173,G8',
					description: 'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Multiple labels exist with the same "for" attribute. If these labels refer to different form controls, the controls should have unique "id" attributes.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'This label\'s "for" attribute contains an ID that points to an element that is not a form control.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Label found without a "for" attribute, and therefore not explicitly associated with a form control.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Form control does not have an ID, therefore it cannot have an explicit label.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Form control without a label contains an empty title attribute. The title attribute should identify the purpose of the control.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Check that the title attribute identifies the purpose of the control, and that a label element is not appropriate.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Form control does not have an explicit label or title attribute, identifying the purpose of the control.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Label element should not be used for this type of form control.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'The label element for this control should be placed after this element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'The label element for this control should be placed before this element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Heading markup should be used if this content is intended as a heading.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Scope attributes on td elements that act as headers for other elements are obsolete in HTML5. Use a th element instead.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Incorrect headers attribute on this td element. Expected "[expected headers]" but found "[actual headers]"'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements headers attributes.\''
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'If this table is a data table, check that the summary attribute describes the tables organization or explains how to use the table.\''
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'If this table is a data table, check that the caption element accurately describes this table.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'If this table is a data table, consider using a caption element to the table element to identify this table.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'If this selection list contains groups of related options, they should be grouped with optgroup.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Radio buttons or check boxes with the same name attribute must be contained within a fieldset element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Content appears to have the visual appearance of a bulleted list. It may be appropriate to mark this content up using a ul element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Content appears to have the visual appearance of a numbered list. It may be appropriate to mark this content up using an ol element.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.G141',
					description: 'The heading structure is not logically nested. This [heading] element (should be a [correct heading] to be properly nested / appears to be the primary document heading, so should be an h1 element).'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_1.H48',
					description: 'If this element contains a navigation section, it is recommended that it be marked up as a list.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Check that any information conveyed using colour alone is also available in text, or through other visual cues.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_2.F23',
					description: 'If any audio plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_3.F24.BGColour',
					description: 'Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline1_4.1_4_3.F24.FGColour',
					description: 'Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Ensure the functionality provided by double-clicking on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.'
				},
				{
					name: 'WCAG2A.1.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: \nTurn off: A mechanism is available to turn the shortcut off;\nRemap: A mechanism is available to remap the shortcut to use one or more non- printable keyboard characters(e.g.Ctrl, Alt, etc);\nActive only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Ensure there is a mechanism available to stop this blinking element in less than five seconds.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_3.2_3_1.G19,G176',
					description: 'Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Iframe element requires a non-empty title attribute that identifies the frame.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Check that the title attribute of this element contains text that identifies the frame.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name in the fragment tested.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'A title should be provided for the document, using a non-empty title element in the head section.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'The title element in the head section should be non-empty.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Check that the title element describes the document.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33',
					description: 'Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.'
				},
				{
					name: 'WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81',
					description: 'Check that the link text combined with programmatically determined link context identifies the purpose of the link.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2A.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'The html element should have a lang or xml:lang attribute which describes the language of the document.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'The language specified in the lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Check that a change of context does not occur when any input field receives focus.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Form does not contain a submit button (input type="submit", input type="image", or button type="submit").'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.'
				},
				{
					name: 'WCAG2A.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Duplicate id attribute value "[Element ID]" found on the web page.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Anchor element found with no link content and no name and/or ID attribute.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Anchor element found with link content, but no href and/or ID attribute has been supplied.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Anchor element found with a valid href attribute, but no link content has been supplied.'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'This /[element type/] does not have a name available to an accessibility API. Valid names are [valid names for this element].'
				},
				{
					name: 'WCAG2A.Principle4.Guideline4_1.4_1_2.H91./[NodeName/].Value',
					description: 'This /[element type/] does not have a value available to an accessibility API. Add one /[using a element-specific method/].'
				}
			]
		},
		{
			title: 'WCAG2AA',
			rules: [
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Img element with empty alt text must have absent or empty title attribute.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Img element is marked so that it is ignored by Assistive Technology.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Ensure that the img element\'s alt text serves the same purpose and presents the same information as the image.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Image submit button missing an alt attribute. Specify a text alternative that describes the button\'s function, using the alt attribute'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Ensure that the image submit button\'s alt text identifies the purpose of the button.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Ensure that the area element\'s text alternative serves the same purpose as the part of image map image it references.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Img element inside a link must not use alt text that duplicates the text content of the link.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Img element inside a link must not use alt text that duplicates the content of a text link beside it.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Object elements must contain a text alternative after all other alternatives are exhausted.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet elements must contain a text alternative in the element\'s body, for browsers without support for the applet element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_1.G158',
					description: 'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_4.G9,G87,G93',
					description: 'If this embedded object contains synchronised media, check that captions are provided for live audio content.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_2.1_2_5.G78,G173,G8',
					description: 'If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Multiple labels exist with the same "for" attribute. If these labels refer to different form controls, the controls should have unique "id" attributes.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'This label\'s "for" attribute contains an ID that points to an element that is not a form control.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Label found without a "for" attribute, and therefore not explicitly associated with a form control.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Form control does not have an ID, therefore it cannot have an explicit label.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Form control without a label contains an empty title attribute. The title attribute should identify the purpose of the control.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Check that the title attribute identifies the purpose of the control, and that a label element is not appropriate.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Form control does not have an explicit label or title attribute, identifying the purpose of the control.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Label element should not be used for this type of form control.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'The label element for this control should be placed after this element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'The label element for this control should be placed before this element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Heading markup should be used if this content is intended as a heading.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Scope attributes on td elements that act as headers for other elements are obsolete in HTML5. Use a th element instead.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Incorrect headers attribute on this td element. Expected "[expected headers]" but found "[actual headers]"'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements headers attributes.\''
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'If this table is a data table, check that the summary attribute describes the tables organization or explains how to use the table.\''
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'If this table is a data table, check that the caption element accurately describes this table.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'If this table is a data table, consider using a caption element to the table element to identify this table.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'If this selection list contains groups of related options, they should be grouped with optgroup.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Radio buttons or check boxes with the same name attribute must be contained within a fieldset element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Content appears to have the visual appearance of a bulleted list. It may be appropriate to mark this content up using a ul element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Content appears to have the visual appearance of a numbered list. It may be appropriate to mark this content up using an ol element.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.G141',
					description: 'The heading structure is not logically nested. This [heading] element (should be a [correct heading] to be properly nested / appears to be the primary document heading, so should be an h1 element).'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_1.H48',
					description: 'If this element contains a navigation section, it is recommended that it be marked up as a list.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_4.RestrictView',
					description: 'Check that content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.FaultyValue',
					description: 'This element contains a potentially faulty value in its autocomplete attribute.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Text',
					description: 'Invalid autocomplete value. Element does not belong to Text control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Multiline',
					description: 'Invalid autocomplete value. Element does not belong to Multiline control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Password',
					description: 'Invalid autocomplete value. Element does not belong to Password control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Url',
					description: 'Invalid autocomplete value. Element does not belong to Url control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Telephone',
					description: 'Invalid autocomplete value. Element does not belong to Telephone control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Numeric',
					description: 'Invalid autocomplete value. Element does not belong to Numeric control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Month',
					description: 'Invalid autocomplete value. Element does not belong to Month control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Date',
					description: 'Invalid autocomplete value. Element does not belong to Date control group.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.Purpose',
					description: 'Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete',
					description: 'This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Check that any information conveyed using colour alone is also available in text, or through other visual cues.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_2.F23',
					description: 'If any audio plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail',
					description: 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of /{value/}. Recommendation: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G145',
					description: 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of /{value/}. Recommendation: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18',
					description: 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G1451',
					description: 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.F24.BGColour',
					description: 'Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_3.F24.FGColour',
					description: 'Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_4.G142',
					description: 'Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_5.G140,C22,C30.AALevel',
					description: 'If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user\'s requirements.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check',
					description: 'Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: \nVertical scrolling content at a width equivalent to 320 CSS pixels;\\n Horizontal scrolling content at a height equivalent to 256 CSS pixels; \nExcept for parts of the content which require two-dimensional layout for usage or meaning.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed',
					description: 'Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom',
					description: 'Interfering with a user agents ability to zoom may be a failure of this Success Criterion.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check',
					description: 'Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): \nUser Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; \nGraphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_12_C36,C35.Check',
					description: 'Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property: \nLine height(line spacing) to at least 1.5 times the font size; \nSpacing following paragraphs to at least 2 times the font size; \nLetter spacing(tracking) to at least 0.12 times the font size; \nWord spacing to at least 0.16 times the font size'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline1_4.1_4_13_F95.Check',
					description: 'Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: \nDismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; \nHoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; \nPersistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Ensure the functionality provided by double-clicking on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: \nTurn off: A mechanism is available to turn the shortcut off; \nRemap: A mechanism is available to remap the shortcut to use one or more non- printable keyboard characters(e.g.Ctrl, Alt, etc); \nActive only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Ensure there is a mechanism available to stop this blinking element in less than five seconds.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_3.2_3_1.G19,G176',
					description: 'Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Iframe element requires a non-empty title attribute that identifies the frame.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Check that the title attribute of this element contains text that identifies the frame.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name in the fragment tested.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'A title should be provided for the document, using a non-empty title element in the head section.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'The title element in the head section should be non-empty.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Check that the title element describes the document.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33',
					description: 'Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81',
					description: 'Check that the link text combined with programmatically determined link context identifies the purpose of the link.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185',
					description: 'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_6.G130,G131',
					description: 'Check that headings and labels describe topic or purpose.'
				},
				{
					name: 'WCAG2AA.Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31',
					description: 'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'WCAG2AA.This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'The html element should have a lang or xml:lang attribute which describes the language of the document.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'The language specified in the lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58',
					description: 'Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.Lang',
					description: 'The language specified in the lang attribute of this element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.XmlLang',
					description: 'The language specified in the xml:lang attribute of this element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Check that a change of context does not occur when any input field receives focus.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Form does not contain a submit button (input type="submit", input type="image", or button type="submit").'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_3.G61',
					description: 'Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_2.3_2_4.G197',
					description: 'Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_3.G177',
					description: 'Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.'
				},
				{
					name: 'WCAG2AA.Principle3.Guideline3_3.3_3_4.G98,G99,G155,G164,G168.LegalForms',
					description: 'If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Duplicate id attribute value "[Element ID]" found on the web page.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Anchor element found with no link content and no name and/or ID attribute.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Anchor element found with link content, but no href and/or ID attribute has been supplied.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Anchor element found with a valid href attribute, but no link content has been supplied.'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'This [element type] does not have a name available to an accessibility API. Valid names are [valid names for this element].'
				},
				{
					name: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Value',
					description: 'This [element type] does not have a value available to an accessibility API. Add one [using a element-specific method].'
				},
				{
					name: 'WCAG2AA.Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check',
					description: 'Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.'
				}
			]
		},
		{
			title: 'WCAG2AAA',
			rules: [
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H30.2',
					description: 'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H37',
					description: 'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.1',
					description: 'Img element with empty alt text must have absent or empty title attribute.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H67.2',
					description: 'Img element is marked so that it is ignored by Assistive Technology.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94.Image',
					description: 'Ensure that the img element\'s alt text serves the same purpose and presents the same information as the image.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H36',
					description: 'Image submit button missing an alt attribute. Specify a text alternative that describes the button\'s function, using the alt attribute'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94.Button',
					description: 'Ensure that the image submit button\'s alt text identifies the purpose of the button.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H24',
					description: 'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H24.2',
					description: 'Ensure that the area element\'s text alternative serves the same purpose as the part of image map image it references.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G73,G74',
					description: 'If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG5',
					description: 'Img element inside a link must not use alt text that duplicates the text content of the link.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG4',
					description: 'Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H2.EG3',
					description: 'Img element inside a link must not use alt text that duplicates the content of a text link beside it.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H53',
					description: 'Object elements must contain a text alternative after all other alternatives are exhausted.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94,G92.Object',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H35.3',
					description: 'Applet elements must contain a text alternative in the element\'s body, for browsers without support for the applet element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.H35.2',
					description: 'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_1.1_1_1.G94,G92.Applet',
					description: 'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_1.G158',
					description: 'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_1.G159,G166',
					description: 'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_2.G87,G93',
					description: 'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_4.G9,G87,G93',
					description: 'If this embedded object contains synchronised media, check that captions are provided for live audio content.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_5.G78,G173,G8',
					description: 'If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_6.G54,G81',
					description: 'If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_7.G8',
					description: 'If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_8.G69,G159',
					description: 'If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_2.1_2_9.G150,G151,G157',
					description: 'If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42.2',
					description: 'Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H93',
					description: 'Multiple labels exist with the same "for" attribute. If these labels refer to different form controls, the controls should have unique "id" attributes.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistent',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment',
					description: 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NotFormControl',
					description: 'This label\'s "for" attribute contains an ID that points to an element that is not a form control.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoForAttr',
					description: 'Label found without a "for" attribute, and therefore not explicitly associated with a form control.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoId',
					description: 'Form control does not have an ID, therefore it cannot have an explicit label.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H65.3',
					description: 'Form control without a label contains an empty title attribute. The title attribute should identify the purpose of the control.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H65',
					description: 'Check that the title attribute identifies the purpose of the control, and that a label element is not appropriate.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.2',
					description: 'Form control does not have an explicit label or title attribute, identifying the purpose of the control.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed',
					description: 'Label element should not be used for this type of form control.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.1.After',
					description: 'The label element for this control should be placed after this element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.1.Before',
					description: 'The label element for this control should be placed before this element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.[NodeName]',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H49.AlignAttr',
					description: 'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42',
					description: 'Heading markup should be used if this content is intended as a heading.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.3',
					description: 'Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.2',
					description: 'Scope attributes on td elements that act as headers for other elements are obsolete in HTML5. Use a th element instead.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous',
					description: 'Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr',
					description: 'Incorrect headers attribute on this td element. Expected "[expected headers]" but found "[actual headers]"'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired',
					description: 'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds',
					description: 'Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements headers attributes.\''
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs',
					description: 'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H43,H63',
					description: 'The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H63.1',
					description: 'Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39,H73.4',
					description: 'If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H73.3.Check',
					description: 'If this table is a data table, check that the summary attribute describes the tables organization or explains how to use the table.\''
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary',
					description: 'If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39.3.Check',
					description: 'If this table is a data table, check that the caption element accurately describes this table.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption',
					description: 'If this table is a data table, consider using a caption element to the table element to identify this table.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H71.3',
					description: 'Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2',
					description: 'If this selection list contains groups of related options, they should be grouped with optgroup.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H71.2',
					description: 'Radio buttons or check boxes with the same name attribute must be contained within a fieldset element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.1',
					description: 'Content appears to have the visual appearance of a bulleted list. It may be appropriate to mark this content up using a ul element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48.2',
					description: 'Content appears to have the visual appearance of a numbered list. It may be appropriate to mark this content up using an ol element.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.G141',
					description: 'The heading structure is not logically nested. This [heading] element (should be a [correct heading] to be properly nested / appears to be the primary document heading, so should be an h1 element).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_1.H48',
					description: 'If this element contains a navigation section, it is recommended that it be marked up as a list.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_2.G57',
					description: 'Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_3.G96',
					description: 'Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_4.RestrictView',
					description: 'Check that content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.FaultyValue',
					description: 'This element contains a potentially faulty value in its autocomplete attribute.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Text',
					description: 'Invalid autocomplete value. Element does not belong to Text control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Multiline',
					description: 'Invalid autocomplete value. Element does not belong to Multiline control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Password',
					description: 'Invalid autocomplete value. Element does not belong to Password control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Url',
					description: 'Invalid autocomplete value. Element does not belong to Url control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Telephone',
					description: 'Invalid autocomplete value. Element does not belong to Telephone control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Numeric',
					description: 'Invalid autocomplete value. Element does not belong to Numeric control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Month',
					description: 'Invalid autocomplete value. Element does not belong to Month control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Date',
					description: 'Invalid autocomplete value. Element does not belong to Date control group.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.Purpose',
					description: 'Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete',
					description: 'This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_3.1_3_6_ARIA11.Check',
					description: 'Check that the purpose of User Interface Components, icons, and regions can be programmatically determined.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_1.G14,G182',
					description: 'Check that any information conveyed using colour alone is also available in text, or through other visual cues.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_2.F23',
					description: 'If any audio plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17',
					description: 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 7:1, but text in this element has a contrast ratio of /{value/}. Recommendation: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18',
					description: 'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of /{value/}. Recommendation: /{colour recommendations/}.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17-1',
					description: 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 7:1.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18-1',
					description: 'This element\'s text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_7.G56',
					description: 'For pre-recorded audio-only content that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.G148,G156,G175',
					description: 'Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.H87,C20',
					description: 'Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.C19,G172,G169',
					description: 'Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.G188,C21',
					description: 'Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_8.H87,G146,C26',
					description: 'Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_9.G140,C22,C30.NoException',
					description: 'Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check',
					description: 'Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: \nVertical scrolling content at a width equivalent to 320 CSS pixels;\\n Horizontal scrolling content at a height equivalent to 256 CSS pixels; \nExcept for parts of the content which require two-dimensional layout for usage or meaning.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed',
					description: 'Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom',
					description: 'Interfering with a user agents ability to zoom may be a failure of this Success Criterion.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check',
					description: 'Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): \nUser Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; \nGraphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_12_C36,C35.Check',
					description: 'Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property: \nLine height(line spacing) to at least 1.5 times the font size; \nSpacing following paragraphs to at least 2 times the font size; \nLetter spacing(tracking) to at least 0.12 times the font size; \nWord spacing to at least 0.16 times the font size'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline1_4.1_4_13_F95.Check',
					description: 'Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: \nDismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; \nHoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; \nPersistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_1.2_1_4.Check',
					description: 'Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: \nTurn off: A mechanism is available to turn the shortcut off; \nRemap: A mechanism is available to remap the shortcut to use one or more non- printable keyboard characters(e.g.Ctrl, Alt, etc); \nActive only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.DblClick',
					description: 'Ensure the functionality provided by double-clicking on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver',
					description: 'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut',
					description: 'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove',
					description: 'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown',
					description: 'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp',
					description: 'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_1.2_1_2.F10',
					description: 'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_1.F40.2',
					description: 'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_1.F41.2',
					description: 'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191',
					description: 'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.F4',
					description: 'Ensure there is a mechanism available to stop this blinking element in less than five seconds.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_2.F47',
					description: 'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_3.G5',
					description: 'Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_4.SCR14',
					description: 'Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_2.2_2_5.G105,G181',
					description: 'If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_2.2_2_6.Check',
					description: 'Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_3.2_3_2.G19',
					description: 'Check that no component of the content flashes more than three times in any 1-second period.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_3.2_3_3.Check',
					description: 'Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_1.Check',
					description: 'Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.SinglePointer_Check',
					description: 'Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.Mousedown_Check',
					description: 'This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_2.Touchstart_Check',
					description: 'This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: \nNo Down- Event: The down - event of the pointer is not used to execute any part of the function; \nAbort or Undo: Completion of the function is on the up - event, and a mechanism is available to abort the function before completion or to undo the function after completion; \nUp Reversal: The up - event reverses any outcome of the preceding down - event; \nEssential: Completing the function on the down - event is essential.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_3_F96.Check',
					description: 'Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_3_F96.AccessibleName',
					description: 'Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_4.Check',
					description: 'Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_4.Devicemotion',
					description: 'WCAG2AA.This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: \nSupported Interface: The motion is used to operate functionality through an accessibility supported interface; \nEssential: The motion is essential for the function and doing so would invalidate the activity.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_5.Check',
					description: 'Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:\nEquivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;\nInline: The target is in a sentence or block of text;\nUser Agent Control: The size of the target is determined by the user agent and is not modified by the author;\nEssential: A particular presentation of the target is essential to the information being conveyed.'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline2_5.2_5_6.Check',
					description: 'Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.H64.1',
					description: 'Iframe element requires a non-empty title attribute that identifies the frame.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.H64.2',
					description: 'Check that the title attribute of this element contains text that identifies the frame.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69',
					description: 'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2',
					description: 'This link points to a named anchor "[link target]" within the document, but no anchor exists with that name in the fragment tested.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
					description: 'A title should be provided for the document, using a non-empty title element in the head section.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle',
					description: 'The title element in the head section should be non-empty.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_2.H25.2',
					description: 'Check that the title element describes the document.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_3.H4.2',
					description: 'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185',
					description: 'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_6.G130,G131',
					description: 'Check that headings and labels describe topic or purpose.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31',
					description: 'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.1',
					description: 'Link elements can only be located in the head section of the document.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2a',
					description: 'Link element is missing a non-empty rel attribute identifying the link type.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_8.H59.2b',
					description: 'Link element is missing a non-empty href attribute pointing to the resource being linked.'
				},
				{
					name: 'WCAG2AAA.Principle2.Guideline2_4.2_4_9.H30',
					description: 'Check that text of the link describes the purpose of the link.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.2',
					description: 'The html element should have a lang or xml:lang attribute which describes the language of the document.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.3.Lang',
					description: 'The language specified in the lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang',
					description: 'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58',
					description: 'Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58.1.Lang',
					description: 'The language specified in the lang attribute of this element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_2.H58.1.XmlLang',
					description: 'The language specified in the xml:lang attribute of this element does not appear to be well-formed.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_3.H40,H54,H60,G62,G70',
					description: 'Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_4.G102,G55,G62,H28,G97',
					description: 'Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_5.G86,G103,G79,G153,G160',
					description: 'Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.1.HTML5',
					description: 'Ruby element does not contain an rt element containing pronunciation information for its body text.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.1.XHTML11',
					description: 'Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_1.3_1_6.H62.2',
					description: 'Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_1.G107',
					description: 'Check that a change of context does not occur when any input field receives focus.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_2.H32.2',
					description: 'Form does not contain a submit button (input type="submit", input type="image", or button type="submit").'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_3.G61',
					description: 'Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_4.G197',
					description: 'Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3',
					description: 'Check that this link\'s link text contains information indicating that the link will open in a new window.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_1.G83,G84,G85',
					description: 'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90',
					description: 'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_3.G177',
					description: 'Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_5.G71,G184,G193',
					description: 'Check that context-sensitive help is available for this form, at a Web-page and/or control level.'
				},
				{
					name: 'WCAG2AAA.Principle3.Guideline3_3.3_3_6.G98,G99,G155,G164,G168.AllForms',
					description: 'Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_1.F77',
					description: 'Duplicate id attribute value "[Element ID]" found on the web page.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Empty',
					description: 'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName',
					description: 'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
					description: 'Anchor element found with no link content and no name and/or ID attribute.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoHref',
					description: 'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder',
					description: 'Anchor element found with link content, but no href and/or ID attribute has been supplied.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent',
					description: 'Anchor element found with a valid href attribute, but no link content has been supplied.'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Name',
					description: 'This [element type] does not have a name available to an accessibility API. Valid names are [valid names for this element].'
				},
				{
					name: 'WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.[NodeName].Value',
					description: 'This [element type] does not have a value available to an accessibility API. Add one [using a element-specific method].'
				},
				{
					name: 'WCAG2AAA.Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check',
					description: 'Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.'
				}
			]
		}
	];
}
