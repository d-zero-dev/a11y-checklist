export const sc = {
	'wcag_2.0': {
		en: {
			'1.1.1': {
				id: '1.1.1',
				title: 'Non-text Content',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.1.1 Non-text Content:</strong> All <a title="definition: non-text content" href="https://www.w3.org/TR/WCAG20/#non-text-contentdef" class="termref">non-text content</a> that is presented to the user has a <a title="definition: text alternative" href="https://www.w3.org/TR/WCAG20/#text-altdef" class="termref">text alternative</a> that serves the equivalent purpose, except for the situations listed below. (Level A) </p><ul><li><p> <strong class="sc-handle">Controls, Input: </strong> If non-text content is a control or accepts user input, then it has a <a title="definition: name" href="https://www.w3.org/TR/WCAG20/#namedef" class="termref">name</a> that describes its purpose. (Refer to <a href="https://www.w3.org/TR/WCAG20/#ensure-compat">Guideline 4.1</a> for additional requirements for controls and content that accepts user input.) </p></li><li><p> <strong class="sc-handle">Time-Based Media: </strong> If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to <a href="https://www.w3.org/TR/WCAG20/#media-equiv">Guideline 1.2</a> for additional requirements for media.) </p></li><li><p> <strong class="sc-handle">Test: </strong> If non-text content is a test or exercise that would be invalid if presented in <a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a>, then text alternatives at least provide descriptive identification of the non-text content. </p></li><li><p> <strong class="sc-handle">Sensory: </strong> If non-text content is primarily intended to create a <a title="definition: specific sensory experience" href="https://www.w3.org/TR/WCAG20/#sensoryexpdef" class="termref">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content. </p></li><li><p> <strong class="sc-handle"> <a title="definition: CAPTCHA" href="https://www.w3.org/TR/WCAG20/#CAPTCHAdef" class="termref">CAPTCHA</a>: </strong>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.</p></li><li><p> <strong class="sc-handle">Decoration, Formatting, Invisible: </strong>If non-text content is <a title="definition: pure decoration" href="https://www.w3.org/TR/WCAG20/#puredecdef" class="termref">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a title="definition: assistive technology (as used in this document)" href="https://www.w3.org/TR/WCAG20/#atdef" class="termref">assistive technology</a>.</p></li></ul>',
				bodyMarkdown:
					'**1.1.1 Non-text Content:** All [non-text content](https://www.w3.org/TR/WCAG20/#non-text-contentdef "definition: non-text content") that is presented to the user has a [text alternative](https://www.w3.org/TR/WCAG20/#text-altdef "definition: text alternative") that serves the equivalent purpose, except for the situations listed below. (Level A)\n\n-   **Controls, Input:** If non-text content is a control or accepts user input, then it has a [name](https://www.w3.org/TR/WCAG20/#namedef "definition: name") that describes its purpose. (Refer to [Guideline 4.1](https://www.w3.org/TR/WCAG20/#ensure-compat) for additional requirements for controls and content that accepts user input.)\n    \n-   **Time-Based Media:** If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to [Guideline 1.2](https://www.w3.org/TR/WCAG20/#media-equiv) for additional requirements for media.)\n    \n-   **Test:** If non-text content is a test or exercise that would be invalid if presented in [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text"), then text alternatives at least provide descriptive identification of the non-text content.\n    \n-   **Sensory:** If non-text content is primarily intended to create a [specific sensory experience](https://www.w3.org/TR/WCAG20/#sensoryexpdef "definition: specific sensory experience"), then text alternatives at least provide descriptive identification of the non-text content.\n    \n-   **[CAPTCHA](https://www.w3.org/TR/WCAG20/#CAPTCHAdef "definition: CAPTCHA"):** If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.\n    \n-   **Decoration, Formatting, Invisible:** If non-text content is [pure decoration](https://www.w3.org/TR/WCAG20/#puredecdef "definition: pure decoration"), is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by [assistive technology](https://www.w3.org/TR/WCAG20/#atdef "definition: assistive technology (as used in this document)").',
				bodyPlain:
					'1.1.1 Non-text Content: All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.\n\n(Level A) \n\nControls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)\n\nTime-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.) \n\nTest: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.\n\nSensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.\n\n\nCAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception\nare provided to accommodate different disabilities.\nDecoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
				understanding: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: 'Audio-only and Video-only (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.1 Audio-only and Video-only (Prerecorded):</strong> For <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: audio-only" href="https://www.w3.org/TR/WCAG20/#audio-onlydef" class="termref">audio-only</a> and prerecorded <a title="definition: video-only" href="https://www.w3.org/TR/WCAG20/#video-onlydef" class="termref">video-only</a> media, the following are true, except when the audio or video is a <a title="definition: media alternative for text" href="https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such: (Level A) </p><ul><li><p><strong class="sc-handle">Prerecorded Audio-only: </strong>An <a title="definition: alternative for time-based media" href="https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.</p></li><li><p><strong class="sc-handle">Prerecorded Video-only: </strong>Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.</p></li></ul>',
				bodyMarkdown:
					'**1.2.1 Audio-only and Video-only (Prerecorded):** For [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [audio-only](https://www.w3.org/TR/WCAG20/#audio-onlydef "definition: audio-only") and prerecorded [video-only](https://www.w3.org/TR/WCAG20/#video-onlydef "definition: video-only") media, the following are true, except when the audio or video is a [media alternative for text](https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef "definition: media alternative for text") and is clearly labeled as such: (Level A)\n\n-   **Prerecorded Audio-only:** An [alternative for time-based media](https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef "definition: alternative for time-based media") is provided that presents equivalent information for prerecorded audio-only content.\n    \n-   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
				bodyPlain:
					'1.2.1 Audio-only and Video-only (Prerecorded): For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: \n(Level A) \nPrerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'Captions (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.2 Captions (Prerecorded):</strong> <a title="definition: captions" href="https://www.w3.org/TR/WCAG20/#captionsdef" class="termref">Captions</a> are provided for all <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: audio" href="https://www.w3.org/TR/WCAG20/#audiodef" class="termref">audio</a> content in <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a title="definition: media alternative for text" href="https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. (Level A) </p>',
				bodyMarkdown:
					'**1.2.2 Captions (Prerecorded):** [Captions](https://www.w3.org/TR/WCAG20/#captionsdef "definition: captions") are provided for all [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [audio](https://www.w3.org/TR/WCAG20/#audiodef "definition: audio") content in [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef "definition: media alternative for text") and is clearly labeled as such. (Level A)',
				bodyPlain:
					'1.2.2 Captions (Prerecorded): \nCaptions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: 'Audio Description or Media Alternative (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.3 Audio Description or Media Alternative (Prerecorded):</strong> An <a title="definition: alternative for time-based media" href="https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> or <a title="definition: audio description" href="https://www.w3.org/TR/WCAG20/#audiodescdef" class="termref">audio description</a> of the <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: video" href="https://www.w3.org/TR/WCAG20/#videodef" class="termref">video</a> content is provided for <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>, except when the media is a <a title="definition: media alternative for text" href="https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef" class="termref">media alternative for text</a> and is clearly labeled as such. (Level A) </p>',
				bodyMarkdown:
					'**1.2.3 Audio Description or Media Alternative (Prerecorded):** An [alternative for time-based media](https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef "definition: alternative for time-based media") or [audio description](https://www.w3.org/TR/WCAG20/#audiodescdef "definition: audio description") of the [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [video](https://www.w3.org/TR/WCAG20/#videodef "definition: video") content is provided for [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG20/#multimedia-alt-textdef "definition: media alternative for text") and is clearly labeled as such. (Level A)',
				bodyPlain:
					'1.2.3 Audio Description or Media Alternative (Prerecorded): \nAn alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.\n\n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'Captions (Live)',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.4 Captions (Live):</strong> <a title="definition: captions" href="https://www.w3.org/TR/WCAG20/#captionsdef" class="termref">Captions</a> are provided for all <a title="definition: live" href="https://www.w3.org/TR/WCAG20/#livedef" class="termref">live</a> <a title="definition: audio" href="https://www.w3.org/TR/WCAG20/#audiodef" class="termref">audio</a> content in <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>. (Level AA) </p>',
				bodyMarkdown:
					'**1.2.4 Captions (Live):** [Captions](https://www.w3.org/TR/WCAG20/#captionsdef "definition: captions") are provided for all [live](https://www.w3.org/TR/WCAG20/#livedef "definition: live") [audio](https://www.w3.org/TR/WCAG20/#audiodef "definition: audio") content in [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"). (Level AA)',
				bodyPlain:
					'1.2.4 Captions (Live): \nCaptions are provided for all live audio content in synchronized media. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: 'Audio Description (Prerecorded)',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.5 Audio Description (Prerecorded):</strong> <a title="definition: audio description" href="https://www.w3.org/TR/WCAG20/#audiodescdef" class="termref">Audio description</a> is provided for all <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: video" href="https://www.w3.org/TR/WCAG20/#videodef" class="termref">video</a> content in <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>. (Level AA) </p>',
				bodyMarkdown:
					'**1.2.5 Audio Description (Prerecorded):** [Audio description](https://www.w3.org/TR/WCAG20/#audiodescdef "definition: audio description") is provided for all [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [video](https://www.w3.org/TR/WCAG20/#videodef "definition: video") content in [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"). (Level AA)',
				bodyPlain:
					'1.2.5 Audio Description (Prerecorded): \nAudio description is provided for all prerecorded video content in synchronized media.\n\n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: 'Sign Language (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.6 Sign Language (Prerecorded):</strong> <a title="definition: sign language interpretation" href="https://www.w3.org/TR/WCAG20/#sign-languageinterpdef" class="termref">Sign language interpretation</a> is provided for all <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: audio" href="https://www.w3.org/TR/WCAG20/#audiodef" class="termref">audio</a> content in <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**1.2.6 Sign Language (Prerecorded):** [Sign language interpretation](https://www.w3.org/TR/WCAG20/#sign-languageinterpdef "definition: sign language interpretation") is provided for all [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [audio](https://www.w3.org/TR/WCAG20/#audiodef "definition: audio") content in [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"). (Level AAA)',
				bodyPlain:
					'1.2.6 Sign Language (Prerecorded): \nSign language interpretation is provided for all prerecorded audio content in synchronized media.\n\n(Level AAA)',
				understanding: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: 'Extended Audio Description  (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.7 Extended Audio Description (Prerecorded):</strong> Where pauses in foreground audio are insufficient to allow <a title="definition: audio description" href="https://www.w3.org/TR/WCAG20/#audiodescdef" class="termref">audio descriptions</a> to convey the sense of the video, <a title="definition: extended audio description" href="https://www.w3.org/TR/WCAG20/#extended-addef" class="termref">extended audio description</a> is provided for all <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: video" href="https://www.w3.org/TR/WCAG20/#videodef" class="termref">video</a> content in <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**1.2.7 Extended Audio Description (Prerecorded):** Where pauses in foreground audio are insufficient to allow [audio descriptions](https://www.w3.org/TR/WCAG20/#audiodescdef "definition: audio description") to convey the sense of the video, [extended audio description](https://www.w3.org/TR/WCAG20/#extended-addef "definition: extended audio description") is provided for all [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [video](https://www.w3.org/TR/WCAG20/#videodef "definition: video") content in [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media"). (Level AAA)',
				bodyPlain:
					'1.2.7 Extended Audio Description (Prerecorded): \nWhere pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'Media Alternative (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.8 Media Alternative (Prerecorded):</strong> An <a title="definition: alternative for time-based media" href="https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> is provided for all <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a> and for all prerecorded <a title="definition: video-only" href="https://www.w3.org/TR/WCAG20/#video-onlydef" class="termref">video-only</a> media. (Level AAA) </p>',
				bodyMarkdown:
					'**1.2.8 Media Alternative (Prerecorded):** An [alternative for time-based media](https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef "definition: alternative for time-based media") is provided for all [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media") and for all prerecorded [video-only](https://www.w3.org/TR/WCAG20/#video-onlydef "definition: video-only") media. (Level AAA)',
				bodyPlain:
					'1.2.8 Media Alternative (Prerecorded): \nAn alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: 'Audio-only (Live)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.9 Audio-only (Live):</strong> An <a title="definition: alternative for time-based media" href="https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef" class="termref">alternative for time-based media</a> that presents equivalent information for <a title="definition: live" href="https://www.w3.org/TR/WCAG20/#livedef" class="termref">live</a> <a title="definition: audio-only" href="https://www.w3.org/TR/WCAG20/#audio-onlydef" class="termref">audio-only</a> content is provided. (Level AAA) </p>',
				bodyMarkdown:
					'**1.2.9 Audio-only (Live):** An [alternative for time-based media](https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef "definition: alternative for time-based media") that presents equivalent information for [live](https://www.w3.org/TR/WCAG20/#livedef "definition: live") [audio-only](https://www.w3.org/TR/WCAG20/#audio-onlydef "definition: audio-only") content is provided. (Level AAA)',
				bodyPlain:
					'1.2.9 Audio-only (Live): An alternative for time-based media that presents equivalent information for live audio-only content is provided.\n\n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: 'Info and Relationships',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.1 Info and Relationships:</strong> Information, <a title="definition: structure" href="https://www.w3.org/TR/WCAG20/#structuredef" class="termref">structure</a>, and <a title="definition: relationships" href="https://www.w3.org/TR/WCAG20/#relationshipsdef" class="termref">relationships</a> conveyed through <a title="definition: presentation" href="https://www.w3.org/TR/WCAG20/#presentationdef" class="termref">presentation</a> can be <a title="definition: programmatically determined (programmatically determinable)" href="https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef" class="termref">programmatically determined</a> or are available in text. (Level A) </p>',
				bodyMarkdown:
					'**1.3.1 Info and Relationships:** Information, [structure](https://www.w3.org/TR/WCAG20/#structuredef "definition: structure"), and [relationships](https://www.w3.org/TR/WCAG20/#relationshipsdef "definition: relationships") conveyed through [presentation](https://www.w3.org/TR/WCAG20/#presentationdef "definition: presentation") can be [programmatically determined](https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef "definition: programmatically determined (programmatically determinable)") or are available in text. (Level A)',
				bodyPlain:
					'1.3.1 Info and Relationships: Information, structure, \nand relationships conveyed through presentation can be programmatically determined or are available in text. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: 'Meaningful Sequence',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.2 Meaningful Sequence:</strong> When the sequence in which content is presented affects its meaning, a <a title="definition: correct reading sequence" href="https://www.w3.org/TR/WCAG20/#correct-reading-sequencedef" class="termref">correct reading sequence</a> can be <a title="definition: programmatically determined (programmatically determinable)" href="https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef" class="termref">programmatically determined</a>. (Level A) </p>',
				bodyMarkdown:
					'**1.3.2 Meaningful Sequence:** When the sequence in which content is presented affects its meaning, a [correct reading sequence](https://www.w3.org/TR/WCAG20/#correct-reading-sequencedef "definition: correct reading sequence") can be [programmatically determined](https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef "definition: programmatically determined (programmatically determinable)"). (Level A)',
				bodyPlain:
					'1.3.2 Meaningful Sequence: When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: 'Sensory Characteristics',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.3 Sensory Characteristics:</strong> Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>For requirements related to color, refer to <a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast">Guideline 1.4</a>.</p></div>',
				bodyMarkdown:
					'**1.3.3 Sensory Characteristics:** Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. (Level A)\n\n_Note:_ For requirements related to color, refer to [Guideline 1.4](https://www.w3.org/TR/WCAG20/#visual-audio-contrast).',
				bodyPlain:
					'1.3.3 Sensory Characteristics: \nInstructions provided for understanding\nand operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.\n\n(Level A) \nNote: For requirements related to color, refer to Guideline 1.4.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: 'Use of Color',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.1 Use of Color:</strong> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>This success criterion addresses color perception specifically. Other forms of perception are covered in <a href="https://www.w3.org/TR/WCAG20/#content-structure-separation">Guideline 1.3</a> including programmatic access to color and other visual presentation coding.</p></div>',
				bodyMarkdown:
					'**1.4.1 Use of Color:** Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)\n\n_Note:_ This success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](https://www.w3.org/TR/WCAG20/#content-structure-separation) including programmatic access to color and other visual presentation coding.',
				bodyPlain:
					'1.4.1 Use of Color: \nColor is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.\n\n\n(Level A) \nNote: This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: 'Audio Control',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.2 Audio Control:</strong> If any audio on a Web page plays automatically for more than 3 seconds, either a <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG20/#cc5">Conformance Requirement 5: Non-Interference</a>.</p></div>',
				bodyMarkdown:
					'**1.4.2 Audio Control:** If any audio on a Web page plays automatically for more than 3 seconds, either a [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A)\n\n_Note:_ Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5).',
				bodyPlain:
					"1.4.2 Audio Control: \nIf any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. \n(Level A) \nNote: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'Contrast (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.3 Contrast (Minimum):</strong> <span>The visual presentation of </span><a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a> and <a title="definition: image of text" href="https://www.w3.org/TR/WCAG20/#images-of-textdef" class="termref">images of text</a> has a <a title="definition: contrast ratio" href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef" class="termref">contrast ratio</a> of at least <span>4.</span>5:1, except for the following: (Level AA) </p><ul><li><p> <strong class="sc-handle">Large Text: </strong> <a title="definition: large scale (text)" href="https://www.w3.org/TR/WCAG20/#larger-scaledef" class="termref">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;</p></li><li><p> <strong class="sc-handle">Incidental: </strong> Text or images of text that are part of an inactive <a title="definition: user interface component" href="https://www.w3.org/TR/WCAG20/#user-interface-componentdef" class="termref">user interface component</a>, that are <a title="definition: pure decoration" href="https://www.w3.org/TR/WCAG20/#puredecdef" class="termref">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></li><li><p> <strong class="sc-handle">Logotypes: </strong> Text that is part of a logo or brand name has no minimum contrast requirement.</p></li></ul>',
				bodyMarkdown:
					'**1.4.3 Contrast (Minimum):** The visual presentation of [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text") and [images of text](https://www.w3.org/TR/WCAG20/#images-of-textdef "definition: image of text") has a [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef "definition: contrast ratio") of at least 4.5:1, except for the following: (Level AA)\n\n-   **Large Text:** [Large-scale](https://www.w3.org/TR/WCAG20/#larger-scaledef "definition: large scale (text)") text and images of large-scale text have a contrast ratio of at least 3:1;\n    \n-   **Incidental:** Text or images of text that are part of an inactive [user interface component](https://www.w3.org/TR/WCAG20/#user-interface-componentdef "definition: user interface component"), that are [pure decoration](https://www.w3.org/TR/WCAG20/#puredecdef "definition: pure decoration"), that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\n    \n-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.',
				bodyPlain:
					'1.4.3 Contrast (Minimum): \nThe visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:\n\n(Level AA) \n\nLarge Text: \nLarge-scale text and images of large-scale text have a contrast ratio of at least 3:1;\nIncidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\nLogotypes: \nText that is part of a logo or brand name has no minimum contrast requirement.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'Resize text',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.4 Resize text:</strong> Except for <a title="definition: captions" href="https://www.w3.org/TR/WCAG20/#captionsdef" class="termref">captions</a> and <a title="definition: image of text" href="https://www.w3.org/TR/WCAG20/#images-of-textdef" class="termref">images of text</a>, <a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a> can be resized without <a title="definition: assistive technology (as used in this document)" href="https://www.w3.org/TR/WCAG20/#atdef" class="termref">assistive technology</a> up to 200 percent without loss of content or functionality. (Level AA) </p>',
				bodyMarkdown:
					'**1.4.4 Resize text:** Except for [captions](https://www.w3.org/TR/WCAG20/#captionsdef "definition: captions") and [images of text](https://www.w3.org/TR/WCAG20/#images-of-textdef "definition: image of text"), [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text") can be resized without [assistive technology](https://www.w3.org/TR/WCAG20/#atdef "definition: assistive technology (as used in this document)") up to 200 percent without loss of content or functionality. (Level AA)',
				bodyPlain:
					'1.4.4 Resize text: \nExcept for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality. \n\n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: 'Images of Text',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.5 Images of Text:</strong> If the technologies being used can achieve the visual presentation, <a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a> is used to convey information rather than <a title="definition: image of text" href="https://www.w3.org/TR/WCAG20/#images-of-textdef" class="termref">images of text</a> except for the following: (Level AA) </p><ul><li><p> <strong>Customizable:</strong> The image of text can be <a title="definition: visually customized" href="https://www.w3.org/TR/WCAG20/#visually-customizeddef" class="termref">visually customized</a> to the user\'s requirements;</p></li><li><p> <strong>Essential:</strong> A particular presentation of text is <a title="definition: essential" href="https://www.w3.org/TR/WCAG20/#essentialdef" class="termref">essential</a> to the information being conveyed.</p></li></ul><div class="note"><p class="prefix"><em>Note: </em>Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'**1.4.5 Images of Text:** If the technologies being used can achieve the visual presentation, [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text") is used to convey information rather than [images of text](https://www.w3.org/TR/WCAG20/#images-of-textdef "definition: image of text") except for the following: (Level AA)\n\n-   **Customizable:** The image of text can be [visually customized](https://www.w3.org/TR/WCAG20/#visually-customizeddef "definition: visually customized") to the user\'s requirements;\n    \n-   **Essential:** A particular presentation of text is [essential](https://www.w3.org/TR/WCAG20/#essentialdef "definition: essential") to the information being conveyed.\n    \n\n_Note:_ Logotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					"1.4.5 Images of Text: If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:\n\n(Level AA) \n\nCustomizable: The image of text can be visually customized to the user's requirements;\nEssential: A particular presentation of text is essential to the information being conveyed.Note: Logotypes (text that is part of a logo or brand name) are considered essential.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'Contrast (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.6 Contrast (Enhanced):</strong> <span>The visual presentation of </span><a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a> and <a title="definition: image of text" href="https://www.w3.org/TR/WCAG20/#images-of-textdef" class="termref">images of text</a> has a <a title="definition: contrast ratio" href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef" class="termref">contrast ratio</a> of at least 7:1, except for the following: (Level AAA) </p><ul><li><p> <strong class="sc-handle">Large Text: </strong> <a title="definition: large scale (text)" href="https://www.w3.org/TR/WCAG20/#larger-scaledef" class="termref">Large-scale</a> text and images of large-scale text have a contrast ratio of at least <span>4.</span>5:1;</p></li><li><p> <strong class="sc-handle">Incidental: </strong> Text or images of text that are part of an inactive <a title="definition: user interface component" href="https://www.w3.org/TR/WCAG20/#user-interface-componentdef" class="termref">user interface component</a>, that are <a title="definition: pure decoration" href="https://www.w3.org/TR/WCAG20/#puredecdef" class="termref">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></li><li><p> <strong class="sc-handle">Logotypes: </strong> Text that is part of a logo or brand name has no minimum contrast requirement.</p></li></ul>',
				bodyMarkdown:
					'**1.4.6 Contrast (Enhanced):** The visual presentation of [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text") and [images of text](https://www.w3.org/TR/WCAG20/#images-of-textdef "definition: image of text") has a [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef "definition: contrast ratio") of at least 7:1, except for the following: (Level AAA)\n\n-   **Large Text:** [Large-scale](https://www.w3.org/TR/WCAG20/#larger-scaledef "definition: large scale (text)") text and images of large-scale text have a contrast ratio of at least 4.5:1;\n    \n-   **Incidental:** Text or images of text that are part of an inactive [user interface component](https://www.w3.org/TR/WCAG20/#user-interface-componentdef "definition: user interface component"), that are [pure decoration](https://www.w3.org/TR/WCAG20/#puredecdef "definition: pure decoration"), that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\n    \n-   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.',
				bodyPlain:
					'1.4.6 Contrast (Enhanced): \nThe visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:\n\n(Level AAA) \n\nLarge Text: \nLarge-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;\nIncidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\nLogotypes: \nText that is part of a logo or brand name has no minimum contrast requirement.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: 'Low or No Background Audio',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.7 Low or No Background Audio:</strong> For <a title="definition: prerecorded" href="https://www.w3.org/TR/WCAG20/#prerecordeddef" class="termref">prerecorded</a> <a title="definition: audio-only" href="https://www.w3.org/TR/WCAG20/#audio-onlydef" class="termref">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a title="definition: CAPTCHA" href="https://www.w3.org/TR/WCAG20/#CAPTCHAdef" class="termref">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: (Level AAA) </p><ul><li><p><strong class="sc-handle">No Background: </strong>The audio does not contain background sounds.</p></li><li><p><strong class="sc-handle">Turn Off: </strong>The background sounds can be turned off.</p></li><li><p><strong class="sc-handle">20 dB: </strong> The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.</p><div class="note"><p class="prefix"><em>Note: </em>Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content. </p></div></li></ul>',
				bodyMarkdown:
					'**1.4.7 Low or No Background Audio:** For [prerecorded](https://www.w3.org/TR/WCAG20/#prerecordeddef "definition: prerecorded") [audio-only](https://www.w3.org/TR/WCAG20/#audio-onlydef "definition: audio-only") content that (1) contains primarily speech in the foreground, (2) is not an audio [CAPTCHA](https://www.w3.org/TR/WCAG20/#CAPTCHAdef "definition: CAPTCHA") or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: (Level AAA)\n\n-   **No Background:** The audio does not contain background sounds.\n    \n-   **Turn Off:** The background sounds can be turned off.\n    \n-   **20 dB:** The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.\n    \n    _Note:_ Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.',
				bodyPlain:
					'1.4.7 Low or No Background Audio: For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: \n(Level AAA) \nNo Background: The audio does not contain background sounds.Turn Off: The background sounds can be turned off.20 dB: The background sounds are at least 20 decibels lower than the\nforeground speech content, with the exception of occasional sounds that last for only one or two seconds.Note: Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-noaudio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: 'Visual Presentation',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.8 Visual Presentation:</strong> For the visual presentation of <a title="definition: blocks of text" href="https://www.w3.org/TR/WCAG20/#blockstextdef" class="termref">blocks of text</a>, a <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available to achieve the following: (Level AAA) </p><ol class="enumar"><li><p>Foreground and background colors can be selected by the user.</p></li><li><p>Width is no more than 80 characters or glyphs (40 if <acronym title="Chinese, Japanese and Korean">CJK</acronym>).</p></li><li><p>Text is not justified (aligned to both the left and the right margins).</p></li><li><p>Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.</p></li><li><p>Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a title="definition: on a full-screen window" href="https://www.w3.org/TR/WCAG20/#fullscreenwindowdef" class="termref">on a full-screen window</a>.</p></li></ol>',
				bodyMarkdown:
					'**1.4.8 Visual Presentation:** For the visual presentation of [blocks of text](https://www.w3.org/TR/WCAG20/#blockstextdef "definition: blocks of text"), a [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available to achieve the following: (Level AAA)\n\n1.  Foreground and background colors can be selected by the user.\n    \n2.  Width is no more than 80 characters or glyphs (40 if CJK).\n    \n3.  Text is not justified (aligned to both the left and the right margins).\n    \n4.  Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.\n    \n5.  Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text [on a full-screen window](https://www.w3.org/TR/WCAG20/#fullscreenwindowdef "definition: on a full-screen window").',
				bodyPlain:
					'1.4.8 Visual Presentation: For the visual presentation of blocks of text, a mechanism is available to achieve the following: \n(Level AAA) \nForeground and background colors can be selected by the user.Width is no more than 80 characters or glyphs (40 if CJK).Text is not justified (aligned to both the left and the right margins).Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: 'Images of Text (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.9 Images of Text (No Exception):</strong> <a title="definition: image of text" href="https://www.w3.org/TR/WCAG20/#images-of-textdef" class="termref">Images of text</a> are only used for <a title="definition: pure decoration" href="https://www.w3.org/TR/WCAG20/#puredecdef" class="termref">pure decoration</a> or where a particular presentation of <a title="definition: text" href="https://www.w3.org/TR/WCAG20/#textdef" class="termref">text</a> is <a title="definition: essential" href="https://www.w3.org/TR/WCAG20/#essentialdef" class="termref">essential</a> to the information being conveyed. (Level AAA) </p><div class="note"><p class="prefix"><em>Note: </em>Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'**1.4.9 Images of Text (No Exception):** [Images of text](https://www.w3.org/TR/WCAG20/#images-of-textdef "definition: image of text") are only used for [pure decoration](https://www.w3.org/TR/WCAG20/#puredecdef "definition: pure decoration") or where a particular presentation of [text](https://www.w3.org/TR/WCAG20/#textdef "definition: text") is [essential](https://www.w3.org/TR/WCAG20/#essentialdef "definition: essential") to the information being conveyed. (Level AAA)\n\n_Note:_ Logotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					'1.4.9 Images of Text (No Exception): Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed. \n(Level AAA) \nNote: Logotypes (text that is part of a logo or brand name) are considered essential.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'Keyboard',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.1 Keyboard:</strong> All <a title="definition: functionality" href="https://www.w3.org/TR/WCAG20/#functiondef" class="termref">functionality</a> of the content is operable through a <a title="definition: keyboard interface" href="https://www.w3.org/TR/WCAG20/#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. (Level A) </p><div class="note"><p class="prefix"><em>Note 1: </em>This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.</p><p class="prefix"><em>Note 2: </em>This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.</p></div>',
				bodyMarkdown:
					'**2.1.1 Keyboard:** All [functionality](https://www.w3.org/TR/WCAG20/#functiondef "definition: functionality") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG20/#keybrd-interfacedef "definition: keyboard interface") without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. (Level A)\n\n_Note 1:_ This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.\n\n_Note 2:_ This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
				bodyPlain:
					"2.1.1 Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. \n(Level A) \nNote 1:\nThis exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.Note 2:\nThis does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'No Keyboard Trap',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.2 No Keyboard Trap:</strong> If keyboard focus can be moved to a component of the page using a <a title="definition: keyboard interface" href="https://www.w3.org/TR/WCAG20/#keybrd-interfacedef" class="termref">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG20/#cc5">Conformance Requirement 5: Non-Interference</a>.</p></div>',
				bodyMarkdown:
					'**2.1.2 No Keyboard Trap:** If keyboard focus can be moved to a component of the page using a [keyboard interface](https://www.w3.org/TR/WCAG20/#keybrd-interfacedef "definition: keyboard interface"), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A)\n\n_Note:_ Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5).',
				bodyPlain:
					"2.1.2 No Keyboard Trap: If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. \n(Level A) \nNote: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'Keyboard (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.3 Keyboard (No Exception):</strong> All <a title="definition: functionality" href="https://www.w3.org/TR/WCAG20/#functiondef" class="termref">functionality</a> of the content is operable through a <a title="definition: keyboard interface" href="https://www.w3.org/TR/WCAG20/#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes. (Level AAA) </p>',
				bodyMarkdown:
					'**2.1.3 Keyboard (No Exception):** All [functionality](https://www.w3.org/TR/WCAG20/#functiondef "definition: functionality") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG20/#keybrd-interfacedef "definition: keyboard interface") without requiring specific timings for individual keystrokes. (Level AAA)',
				bodyPlain:
					'2.1.3 Keyboard (No Exception): All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'Timing Adjustable',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.1 Timing Adjustable:</strong> For each time limit that is set by the content, at least one of the following is true: (Level A) </p><ul><li><p> <strong class="sc-handle">Turn off: </strong>The user is allowed to turn off the time limit before encountering it; or </p></li><li><p> <strong class="sc-handle">Adjust: </strong>The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</p></li><li><p> <strong class="sc-handle">Extend: </strong>The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or</p></li><li><p> <strong class="sc-handle">Real-time Exception: </strong>The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</p></li><li><p> <strong class="sc-handle">Essential Exception: </strong>The time limit is <a title="definition: essential" href="https://www.w3.org/TR/WCAG20/#essentialdef" class="termref">essential</a> and extending it would invalidate the activity; or </p></li><li><p> <strong class="sc-handle">20 Hour Exception: </strong>The time limit is longer than 20 hours. </p></li></ul><div class="note"><p class="prefix"><em>Note: </em>This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus"> Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action.</p></div>',
				bodyMarkdown:
					'**2.2.1 Timing Adjustable:** For each time limit that is set by the content, at least one of the following is true: (Level A)\n\n-   **Turn off:** The user is allowed to turn off the time limit before encountering it; or\n    \n-   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or\n    \n-   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or\n    \n-   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or\n    \n-   **Essential Exception:** The time limit is [essential](https://www.w3.org/TR/WCAG20/#essentialdef "definition: essential") and extending it would invalidate the activity; or\n    \n-   **20 Hour Exception:** The time limit is longer than 20 hours.\n    \n\n_Note:_ This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus), which puts limits on changes of content or context as a result of user action.',
				bodyPlain:
					'2.2.1 Timing Adjustable: For each time limit that is \nset by the content, at least one of the following is true:\n\n(Level A) \n\nTurn off: The user is allowed to turn off the time limit\nbefore encountering it; or\n\n\nAdjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or\nExtend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or\nReal-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or\nEssential Exception: The time limit is essential and extending it would invalidate the activity; or\n\n20 Hour Exception: The time limit is longer than 20 hours.\nNote: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with \nSuccess Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: 'Pause, Stop, Hide',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.2 Pause, Stop, Hide:</strong> For moving, <a title="definition: blinking" href="https://www.w3.org/TR/WCAG20/#blinksdef" class="termref">blinking</a>, scrolling, or auto-updating information, all of the following are true: (Level A) </p><ul><li><p><strong class="sc-handle">Moving, blinking, scrolling: </strong>For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a title="definition: paused" href="https://www.w3.org/TR/WCAG20/#pauseddef" class="termref">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a title="definition: essential" href="https://www.w3.org/TR/WCAG20/#essentialdef" class="termref">essential</a>; and</p></li><li><p><strong class="sc-handle">Auto-updating: </strong>For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</p></li></ul><div class="note"><p class="prefix"><em>Note 1: </em>For requirements related to flickering or flashing content, refer to <a href="https://www.w3.org/TR/WCAG20/#seizure">Guideline 2.3</a>.</p><p class="prefix"><em>Note 2: </em>Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG20/#cc5">Conformance Requirement 5: Non-Interference</a>.</p><p class="prefix"><em>Note 3: </em>Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. </p><p class="prefix"><em>Note 4: </em>An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.</p></div>',
				bodyMarkdown:
					'**2.2.2 Pause, Stop, Hide:** For moving, [blinking](https://www.w3.org/TR/WCAG20/#blinksdef "definition: blinking"), scrolling, or auto-updating information, all of the following are true: (Level A)\n\n-   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to [pause](https://www.w3.org/TR/WCAG20/#pauseddef "definition: paused"), stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is [essential](https://www.w3.org/TR/WCAG20/#essentialdef "definition: essential"); and\n    \n-   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.\n    \n\n_Note 1:_ For requirements related to flickering or flashing content, refer to [Guideline 2.3](https://www.w3.org/TR/WCAG20/#seizure).\n\n_Note 2:_ Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5).\n\n_Note 3:_ Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.\n\n_Note 4:_ An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
				bodyPlain:
					"2.2.2 Pause, Stop, Hide: \nFor moving, blinking, scrolling, or auto-updating information, all of the following are true: \n(Level A) \nMoving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; andAuto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.Note 1:\nFor requirements related to flickering or flashing content, refer to Guideline 2.3.Note 2:\nSince any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.Note 3:\nContent that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.\nNote 4:\nAn animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'No Timing',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.3 No Timing:</strong> Timing is not an <a title="definition: essential" href="https://www.w3.org/TR/WCAG20/#essentialdef" class="termref">essential</a> part of the event or activity presented by the content, except for non-interactive <a title="definition: synchronized media" href="https://www.w3.org/TR/WCAG20/#synchronizedmediadef" class="termref">synchronized media</a> and <a title="definition: real-time event" href="https://www.w3.org/TR/WCAG20/#real-time-eventsdef" class="termref">real-time events</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**2.2.3 No Timing:** Timing is not an [essential](https://www.w3.org/TR/WCAG20/#essentialdef "definition: essential") part of the event or activity presented by the content, except for non-interactive [synchronized media](https://www.w3.org/TR/WCAG20/#synchronizedmediadef "definition: synchronized media") and [real-time events](https://www.w3.org/TR/WCAG20/#real-time-eventsdef "definition: real-time event"). (Level AAA)',
				bodyPlain:
					'2.2.3 No Timing: Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and\nreal-time events.\n\n\n\n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: 'Interruptions',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.4 Interruptions:</strong> Interruptions can be postponed or suppressed by the user, except interruptions involving an <a title="definition: emergency" href="https://www.w3.org/TR/WCAG20/#emergencydef" class="termref">emergency</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**2.2.4 Interruptions:** Interruptions can be postponed or suppressed by the user, except interruptions involving an [emergency](https://www.w3.org/TR/WCAG20/#emergencydef "definition: emergency"). (Level AAA)',
				bodyPlain:
					'2.2.4 Interruptions: Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: 'Re-authenticating',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.5 Re-authenticating:</strong> When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. (Level AAA) </p>',
				bodyMarkdown:
					'**2.2.5 Re-authenticating:** When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. (Level AAA)',
				bodyPlain:
					'2.2.5 Re-authenticating: When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: 'Three Flashes or Below Threshold',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.3.1 Three Flashes or Below Threshold:</strong> <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a title="definition: flash" href="https://www.w3.org/TR/WCAG20/#flash-def" class="termref">flash</a> is below the <a title="definition: general flash and red flash thresholds" href="https://www.w3.org/TR/WCAG20/#general-thresholddef" class="termref">general flash and red flash thresholds</a>. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG20/#cc5">Conformance Requirement 5: Non-Interference</a>.</p></div>',
				bodyMarkdown:
					'**2.3.1 Three Flashes or Below Threshold:** [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") do not contain anything that flashes more than three times in any one second period, or the [flash](https://www.w3.org/TR/WCAG20/#flash-def "definition: flash") is below the [general flash and red flash thresholds](https://www.w3.org/TR/WCAG20/#general-thresholddef "definition: general flash and red flash thresholds"). (Level A)\n\n_Note:_ Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5).',
				bodyPlain:
					"2.3.1 Three Flashes or Below Threshold: \nWeb pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.\n\n(Level A) \nNote: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: 'Three Flashes',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.3.2 Three Flashes:</strong> <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> do not contain anything that <a title="definition: flash" href="https://www.w3.org/TR/WCAG20/#flash-def" class="termref">flashes</a> more than three times in any one second period. (Level AAA) </p>',
				bodyMarkdown:
					'**2.3.2 Three Flashes:** [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") do not contain anything that [flashes](https://www.w3.org/TR/WCAG20/#flash-def "definition: flash") more than three times in any one second period. (Level AAA)',
				bodyPlain:
					'2.3.2 Three Flashes: \nWeb pages do not contain anything that flashes more than three times in any one second period. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'Bypass Blocks',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.1 Bypass Blocks:</strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a>. (Level A) </p>',
				bodyMarkdown:
					'**2.4.1 Bypass Blocks:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available to bypass blocks of content that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page"). (Level A)',
				bodyPlain:
					'2.4.1 Bypass Blocks: A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'Page Titled',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.2 Page Titled:</strong> <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> have titles that describe topic or purpose. (Level A) </p>',
				bodyMarkdown:
					'**2.4.2 Page Titled:** [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") have titles that describe topic or purpose. (Level A)',
				bodyPlain:
					'2.4.2 Page Titled: \nWeb pages have titles that describe topic or purpose. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'Focus Order',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.3 Focus Order:</strong> If a <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web page</a> can be <a title="definition: navigated sequentially" href="https://www.w3.org/TR/WCAG20/#nav-seqdef" class="termref">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A) </p>',
				bodyMarkdown:
					'**2.4.3 Focus Order:** If a [Web page](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") can be [navigated sequentially](https://www.w3.org/TR/WCAG20/#nav-seqdef "definition: navigated sequentially") and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)',
				bodyPlain:
					'2.4.3 Focus Order: If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'Link Purpose (In Context)',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.4 Link Purpose (In Context):</strong> The <a title="definition: link purpose" href="https://www.w3.org/TR/WCAG20/#linkpurposedef" class="termref">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a title="definition: programmatically determined link context" href="https://www.w3.org/TR/WCAG20/#pdlinkcontextdef" class="termref">programmatically determined link context</a>, except where the purpose of the link would be <a title="definition: ambiguous to users in general" href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. (Level A) </p>',
				bodyMarkdown:
					'**2.4.4 Link Purpose (In Context):** The [purpose of each link](https://www.w3.org/TR/WCAG20/#linkpurposedef "definition: link purpose") can be determined from the link text alone or from the link text together with its [programmatically determined link context](https://www.w3.org/TR/WCAG20/#pdlinkcontextdef "definition: programmatically determined link context"), except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG20/#ambiguouslinkdef "definition: ambiguous to users in general"). (Level A)',
				bodyPlain:
					'2.4.4 Link Purpose (In Context): \nThe purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: 'Multiple Ways',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.5 Multiple Ways:</strong> More than one way is available to locate a <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web page</a> within a <a title="definition: set of Web pages" href="https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef" class="termref">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a title="definition: process" href="https://www.w3.org/TR/WCAG20/#processdef" class="termref">process</a>. (Level AA) </p>',
				bodyMarkdown:
					'**2.4.5 Multiple Ways:** More than one way is available to locate a [Web page](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") within a [set of Web pages](https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef "definition: set of Web pages") except where the Web Page is the result of, or a step in, a [process](https://www.w3.org/TR/WCAG20/#processdef "definition: process"). (Level AA)',
				bodyPlain:
					'2.4.5 Multiple Ways: More than one way is available to locate a Web page\n\nwithin a set of Web pages\nexcept where the Web Page is the result of, or a step in, a process.\n\n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: 'Headings and Labels',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.6 Headings and Labels:</strong> Headings and <a title="definition: label" href="https://www.w3.org/TR/WCAG20/#labeldef" class="termref">labels</a> describe topic or purpose. (Level AA) </p>',
				bodyMarkdown:
					'**2.4.6 Headings and Labels:** Headings and [labels](https://www.w3.org/TR/WCAG20/#labeldef "definition: label") describe topic or purpose. (Level AA)',
				bodyPlain:
					'2.4.6 Headings and Labels: \nHeadings and labels describe topic or purpose. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'Focus Visible',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.7 Focus Visible:</strong> Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA) </p>',
				bodyMarkdown:
					'**2.4.7 Focus Visible:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)',
				bodyPlain:
					'2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: 'Location',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.8 Location:</strong> Information about the user\'s location within a <a title="definition: set of Web pages" href="https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef" class="termref">set of Web pages</a> is available. (Level AAA) </p>',
				bodyMarkdown:
					'**2.4.8 Location:** Information about the user\'s location within a [set of Web pages](https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef "definition: set of Web pages") is available. (Level AAA)',
				bodyPlain:
					"2.4.8 Location: Information about the user's location within a set of Web pages is available. \n(Level AAA)",
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'Link Purpose (Link Only)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.9 Link Purpose (Link Only):</strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a title="definition: ambiguous to users in general" href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**2.4.9 Link Purpose (Link Only):** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG20/#ambiguouslinkdef "definition: ambiguous to users in general"). (Level AAA)',
				bodyPlain:
					'2.4.9 Link Purpose (Link Only): \nA mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'Section Headings',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.10 Section Headings:</strong> <a title="definition: section" href="https://www.w3.org/TR/WCAG20/#sectiondef" class="termref">Section</a> headings are used to organize the content. (Level AAA) </p><div class="note"><p class="prefix"><em>Note 1: </em>"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content. </p><p class="prefix"><em>Note 2: </em>This success criterion covers sections within writing, not <a title="definition: user interface component" href="https://www.w3.org/TR/WCAG20/#user-interface-componentdef" class="termref">user interface components</a>. User Interface components are covered under <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv">Success Criterion 4.1.2</a>.</p></div>',
				bodyMarkdown:
					'**2.4.10 Section Headings:** [Section](https://www.w3.org/TR/WCAG20/#sectiondef "definition: section") headings are used to organize the content. (Level AAA)\n\n_Note 1:_ "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.\n\n_Note 2:_ This success criterion covers sections within writing, not [user interface components](https://www.w3.org/TR/WCAG20/#user-interface-componentdef "definition: user interface component"). User Interface components are covered under [Success Criterion 4.1.2](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv).',
				bodyPlain:
					'2.4.10 Section Headings: \nSection headings are used to organize the content.\n\n\n(Level AAA) \nNote 1:\n"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.\nNote 2:\nThis success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'Language of Page',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.1 Language of Page:</strong> The default <a title="definition: human language" href="https://www.w3.org/TR/WCAG20/#human-langdef" class="termref">human language</a> of each <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web page</a> can be <a title="definition: programmatically determined (programmatically determinable)" href="https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef" class="termref">programmatically determined</a>. (Level A) </p>',
				bodyMarkdown:
					'**3.1.1 Language of Page:** The default [human language](https://www.w3.org/TR/WCAG20/#human-langdef "definition: human language") of each [Web page](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") can be [programmatically determined](https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef "definition: programmatically determined (programmatically determinable)"). (Level A)',
				bodyPlain:
					'3.1.1 Language of Page: The default\nhuman language\nof each\nWeb page\ncan be programmatically determined. \n\n\n\n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: 'Language of Parts',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.2 Language of Parts:</strong> The <a title="definition: human language" href="https://www.w3.org/TR/WCAG20/#human-langdef" class="termref">human language</a> of each passage or phrase in the content can be <a title="definition: programmatically determined (programmatically determinable)" href="https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef" class="termref">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA) </p>',
				bodyMarkdown:
					'**3.1.2 Language of Parts:** The [human language](https://www.w3.org/TR/WCAG20/#human-langdef "definition: human language") of each passage or phrase in the content can be [programmatically determined](https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef "definition: programmatically determined (programmatically determinable)") except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA)',
				bodyPlain:
					'3.1.2 Language of Parts: The human language of each passage or phrase in the \ncontent can be programmatically determined\nexcept for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.\n\n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: 'Unusual Words',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.3 Unusual Words:</strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available for identifying specific definitions of words or phrases <a title="definition: used in an unusual or restricted way" href="https://www.w3.org/TR/WCAG20/#unusual-restricteddef" class="termref">used in an unusual or restricted way</a>, including <a title="definition: idiom" href="https://www.w3.org/TR/WCAG20/#idiomsdef" class="termref">idioms</a> and <a title="definition: jargon" href="https://www.w3.org/TR/WCAG20/#jargondef" class="termref">jargon</a>. (Level AAA) </p>',
				bodyMarkdown:
					'**3.1.3 Unusual Words:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available for identifying specific definitions of words or phrases [used in an unusual or restricted way](https://www.w3.org/TR/WCAG20/#unusual-restricteddef "definition: used in an unusual or restricted way"), including [idioms](https://www.w3.org/TR/WCAG20/#idiomsdef "definition: idiom") and [jargon](https://www.w3.org/TR/WCAG20/#jargondef "definition: jargon"). (Level AAA)',
				bodyPlain:
					'3.1.3 Unusual Words: A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon. \n(Level AAA)',
				understanding: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-idioms.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: 'Abbreviations',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.4 Abbreviations:</strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> for identifying the expanded form or meaning of <a title="definition: abbreviation" href="https://www.w3.org/TR/WCAG20/#abbreviationsdef" class="termref">abbreviations</a> is available. (Level AAA) </p>',
				bodyMarkdown:
					'**3.1.4 Abbreviations:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") for identifying the expanded form or meaning of [abbreviations](https://www.w3.org/TR/WCAG20/#abbreviationsdef "definition: abbreviation") is available. (Level AAA)',
				bodyPlain:
					'3.1.4 Abbreviations: A mechanism for identifying the expanded form or meaning of abbreviations is available. \n\n(Level AAA)',
				understanding: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: 'Reading Level',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.5 Reading Level:</strong> When text requires reading ability more advanced than the <a title="definition: lower secondary education level" href="https://www.w3.org/TR/WCAG20/#lowseceddef" class="termref">lower secondary education level</a> after removal of proper names and titles, <a title="definition: supplemental content" href="https://www.w3.org/TR/WCAG20/#suppcontentdef" class="termref">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. (Level AAA) </p>',
				bodyMarkdown:
					'**3.1.5 Reading Level:** When text requires reading ability more advanced than the [lower secondary education level](https://www.w3.org/TR/WCAG20/#lowseceddef "definition: lower secondary education level") after removal of proper names and titles, [supplemental content](https://www.w3.org/TR/WCAG20/#suppcontentdef "definition: supplemental content"), or a version that does not require reading ability more advanced than the lower secondary education level, is available. (Level AAA)',
				bodyPlain:
					'3.1.5 Reading Level: When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content,\nor a version\nthat does not require reading ability more advanced than the lower secondary education level, is available. \n\n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: 'Pronunciation',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.6 Pronunciation:</strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. (Level AAA) </p>',
				bodyMarkdown:
					'**3.1.6 Pronunciation:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. (Level AAA)',
				bodyPlain:
					'3.1.6 Pronunciation: A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.\n\n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'On Focus',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.1 On Focus:</strong> When any component receives focus, it does not initiate a <a title="definition: changes of context" href="https://www.w3.org/TR/WCAG20/#context-changedef" class="termref">change of context</a>. (Level A) </p>',
				bodyMarkdown:
					'**3.2.1 On Focus:** When any component receives focus, it does not initiate a [change of context](https://www.w3.org/TR/WCAG20/#context-changedef "definition: changes of context"). (Level A)',
				bodyPlain:
					'3.2.1 On Focus: When any component receives focus, it does not \ninitiate a change of context. \n\n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: 'On Input',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.2 On Input:</strong> Changing the setting of any <a title="definition: user interface component" href="https://www.w3.org/TR/WCAG20/#user-interface-componentdef" class="termref">user interface component</a> does not automatically cause a <a title="definition: changes of context" href="https://www.w3.org/TR/WCAG20/#context-changedef" class="termref">change of context</a> unless the user has been advised of the behavior before using the component. (Level A) </p>',
				bodyMarkdown:
					'**3.2.2 On Input:** Changing the setting of any [user interface component](https://www.w3.org/TR/WCAG20/#user-interface-componentdef "definition: user interface component") does not automatically cause a [change of context](https://www.w3.org/TR/WCAG20/#context-changedef "definition: changes of context") unless the user has been advised of the behavior before using the component. (Level A)',
				bodyPlain:
					'3.2.2 On Input: Changing the setting of any \nuser interface component\ndoes not automatically cause a change of context\nunless the user has been advised of the behavior before using the component.\n\n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: 'Consistent Navigation',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.3 Consistent Navigation:</strong> Navigational mechanisms that are repeated on multiple <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> within a <a title="definition: set of Web pages" href="https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef" class="termref">set of Web pages</a> occur in the <a title="definition: same relative order" href="https://www.w3.org/TR/WCAG20/#samerelorderdef" class="termref">same relative order</a> each time they are repeated, unless a change is initiated by the user. (Level AA) </p>',
				bodyMarkdown:
					'**3.2.3 Consistent Navigation:** Navigational mechanisms that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") within a [set of Web pages](https://www.w3.org/TR/WCAG20/#set-of-web-pagesdef "definition: set of Web pages") occur in the [same relative order](https://www.w3.org/TR/WCAG20/#samerelorderdef "definition: same relative order") each time they are repeated, unless a change is initiated by the user. (Level AA)',
				bodyPlain:
					'3.2.3 Consistent Navigation: Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages\noccur in the same relative order each time they are repeated, unless a change is initiated by the user. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: 'Consistent Identification',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.4 Consistent Identification:</strong> Components that have the <a title="definition: same functionality " href="https://www.w3.org/TR/WCAG20/#samefunctionalitydef" class="termref">same functionality</a> within a set of <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> are identified consistently. (Level AA) </p>',
				bodyMarkdown:
					'**3.2.4 Consistent Identification:** Components that have the [same functionality](https://www.w3.org/TR/WCAG20/#samefunctionalitydef "definition: same functionality ") within a set of [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") are identified consistently. (Level AA)',
				bodyPlain:
					'3.2.4 Consistent Identification: Components that have the same functionality within a set of Web pages are identified consistently. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: 'Change on Request',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.5 Change on Request:</strong> <a title="definition: changes of context" href="https://www.w3.org/TR/WCAG20/#context-changedef" class="termref">Changes of context</a> are initiated only by user request or a <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available to turn off such changes. (Level AAA) </p>',
				bodyMarkdown:
					'**3.2.5 Change on Request:** [Changes of context](https://www.w3.org/TR/WCAG20/#context-changedef "definition: changes of context") are initiated only by user request or a [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available to turn off such changes. (Level AAA)',
				bodyPlain:
					'3.2.5 Change on Request: \nChanges of context are initiated only by user request or a mechanism is available to turn off such changes. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'Error Identification',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.1 Error Identification:</strong> If an <a title="definition: input error" href="https://www.w3.org/TR/WCAG20/#input-errordef" class="termref">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A) </p>',
				bodyMarkdown:
					'**3.3.1 Error Identification:** If an [input error](https://www.w3.org/TR/WCAG20/#input-errordef "definition: input error") is automatically detected, the item that is in error is identified and the error is described to the user in text. (Level A)',
				bodyPlain:
					'3.3.1 Error Identification: If an input error is automatically detected, the item that is in error is identified and the error is\ndescribed to the user in text. \n\n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'Labels or Instructions',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.2 Labels or Instructions:</strong> <a title="definition: label" href="https://www.w3.org/TR/WCAG20/#labeldef" class="termref">Labels</a> or instructions are provided when content requires user input. (Level A) </p>',
				bodyMarkdown:
					'**3.3.2 Labels or Instructions:** [Labels](https://www.w3.org/TR/WCAG20/#labeldef "definition: label") or instructions are provided when content requires user input. (Level A)',
				bodyPlain:
					'3.3.2 Labels or Instructions: \nLabels or instructions are provided when content requires user input. \n(Level A)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'Error Suggestion',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.3 Error Suggestion:</strong> If an <a title="definition: input error" href="https://www.w3.org/TR/WCAG20/#input-errordef" class="termref">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. (Level AA) </p>',
				bodyMarkdown:
					'**3.3.3 Error Suggestion:** If an [input error](https://www.w3.org/TR/WCAG20/#input-errordef "definition: input error") is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. (Level AA)',
				bodyPlain:
					'3.3.3 Error Suggestion: If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. \n(Level AA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: 'Error Prevention (Legal, Financial, Data)',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.4 Error Prevention (Legal, Financial, Data):</strong> For <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> that cause <a title="definition: legal commitments" href="https://www.w3.org/TR/WCAG20/#legalcommitmentsdef" class="termref">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a title="definition: user-controllable" href="https://www.w3.org/TR/WCAG20/#user-controllabledef" class="termref">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: (Level AA) </p><ol class="enumar"><li><p> <strong class="sc-handle">Reversible: </strong> Submissions are reversible.</p></li><li><p> <strong class="sc-handle">Checked: </strong> Data entered by the user is checked for <a title="definition: input error" href="https://www.w3.org/TR/WCAG20/#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.</p></li><li><p> <strong class="sc-handle">Confirmed: </strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.</p></li></ol>',
				bodyMarkdown:
					'**3.3.4 Error Prevention (Legal, Financial, Data):** For [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") that cause [legal commitments](https://www.w3.org/TR/WCAG20/#legalcommitmentsdef "definition: legal commitments") or financial transactions for the user to occur, that modify or delete [user-controllable](https://www.w3.org/TR/WCAG20/#user-controllabledef "definition: user-controllable") data in data storage systems, or that submit user test responses, at least one of the following is true: (Level AA)\n\n1.  **Reversible:** Submissions are reversible.\n    \n2.  **Checked:** Data entered by the user is checked for [input errors](https://www.w3.org/TR/WCAG20/#input-errordef "definition: input error") and the user is provided an opportunity to correct them.\n    \n3.  **Confirmed:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available for reviewing, confirming, and correcting information before finalizing the submission.',
				bodyPlain:
					'3.3.4 Error Prevention (Legal, Financial, Data): For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: \n(Level AA) \n\nReversible: Submissions are reversible.\nChecked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'Help',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.5 Help:</strong> <a title="definition: context-sensitive help" href="https://www.w3.org/TR/WCAG20/#context-sensitivehelpdef" class="termref">Context-sensitive help</a> is available. (Level AAA) </p>',
				bodyMarkdown:
					'**3.3.5 Help:** [Context-sensitive help](https://www.w3.org/TR/WCAG20/#context-sensitivehelpdef "definition: context-sensitive help") is available. (Level AAA)',
				bodyPlain: '3.3.5 Help: \nContext-sensitive help is available. \n(Level AAA)',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: 'Error Prevention (All)',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.6 Error Prevention (All):</strong> For <a title="definition: Web page" href="https://www.w3.org/TR/WCAG20/#webpagedef" class="termref">Web pages</a> that require the user to submit information, at least one of the following is true: (Level AAA) </p><ol class="enumar"><li><p> <strong class="sc-handle">Reversible: </strong> Submissions are reversible.</p></li><li><p> <strong class="sc-handle">Checked: </strong> Data entered by the user is checked for <a title="definition: input error" href="https://www.w3.org/TR/WCAG20/#input-errordef" class="termref">input errors</a> and the user is provided an opportunity to correct them.</p></li><li><p> <strong class="sc-handle">Confirmed: </strong> A <a title="definition: mechanism" href="https://www.w3.org/TR/WCAG20/#mechanismdef" class="termref">mechanism</a> is available for reviewing, confirming, and correcting information before finalizing the submission.</p></li></ol>',
				bodyMarkdown:
					'**3.3.6 Error Prevention (All):** For [Web pages](https://www.w3.org/TR/WCAG20/#webpagedef "definition: Web page") that require the user to submit information, at least one of the following is true: (Level AAA)\n\n1.  **Reversible:** Submissions are reversible.\n    \n2.  **Checked:** Data entered by the user is checked for [input errors](https://www.w3.org/TR/WCAG20/#input-errordef "definition: input error") and the user is provided an opportunity to correct them.\n    \n3.  **Confirmed:** A [mechanism](https://www.w3.org/TR/WCAG20/#mechanismdef "definition: mechanism") is available for reviewing, confirming, and correcting information before finalizing the submission.',
				bodyPlain:
					'3.3.6 Error Prevention (All): For Web pages that require the user to submit information, at least one of the following is true:\n\n(Level AAA) \n\nReversible: Submissions are reversible.\nChecked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html',
			},
			'4.1.1': {
				id: '4.1.1',
				title: 'Parsing',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">4.1.1 Parsing:</strong> In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.</p></div>',
				bodyMarkdown:
					'**4.1.1 Parsing:** In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A)\n\n_Note:_ Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
				bodyPlain:
					'4.1.1 Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. \n(Level A) \nNote: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: 'Name, Role, Value',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">4.1.2 Name, Role, Value:</strong> For all <a title="definition: user interface component" href="https://www.w3.org/TR/WCAG20/#user-interface-componentdef" class="termref">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a title="definition: name" href="https://www.w3.org/TR/WCAG20/#namedef" class="termref">name</a> and <a title="definition: role" href="https://www.w3.org/TR/WCAG20/#roledef" class="termref">role</a> can be <a title="definition: programmatically determined (programmatically determinable)" href="https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef" class="termref">programmatically determined</a>; states, properties, and values that can be set by the user can be <a title="definition: programmatically set" href="https://www.w3.org/TR/WCAG20/#programmaticallysetdef" class="termref">programmatically set</a>; and notification of changes to these items is available to <a title="definition: user agent" href="https://www.w3.org/TR/WCAG20/#useragentdef" class="termref">user agents</a>, including <a title="definition: assistive technology (as used in this document)" href="https://www.w3.org/TR/WCAG20/#atdef" class="termref">assistive technologies</a>. (Level A) </p><div class="note"><p class="prefix"><em>Note: </em>This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.</p></div>',
				bodyMarkdown:
					'**4.1.2 Name, Role, Value:** For all [user interface components](https://www.w3.org/TR/WCAG20/#user-interface-componentdef "definition: user interface component") (including but not limited to: form elements, links and components generated by scripts), the [name](https://www.w3.org/TR/WCAG20/#namedef "definition: name") and [role](https://www.w3.org/TR/WCAG20/#roledef "definition: role") can be [programmatically determined](https://www.w3.org/TR/WCAG20/#programmaticallydetermineddef "definition: programmatically determined (programmatically determinable)"); states, properties, and values that can be set by the user can be [programmatically set](https://www.w3.org/TR/WCAG20/#programmaticallysetdef "definition: programmatically set"); and notification of changes to these items is available to [user agents](https://www.w3.org/TR/WCAG20/#useragentdef "definition: user agent"), including [assistive technologies](https://www.w3.org/TR/WCAG20/#atdef "definition: assistive technology (as used in this document)"). (Level A)\n\n_Note:_ This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
				bodyPlain:
					'4.1.2 Name, Role, Value: For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.\n\n\n(Level A) \nNote: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
				understanding:
					'https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html',
			},
		},
		ja: {
			'1.1.1': {
				id: '1.1.1',
				title: '非テキストコンテンツ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.1.1 非テキストコンテンツ:</strong> 利用者に提示されるすべての<a title="definition: 非テキストコンテンツ (non-text content)" href="https://waic.jp/translations/WCAG20/#non-text-contentdef" class="termref">非テキストコンテンツ</a>には、同等の目的を果たす<a title="definition: テキストによる代替 (text alternative)" href="https://waic.jp/translations/WCAG20/#text-altdef" class="termref">テキストによる代替</a>が提供されている。ただし、次の場合は除く: (レベル A) </p><ul><li><p> <strong class="sc-handle">コントロール、入力:</strong> 非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する<a title="definition: 名前 (name) " href="https://waic.jp/translations/WCAG20/#namedef" class="termref">名前 (name) </a>を提供している。 (コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、<a href="https://waic.jp/translations/WCAG20/#ensure-compat">ガイドライン 4.1</a>を参照。) </p></li><li><p> <strong class="sc-handle">時間依存メディア:</strong> 非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。 (メディアに関するその他の要件は、<a href="https://waic.jp/translations/WCAG20/#media-equiv">ガイドライン 1.2</a>を参照。) </p></li><li><p> <strong class="sc-handle">テスト:</strong> 非テキストコンテンツが、<a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。 </p></li><li><p> <strong class="sc-handle">感覚的:</strong> 非テキストコンテンツが、<a title="definition: 特定の感覚的な体験 (specific sensory experience)" href="https://waic.jp/translations/WCAG20/#sensoryexpdef" class="termref">特定の感覚的体験</a>を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。 </p></li><li><p> <strong class="sc-handle"> <a title="definition: CAPTCHA" href="https://waic.jp/translations/WCAG20/#CAPTCHAdef" class="termref">CAPTCHA</a>:</strong> 非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。 </p></li><li><p> <strong class="sc-handle">装飾、整形、非表示:</strong> 非テキストコンテンツが、<a title="definition: 純粋な装飾 (pure decoration)" href="https://waic.jp/translations/WCAG20/#puredecdef" class="termref">純粋な装飾</a>である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、<a title="definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))" href="https://waic.jp/translations/WCAG20/#atdef" class="termref">支援技術</a>が無視できるように実装されている。</p></li></ul>',
				bodyMarkdown:
					'**1.1.1 非テキストコンテンツ:** 利用者に提示されるすべての[非テキストコンテンツ](https://waic.jp/translations/WCAG20/#non-text-contentdef "definition: 非テキストコンテンツ (non-text content)")には、同等の目的を果たす[テキストによる代替](https://waic.jp/translations/WCAG20/#text-altdef "definition: テキストによる代替 (text alternative)")が提供されている。ただし、次の場合は除く: (レベル A)\n\n-   **コントロール、入力:** 非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する[名前 (name)](https://waic.jp/translations/WCAG20/#namedef "definition: 名前 (name) ") を提供している。 (コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、[ガイドライン 4.1](https://waic.jp/translations/WCAG20/#ensure-compat)を参照。)\n    \n-   **時間依存メディア:** 非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。 (メディアに関するその他の要件は、[ガイドライン 1.2](https://waic.jp/translations/WCAG20/#media-equiv)を参照。)\n    \n-   **テスト:** 非テキストコンテンツが、[テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n    \n-   **感覚的:** 非テキストコンテンツが、[特定の感覚的体験](https://waic.jp/translations/WCAG20/#sensoryexpdef "definition: 特定の感覚的な体験 (specific sensory experience)")を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n    \n-   **[CAPTCHA](https://waic.jp/translations/WCAG20/#CAPTCHAdef "definition: CAPTCHA"):** 非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。\n    \n-   **装飾、整形、非表示:** 非テキストコンテンツが、[純粋な装飾](https://waic.jp/translations/WCAG20/#puredecdef "definition: 純粋な装飾 (pure decoration)")である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、[支援技術](https://waic.jp/translations/WCAG20/#atdef "definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))")が無視できるように実装されている。',
				bodyPlain:
					'1.1.1 非テキストコンテンツ: 利用者に提示されるすべての非テキストコンテンツには、同等の目的を果たすテキストによる代替が提供されている。ただし、次の場合は除く:\n\n(レベル A) \n\nコントロール、入力: 非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する名前 (name) を提供している。 (コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、ガイドライン 4.1を参照。) \n\n時間依存メディア: 非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。 (メディアに関するその他の要件は、ガイドライン 1.2を参照。) \n\nテスト: 非テキストコンテンツが、テキストで提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\n感覚的: 非テキストコンテンツが、特定の感覚的体験を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\n\nCAPTCHA: 非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。\n\n装飾、整形、非表示: 非テキストコンテンツが、純粋な装飾である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、支援技術が無視できるように実装されている。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/text-equiv-all.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: '音声のみ及び映像のみ (収録済) ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.1 音声のみ及び映像のみ (収録済) :</strong> <a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 音声しか含まない (audio-only)" href="https://waic.jp/translations/WCAG20/#audio-onlydef" class="termref">音声しか含まない</a>メディア及び収録済の<a title="definition: 映像しか含まない (video-only)" href="https://waic.jp/translations/WCAG20/#video-onlydef" class="termref">映像しか含まない</a>メディアは、次の事項を満たしている。ただし、その音声又は映像が<a title="definition: メディアによるテキストの代替 (media alternative for text)" href="https://waic.jp/translations/WCAG20/#multimedia-alt-textdef" class="termref">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く: (レベル A) </p><ul><li><p><strong class="sc-handle">収録済の音声しか含まない場合:</strong><a title="definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)" href="https://waic.jp/translations/WCAG20/#alt-time-based-mediadef" class="termref">時間依存メディアに対する代替コンテンツ</a>によって、収録済の音声しか含まないコンテンツと同等の情報を提供している。</p></li><li><p><strong class="sc-handle">収録済の映像しか含まない場合:</strong> 時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。</p></li></ul>',
				bodyMarkdown:
					'**1.2.1 音声のみ及び映像のみ (収録済) :** [収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[音声しか含まない](https://waic.jp/translations/WCAG20/#audio-onlydef "definition: 音声しか含まない (audio-only)")メディア及び収録済の[映像しか含まない](https://waic.jp/translations/WCAG20/#video-onlydef "definition: 映像しか含まない (video-only)")メディアは、次の事項を満たしている。ただし、その音声又は映像が[メディアによるテキストの代替](https://waic.jp/translations/WCAG20/#multimedia-alt-textdef "definition: メディアによるテキストの代替 (media alternative for text)")であって、メディアによる代替であることが明確にラベル付けされている場合は除く: (レベル A)\n\n-   **収録済の音声しか含まない場合:**[時間依存メディアに対する代替コンテンツ](https://waic.jp/translations/WCAG20/#alt-time-based-mediadef "definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)")によって、収録済の音声しか含まないコンテンツと同等の情報を提供している。\n    \n-   **収録済の映像しか含まない場合:** 時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。',
				bodyPlain:
					'1.2.1 音声のみ及び映像のみ (収録済) : 収録済の音声しか含まないメディア及び収録済の映像しか含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く: \n(レベル A) \n収録済の音声しか含まない場合:時間依存メディアに対する代替コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。収録済の映像しか含まない場合: 時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'キャプション (収録済) ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.2 キャプション (収録済) :</strong> <a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれているすべての<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 音声 (audio)" href="https://waic.jp/translations/WCAG20/#audiodef" class="termref">音声</a>コンテンツに対して、<a title="definition: キャプション (captions)" href="https://waic.jp/translations/WCAG20/#captionsdef" class="termref">キャプション</a>が提供されている。ただし、その同期したメディアが<a title="definition: メディアによるテキストの代替 (media alternative for text)" href="https://waic.jp/translations/WCAG20/#multimedia-alt-textdef" class="termref">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。 (レベル A) </p>',
				bodyMarkdown:
					'**1.2.2 キャプション (収録済) :** [同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれているすべての[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[音声](https://waic.jp/translations/WCAG20/#audiodef "definition: 音声 (audio)")コンテンツに対して、[キャプション](https://waic.jp/translations/WCAG20/#captionsdef "definition: キャプション (captions)")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG20/#multimedia-alt-textdef "definition: メディアによるテキストの代替 (media alternative for text)")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。 (レベル A)',
				bodyPlain:
					'1.2.2 キャプション (収録済) : \n同期したメディアに含まれているすべての収録済の音声コンテンツに対して、キャプションが提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-captions.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: '音声解説、又はメディアに対する代替 (収録済) ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.3 音声解説、又はメディアに対する代替 (収録済) :</strong> <a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれている<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 映像 (video)" href="https://waic.jp/translations/WCAG20/#videodef" class="termref">映像</a>コンテンツに対して、<a title="definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)" href="https://waic.jp/translations/WCAG20/#alt-time-based-mediadef" class="termref">時間依存メディアに対する代替コンテンツ</a>又は<a title="definition: 音声解説 (audio description)" href="https://waic.jp/translations/WCAG20/#audiodescdef" class="termref">音声解説</a>が提供されている。ただし、その同期したメディアが<a title="definition: メディアによるテキストの代替 (media alternative for text)" href="https://waic.jp/translations/WCAG20/#multimedia-alt-textdef" class="termref">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。 (レベル A) </p>',
				bodyMarkdown:
					'**1.2.3 音声解説、又はメディアに対する代替 (収録済) :** [同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれている[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[映像](https://waic.jp/translations/WCAG20/#videodef "definition: 映像 (video)")コンテンツに対して、[時間依存メディアに対する代替コンテンツ](https://waic.jp/translations/WCAG20/#alt-time-based-mediadef "definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)")又は[音声解説](https://waic.jp/translations/WCAG20/#audiodescdef "definition: 音声解説 (audio description)")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG20/#multimedia-alt-textdef "definition: メディアによるテキストの代替 (media alternative for text)")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。 (レベル A)',
				bodyPlain:
					'1.2.3 音声解説、又はメディアに対する代替 (収録済) : \n同期したメディアに含まれている収録済の映像コンテンツに対して、時間依存メディアに対する代替コンテンツ又は音声解説が提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。\n\n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'キャプション (ライブ) ',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.4 キャプション (ライブ) :</strong> <a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれているすべての<a title="definition: ライブ (live)" href="https://waic.jp/translations/WCAG20/#livedef" class="termref">ライブ</a>の<a title="definition: 音声 (audio)" href="https://waic.jp/translations/WCAG20/#audiodef" class="termref">音声</a>コンテンツに対して<a title="definition: キャプション (captions)" href="https://waic.jp/translations/WCAG20/#captionsdef" class="termref">キャプション</a>が提供されている。 (レベル AA) </p>',
				bodyMarkdown:
					'**1.2.4 キャプション (ライブ) :** [同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれているすべての[ライブ](https://waic.jp/translations/WCAG20/#livedef "definition: ライブ (live)")の[音声](https://waic.jp/translations/WCAG20/#audiodef "definition: 音声 (audio)")コンテンツに対して[キャプション](https://waic.jp/translations/WCAG20/#captionsdef "definition: キャプション (captions)")が提供されている。 (レベル AA)',
				bodyPlain:
					'1.2.4 キャプション (ライブ) : \n同期したメディアに含まれているすべてのライブの音声コンテンツに対してキャプションが提供されている。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: '音声解説 (収録済) ',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.5 音声解説 (収録済) :</strong> <a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれているすべての<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 映像 (video)" href="https://waic.jp/translations/WCAG20/#videodef" class="termref">映像</a>コンテンツに対して、<a title="definition: 音声解説 (audio description)" href="https://waic.jp/translations/WCAG20/#audiodescdef" class="termref">音声解説</a>が提供されている。 (レベル AA) </p>',
				bodyMarkdown:
					'**1.2.5 音声解説 (収録済) :** [同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれているすべての[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[映像](https://waic.jp/translations/WCAG20/#videodef "definition: 映像 (video)")コンテンツに対して、[音声解説](https://waic.jp/translations/WCAG20/#audiodescdef "definition: 音声解説 (audio description)")が提供されている。 (レベル AA)',
				bodyPlain:
					'1.2.5 音声解説 (収録済) : \n同期したメディアに含まれているすべての収録済の映像コンテンツに対して、音声解説が提供されている。\n\n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: '手話 (収録済) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.6 手話 (収録済) :</strong> <a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれているすべての<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 音声 (audio)" href="https://waic.jp/translations/WCAG20/#audiodef" class="termref">音声</a>コンテンツに対して、<a title="definition: 手話通訳 (sign language interpretation)" href="https://waic.jp/translations/WCAG20/#sign-languageinterpdef" class="termref">手話通訳</a>が提供されている。 (レベル AAA) </p>',
				bodyMarkdown:
					'**1.2.6 手話 (収録済) :** [同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれているすべての[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[音声](https://waic.jp/translations/WCAG20/#audiodef "definition: 音声 (audio)")コンテンツに対して、[手話通訳](https://waic.jp/translations/WCAG20/#sign-languageinterpdef "definition: 手話通訳 (sign language interpretation)")が提供されている。 (レベル AAA)',
				bodyPlain:
					'1.2.6 手話 (収録済) : \n同期したメディアに含まれているすべての収録済の音声コンテンツに対して、手話通訳が提供されている。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-sign.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: '拡張音声解説 (収録済) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.7 拡張音声解説 (収録済) :</strong> 前景音の合間が、<a title="definition: 音声解説 (audio description)" href="https://waic.jp/translations/WCAG20/#audiodescdef" class="termref">音声解説</a>で映像の意味を伝達するのに不十分な場合、<a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>に含まれているすべての<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 映像 (video)" href="https://waic.jp/translations/WCAG20/#videodef" class="termref">映像</a>コンテンツに対して、<a title="definition: 拡張音声解説 (extended audio description)" href="https://waic.jp/translations/WCAG20/#extended-addef" class="termref">拡張音声解説</a>が提供されている。 (レベル AAA) </p>',
				bodyMarkdown:
					'**1.2.7 拡張音声解説 (収録済) :** 前景音の合間が、[音声解説](https://waic.jp/translations/WCAG20/#audiodescdef "definition: 音声解説 (audio description)")で映像の意味を伝達するのに不十分な場合、[同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")に含まれているすべての[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[映像](https://waic.jp/translations/WCAG20/#videodef "definition: 映像 (video)")コンテンツに対して、[拡張音声解説](https://waic.jp/translations/WCAG20/#extended-addef "definition: 拡張音声解説 (extended audio description)")が提供されている。 (レベル AAA)',
				bodyPlain:
					'1.2.7 拡張音声解説 (収録済) : \n前景音の合間が、音声解説で映像の意味を伝達するのに不十分な場合、同期したメディアに含まれているすべての収録済の映像コンテンツに対して、拡張音声解説が提供されている。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'メディアに対する代替 (収録済) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.8 メディアに対する代替 (収録済) :</strong> すべての<a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>及びすべての収録済の<a title="definition: 映像しか含まない (video-only)" href="https://waic.jp/translations/WCAG20/#video-onlydef" class="termref">映像しか含まない</a>メディアに対して、<a title="definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)" href="https://waic.jp/translations/WCAG20/#alt-time-based-mediadef" class="termref">時間依存メディアに対する代替コンテンツ</a>が提供されている。 (レベル AAA) </p>',
				bodyMarkdown:
					'**1.2.8 メディアに対する代替 (収録済) :** すべての[収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")及びすべての収録済の[映像しか含まない](https://waic.jp/translations/WCAG20/#video-onlydef "definition: 映像しか含まない (video-only)")メディアに対して、[時間依存メディアに対する代替コンテンツ](https://waic.jp/translations/WCAG20/#alt-time-based-mediadef "definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)")が提供されている。 (レベル AAA)',
				bodyPlain:
					'1.2.8 メディアに対する代替 (収録済) : \nすべての収録済の同期したメディア及びすべての収録済の映像しか含まないメディアに対して、時間依存メディアに対する代替コンテンツが提供されている。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-text-doc.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: '音声のみ (ライブ) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.2.9 音声のみ (ライブ) :</strong> <a title="definition: ライブ (live)" href="https://waic.jp/translations/WCAG20/#livedef" class="termref">ライブ</a>の<a title="definition: 音声しか含まない (audio-only)" href="https://waic.jp/translations/WCAG20/#audio-onlydef" class="termref">音声しか含まない</a>コンテンツに対して、それと同等の情報を提示する、<a title="definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)" href="https://waic.jp/translations/WCAG20/#alt-time-based-mediadef" class="termref">時間依存メディアの代替コンテンツ</a>が提供されている。 (レベル AAA) </p>',
				bodyMarkdown:
					'**1.2.9 音声のみ (ライブ) :** [ライブ](https://waic.jp/translations/WCAG20/#livedef "definition: ライブ (live)")の[音声しか含まない](https://waic.jp/translations/WCAG20/#audio-onlydef "definition: 音声しか含まない (audio-only)")コンテンツに対して、それと同等の情報を提示する、[時間依存メディアの代替コンテンツ](https://waic.jp/translations/WCAG20/#alt-time-based-mediadef "definition: 時間依存メディアに対する代替コンテンツ (alternative for time-based media)")が提供されている。 (レベル AAA)',
				bodyPlain:
					'1.2.9 音声のみ (ライブ) : ライブの音声しか含まないコンテンツに対して、それと同等の情報を提示する、時間依存メディアの代替コンテンツが提供されている。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: '情報及び関係性',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.1 情報及び関係性:</strong> 何らかの形で<a title="definition: 提示 (presentation)" href="https://waic.jp/translations/WCAG20/#presentationdef" class="termref">提示</a>されている情報、 <a title="definition: 構造 (structure)" href="https://waic.jp/translations/WCAG20/#structuredef" class="termref">構造</a>、及び<a title="definition: 関係性 (relationships)" href="https://waic.jp/translations/WCAG20/#relationshipsdef" class="termref">関係性</a>は、<a title="definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))" href="https://waic.jp/translations/WCAG20/#programmaticallydetermineddef" class="termref">プログラムによる解釈</a>が可能である、又はテキストで提供されている。 (レベル A) </p>',
				bodyMarkdown:
					'**1.3.1 情報及び関係性:** 何らかの形で[提示](https://waic.jp/translations/WCAG20/#presentationdef "definition: 提示 (presentation)")されている情報、 [構造](https://waic.jp/translations/WCAG20/#structuredef "definition: 構造 (structure)")、及び[関係性](https://waic.jp/translations/WCAG20/#relationshipsdef "definition: 関係性 (relationships)")は、[プログラムによる解釈](https://waic.jp/translations/WCAG20/#programmaticallydetermineddef "definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))")が可能である、又はテキストで提供されている。 (レベル A)',
				bodyPlain:
					'1.3.1 情報及び関係性: 何らかの形で提示されている情報、\n構造、及び関係性は、プログラムによる解釈が可能である、又はテキストで提供されている。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: '意味のある順序',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.2 意味のある順序:</strong> コンテンツが提示されている順序が意味に影響を及ぼす場合には、<a title="definition: 正しく読む順序 (correct reading sequence)" href="https://waic.jp/translations/WCAG20/#correct-reading-sequencedef" class="termref">正しく読む順序</a>は<a title="definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))" href="https://waic.jp/translations/WCAG20/#programmaticallydetermineddef" class="termref">プログラムによる解釈</a>が可能である。 (レベル A) </p>',
				bodyMarkdown:
					'**1.3.2 意味のある順序:** コンテンツが提示されている順序が意味に影響を及ぼす場合には、[正しく読む順序](https://waic.jp/translations/WCAG20/#correct-reading-sequencedef "definition: 正しく読む順序 (correct reading sequence)")は[プログラムによる解釈](https://waic.jp/translations/WCAG20/#programmaticallydetermineddef "definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))")が可能である。 (レベル A)',
				bodyPlain:
					'1.3.2 意味のある順序: コンテンツが提示されている順序が意味に影響を及ぼす場合には、正しく読む順序はプログラムによる解釈が可能である。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: '感覚的な特徴',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.3.3 感覚的な特徴:</strong> コンテンツを理解し操作するための説明は、形、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>色に関する要件は、<a href="https://waic.jp/translations/WCAG20/#visual-audio-contrast">ガイドライン 1.4</a>を参照。</p></div>',
				bodyMarkdown:
					'**1.3.3 感覚的な特徴:** コンテンツを理解し操作するための説明は、形、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。 (レベル A)\n\n_注記:_ 色に関する要件は、[ガイドライン 1.4](https://waic.jp/translations/WCAG20/#visual-audio-contrast)を参照。',
				bodyPlain:
					'1.3.3 感覚的な特徴: \nコンテンツを理解し操作するための説明は、形、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。\n\n(レベル A) \n注記: 色に関する要件は、ガイドライン 1.4を参照。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: '色の使用',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.1 色の使用:</strong> 色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>この達成基準は、特に色の知覚を扱う。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、<a href="https://waic.jp/translations/WCAG20/#content-structure-separation">ガイドライン 1.3</a>で網羅されている。</p></div>',
				bodyMarkdown:
					'**1.4.1 色の使用:** 色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。 (レベル A)\n\n_注記:_ この達成基準は、特に色の知覚を扱う。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、[ガイドライン 1.3](https://waic.jp/translations/WCAG20/#content-structure-separation)で網羅されている。',
				bodyPlain:
					'1.4.1 色の使用: \n色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。\n\n(レベル A) \n注記: この達成基準は、特に色の知覚を扱う。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、ガイドライン 1.3で網羅されている。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: '音声の制御',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.2 音声の制御:</strong> ウェブページ上にある音声が自動的に再生され、その音声が 3 秒より長く続く場合、その音声を一時停止もしくは停止する<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>、又はシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムのいずれかを提供する。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG20/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'**1.4.2 音声の制御:** ウェブページ上にある音声が自動的に再生され、その音声が 3 秒より長く続く場合、その音声を一時停止もしくは停止する[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")、又はシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムのいずれかを提供する。 (レベル A)\n\n_注記:_ この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG20/#cc5)を参照。',
				bodyPlain:
					'1.4.2 音声の制御: \nウェブページ上にある音声が自動的に再生され、その音声が 3 秒より長く続く場合、その音声を一時停止もしくは停止するメカニズム、又はシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムのいずれかを提供する。 \n(レベル A) \n注記: この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'コントラスト (最低限) ',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.3 コントラスト (最低限) :</strong> <a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>及び<a title="definition: 文字画像 (image of text)" href="https://waic.jp/translations/WCAG20/#images-of-textdef" class="termref">文字画像</a>の<span>視覚的提示</span>に、少なくとも 4.5:1 の<a title="definition: コントラスト比 (contrast ratio)" href="https://waic.jp/translations/WCAG20/#contrast-ratiodef" class="termref">コントラスト比</a>がある。ただし、次の場合は除く: (レベル AA) </p><ul><li><p> <strong class="sc-handle">大きな文字:</strong> <a title="definition: サイズの大きな (テキスト) (large scale (text))" href="https://waic.jp/translations/WCAG20/#larger-scaledef" class="termref">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。</p></li><li><p> <strong class="sc-handle">付随的:</strong> テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a title="definition: ユーザインタフェース コンポーネント (user interface component)" href="https://waic.jp/translations/WCAG20/#user-interface-componentdef" class="termref">ユーザインタフェース コンポーネント</a>の一部である、<a title="definition: 純粋な装飾 (pure decoration)" href="https://waic.jp/translations/WCAG20/#puredecdef" class="termref">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></li><li><p> <strong class="sc-handle">ロゴタイプ:</strong> ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></li></ul>',
				bodyMarkdown:
					'**1.4.3 コントラスト (最低限) :** [テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")及び[文字画像](https://waic.jp/translations/WCAG20/#images-of-textdef "definition: 文字画像 (image of text)")の視覚的提示に、少なくとも 4.5:1 の[コントラスト比](https://waic.jp/translations/WCAG20/#contrast-ratiodef "definition: コントラスト比 (contrast ratio)")がある。ただし、次の場合は除く: (レベル AA)\n\n-   **大きな文字:** [サイズの大きな](https://waic.jp/translations/WCAG20/#larger-scaledef "definition: サイズの大きな (テキスト) (large scale (text))")テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。\n    \n-   **付随的:** テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG20/#user-interface-componentdef "definition: ユーザインタフェース コンポーネント (user interface component)")の一部である、[純粋な装飾](https://waic.jp/translations/WCAG20/#puredecdef "definition: 純粋な装飾 (pure decoration)")である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n    \n-   **ロゴタイプ:** ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				bodyPlain:
					'1.4.3 コントラスト (最低限) : \nテキスト及び文字画像の視覚的提示に、少なくとも 4.5:1 のコントラスト比がある。ただし、次の場合は除く:\n\n(レベル AA) \n\n大きな文字:\nサイズの大きなテキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。\n付随的: テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\nロゴタイプ:\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'テキストのサイズ変更',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.4 テキストのサイズ変更:</strong> <a title="definition: キャプション (captions)" href="https://waic.jp/translations/WCAG20/#captionsdef" class="termref">キャプション</a>及び<a title="definition: 文字画像 (image of text)" href="https://waic.jp/translations/WCAG20/#images-of-textdef" class="termref">文字画像</a>を除き、<a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>は、コンテンツ又は機能を損なうことなく、<a title="definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))" href="https://waic.jp/translations/WCAG20/#atdef" class="termref">支援技術</a>なしで 200％ までサイズ変更できる。 (レベル AA) </p>',
				bodyMarkdown:
					'**1.4.4 テキストのサイズ変更:** [キャプション](https://waic.jp/translations/WCAG20/#captionsdef "definition: キャプション (captions)")及び[文字画像](https://waic.jp/translations/WCAG20/#images-of-textdef "definition: 文字画像 (image of text)")を除き、[テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")は、コンテンツ又は機能を損なうことなく、[支援技術](https://waic.jp/translations/WCAG20/#atdef "definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))")なしで 200％ までサイズ変更できる。 (レベル AA)',
				bodyPlain:
					'1.4.4 テキストのサイズ変更: \nキャプション及び文字画像を除き、テキストは、コンテンツ又は機能を損なうことなく、支援技術なしで 200％ までサイズ変更できる。\n\n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: '文字画像',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.5 文字画像:</strong> 使用している技術で意図した視覚的提示が可能である場合、<a title="definition: 文字画像 (image of text)" href="https://waic.jp/translations/WCAG20/#images-of-textdef" class="termref">文字画像</a>ではなく<a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>が情報伝達に用いられている。ただし、次に挙げる場合を除く: (レベル AA) </p><ul><li><p> <strong>カスタマイズ可能:</strong> 文字画像は、利用者の要求に応じた<a title="definition: 視覚的なカスタマイズ (visually customized)" href="https://waic.jp/translations/WCAG20/#visually-customizeddef" class="termref">視覚的なカスタマイズ</a>ができる。</p></li><li><p> <strong>必要不可欠:</strong> テキストの特定の提示が、伝えようとする情報にとって<a title="definition: 必要不可欠 (essential)" href="https://waic.jp/translations/WCAG20/#essentialdef" class="termref">必要不可欠</a>である。</p></li></ul><div class="note"><p class="prefix"><em>注記: </em>ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'**1.4.5 文字画像:** 使用している技術で意図した視覚的提示が可能である場合、[文字画像](https://waic.jp/translations/WCAG20/#images-of-textdef "definition: 文字画像 (image of text)")ではなく[テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")が情報伝達に用いられている。ただし、次に挙げる場合を除く: (レベル AA)\n\n-   **カスタマイズ可能:** 文字画像は、利用者の要求に応じた[視覚的なカスタマイズ](https://waic.jp/translations/WCAG20/#visually-customizeddef "definition: 視覚的なカスタマイズ (visually customized)")ができる。\n    \n-   **必要不可欠:** テキストの特定の提示が、伝えようとする情報にとって[必要不可欠](https://waic.jp/translations/WCAG20/#essentialdef "definition: 必要不可欠 (essential)")である。\n    \n\n_注記:_ ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'1.4.5 文字画像: 使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられている。ただし、次に挙げる場合を除く:\n\n(レベル AA) \n\nカスタマイズ可能: 文字画像は、利用者の要求に応じた視覚的なカスタマイズができる。\n必要不可欠: テキストの特定の提示が、伝えようとする情報にとって必要不可欠である。注記: ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'コントラスト (高度) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.6 コントラスト (高度) :</strong> <a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>及び<a title="definition: 文字画像 (image of text)" href="https://waic.jp/translations/WCAG20/#images-of-textdef" class="termref">文字画像</a>の<span>視覚的提示</span>には、少なくとも 7:1 の<a title="definition: コントラスト比 (contrast ratio)" href="https://waic.jp/translations/WCAG20/#contrast-ratiodef" class="termref">コントラスト比</a>がある。ただし、次の場合は除く: (レベル AAA) </p><ul><li><p> <strong class="sc-handle">大きな文字:</strong> <a title="definition: サイズの大きな (テキスト) (large scale (text))" href="https://waic.jp/translations/WCAG20/#larger-scaledef" class="termref">サイズの大きな</a>テキスト及びサイズの大きな文字画像には、少なくとも 4.5:1 のコントラスト比がある。</p></li><li><p> <strong class="sc-handle">付随的:</strong> テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a title="definition: ユーザインタフェース コンポーネント (user interface component)" href="https://waic.jp/translations/WCAG20/#user-interface-componentdef" class="termref">ユーザインタフェース コンポーネント</a>の一部である、<a title="definition: 純粋な装飾 (pure decoration)" href="https://waic.jp/translations/WCAG20/#puredecdef" class="termref">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></li><li><p> <strong class="sc-handle">ロゴタイプ:</strong> ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></li></ul>',
				bodyMarkdown:
					'**1.4.6 コントラスト (高度) :** [テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")及び[文字画像](https://waic.jp/translations/WCAG20/#images-of-textdef "definition: 文字画像 (image of text)")の視覚的提示には、少なくとも 7:1 の[コントラスト比](https://waic.jp/translations/WCAG20/#contrast-ratiodef "definition: コントラスト比 (contrast ratio)")がある。ただし、次の場合は除く: (レベル AAA)\n\n-   **大きな文字:** [サイズの大きな](https://waic.jp/translations/WCAG20/#larger-scaledef "definition: サイズの大きな (テキスト) (large scale (text))")テキスト及びサイズの大きな文字画像には、少なくとも 4.5:1 のコントラスト比がある。\n    \n-   **付随的:** テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG20/#user-interface-componentdef "definition: ユーザインタフェース コンポーネント (user interface component)")の一部である、[純粋な装飾](https://waic.jp/translations/WCAG20/#puredecdef "definition: 純粋な装飾 (pure decoration)")である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n    \n-   **ロゴタイプ:** ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				bodyPlain:
					'1.4.6 コントラスト (高度) : \nテキスト及び文字画像の視覚的提示には、少なくとも 7:1 のコントラスト比がある。ただし、次の場合は除く:\n\n(レベル AAA) \n\n大きな文字:\nサイズの大きなテキスト及びサイズの大きな文字画像には、少なくとも 4.5:1 のコントラスト比がある。\n付随的: テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\nロゴタイプ:\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast7.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: '小さな背景音、又は背景音なし',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.7 小さな背景音、又は背景音なし:</strong> <a title="definition: 収録済 (prerecorded)" href="https://waic.jp/translations/WCAG20/#prerecordeddef" class="termref">収録済</a>の<a title="definition: 音声しか含まない (audio-only)" href="https://waic.jp/translations/WCAG20/#audio-onlydef" class="termref">音声しか含まない</a>コンテンツで、(1) 前景に主として発話を含み、(2) 音声<a title="definition: CAPTCHA" href="https://waic.jp/translations/WCAG20/#CAPTCHAdef" class="termref">CAPTCHA</a> 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AAA) </p><ul><li><p><strong class="sc-handle">背景音なし:</strong> 音声は背景音を含まない。</p></li><li><p><strong class="sc-handle">消音:</strong> 背景音を消すことができる。</p></li><li><p><strong class="sc-handle">20デシベル: </strong> 背景音は、前景にある発話のコンテンツより少なくとも20デシベルは低い。ただし、継続時間が2秒以内で発生頻度が低い背景音は除く。 </p><div class="note"><p class="prefix"><em>注記: </em>デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約4分の1の大きさになる。</p></div></li></ul>',
				bodyMarkdown:
					'**1.4.7 小さな背景音、又は背景音なし:** [収録済](https://waic.jp/translations/WCAG20/#prerecordeddef "definition: 収録済 (prerecorded)")の[音声しか含まない](https://waic.jp/translations/WCAG20/#audio-onlydef "definition: 音声しか含まない (audio-only)")コンテンツで、(1) 前景に主として発話を含み、(2) 音声[CAPTCHA](https://waic.jp/translations/WCAG20/#CAPTCHAdef "definition: CAPTCHA") 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AAA)\n\n-   **背景音なし:** 音声は背景音を含まない。\n    \n-   **消音:** 背景音を消すことができる。\n    \n-   **20デシベル:** 背景音は、前景にある発話のコンテンツより少なくとも20デシベルは低い。ただし、継続時間が2秒以内で発生頻度が低い背景音は除く。\n    \n    _注記:_ デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約4分の1の大きさになる。',
				bodyPlain:
					'1.4.7 小さな背景音、又は背景音なし: 収録済の音声しか含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声CAPTCHA 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている: \n(レベル AAA) \n背景音なし: 音声は背景音を含まない。消音: 背景音を消すことができる。20デシベル: 背景音は、前景にある発話のコンテンツより少なくとも20デシベルは低い。ただし、継続時間が2秒以内で発生頻度が低い背景音は除く。\n注記: デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約4分の1の大きさになる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-noaudio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: '視覚的提示',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.8 視覚的提示:</strong> <a title="definition: テキストブロック (blocks of text)" href="https://waic.jp/translations/WCAG20/#blockstextdef" class="termref">テキストブロック</a>の視覚的提示において、次を実現する<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる: (レベル AAA) </p><ol class="enumar"><li><p>利用者が、前景色と背景色を選択できる。</p></li><li><p>幅が 80 字を越えない (全角文字の場合は、40 字)。</p></li><li><p>テキストが、均等割り付けされていない (両端揃えではない)。</p></li><li><p>段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。</p></li><li><p>テキストは、支援技術なしで 200％までサイズ変更でき、利用者が<a title="definition: 全画面表示のウィンドウで (on a full-screen window)" href="https://waic.jp/translations/WCAG20/#fullscreenwindowdef" class="termref">全画面表示にしたウィンドウ</a>で 1 行のテキストを読むときに横スクロールする必要がない。</p></li></ol>',
				bodyMarkdown:
					'**1.4.8 視覚的提示:** [テキストブロック](https://waic.jp/translations/WCAG20/#blockstextdef "definition: テキストブロック (blocks of text)")の視覚的提示において、次を実現する[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる: (レベル AAA)\n\n1.  利用者が、前景色と背景色を選択できる。\n    \n2.  幅が 80 字を越えない (全角文字の場合は、40 字)。\n    \n3.  テキストが、均等割り付けされていない (両端揃えではない)。\n    \n4.  段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。\n    \n5.  テキストは、支援技術なしで 200％までサイズ変更でき、利用者が[全画面表示にしたウィンドウ](https://waic.jp/translations/WCAG20/#fullscreenwindowdef "definition: 全画面表示のウィンドウで (on a full-screen window)")で 1 行のテキストを読むときに横スクロールする必要がない。',
				bodyPlain:
					'1.4.8 視覚的提示: テキストブロックの視覚的提示において、次を実現するメカニズムが利用できる: \n(レベル AAA) \n利用者が、前景色と背景色を選択できる。幅が 80 字を越えない (全角文字の場合は、40 字)。テキストが、均等割り付けされていない (両端揃えではない)。段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。テキストは、支援技術なしで 200％までサイズ変更でき、利用者が全画面表示にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: '文字画像 (例外なし) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">1.4.9 文字画像 (例外なし) :</strong> <a title="definition: 文字画像 (image of text)" href="https://waic.jp/translations/WCAG20/#images-of-textdef" class="termref">文字画像</a>は、<a title="definition: 純粋な装飾 (pure decoration)" href="https://waic.jp/translations/WCAG20/#puredecdef" class="termref">純粋な装飾</a>に用いられているか、<a title="definition: テキスト (text)" href="https://waic.jp/translations/WCAG20/#textdef" class="termref">テキスト</a>の特定の提示が伝えようとする情報にとって<a title="definition: 必要不可欠 (essential)" href="https://waic.jp/translations/WCAG20/#essentialdef" class="termref">必要不可欠</a>である場合に用いられている。 (レベル AAA) </p><div class="note"><p class="prefix"><em>注記: </em>ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'**1.4.9 文字画像 (例外なし) :** [文字画像](https://waic.jp/translations/WCAG20/#images-of-textdef "definition: 文字画像 (image of text)")は、[純粋な装飾](https://waic.jp/translations/WCAG20/#puredecdef "definition: 純粋な装飾 (pure decoration)")に用いられているか、[テキスト](https://waic.jp/translations/WCAG20/#textdef "definition: テキスト (text)")の特定の提示が伝えようとする情報にとって[必要不可欠](https://waic.jp/translations/WCAG20/#essentialdef "definition: 必要不可欠 (essential)")である場合に用いられている。 (レベル AAA)\n\n_注記:_ ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'1.4.9 文字画像 (例外なし) : 文字画像は、純粋な装飾に用いられているか、テキストの特定の提示が伝えようとする情報にとって必要不可欠である場合に用いられている。 \n(レベル AAA) \n注記: ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'キーボード',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.1 キーボード:</strong> コンテンツのすべての<a title="definition: 機能 (functionality)" href="https://waic.jp/translations/WCAG20/#functiondef" class="termref">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a title="definition: キーボードインタフェース (keyboard interface)" href="https://waic.jp/translations/WCAG20/#keybrd-interfacedef" class="termref">キーボードインタフェース</a>を通じて操作可能である。ただし、その根本的な機能が利用者の動作による始点から終点まで続く一連の軌跡に依存して実現されている場合は除く。 (レベル A) </p><div class="note"><p class="prefix"><em>注記 1: </em>上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。</p><p class="prefix"><em>注記 2: </em>これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。</p></div>',
				bodyMarkdown:
					'**2.1.1 キーボード:** コンテンツのすべての[機能](https://waic.jp/translations/WCAG20/#functiondef "definition: 機能 (functionality)")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG20/#keybrd-interfacedef "definition: キーボードインタフェース (keyboard interface)")を通じて操作可能である。ただし、その根本的な機能が利用者の動作による始点から終点まで続く一連の軌跡に依存して実現されている場合は除く。 (レベル A)\n\n_注記 1:_ 上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。\n\n_注記 2:_ これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				bodyPlain:
					'2.1.1 キーボード: コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。ただし、その根本的な機能が利用者の動作による始点から終点まで続く一連の軌跡に依存して実現されている場合は除く。 \n(レベル A) \n注記 1:\n上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。注記 2:\nこれは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'キーボードトラップなし',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.2 キーボードトラップなし:</strong> <a title="definition: キーボードインタフェース (keyboard interface)" href="https://waic.jp/translations/WCAG20/#keybrd-interfacedef" class="termref">キーボードインタフェース</a>を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、 Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG20/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'**2.1.2 キーボードトラップなし:** [キーボードインタフェース](https://waic.jp/translations/WCAG20/#keybrd-interfacedef "definition: キーボードインタフェース (keyboard interface)")を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、 Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。 (レベル A)\n\n_注記:_ この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG20/#cc5)を参照。',
				bodyPlain:
					'2.1.2 キーボードトラップなし: キーボードインタフェースを用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、 Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。\n\n(レベル A) \n注記: この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'キーボード (例外なし) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.1.3 キーボード (例外なし) :</strong> コンテンツのすべての<a title="definition: 機能 (functionality)" href="https://waic.jp/translations/WCAG20/#functiondef" class="termref">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a title="definition: キーボードインタフェース (keyboard interface)" href="https://waic.jp/translations/WCAG20/#keybrd-interfacedef" class="termref">キーボードインタフェース</a>を通じて操作可能である。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.1.3 キーボード (例外なし) :** コンテンツのすべての[機能](https://waic.jp/translations/WCAG20/#functiondef "definition: 機能 (functionality)")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG20/#keybrd-interfacedef "definition: キーボードインタフェース (keyboard interface)")を通じて操作可能である。 (レベル AAA)',
				bodyPlain:
					'2.1.3 キーボード (例外なし) : コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'タイミング調整可能',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.1 タイミング調整可能:</strong> コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル A) </p><ul><li><p> <strong class="sc-handle">解除:</strong> 制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、 </p></li><li><p> <strong class="sc-handle">調整:</strong> 制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、</p></li><li><p> <strong class="sc-handle">延長:</strong> 時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、</p></li><li><p> <strong class="sc-handle">リアルタイムの例外:</strong> リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、</p></li><li><p> <strong class="sc-handle">必要不可欠な例外:</strong> 制限時間が<a title="definition: 必要不可欠 (essential)" href="https://waic.jp/translations/WCAG20/#essentialdef" class="termref">必要不可欠</a>なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、 </p></li><li><p> <strong class="sc-handle">20 時間の例外:</strong> 制限時間が 20 時間よりも長い。 </p></li></ul><div class="note"><p class="prefix"><em>注記: </em>この達成基準は、制限時間の結果として、コンテンツ又はコンテキストの予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する<a href="https://waic.jp/translations/WCAG20/#consistent-behavior-receive-focus"> Success Criterion 3.2.1</a>と併せて考慮すること。</p></div>',
				bodyMarkdown:
					'**2.2.1 タイミング調整可能:** コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル A)\n\n-   **解除:** 制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、\n    \n-   **調整:** 制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、\n    \n-   **延長:** 時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、\n    \n-   **リアルタイムの例外:** リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、\n    \n-   **必要不可欠な例外:** 制限時間が[必要不可欠](https://waic.jp/translations/WCAG20/#essentialdef "definition: 必要不可欠 (essential)")なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、\n    \n-   **20 時間の例外:** 制限時間が 20 時間よりも長い。\n    \n\n_注記:_ この達成基準は、制限時間の結果として、コンテンツ又はコンテキストの予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する [Success Criterion 3.2.1](https://waic.jp/translations/WCAG20/#consistent-behavior-receive-focus)と併せて考慮すること。',
				bodyPlain:
					'2.2.1 タイミング調整可能: コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n(レベル A) \n\n解除: 制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、\n\n調整: 制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、\n延長: 時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、\nリアルタイムの例外: リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、\n必要不可欠な例外: 制限時間が必要不可欠なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、\n\n20 時間の例外: 制限時間が 20 時間よりも長い。\n注記: この達成基準は、制限時間の結果として、コンテンツ又はコンテキストの予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する\nSuccess Criterion 3.2.1と併せて考慮すること。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: '一時停止、停止、非表示',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.2 一時停止、停止、非表示:</strong> 動きのある、<a title="definition: 点滅 (blinking)" href="https://waic.jp/translations/WCAG20/#blinksdef" class="termref">点滅</a>している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている: (レベル A) </p><ul><li><p><strong class="sc-handle">動き、点滅、スクロール:</strong> 動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを<a title="definition: 一時停止 (paused)" href="https://waic.jp/translations/WCAG20/#pauseddef" class="termref">一時停止</a>、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが<a title="definition: 必要不可欠 (essential)" href="https://waic.jp/translations/WCAG20/#essentialdef" class="termref">必要不可欠</a>な動作の一部である場合は除く。</p></li><li><p><strong class="sc-handle">自動更新:</strong> 自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。</p></li></ul><div class="note"><p class="prefix"><em>注記 1: </em>画面がちらつく、又は閃光を放つコンテンツに関する要件は、<a href="https://waic.jp/translations/WCAG20/#seizure">ガイドライン 2.3</a>を参照。</p><p class="prefix"><em>注記 2: </em>この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG20/#cc5">適合要件 5: 非干渉</a>を参照。</p><p class="prefix"><em>注記 3: </em>定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。 </p><p class="prefix"><em>注記 4: </em>コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。</p></div>',
				bodyMarkdown:
					'**2.2.2 一時停止、停止、非表示:** 動きのある、[点滅](https://waic.jp/translations/WCAG20/#blinksdef "definition: 点滅 (blinking)")している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている: (レベル A)\n\n-   **動き、点滅、スクロール:** 動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを[一時停止](https://waic.jp/translations/WCAG20/#pauseddef "definition: 一時停止 (paused)")、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが[必要不可欠](https://waic.jp/translations/WCAG20/#essentialdef "definition: 必要不可欠 (essential)")な動作の一部である場合は除く。\n    \n-   **自動更新:** 自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。\n    \n\n_注記 1:_ 画面がちらつく、又は閃光を放つコンテンツに関する要件は、[ガイドライン 2.3](https://waic.jp/translations/WCAG20/#seizure)を参照。\n\n_注記 2:_ この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG20/#cc5)を参照。\n\n_注記 3:_ 定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n\n_注記 4:_ コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				bodyPlain:
					'2.2.2 一時停止、停止、非表示: \n動きのある、点滅している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている: \n(レベル A) \n動き、点滅、スクロール: 動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを一時停止、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが必要不可欠な動作の一部である場合は除く。自動更新: 自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。注記 1:\n画面がちらつく、又は閃光を放つコンテンツに関する要件は、ガイドライン 2.3を参照。注記 2:\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。注記 3:\n定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n注記 4:\nコンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/time-limits-pause.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'タイミング非依存',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.3 タイミング非依存:</strong> タイミングは、コンテンツによって提示されるイベント又は動作の<a title="definition: 必要不可欠 (essential)" href="https://waic.jp/translations/WCAG20/#essentialdef" class="termref">必要不可欠</a>な部分ではない。ただし、インタラクティブではない<a title="definition: 同期したメディア (synchronized media)" href="https://waic.jp/translations/WCAG20/#synchronizedmediadef" class="termref">同期したメディア</a>及び <a title="definition: リアルタイムのイベント (real-time event)" href="https://waic.jp/translations/WCAG20/#real-time-eventsdef" class="termref">リアルタイムのイベント</a>は除く。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.2.3 タイミング非依存:** タイミングは、コンテンツによって提示されるイベント又は動作の[必要不可欠](https://waic.jp/translations/WCAG20/#essentialdef "definition: 必要不可欠 (essential)")な部分ではない。ただし、インタラクティブではない[同期したメディア](https://waic.jp/translations/WCAG20/#synchronizedmediadef "definition: 同期したメディア (synchronized media)")及び [リアルタイムのイベント](https://waic.jp/translations/WCAG20/#real-time-eventsdef "definition: リアルタイムのイベント (real-time event)")は除く。 (レベル AAA)',
				bodyPlain:
					'2.2.3 タイミング非依存: タイミングは、コンテンツによって提示されるイベント又は動作の必要不可欠な部分ではない。ただし、インタラクティブではない同期したメディア及び\nリアルタイムのイベントは除く。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: '割り込み',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.4 割り込み:</strong> 割り込みは、利用者が延期、又は抑制することができる。ただし、<a title="definition: 緊急 (emergency)" href="https://waic.jp/translations/WCAG20/#emergencydef" class="termref">緊急</a>を要する割り込みは除く。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.2.4 割り込み:** 割り込みは、利用者が延期、又は抑制することができる。ただし、[緊急](https://waic.jp/translations/WCAG20/#emergencydef "definition: 緊急 (emergency)")を要する割り込みは除く。 (レベル AAA)',
				bodyPlain:
					'2.2.4 割り込み: 割り込みは、利用者が延期、又は抑制することができる。ただし、緊急を要する割り込みは除く。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/time-limits-postponed.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: '再認証',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.2.5 再認証:</strong> 認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.2.5 再認証:** 認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。 (レベル AAA)',
				bodyPlain:
					'2.2.5 再認証: 認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/time-limits-server-timeout.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: '3 回の閃光、又は閾値以下',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.3.1 3 回の閃光、又は閾値以下:</strong> <a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>には、どの 1 秒間においても3回を超える<a title="definition: 閃光 (flash)" href="https://waic.jp/translations/WCAG20/#flash-def" class="termref">閃光</a>を放つものがない、又は閃光が<a title="definition: 一般閃光閾値及び赤色閃光閾値 (general flash and red flash thresholds)" href="https://waic.jp/translations/WCAG20/#general-thresholddef" class="termref">一般閃光閾値及び赤色閃光閾値</a>を下回っている。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG20/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'**2.3.1 3 回の閃光、又は閾値以下:** [ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")には、どの 1 秒間においても3回を超える[閃光](https://waic.jp/translations/WCAG20/#flash-def "definition: 閃光 (flash)")を放つものがない、又は閃光が[一般閃光閾値及び赤色閃光閾値](https://waic.jp/translations/WCAG20/#general-thresholddef "definition: 一般閃光閾値及び赤色閃光閾値 (general flash and red flash thresholds)")を下回っている。 (レベル A)\n\n_注記:_ この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG20/#cc5)を参照。',
				bodyPlain:
					'2.3.1 3 回の閃光、又は閾値以下: \nウェブページには、どの 1 秒間においても3回を超える閃光を放つものがない、又は閃光が一般閃光閾値及び赤色閃光閾値を下回っている。\n\n(レベル A) \n注記: この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/seizure-does-not-violate.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: '3 回の閃光',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.3.2 3 回の閃光:</strong> <a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>には、どの 1 秒間においても 3 回を超える<a title="definition: 閃光 (flash)" href="https://waic.jp/translations/WCAG20/#flash-def" class="termref">閃光</a>を放つものがない。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.3.2 3 回の閃光:** [ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")には、どの 1 秒間においても 3 回を超える[閃光](https://waic.jp/translations/WCAG20/#flash-def "definition: 閃光 (flash)")を放つものがない。 (レベル AAA)',
				bodyPlain:
					'2.3.2 3 回の閃光: \nウェブページには、どの 1 秒間においても 3 回を超える閃光を放つものがない。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/seizure-three-times.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'ブロックスキップ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.1 ブロックスキップ:</strong> 複数の<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>上で繰り返されているコンテンツのブロックをスキップする<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。 (レベル A) </p>',
				bodyMarkdown:
					'**2.4.1 ブロックスキップ:** 複数の[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")上で繰り返されているコンテンツのブロックをスキップする[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。 (レベル A)',
				bodyPlain:
					'2.4.1 ブロックスキップ: 複数のウェブページ上で繰り返されているコンテンツのブロックをスキップするメカニズムが利用できる。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'ページタイトル',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.2 ページタイトル:</strong> <a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>には、主題又は目的を説明したタイトルがある。 (レベル A) </p>',
				bodyMarkdown:
					'**2.4.2 ページタイトル:** [ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")には、主題又は目的を説明したタイトルがある。 (レベル A)',
				bodyPlain:
					'2.4.2 ページタイトル: \nウェブページには、主題又は目的を説明したタイトルがある。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'フォーカス順序',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.3 フォーカス順序:</strong> <a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>が<a title="definition: 順を追ってナビゲート (navigated sequentially)" href="https://waic.jp/translations/WCAG20/#nav-seqdef" class="termref">順を追ってナビゲート</a>できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。 (レベル A) </p>',
				bodyMarkdown:
					'**2.4.3 フォーカス順序:** [ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")が[順を追ってナビゲート](https://waic.jp/translations/WCAG20/#nav-seqdef "definition: 順を追ってナビゲート (navigated sequentially)")できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。 (レベル A)',
				bodyPlain:
					'2.4.3 フォーカス順序: ウェブページが順を追ってナビゲートできて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'リンクの目的 (コンテキスト内) ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.4 リンクの目的 (コンテキスト内) :</strong> それぞれの<a title="definition: リンクの目的 (link purpose)" href="https://waic.jp/translations/WCAG20/#linkpurposedef" class="termref">リンクの目的</a>が、リンクのテキスト単独で、又はリンクのテキストと<a title="definition: プログラムによる解釈が可能なリンクのコンテキスト (programmatically determined link context)" href="https://waic.jp/translations/WCAG20/#pdlinkcontextdef" class="termref">プログラムによる解釈が可能なリンクのコンテキスト</a>から判断できる。ただし、リンクの目的が<a title="definition: ほとんどの利用者にとって曖昧 (ambiguous to users in general)" href="https://waic.jp/translations/WCAG20/#ambiguouslinkdef" class="termref">ほとんどの利用者にとって曖昧</a>な場合は除く。 (レベル A) </p>',
				bodyMarkdown:
					'**2.4.4 リンクの目的 (コンテキスト内) :** それぞれの[リンクの目的](https://waic.jp/translations/WCAG20/#linkpurposedef "definition: リンクの目的 (link purpose)")が、リンクのテキスト単独で、又はリンクのテキストと[プログラムによる解釈が可能なリンクのコンテキスト](https://waic.jp/translations/WCAG20/#pdlinkcontextdef "definition: プログラムによる解釈が可能なリンクのコンテキスト (programmatically determined link context)")から判断できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG20/#ambiguouslinkdef "definition: ほとんどの利用者にとって曖昧 (ambiguous to users in general)")な場合は除く。 (レベル A)',
				bodyPlain:
					'2.4.4 リンクの目的 (コンテキスト内) : \nそれぞれのリンクの目的が、リンクのテキスト単独で、又はリンクのテキストとプログラムによる解釈が可能なリンクのコンテキストから判断できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: '複数の手段',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.5 複数の手段:</strong> <a title="definition: ウェブページ一式 (set of Web pages)" href="https://waic.jp/translations/WCAG20/#set-of-web-pagesdef" class="termref">ウェブページ一式</a>の中で、ある<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>を見つける複数の手段が利用できる。ただし、ウェブページが<a title="definition: プロセス (process)" href="https://waic.jp/translations/WCAG20/#processdef" class="termref">一連のプロセス</a>の中の1ステップ又は結果である場合は除く。 (レベル AA) </p>',
				bodyMarkdown:
					'**2.4.5 複数の手段:** [ウェブページ一式](https://waic.jp/translations/WCAG20/#set-of-web-pagesdef "definition: ウェブページ一式 (set of Web pages)")の中で、ある[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")を見つける複数の手段が利用できる。ただし、ウェブページが[一連のプロセス](https://waic.jp/translations/WCAG20/#processdef "definition: プロセス (process)")の中の1ステップ又は結果である場合は除く。 (レベル AA)',
				bodyPlain:
					'2.4.5 複数の手段: ウェブページ一式の中で、あるウェブページを見つける複数の手段が利用できる。ただし、ウェブページが一連のプロセスの中の1ステップ又は結果である場合は除く。\n\n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: '見出し及びラベル',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.6 見出し及びラベル:</strong> 見出し及び<a title="definition: ラベル (label)" href="https://waic.jp/translations/WCAG20/#labeldef" class="termref">ラベル</a>は、主題又は目的を説明している。 (レベル AA) </p>',
				bodyMarkdown:
					'**2.4.6 見出し及びラベル:** 見出し及び[ラベル](https://waic.jp/translations/WCAG20/#labeldef "definition: ラベル (label)")は、主題又は目的を説明している。 (レベル AA)',
				bodyPlain:
					'2.4.6 見出し及びラベル: \n見出し及びラベルは、主題又は目的を説明している。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'フォーカスの可視化',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.7 フォーカスの可視化:</strong> キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。 (レベル AA) </p>',
				bodyMarkdown:
					'**2.4.7 フォーカスの可視化:** キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。 (レベル AA)',
				bodyPlain:
					'2.4.7 フォーカスの可視化: キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: '現在位置',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.8 現在位置:</strong> <a title="definition: ウェブページ一式 (set of Web pages)" href="https://waic.jp/translations/WCAG20/#set-of-web-pagesdef" class="termref">ウェブページ一式</a>の中での利用者の位置に関する情報が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.4.8 現在位置:** [ウェブページ一式](https://waic.jp/translations/WCAG20/#set-of-web-pagesdef "definition: ウェブページ一式 (set of Web pages)")の中での利用者の位置に関する情報が利用できる。 (レベル AAA)',
				bodyPlain:
					'2.4.8 現在位置: ウェブページ一式の中での利用者の位置に関する情報が利用できる。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'リンクの目的 (リンクのみ) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.9 リンクの目的 (リンクのみ) :</strong> それぞれのリンクの目的を、リンクのテキスト単独で特定できる<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。ただし、リンクの目的が<a title="definition: ほとんどの利用者にとって曖昧 (ambiguous to users in general)" href="https://waic.jp/translations/WCAG20/#ambiguouslinkdef" class="termref">ほとんどの利用者にとって曖昧</a>な場合は除く。 (レベル AAA) </p>',
				bodyMarkdown:
					'**2.4.9 リンクの目的 (リンクのみ) :** それぞれのリンクの目的を、リンクのテキスト単独で特定できる[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG20/#ambiguouslinkdef "definition: ほとんどの利用者にとって曖昧 (ambiguous to users in general)")な場合は除く。 (レベル AAA)',
				bodyPlain:
					'2.4.9 リンクの目的 (リンクのみ) : \nそれぞれのリンクの目的を、リンクのテキスト単独で特定できるメカニズムが利用できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'セクション見出し',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">2.4.10 セクション見出し:</strong> <a title="definition: セクション (section)" href="https://waic.jp/translations/WCAG20/#sectiondef" class="termref">セクション</a>見出しを用いて、コンテンツが整理されている。 (レベル AAA) </p><div class="note"><p class="prefix"><em>注記 1: </em>見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。 </p><p class="prefix"><em>注記 2: </em>この達成基準は、文書におけるセクションを対象としており、<a title="definition: ユーザインタフェース コンポーネント (user interface component)" href="https://waic.jp/translations/WCAG20/#user-interface-componentdef" class="termref">ユーザインタフェース コンポーネント</a>は対象としていない。ユーザインタフェース コンポーネントについては、<a href="https://waic.jp/translations/WCAG20/#ensure-compat-rsv" class="gl-ref">達成基準4.1.2</a>が対象にしている。</p></div>',
				bodyMarkdown:
					'**2.4.10 セクション見出し:** [セクション](https://waic.jp/translations/WCAG20/#sectiondef "definition: セクション (section)")見出しを用いて、コンテンツが整理されている。 (レベル AAA)\n\n_注記 1:_ 見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n\n_注記 2:_ この達成基準は、文書におけるセクションを対象としており、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG20/#user-interface-componentdef "definition: ユーザインタフェース コンポーネント (user interface component)")は対象としていない。ユーザインタフェース コンポーネントについては、[達成基準4.1.2](https://waic.jp/translations/WCAG20/#ensure-compat-rsv)が対象にしている。',
				bodyPlain:
					'2.4.10 セクション見出し: \nセクション見出しを用いて、コンテンツが整理されている。\n\n(レベル AAA) \n注記 1:\n見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n注記 2:\nこの達成基準は、文書におけるセクションを対象としており、ユーザインタフェース コンポーネントは対象としていない。ユーザインタフェース コンポーネントについては、達成基準4.1.2が対象にしている。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'ページの言語',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.1 ページの言語:</strong> それぞれの<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>のデフォルトの<a title="definition: 自然言語 (human language)" href="https://waic.jp/translations/WCAG20/#human-langdef" class="termref">自然言語</a>がどの言語であるか、<a title="definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))" href="https://waic.jp/translations/WCAG20/#programmaticallydetermineddef" class="termref">プログラムによる解釈</a>が可能である。 (レベル A) </p>',
				bodyMarkdown:
					'**3.1.1 ページの言語:** それぞれの[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")のデフォルトの[自然言語](https://waic.jp/translations/WCAG20/#human-langdef "definition: 自然言語 (human language)")がどの言語であるか、[プログラムによる解釈](https://waic.jp/translations/WCAG20/#programmaticallydetermineddef "definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))")が可能である。 (レベル A)',
				bodyPlain:
					'3.1.1 ページの言語: それぞれのウェブページのデフォルトの自然言語がどの言語であるか、プログラムによる解釈が可能である。\n\n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: '一部分の言語',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.2 一部分の言語:</strong> コンテンツの一節、又は語句それぞれの<a title="definition: 自然言語 (human language)" href="https://waic.jp/translations/WCAG20/#human-langdef" class="termref">自然言語</a>がどの言語であるか、<a title="definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))" href="https://waic.jp/translations/WCAG20/#programmaticallydetermineddef" class="termref">プログラムによる解釈</a>が可能である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。 (レベル AA) </p>',
				bodyMarkdown:
					'**3.1.2 一部分の言語:** コンテンツの一節、又は語句それぞれの[自然言語](https://waic.jp/translations/WCAG20/#human-langdef "definition: 自然言語 (human language)")がどの言語であるか、[プログラムによる解釈](https://waic.jp/translations/WCAG20/#programmaticallydetermineddef "definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))")が可能である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。 (レベル AA)',
				bodyPlain:
					'3.1.2 一部分の言語: コンテンツの一節、又は語句それぞれの自然言語がどの言語であるか、プログラムによる解釈が可能である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。\n\n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-other-lang-id.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: '一般的ではない用語',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.3 一般的ではない用語:</strong> <a title="definition: 慣用句 (idiom)" href="https://waic.jp/translations/WCAG20/#idiomsdef" class="termref">慣用句</a>及び<a title="definition: 専門用語 (jargon)" href="https://waic.jp/translations/WCAG20/#jargondef" class="termref">専門用語</a>を含めて、<a title="definition: 一般的ではない、又は限定された用法で使われている (used in an unusual or restricted way)" href="https://waic.jp/translations/WCAG20/#unusual-restricteddef" class="termref">一般的ではない、又は限定された用法で使われている</a>単語、又は語句の、明確な定義を特定する<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.1.3 一般的ではない用語:** [慣用句](https://waic.jp/translations/WCAG20/#idiomsdef "definition: 慣用句 (idiom)")及び[専門用語](https://waic.jp/translations/WCAG20/#jargondef "definition: 専門用語 (jargon)")を含めて、[一般的ではない、又は限定された用法で使われている](https://waic.jp/translations/WCAG20/#unusual-restricteddef "definition: 一般的ではない、又は限定された用法で使われている (used in an unusual or restricted way)")単語、又は語句の、明確な定義を特定する[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.1.3 一般的ではない用語: 慣用句及び専門用語を含めて、一般的ではない、又は限定された用法で使われている単語、又は語句の、明確な定義を特定するメカニズムが利用できる。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-idioms.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: '略語',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.4 略語:</strong> <a title="definition: 略語 (abbreviation)" href="https://waic.jp/translations/WCAG20/#abbreviationsdef" class="termref">略語</a>の元の語、又は意味を特定する<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.1.4 略語:** [略語](https://waic.jp/translations/WCAG20/#abbreviationsdef "definition: 略語 (abbreviation)")の元の語、又は意味を特定する[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.1.4 略語: 略語の元の語、又は意味を特定するメカニズムが利用できる。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-located.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: '読解レベル',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.5 読解レベル:</strong> 固有名詞や題名を取り除いた状態で、テキストが<a title="definition: 前期中等教育レベル (lower secondary education level)" href="https://waic.jp/translations/WCAG20/#lowseceddef" class="termref">前期中等教育レベル</a>を超えた読解力を必要とする場合は、<a title="definition: 補足コンテンツ (supplemental content)" href="https://waic.jp/translations/WCAG20/#suppcontentdef" class="termref">補足コンテンツ</a>又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.1.5 読解レベル:** 固有名詞や題名を取り除いた状態で、テキストが[前期中等教育レベル](https://waic.jp/translations/WCAG20/#lowseceddef "definition: 前期中等教育レベル (lower secondary education level)")を超えた読解力を必要とする場合は、[補足コンテンツ](https://waic.jp/translations/WCAG20/#suppcontentdef "definition: 補足コンテンツ (supplemental content)")又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.1.5 読解レベル: 固有名詞や題名を取り除いた状態で、テキストが前期中等教育レベルを超えた読解力を必要とする場合は、補足コンテンツ又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-supplements.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: '発音',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.1.6 発音:</strong> 文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.1.6 発音:** 文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.1.6 発音: 文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定するメカニズムが利用できる。\n\n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/meaning-pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'フォーカス時',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.1 フォーカス時:</strong> いずれのコンポーネントも、フォーカスを受け取ったときに <a title="definition: コンテキストの変化 (changes of context)" href="https://waic.jp/translations/WCAG20/#context-changedef" class="termref">コンテキストの変化</a>を引き起こさない。 (レベル A) </p>',
				bodyMarkdown:
					'**3.2.1 フォーカス時:** いずれのコンポーネントも、フォーカスを受け取ったときに [コンテキストの変化](https://waic.jp/translations/WCAG20/#context-changedef "definition: コンテキストの変化 (changes of context)")を引き起こさない。 (レベル A)',
				bodyPlain:
					'3.2.1 フォーカス時: いずれのコンポーネントも、フォーカスを受け取ったときに\nコンテキストの変化を引き起こさない。\n\n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: '入力時',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.2 入力時:</strong> <a title="definition: ユーザインタフェース コンポーネント (user interface component)" href="https://waic.jp/translations/WCAG20/#user-interface-componentdef" class="termref">ユーザインタフェース コンポーネント</a> の設定を変更することが、<a title="definition: コンテキストの変化 (changes of context)" href="https://waic.jp/translations/WCAG20/#context-changedef" class="termref">コンテキストの変化</a>を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。 (レベル A) </p>',
				bodyMarkdown:
					'**3.2.2 入力時:** [ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG20/#user-interface-componentdef "definition: ユーザインタフェース コンポーネント (user interface component)") の設定を変更することが、[コンテキストの変化](https://waic.jp/translations/WCAG20/#context-changedef "definition: コンテキストの変化 (changes of context)")を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。 (レベル A)',
				bodyPlain:
					'3.2.2 入力時: \nユーザインタフェース コンポーネント\nの設定を変更することが、コンテキストの変化を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。\n\n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: '一貫したナビゲーション',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.3 一貫したナビゲーション:</strong> <a title="definition: ウェブページ一式 (set of Web pages)" href="https://waic.jp/translations/WCAG20/#set-of-web-pagesdef" class="termref">ウェブページ一式</a>の中にある複数の<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに<a title="definition: 相対的に同じ順序 (same relative order)" href="https://waic.jp/translations/WCAG20/#samerelorderdef" class="termref">相対的に同じ順序</a>で出現する。ただし、利用者が変更した場合は除く。 (レベル AA) </p>',
				bodyMarkdown:
					'**3.2.3 一貫したナビゲーション:** [ウェブページ一式](https://waic.jp/translations/WCAG20/#set-of-web-pagesdef "definition: ウェブページ一式 (set of Web pages)")の中にある複数の[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに[相対的に同じ順序](https://waic.jp/translations/WCAG20/#samerelorderdef "definition: 相対的に同じ順序 (same relative order)")で出現する。ただし、利用者が変更した場合は除く。 (レベル AA)',
				bodyPlain:
					'3.2.3 一貫したナビゲーション: ウェブページ一式の中にある複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現する。ただし、利用者が変更した場合は除く。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: '一貫した識別性',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.4 一貫した識別性:</strong> <a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>一式の中で<a title="definition: 同じ機能 (same functionality)" href="https://waic.jp/translations/WCAG20/#samefunctionalitydef" class="termref">同じ機能</a>を有するコンポーネントは、一貫して識別できる。 (レベル AA) </p>',
				bodyMarkdown:
					'**3.2.4 一貫した識別性:** [ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")一式の中で[同じ機能](https://waic.jp/translations/WCAG20/#samefunctionalitydef "definition: 同じ機能 (same functionality)")を有するコンポーネントは、一貫して識別できる。 (レベル AA)',
				bodyPlain:
					'3.2.4 一貫した識別性: ウェブページ一式の中で同じ機能を有するコンポーネントは、一貫して識別できる。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: '要求による変化',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.2.5 要求による変化:</strong> <a title="definition: コンテキストの変化 (changes of context)" href="https://waic.jp/translations/WCAG20/#context-changedef" class="termref">コンテキストの変化</a>は利用者の要求によってだけ生じるか、又は、そのような変化を止める<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.2.5 要求による変化:** [コンテキストの変化](https://waic.jp/translations/WCAG20/#context-changedef "definition: コンテキストの変化 (changes of context)")は利用者の要求によってだけ生じるか、又は、そのような変化を止める[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.2.5 要求による変化: \nコンテキストの変化は利用者の要求によってだけ生じるか、又は、そのような変化を止めるメカニズムが利用できる。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'エラーの特定',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.1 エラーの特定:</strong> <a title="definition: 入力エラー (input error)" href="https://waic.jp/translations/WCAG20/#input-errordef" class="termref">入力エラー</a>が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。 (レベル A) </p>',
				bodyMarkdown:
					'**3.3.1 エラーの特定:** [入力エラー](https://waic.jp/translations/WCAG20/#input-errordef "definition: 入力エラー (input error)")が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。 (レベル A)',
				bodyPlain:
					'3.3.1 エラーの特定: 入力エラーが自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。\n\n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-identified.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'ラベル又は説明',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.2 ラベル又は説明:</strong> コンテンツが利用者の入力を要求する場合は、<a title="definition: ラベル (label)" href="https://waic.jp/translations/WCAG20/#labeldef" class="termref">ラベル</a>又は説明文が提供されている。 (レベル A) </p>',
				bodyMarkdown:
					'**3.3.2 ラベル又は説明:** コンテンツが利用者の入力を要求する場合は、[ラベル](https://waic.jp/translations/WCAG20/#labeldef "definition: ラベル (label)")又は説明文が提供されている。 (レベル A)',
				bodyPlain:
					'3.3.2 ラベル又は説明: \nコンテンツが利用者の入力を要求する場合は、ラベル又は説明文が提供されている。 \n(レベル A)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-cues.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'エラー修正の提案',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.3 エラー修正の提案:</strong> <a title="definition: 入力エラー (input error)" href="https://waic.jp/translations/WCAG20/#input-errordef" class="termref">入力エラー</a>が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。 (レベル AA) </p>',
				bodyMarkdown:
					'**3.3.3 エラー修正の提案:** [入力エラー](https://waic.jp/translations/WCAG20/#input-errordef "definition: 入力エラー (input error)")が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。 (レベル AA)',
				bodyPlain:
					'3.3.3 エラー修正の提案: 入力エラーが自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。 \n(レベル AA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-suggestions.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: 'エラー回避 (法的、金融、データ) ',
				level: 'AA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.4 エラー回避 (法的、金融、データ) :</strong> 利用者にとって<a title="definition: 法律行為 (legal commitments)" href="https://waic.jp/translations/WCAG20/#legalcommitmentsdef" class="termref">法律行為</a>もしくは金融取引が生じる、<a title="definition: 利用者が制御可能 (user-controllable)" href="https://waic.jp/translations/WCAG20/#user-controllabledef" class="termref">利用者が制御可能な</a>データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AA) </p><ol class="enumar"><li><p> <strong class="sc-handle">取消:</strong> 送信を取り消すことができる。</p></li><li><p> <strong class="sc-handle">チェック:</strong> 利用者が入力したデータの<a title="definition: 入力エラー (input error)" href="https://waic.jp/translations/WCAG20/#input-errordef" class="termref">入力エラー</a>がチェックされ、利用者には修正する機会が提供される。</p></li><li><p> <strong class="sc-handle">確認:</strong> 送信を完了する前に、利用者が情報の見直し、確認及び修正をする<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。</p></li></ol>',
				bodyMarkdown:
					'**3.3.4 エラー回避 (法的、金融、データ) :** 利用者にとって[法律行為](https://waic.jp/translations/WCAG20/#legalcommitmentsdef "definition: 法律行為 (legal commitments)")もしくは金融取引が生じる、[利用者が制御可能な](https://waic.jp/translations/WCAG20/#user-controllabledef "definition: 利用者が制御可能 (user-controllable)")データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")では、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AA)\n\n1.  **取消:** 送信を取り消すことができる。\n    \n2.  **チェック:** 利用者が入力したデータの[入力エラー](https://waic.jp/translations/WCAG20/#input-errordef "definition: 入力エラー (input error)")がチェックされ、利用者には修正する機会が提供される。\n    \n3.  **確認:** 送信を完了する前に、利用者が情報の見直し、確認及び修正をする[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。',
				bodyPlain:
					'3.3.4 エラー回避 (法的、金融、データ) : 利用者にとって法律行為もしくは金融取引が生じる、利用者が制御可能なデータストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている: \n(レベル AA) \n\n取消: 送信を取り消すことができる。\nチェック: 利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認: 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-reversible.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'ヘルプ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.5 ヘルプ:</strong> <a title="definition: コンテキストに応じたヘルプ (context-sensitive help)" href="https://waic.jp/translations/WCAG20/#context-sensitivehelpdef" class="termref">コンテキストに応じたヘルプ</a>が利用できる。 (レベル AAA) </p>',
				bodyMarkdown:
					'**3.3.5 ヘルプ:** [コンテキストに応じたヘルプ](https://waic.jp/translations/WCAG20/#context-sensitivehelpdef "definition: コンテキストに応じたヘルプ (context-sensitive help)")が利用できる。 (レベル AAA)',
				bodyPlain:
					'3.3.5 ヘルプ: \nコンテキストに応じたヘルプが利用できる。 \n(レベル AAA)',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-context-help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: 'エラー回避 (すべて) ',
				level: 'AAA',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">3.3.6 エラー回避 (すべて) :</strong> 利用者に情報の送信を要求する<a title="definition: ウェブページ (Web page)" href="https://waic.jp/translations/WCAG20/#webpagedef" class="termref">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AAA) </p><ol class="enumar"><li><p> <strong class="sc-handle">取消:</strong> 送信を取り消すことができる。</p></li><li><p> <strong class="sc-handle">チェック:</strong> 利用者が入力したデータの<a title="definition: 入力エラー (input error)" href="https://waic.jp/translations/WCAG20/#input-errordef" class="termref">入力エラー</a>がチェックされ、利用者には修正する機会が提供される。</p></li><li><p> <strong class="sc-handle">確認:</strong> 送信を完了する前に、利用者が情報の見直し、確認及び修正をする<a title="definition: メカニズム (mechanism)" href="https://waic.jp/translations/WCAG20/#mechanismdef" class="termref">メカニズム</a>が利用できる。</p></li></ol>',
				bodyMarkdown:
					'**3.3.6 エラー回避 (すべて) :** 利用者に情報の送信を要求する[ウェブページ](https://waic.jp/translations/WCAG20/#webpagedef "definition: ウェブページ (Web page)")では、次に挙げる事項のうち、少なくとも一つを満たしている: (レベル AAA)\n\n1.  **取消:** 送信を取り消すことができる。\n    \n2.  **チェック:** 利用者が入力したデータの[入力エラー](https://waic.jp/translations/WCAG20/#input-errordef "definition: 入力エラー (input error)")がチェックされ、利用者には修正する機会が提供される。\n    \n3.  **確認:** 送信を完了する前に、利用者が情報の見直し、確認及び修正をする[メカニズム](https://waic.jp/translations/WCAG20/#mechanismdef "definition: メカニズム (mechanism)")が利用できる。',
				bodyPlain:
					'3.3.6 エラー回避 (すべて) : 利用者に情報の送信を要求するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n(レベル AAA) \n\n取消: 送信を取り消すことができる。\nチェック: 利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認: 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html',
			},
			'4.1.1': {
				id: '4.1.1',
				title: '構文解析',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">4.1.1 構文解析:</strong> マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>開始及び終了タグに重要な記号が欠けている場合、例えば、タグを閉じる山括弧がない、又は属性値の引用符が一致していない場合は、完全とはいえない。</p></div>',
				bodyMarkdown:
					'**4.1.1 構文解析:** マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。 (レベル A)\n\n_注記:_ 開始及び終了タグに重要な記号が欠けている場合、例えば、タグを閉じる山括弧がない、又は属性値の引用符が一致していない場合は、完全とはいえない。',
				bodyPlain:
					'4.1.1 構文解析: マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。 \n(レベル A) \n注記: 開始及び終了タグに重要な記号が欠けている場合、例えば、タグを閉じる山括弧がない、又は属性値の引用符が一致していない場合は、完全とはいえない。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/ensure-compat-parses.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: '名前 (name) ・役割 (role) 及び値 (value) ',
				level: 'A',
				bodyHTML:
					'<p class="sctxt"><strong class="sc-handle">4.1.2 名前 (name) ・役割 (role) 及び値 (value) :</strong> すべての<a title="definition: ユーザインタフェース コンポーネント (user interface component)" href="https://waic.jp/translations/WCAG20/#user-interface-componentdef" class="termref">ユーザインタフェース コンポーネント</a> (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントを含むがこれに限定されない) では、<a title="definition: 名前 (name) " href="https://waic.jp/translations/WCAG20/#namedef" class="termref">名前 (name)</a> 及び<a title="definition: 役割 (role) " href="https://waic.jp/translations/WCAG20/#roledef" class="termref">役割 (role)</a> は、<a title="definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))" href="https://waic.jp/translations/WCAG20/#programmaticallydetermineddef" class="termref">プログラムによる解釈</a>が可能である。又、状態、プロパティ、利用者が設定可能な値は<a title="definition: プログラムによる設定 (programmatically set)" href="https://waic.jp/translations/WCAG20/#programmaticallysetdef" class="termref">プログラムによる設定</a>が可能である。そして、<a title="definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))" href="https://waic.jp/translations/WCAG20/#atdef" class="termref">支援技術</a>を含む<a title="definition: ユーザエージェント (user agent)" href="https://waic.jp/translations/WCAG20/#useragentdef" class="termref">ユーザエージェント</a>が、これらの項目に対する変更通知を利用できる。 (レベル A) </p><div class="note"><p class="prefix"><em>注記: </em>この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。</p></div>',
				bodyMarkdown:
					'**4.1.2 名前 (name) ・役割 (role) 及び値 (value) :** すべての[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG20/#user-interface-componentdef "definition: ユーザインタフェース コンポーネント (user interface component)") (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントを含むがこれに限定されない) では、[名前 (name)](https://waic.jp/translations/WCAG20/#namedef "definition: 名前 (name) ") 及び[役割 (role)](https://waic.jp/translations/WCAG20/#roledef "definition: 役割 (role) ") は、[プログラムによる解釈](https://waic.jp/translations/WCAG20/#programmaticallydetermineddef "definition: プログラムによる解釈 (プログラムによる解釈が可能) (programmatically determined (programmatically determinable))")が可能である。又、状態、プロパティ、利用者が設定可能な値は[プログラムによる設定](https://waic.jp/translations/WCAG20/#programmaticallysetdef "definition: プログラムによる設定 (programmatically set)")が可能である。そして、[支援技術](https://waic.jp/translations/WCAG20/#atdef "definition: (この文書で用いられている) 支援技術 (assistive technology (as used in this document))")を含む[ユーザエージェント](https://waic.jp/translations/WCAG20/#useragentdef "definition: ユーザエージェント (user agent)")が、これらの項目に対する変更通知を利用できる。 (レベル A)\n\n_注記:_ この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				bodyPlain:
					'4.1.2 名前 (name) ・役割 (role) 及び値 (value) : すべてのユーザインタフェース コンポーネント (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントを含むがこれに限定されない) では、名前 (name) 及び役割 (role) は、プログラムによる解釈が可能である。又、状態、プロパティ、利用者が設定可能な値はプログラムによる設定が可能である。そして、支援技術を含むユーザエージェントが、これらの項目に対する変更通知を利用できる。 \n(レベル A) \n注記: この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				understanding:
					'https://waic.jp/translations/UNDERSTANDING-WCAG20/ensure-compat-rsv.html',
			},
		},
	},
	'wcag_2.1': {
		en: {
			'1.1.1': {
				id: '1.1.1',
				title: 'Non-text Content',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG21/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-1" title="any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language">non-text content</a> that is presented to the user has a <a href="https://www.w3.org/TR/WCAG21/#dfn-text-alternative" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-alternative-1" title="Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.">text alternative</a> that serves the equivalent purpose, except for the situations listed below. </p> <dl> <dt>Controls, Input</dt> <dd> <p>If non-text content is a control or accepts user input, then it has a <a href="https://www.w3.org/TR/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="text by which software can identify a component within Web content to the user">name</a> that describes its purpose. (Refer to <a href="https://www.w3.org/TR/WCAG21/#name-role-value">Success Criterion 4.1.2</a> for additional requirements for controls and content that accepts user input.) </p> </dd> <dt>Time-Based Media</dt> <dd> <p>If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to <a href="https://www.w3.org/TR/WCAG21/#time-based-media">Guideline 1.2</a> for additional requirements for media.) </p> </dd> <dt>Test</dt> <dd> <p>If non-text content is a test or exercise that would be invalid if presented in <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a>, then text alternatives at least provide descriptive identification of the non-text content. </p> </dd> <dt>Sensory</dt> <dd> <p>If non-text content is primarily intended to create a <a href="https://www.w3.org/TR/WCAG21/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="a sensory experience that is not purely decorative and does not primarily convey important information or perform a function">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content. </p> </dd> <dt><a href="https://www.w3.org/TR/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a></dt> <dd> <p>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. </p> </dd> <dt>Decoration, Formatting, Invisible</dt> <dd> <p>If non-text content is <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a>. </p> </dd> </dl>',
				bodyMarkdown:
					'All [non-text content](https://www.w3.org/TR/WCAG21/#dfn-non-text-content "any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language") that is presented to the user has a [text alternative](https://www.w3.org/TR/WCAG21/#dfn-text-alternative "Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.") that serves the equivalent purpose, except for the situations listed below.\n\n<dl><dt>Controls, Input</dt><dd><p>If non-text content is a control or accepts user input, then it has a <a href="https://www.w3.org/TR/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="text by which software can identify a component within Web content to the user">name</a> that describes its purpose. (Refer to <a href="https://www.w3.org/TR/WCAG21/#name-role-value">Success Criterion 4.1.2</a> for additional requirements for controls and content that accepts user input.)</p></dd><dt>Time-Based Media</dt><dd><p>If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to <a href="https://www.w3.org/TR/WCAG21/#time-based-media">Guideline 1.2</a> for additional requirements for media.)</p></dd><dt>Test</dt><dd><p>If non-text content is a test or exercise that would be invalid if presented in <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a>, then text alternatives at least provide descriptive identification of the non-text content.</p></dd><dt>Sensory</dt><dd><p>If non-text content is primarily intended to create a <a href="https://www.w3.org/TR/WCAG21/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="a sensory experience that is not purely decorative and does not primarily convey important information or perform a function">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.</p></dd><dt><a href="https://www.w3.org/TR/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a></dt><dd><p>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.</p></dd><dt>Decoration, Formatting, Invisible</dt><dd><p>If non-text content is <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a>.</p></dd></dl>',
				bodyPlain:
					'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.\n\nControls, Input\n\nIf non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.)\n\nTime-Based Media\n\nIf non-text content is time-based media, then text alternatives at least provide descriptive\nidentification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)\n\nTest\n\nIf non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text\ncontent.\n\nSensory\n\nIf non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text\ncontent.\n\nCAPTCHA\n\nIf the purpose of non-text content is to confirm that content is being accessed by\na person rather than a computer, then text alternatives that identify and describe\nthe purpose of the non-text content are provided, and alternative forms of CAPTCHA\nusing output modes for different types of sensory perception are provided to accommodate\ndifferent disabilities.\n\nDecoration, Formatting, Invisible\n\nIf non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented\nin a way that it can be ignored by assistive technology.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: 'Audio-only and Video-only (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-1" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-1" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> and prerecorded <a href="https://www.w3.org/TR/WCAG21/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-1" title="a time-based presentation that contains only video (no audio and no interaction)">video-only</a> media, the following are true, except when the audio or video is a <a href="https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-1" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such: </p> <dl> <dt>Prerecorded Audio-only</dt> <dd> <p>An <a href="https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content. </p> </dd> <dt>Prerecorded Video-only</dt> <dd> <p>Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content. </p> </dd> </dl>',
				bodyMarkdown:
					'For [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [audio-only](https://www.w3.org/TR/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") and prerecorded [video-only](https://www.w3.org/TR/WCAG21/#dfn-video-only "a time-based presentation that contains only video (no audio and no interaction)") media, the following are true, except when the audio or video is a [media alternative for text](https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such:\n\n<dl><dt>Prerecorded Audio-only</dt><dd><p>An <a href="https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.</p></dd><dt>Prerecorded Video-only</dt><dd><p>Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.</p></dd></dl>',
				bodyPlain:
					'For prerecorded\naudio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:\n\nPrerecorded Audio-only\n\nAn alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.\n\nPrerecorded Video-only\n\nEither an alternative for time-based media or an audio track is provided that presents\nequivalent information for prerecorded video-only content.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'Captions (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-1" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">Captions</a> are provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-2" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-1" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-1" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>, except when the media is a <a href="https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-2" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such. </p>',
				bodyMarkdown:
					'[Captions](https://www.w3.org/TR/WCAG21/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") are provided for all [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [audio](https://www.w3.org/TR/WCAG21/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such.',
				bodyPlain:
					'Captions are provided for all prerecorded\naudio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: 'Audio Description or Media Alternative (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-2" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> or <a href="https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-1" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">audio description</a> of the <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-3" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-1" title="the technology of moving or sequenced pictures or images">video</a> content is provided for <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-2" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>, except when the media is a <a href="https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-3" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") or [audio description](https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") of the [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG21/#dfn-video "the technology of moving or sequenced pictures or images") content is provided for [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG21/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such.',
				bodyPlain:
					'An alternative for time-based media or audio description of the prerecorded\nvideo content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'Captions (Live)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-2" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">Captions</a> are provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-1" title="information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay">live</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-2" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-3" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Captions](https://www.w3.org/TR/WCAG21/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") are provided for all [live](https://www.w3.org/TR/WCAG21/#dfn-live "information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay") [audio](https://www.w3.org/TR/WCAG21/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Captions are provided for all live\naudio content in synchronized media.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: 'Audio Description (Prerecorded)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-2" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">Audio description</a> is provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-4" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-2" title="the technology of moving or sequenced pictures or images">video</a> content in <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-4" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Audio description](https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") is provided for all [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG21/#dfn-video "the technology of moving or sequenced pictures or images") content in [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Audio description is provided for all prerecorded\nvideo content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: 'Sign Language (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-sign-language-interpretation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-sign-language-interpretation-1" title="translation of one language, generally a spoken language, into a sign language">Sign language interpretation</a> is provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-5" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-3" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-5" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Sign language interpretation](https://www.w3.org/TR/WCAG21/#dfn-sign-language-interpretation "translation of one language, generally a spoken language, into a sign language") is provided for all [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [audio](https://www.w3.org/TR/WCAG21/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Sign language interpretation is provided for all prerecorded\naudio content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: 'Extended Audio Description (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p>Where pauses in foreground audio are insufficient to allow <a href="https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-3" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">audio descriptions</a> to convey the sense of the video, <a href="https://www.w3.org/TR/WCAG21/#dfn-extended-audio-description" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-extended-audio-description-1" title="audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description">extended audio description</a> is provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-6" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-3" title="the technology of moving or sequenced pictures or images">video</a> content in <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-6" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'Where pauses in foreground audio are insufficient to allow [audio descriptions](https://www.w3.org/TR/WCAG21/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") to convey the sense of the video, [extended audio description](https://www.w3.org/TR/WCAG21/#dfn-extended-audio-description "audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description") is provided for all [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG21/#dfn-video "the technology of moving or sequenced pictures or images") content in [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded\nvideo content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'Media Alternative (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-3" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided for all <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-7" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-7" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a> and for all prerecorded <a href="https://www.w3.org/TR/WCAG21/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-2" title="a time-based presentation that contains only video (no audio and no interaction)">video-only</a> media. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") is provided for all [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such") and for all prerecorded [video-only](https://www.w3.org/TR/WCAG21/#dfn-video-only "a time-based presentation that contains only video (no audio and no interaction)") media.',
				bodyPlain:
					'An alternative for time-based media is provided for all prerecorded\nsynchronized media and for all prerecorded video-only media.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: 'Audio-only (Live)',
				level: 'AAA',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-4" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> that presents equivalent information for <a href="https://www.w3.org/TR/WCAG21/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-2" title="information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay">live</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-2" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> content is provided. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") that presents equivalent information for [live](https://www.w3.org/TR/WCAG21/#dfn-live "information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay") [audio-only](https://www.w3.org/TR/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") content is provided.',
				bodyPlain:
					'An alternative for time-based media that presents equivalent information for live\naudio-only content is provided.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: 'Info and Relationships',
				level: 'A',
				bodyHTML:
					'<p>Information, <a href="https://www.w3.org/TR/WCAG21/#dfn-structure" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-structure-1" title="The way the parts of a Web page are organized in relation to each other; and The way a collection of Web pages is organized">structure</a>, and <a href="https://www.w3.org/TR/WCAG21/#dfn-relationships" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-relationships-1" title="meaningful associations between distinct pieces of content">relationships</a> conveyed through <a href="https://www.w3.org/TR/WCAG21/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-1" title="rendering of the content in a form to be perceived by users">presentation</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-1" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> or are available in text. </p>',
				bodyMarkdown:
					'Information, [structure](https://www.w3.org/TR/WCAG21/#dfn-structure "The way the parts of a Web page are organized in relation to each other; and The way a collection of Web pages is organized"), and [relationships](https://www.w3.org/TR/WCAG21/#dfn-relationships "meaningful associations between distinct pieces of content") conveyed through [presentation](https://www.w3.org/TR/WCAG21/#dfn-presentation "rendering of the content in a form to be perceived by users") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") or are available in text.',
				bodyPlain:
					'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: 'Meaningful Sequence',
				level: 'A',
				bodyHTML:
					'<p>When the sequence in which content is presented affects its meaning, a <a href="https://www.w3.org/TR/WCAG21/#dfn-correct-reading-sequence" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-correct-reading-sequence-1" title="any sequence where words and paragraphs are presented in an order that does not change the meaning of the content">correct reading sequence</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-2" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>. </p>',
				bodyMarkdown:
					'When the sequence in which content is presented affects its meaning, a [correct reading sequence](https://www.w3.org/TR/WCAG21/#dfn-correct-reading-sequence "any sequence where words and paragraphs are presented in an order that does not change the meaning of the content") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: 'Sensory Characteristics',
				level: 'A',
				bodyHTML:
					'<p>Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound. </p> <div class="note" role="note" id="issue-container-generatedID"><div role="heading" class="note-title marker" id="h-note" aria-level="5"><span>Note</span></div><p class="">For requirements related to color, refer to <a href="https://www.w3.org/TR/WCAG21/#distinguishable">Guideline 1.4</a>.</p></div>',
				bodyMarkdown:
					'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.\n\nNote\n\nFor requirements related to color, refer to [Guideline 1.4](https://www.w3.org/TR/WCAG21/#distinguishable).',
				bodyPlain:
					'Instructions provided for understanding and operating content do not rely solely on\nsensory characteristics of components such as shape, color, size, visual location, orientation,\nor sound.\n\nNoteFor requirements related to color, refer to Guideline 1.4.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html',
			},
			'1.3.4': {
				id: '1.3.4',
				title: 'Orientation',
				level: 'AA',
				bodyHTML:
					'<p>Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-1" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</p> <div class="note" role="note" id="issue-container-generatedID-0"><div role="heading" class="note-title marker" id="h-note-0" aria-level="5"><span>Note</span></div><p class="">Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.</p></div>',
				bodyMarkdown:
					'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform").\n\nNote\n\nExamples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.',
				bodyPlain:
					'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.\n\nNoteExamples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html',
			},
			'1.3.5': {
				id: '1.3.5',
				title: 'Identify Input Purpose',
				level: 'AA',
				bodyHTML:
					'<p>The purpose of each input field collecting information about the user can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-3" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> when:</p> <ul> <li>The input field serves a purpose identified in the <a href="https://www.w3.org/TR/WCAG21/#input-purposes">Input Purposes for user interface components section</a>; and</li> <li>The content is implemented using technologies with support for identifying the expected meaning for form input data.</li> </ul>',
				bodyMarkdown:
					'The purpose of each input field collecting information about the user can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") when:\n\n-   The input field serves a purpose identified in the [Input Purposes for user interface components section](https://www.w3.org/TR/WCAG21/#input-purposes); and\n-   The content is implemented using technologies with support for identifying the expected meaning for form input data.',
				bodyPlain:
					'The purpose of each input field collecting information about the user can be programmatically determined when:\n\nThe input field serves a purpose identified in the Input Purposes for user interface components section; and\nThe content is implemented using technologies with support for identifying the expected meaning for form input data.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html',
			},
			'1.3.6': {
				id: '1.3.6',
				title: 'Identify Purpose',
				level: 'AAA',
				bodyHTML:
					'<p>In content implemented using markup languages, the purpose of <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-1" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a>, icons, and <a href="https://www.w3.org/TR/WCAG21/#dfn-regions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-regions-1" title="perceivable, programmatically determined section of content">regions</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-4" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>.</p>',
				bodyMarkdown:
					'In content implemented using markup languages, the purpose of [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function"), icons, and [regions](https://www.w3.org/TR/WCAG21/#dfn-regions "perceivable, programmatically determined section of content") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'In content implemented using markup languages, the purpose of user interface components, icons, and regions can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: 'Use of Color',
				level: 'A',
				bodyHTML:
					'<p>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. </p> <div class="note" role="note" id="issue-container-generatedID-1"><div role="heading" class="note-title marker" id="h-note-1" aria-level="5"><span>Note</span></div><p class="">This success criterion addresses color perception specifically. Other forms of perception are covered in <a href="https://www.w3.org/TR/WCAG21/#adaptable">Guideline 1.3</a> including programmatic access to color and other visual presentation coding.</p></div>',
				bodyMarkdown:
					'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.\n\nNote\n\nThis success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](https://www.w3.org/TR/WCAG21/#adaptable) including programmatic access to color and other visual presentation coding.',
				bodyPlain:
					'Color is not used as the only visual means of conveying information, indicating an\naction, prompting a response, or distinguishing a visual element.\n\nNoteThis success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: 'Audio Control',
				level: 'A',
				bodyHTML:
					'<p>If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-1" title="process or technique for achieving a result">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. </p> <div class="note" role="note" id="issue-container-generatedID-2"><div role="heading" class="note-title marker" id="h-note-2" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG21/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'If any audio on a Web page plays automatically for more than 3 seconds, either a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).',
				bodyPlain:
					"If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio\nvolume independently from the overall system volume level.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether or not it is used\nto meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'Contrast (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p>The visual presentation of <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-2" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-1" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> has a <a href="https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-1" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 4.5:1, except for the following: </p> <dl> <dt>Large Text</dt> <dd> <p><a href="https://www.w3.org/TR/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1; </p> </dd> <dt>Incidental</dt> <dd> <p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. </p> </dd> <dt>Logotypes</dt> <dd> <p>Text that is part of a logo or brand name has no contrast requirement.</p> </dd> </dl>',
				bodyMarkdown:
					'The visual presentation of [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") and [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") has a [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 4.5:1, except for the following:\n\n<dl><dt>Large Text</dt><dd><p><a href="https://www.w3.org/TR/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;</p></dd><dt>Incidental</dt><dd><p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></dd><dt>Logotypes</dt><dd><p>Text that is part of a logo or brand name has no contrast requirement.</p></dd></dl>',
				bodyPlain:
					'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:\n\nLarge Text\n\nLarge-scale text and images of large-scale text have a contrast ratio of at least 3:1;\n\nIncidental\n\nText or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant\nother visual content, have no contrast requirement.\n\nLogotypes\n\nText that is part of a logo or brand name has no contrast requirement.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'Resize Text',
				level: 'AA',
				bodyHTML:
					'<p>Except for <a href="https://www.w3.org/TR/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-3" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">captions</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-2" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a>, <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-3" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> can be resized without <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-2" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a> up to 200 percent without loss of content or functionality. </p>',
				bodyMarkdown:
					'Except for [captions](https://www.w3.org/TR/WCAG21/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") and [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect"), [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") can be resized without [assistive technology](https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents") up to 200 percent without loss of content or functionality.',
				bodyPlain:
					'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: 'Images of Text',
				level: 'AA',
				bodyHTML:
					'<p>If the technologies being used can achieve the visual presentation, <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-4" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> is used to convey information rather than <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-3" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> except for the following: </p> <dl> <dt>Customizable</dt> <dd> <p>The image of text can be <a href="https://www.w3.org/TR/WCAG21/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="the font, size, color, and background can be set">visually customized</a> to the user\'s requirements; </p> </dd> <dt>Essential</dt> <dd> <p>A particular presentation of text is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed. </p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-3"><div role="heading" class="note-title marker" id="h-note-3" aria-level="5"><span>Note</span></div><p class="">Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'If the technologies being used can achieve the visual presentation, [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") is used to convey information rather than [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") except for the following:\n\n<dl><dt>Customizable</dt><dd><p>The image of text can be <a href="https://www.w3.org/TR/WCAG21/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="the font, size, color, and background can be set">visually customized</a> to the user\'s requirements;</p></dd><dt>Essential</dt><dd><p>A particular presentation of text is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</p></dd></dl>\n\nNote\n\nLogotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					"If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:\n\nCustomizable\n\nThe image of text can be visually customized to the user's requirements;\n\nEssential\n\nA particular presentation of text is essential to the information being conveyed.\n\nNoteLogotypes (text that is part of a logo or brand name) are considered essential.",
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'Contrast (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p>The visual presentation of <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-5" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-4" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> has a <a href="https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-2" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 7:1, except for the following: </p> <dl> <dt>Large Text</dt> <dd> <p><a href="https://www.w3.org/TR/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1; </p> </dd> <dt>Incidental</dt> <dd> <p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. </p> </dd> <dt>Logotypes</dt> <dd> <p>Text that is part of a logo or brand name has no contrast requirement.</p> </dd> </dl>',
				bodyMarkdown:
					'The visual presentation of [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") and [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") has a [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 7:1, except for the following:\n\n<dl><dt>Large Text</dt><dd><p><a href="https://www.w3.org/TR/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1;</p></dd><dt>Incidental</dt><dd><p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></dd><dt>Logotypes</dt><dd><p>Text that is part of a logo or brand name has no contrast requirement.</p></dd></dl>',
				bodyPlain:
					'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:\n\nLarge Text\n\nLarge-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;\n\nIncidental\n\nText or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant\nother visual content, have no contrast requirement.\n\nLogotypes\n\nText that is part of a logo or brand name has no contrast requirement.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: 'Low or No Background Audio',
				level: 'AAA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-8" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-3" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a href="https://www.w3.org/TR/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-2" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: </p> <dl> <dt>No Background</dt> <dd> <p>The audio does not contain background sounds.</p> </dd> <dt>Turn Off</dt> <dd> <p>The background sounds can be turned off.</p> </dd> <dt>20 dB</dt> <dd> <p>The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. </p> <div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>Note</span></div><p class="">Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content. </p></div> </dd> </dl>',
				bodyMarkdown:
					'For [prerecorded](https://www.w3.org/TR/WCAG21/#dfn-prerecorded "information that is not live") [audio-only](https://www.w3.org/TR/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") content that (1) contains primarily speech in the foreground, (2) is not an audio [CAPTCHA](https://www.w3.org/TR/WCAG21/#dfn-captcha "initialism for \\"Completely Automated Public Turing test to tell Computers and Humans Apart\\"") or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:\n\n<dl><dt>No Background</dt><dd><p>The audio does not contain background sounds.</p></dd><dt>Turn Off</dt><dd><p>The background sounds can be turned off.</p></dd><dt>20 dB</dt><dd><p>The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.</p><div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>Note</span></div><p class="">Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.</p></div></dd></dl>',
				bodyPlain:
					'For prerecorded\naudio-only content that (1) contains primarily speech in the foreground, (2) is not an audio\nCAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression\nsuch as singing or rapping, at least one of the following is true:\n\nNo Background\n\nThe audio does not contain background sounds.\n\nTurn Off\n\nThe background sounds can be turned off.\n\n20 dB\n\nThe background sounds are at least 20 decibels lower than the foreground speech content,\nwith the exception of occasional sounds that last for only one or two seconds.\n\nNotePer the definition of "decibel," background sound that meets this requirement will\nbe approximately four times quieter than the foreground speech content.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: 'Visual Presentation',
				level: 'AAA',
				bodyHTML:
					'<p>For the visual presentation of <a href="https://www.w3.org/TR/WCAG21/#dfn-blocks-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blocks-of-text-1" title="more than one sentence of text">blocks of text</a>, a <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-2" title="process or technique for achieving a result">mechanism</a> is available to achieve the following: </p> <ul> <li>Foreground and background colors can be selected by the user.</li> <li>Width is no more than 80 characters or glyphs (40 if CJK).</li> <li>Text is not justified (aligned to both the left and the right margins).</li> <li>Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.</li> <li>Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="https://www.w3.org/TR/WCAG21/#dfn-on-a-full-screen-window" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-on-a-full-screen-window-1" title="on the most common sized desktop/laptop display with the viewport maximized">on a full-screen window</a>.</li> </ul>',
				bodyMarkdown:
					'For the visual presentation of [blocks of text](https://www.w3.org/TR/WCAG21/#dfn-blocks-of-text "more than one sentence of text"), a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available to achieve the following:\n\n-   Foreground and background colors can be selected by the user.\n-   Width is no more than 80 characters or glyphs (40 if CJK).\n-   Text is not justified (aligned to both the left and the right margins).\n-   Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.\n-   Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text [on a full-screen window](https://www.w3.org/TR/WCAG21/#dfn-on-a-full-screen-window "on the most common sized desktop/laptop display with the viewport maximized").',
				bodyPlain:
					'For the visual presentation of blocks of text, a mechanism is available to achieve the following:\n\nForeground and background colors can be selected by the user. \nWidth is no more than 80 characters or glyphs (40 if CJK). \nText is not justified (aligned to both the left and the right margins). \nLine spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing. \nText can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: 'Images of Text (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-5" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">Images of text</a> are only used for <a href="https://www.w3.org/TR/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-4" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a> or where a particular presentation of <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-6" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-3" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed. </p> <div class="note" role="note" id="issue-container-generatedID-5"><div role="heading" class="note-title marker" id="h-note-5" aria-level="5"><span>Note</span></div><p class="">Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'[Images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") are only used for [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration "serving only an aesthetic purpose, providing no information, and having no functionality") or where a particular presentation of [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") to the information being conveyed.\n\nNote\n\nLogotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.\n\nNoteLogotypes (text that is part of a logo or brand name) are considered essential.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html',
			},
			'1.4.10': {
				id: '1.4.10',
				title: 'Reflow',
				level: 'AA',
				bodyHTML:
					'<p>Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:</p> <ul> <li>Vertical scrolling content at a width equivalent to 320 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-1" title="visual angle of about 0.0213 degrees">CSS pixels</a>;</li> <li>Horizontal scrolling content at a height equivalent to 256 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-2" title="visual angle of about 0.0213 degrees">CSS pixels</a>.</li> </ul> <p>Except for parts of the content which require two-dimensional layout for usage or meaning.</p> <div class="note" role="note" id="issue-container-generatedID-6"><div role="heading" class="note-title marker" id="h-note-6" aria-level="5"><span>Note</span></div><p class="">320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.</p></div> <div class="note" role="note" id="issue-container-generatedID-7"><div role="heading" class="note-title marker" id="h-note-7" aria-level="5"><span>Note</span></div><p class="">Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.</p></div>',
				bodyMarkdown:
					'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:\n\n-   Vertical scrolling content at a width equivalent to 320 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels "visual angle of about 0.0213 degrees");\n-   Horizontal scrolling content at a height equivalent to 256 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels "visual angle of about 0.0213 degrees").\n\nExcept for parts of the content which require two-dimensional layout for usage or meaning.\n\nNote\n\n320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.\n\nNote\n\nExamples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.',
				bodyPlain:
					'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:\n\nVertical scrolling content at a width equivalent to 320 CSS pixels;\nHorizontal scrolling content at a height equivalent to 256 CSS pixels.\n\nExcept for parts of the content which require two-dimensional layout for usage or meaning.\n\nNote320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.\n\nNoteExamples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html',
			},
			'1.4.11': {
				id: '1.4.11',
				title: 'Non-text Contrast',
				level: 'AA',
				bodyHTML:
					'<p>The visual <a href="https://www.w3.org/TR/WCAG21/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-2" title="rendering of the content in a form to be perceived by users">presentation</a> of the following have a <a href="https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-3" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 3:1 against adjacent color(s):</p> <dl> <dt>User Interface Components</dt> <dd>Visual information required to identify <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes">states</a>, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;</dd> <dt>Graphical Objects</dt> <dd>Parts of graphics required to understand the content, except when a particular presentation of graphics is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd> </dl>',
				bodyMarkdown:
					'The visual [presentation](https://www.w3.org/TR/WCAG21/#dfn-presentation "rendering of the content in a form to be perceived by users") of the following have a [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 3:1 against adjacent color(s):\n\n<dl><dt>User Interface Components</dt><dd>Visual information required to identify <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes">states</a>, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;</dd><dt>Graphical Objects</dt><dd>Parts of graphics required to understand the content, except when a particular presentation of graphics is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd></dl>',
				bodyPlain:
					'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):\n\nUser Interface Components\n\nVisual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;\n\nGraphical Objects\n\nParts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html',
			},
			'1.4.12': {
				id: '1.4.12',
				title: 'Text Spacing',
				level: 'AA',
				bodyHTML:
					'<p>In content implemented using markup languages that support the following <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-7" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> <a href="https://www.w3.org/TR/WCAG21/#dfn-style-properties" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-style-properties-1" title="property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents">style properties</a>, no loss of content or functionality occurs by setting all of the following and by changing no other style property:</p> <ul> <li>Line height (line spacing) to at least 1.5 times the font size;</li> <li>Spacing following paragraphs to at least 2 times the font size;</li> <li>Letter spacing (tracking) to at least 0.12 times the font size;</li> <li>Word spacing to at least 0.16 times the font size.</li> </ul> <p>Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.</p>',
				bodyMarkdown:
					'In content implemented using markup languages that support the following [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") [style properties](https://www.w3.org/TR/WCAG21/#dfn-style-properties "property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents"), no loss of content or functionality occurs by setting all of the following and by changing no other style property:\n\n-   Line height (line spacing) to at least 1.5 times the font size;\n-   Spacing following paragraphs to at least 2 times the font size;\n-   Letter spacing (tracking) to at least 0.12 times the font size;\n-   Word spacing to at least 0.16 times the font size.\n\nException: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
				bodyPlain:
					'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:\n\nLine height (line spacing) to at least 1.5 times the font size;\nSpacing following paragraphs to at least 2 times the font size;\nLetter spacing (tracking) to at least 0.12 times the font size;\nWord spacing to at least 0.16 times the font size.\n\nException: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html',
			},
			'1.4.13': {
				id: '1.4.13',
				title: 'Content on Hover or Focus',
				level: 'AA',
				bodyHTML:
					'<p>Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:</p> <dl> <dt>Dismissible</dt> <dd>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="process or technique for achieving a result">mechanism</a> is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an <a href="https://www.w3.org/TR/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="information provided by the user that is not accepted">input error</a> or does not obscure or replace other content;</dd> <dt>Hoverable</dt> <dd>If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</dd> <dt>Persistent</dt> <dd>The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</dd> </dl> <p>Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.</p> <div class="note" role="note" id="issue-container-generatedID-8"><div role="heading" class="note-title marker" id="h-note-8" aria-level="5"><span>Note</span></div><p class="">Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <a href="https://www.w3.org/TR/html/dom.html#the-title-attribute"><code>title</code> attribute</a>.</p></div> <div class="note" role="note" id="issue-container-generatedID-9"><div role="heading" class="note-title marker" id="h-note-9" aria-level="5"><span>Note</span></div><p class="">Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.</p></div>',
				bodyMarkdown:
					'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:\n\n<dl><dt>Dismissible</dt><dd>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="process or technique for achieving a result">mechanism</a> is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an <a href="https://www.w3.org/TR/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="information provided by the user that is not accepted">input error</a> or does not obscure or replace other content;</dd><dt>Hoverable</dt><dd>If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</dd><dt>Persistent</dt><dd>The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</dd></dl>\n\nException: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.\n\nNote\n\nExamples of additional content controlled by the user agent include browser tooltips created through use of the HTML [`title` attribute](https://www.w3.org/TR/html/dom.html#the-title-attribute).\n\nNote\n\nCustom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.',
				bodyPlain:
					'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:\n\nDismissible\nA mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;\n\nHoverable\nIf pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;\n\nPersistent\nThe additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.\n\nException: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.\n\nNoteExamples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute.\nNoteCustom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'Keyboard',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-1" title="processes and outcomes achievable through user action">functionality</a> of the content is operable through a <a href="https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-1" title="interface used by software to obtain keystroke input">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. </p> <div class="note" role="note" id="issue-container-generatedID-10"><div role="heading" class="note-title marker" id="h-note-10" aria-level="5"><span>Note</span></div><p class="">This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not. </p></div> <div class="note" role="note" id="issue-container-generatedID-11"><div role="heading" class="note-title marker" id="h-note-11" aria-level="5"><span>Note</span></div><p class="">This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation. </p></div>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG21/#dfn-functionality "processes and outcomes achievable through user action") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface "interface used by software to obtain keystroke input") without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints.\n\nNote\n\nThis exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.\n\nNote\n\nThis does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
				bodyPlain:
					"All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying\nfunction requires input that depends on the path of the user's movement and not just\nthe endpoints.\n\nNoteThis exception relates to the underlying function, not the input technique. For example,\nif using handwriting to enter text, the input technique (handwriting) requires path-dependent\ninput but the underlying function (text input) does not.\n\nNoteThis does not forbid and should not discourage providing mouse input or other input\nmethods in addition to keyboard operation.",
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'No Keyboard Trap',
				level: 'A',
				bodyHTML:
					'<p>If keyboard focus can be moved to a component of the page using a <a href="https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-2" title="interface used by software to obtain keystroke input">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. </p> <div class="note" role="note" id="issue-container-generatedID-12"><div role="heading" class="note-title marker" id="h-note-12" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG21/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'If keyboard focus can be moved to a component of the page using a [keyboard interface](https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface "interface used by software to obtain keystroke input"), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).',
				bodyPlain:
					"If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface,\nand, if it requires more than unmodified arrow or tab keys or other standard exit\nmethods, the user is advised of the method for moving focus away.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'Keyboard (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-2" title="processes and outcomes achievable through user action">functionality</a> of the content is operable through a <a href="https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-3" title="interface used by software to obtain keystroke input">keyboard interface</a> without requiring specific timings for individual keystrokes. </p>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG21/#dfn-functionality "processes and outcomes achievable through user action") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG21/#dfn-keyboard-interface "interface used by software to obtain keystroke input") without requiring specific timings for individual keystrokes.',
				bodyPlain:
					'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html',
			},
			'2.1.4': {
				id: '2.1.4',
				title: 'Character Key Shortcuts',
				level: 'A',
				bodyHTML:
					'<p>If a <a href="https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-shortcuts-1" title="alternative means of triggering an action by the pressing of one or more keys">keyboard shortcut</a> is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:</p> <dl> <dt>Turn off</dt> <dd>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="process or technique for achieving a result">mechanism</a> is available to turn the shortcut off;</dd> <dt>Remap</dt> <dd>A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);</dd> <dt>Active only on focus</dt> <dd>The keyboard shortcut for a <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> is only active when that component has focus.</dd> </dl>',
				bodyMarkdown:
					'If a [keyboard shortcut](https://www.w3.org/TR/WCAG21/#dfn-keyboard-shortcuts "alternative means of triggering an action by the pressing of one or more keys") is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:\n\n<dl><dt>Turn off</dt><dd>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="process or technique for achieving a result">mechanism</a> is available to turn the shortcut off;</dd><dt>Remap</dt><dd>A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);</dd><dt>Active only on focus</dt><dd>The keyboard shortcut for a <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> is only active when that component has focus.</dd></dl>',
				bodyPlain:
					'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:\n\nTurn off\nA mechanism is available to turn the shortcut off;\n\nRemap\nA mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);\n\nActive only on focus\nThe keyboard shortcut for a user interface component is only active when that component has focus.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'Timing Adjustable',
				level: 'A',
				bodyHTML:
					'<p>For each time limit that is set by the content, at least one of the following is true:</p> <dl> <dt>Turn off</dt> <dd> <p>The user is allowed to turn off the time limit before encountering it; or</p> </dd> <dt>Adjust</dt> <dd> <p>The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or </p> </dd> <dt>Extend</dt> <dd> <p>The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or </p> </dd> <dt>Real-time Exception</dt> <dd> <p>The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or </p> </dd> <dt>Essential Exception</dt> <dd> <p>The time limit is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> and extending it would invalidate the activity; or </p> </dd> <dt>20 Hour Exception</dt> <dd> <p>The time limit is longer than 20 hours.</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-13"><div role="heading" class="note-title marker" id="h-note-13" aria-level="5"><span>Note</span></div><p class="">This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="https://www.w3.org/TR/WCAG21/#on-focus">Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action. </p></div>',
				bodyMarkdown:
					'For each time limit that is set by the content, at least one of the following is true:\n\n<dl><dt>Turn off</dt><dd><p>The user is allowed to turn off the time limit before encountering it; or</p></dd><dt>Adjust</dt><dd><p>The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</p></dd><dt>Extend</dt><dd><p>The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or</p></dd><dt>Real-time Exception</dt><dd><p>The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</p></dd><dt>Essential Exception</dt><dd><p>The time limit is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> and extending it would invalidate the activity; or</p></dd><dt>20 Hour Exception</dt><dd><p>The time limit is longer than 20 hours.</p></dd></dl>\n\nNote\n\nThis success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus), which puts limits on changes of content or context as a result of user action.',
				bodyPlain:
					'For each time limit that is set by the content, at least one of the following is true:\n\nTurn off\n\nThe user is allowed to turn off the time limit before encountering it; or\n\nAdjust\n\nThe user is allowed to adjust the time limit before encountering it over a wide range\nthat is at least ten times the length of the default setting; or\n\nExtend\n\nThe user is warned before time expires and given at least 20 seconds to extend the\ntime limit with a simple action (for example, "press the space bar"), and the user\nis allowed to extend the time limit at least ten times; or\n\nReal-time Exception\n\nThe time limit is a required part of a real-time event (for example, an auction),\nand no alternative to the time limit is possible; or\n\nEssential Exception\n\nThe time limit is essential and extending it would invalidate the activity; or\n\n20 Hour Exception\n\nThe time limit is longer than 20 hours.\n\nNoteThis success criterion helps ensure that users can complete tasks without unexpected\nchanges in content or context that are a result of a time limit. This success criterion\nshould be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: 'Pause, Stop, Hide',
				level: 'A',
				bodyHTML:
					'<p>For moving, <a href="https://www.w3.org/TR/WCAG21/#dfn-blinking" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blinking-1" title="switch back and forth between two visual states in a way that is meant to draw attention">blinking</a>, scrolling, or auto-updating information, all of the following are true: </p> <dl> <dt>Moving, blinking, scrolling</dt> <dd> <p>For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="https://www.w3.org/TR/WCAG21/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="stopped by user request and not resumed until requested by user">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>; and </p> </dd> <dt>Auto-updating</dt> <dd> <p>For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential. </p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-14"><div role="heading" class="note-title marker" id="h-note-14" aria-level="5"><span>Note</span></div><p class="">For requirements related to flickering or flashing content, refer to <a href="https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions">Guideline 2.3</a>. </p></div> <div class="note" role="note" id="issue-container-generatedID-15"><div role="heading" class="note-title marker" id="h-note-15" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG21/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div> <div class="note" role="note" id="issue-container-generatedID-16"><div role="heading" class="note-title marker" id="h-note-16" aria-level="5"><span>Note</span></div><p class="">Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. </p></div> <div class="note" role="note" id="issue-container-generatedID-17"><div role="heading" class="note-title marker" id="h-note-17" aria-level="5"><span>Note</span></div><p class="">An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken. </p></div>',
				bodyMarkdown:
					'For moving, [blinking](https://www.w3.org/TR/WCAG21/#dfn-blinking "switch back and forth between two visual states in a way that is meant to draw attention"), scrolling, or auto-updating information, all of the following are true:\n\n<dl><dt>Moving, blinking, scrolling</dt><dd><p>For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="https://www.w3.org/TR/WCAG21/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="stopped by user request and not resumed until requested by user">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>; and</p></dd><dt>Auto-updating</dt><dd><p>For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</p></dd></dl>\n\nNote\n\nFor requirements related to flickering or flashing content, refer to [Guideline 2.3](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions).\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).\n\nNote\n\nContent that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.\n\nNote\n\nAn animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
				bodyPlain:
					"For moving, blinking, scrolling, or auto-updating information, all of the following are true:\n\nMoving, blinking, scrolling\n\nFor any moving, blinking or scrolling information that (1) starts automatically, (2)\nlasts more than five seconds, and (3) is presented in parallel with other content,\nthere is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity\nwhere it is essential; and\n\nAuto-updating\n\nFor any auto-updating information that (1) starts automatically and (2) is presented\nin parallel with other content, there is a mechanism for the user to pause, stop,\nor hide it or to control the frequency of the update unless the auto-updating is part\nof an activity where it is essential.\n\nNoteFor requirements related to flickering or flashing content, refer to Guideline 2.3.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.\n\nNoteContent that is updated periodically by software or that is streamed to the user agent\nis not required to preserve or present information that is generated or received between\nthe initiation of the pause and resuming presentation, as this may not be technically\npossible, and in many situations could be misleading to do so.\n\nNoteAn animation that occurs as part of a preload phase or similar situation can be considered\nessential if interaction cannot occur during that phase for all users and if not indicating\nprogress could confuse users or cause them to think that content was frozen or broken.",
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'No Timing',
				level: 'AAA',
				bodyHTML:
					'<p>Timing is not an <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-7" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> part of the event or activity presented by the content, except for non-interactive <a href="https://www.w3.org/TR/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-8" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-real-time-events" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-real-time-events-1" title="event that a) occurs at the same time as the viewing and b) is not completely generated by the content">real-time events</a>. </p>',
				bodyMarkdown:
					'Timing is not an [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") part of the event or activity presented by the content, except for non-interactive [synchronized media](https://www.w3.org/TR/WCAG21/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such") and [real-time events](https://www.w3.org/TR/WCAG21/#dfn-real-time-events "event that a) occurs at the same time as the viewing and b) is not completely generated by the content").',
				bodyPlain:
					'Timing is not an essential part of the event or activity presented by the content, except for non-interactive\nsynchronized media and real-time events.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: 'Interruptions',
				level: 'AAA',
				bodyHTML:
					'<p>Interruptions can be postponed or suppressed by the user, except interruptions involving an <a href="https://www.w3.org/TR/WCAG21/#dfn-emergency" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-emergency-1" title="a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property">emergency</a>. </p>',
				bodyMarkdown:
					'Interruptions can be postponed or suppressed by the user, except interruptions involving an [emergency](https://www.w3.org/TR/WCAG21/#dfn-emergency "a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property").',
				bodyPlain:
					'Interruptions can be postponed or suppressed by the user, except interruptions involving\nan emergency.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: 'Re-authenticating',
				level: 'AAA',
				bodyHTML:
					'<p>When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. </p>',
				bodyMarkdown:
					'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
				bodyPlain:
					'When an authenticated session expires, the user can continue the activity without\nloss of data after re-authenticating.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html',
			},
			'2.2.6': {
				id: '2.2.6',
				title: 'Timeouts',
				level: 'AAA',
				bodyHTML:
					'<p>Users are warned of the duration of any <a href="https://www.w3.org/TR/WCAG21/#dfn-user-inactivity" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-inactivity-1" title="any continuous period of time where no user actions occur">user inactivity</a> that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.</p> <div class="note" role="note" id="issue-container-generatedID-18"><div role="heading" class="note-title marker" id="h-note-18" aria-level="5"><span>Note</span></div><p class="">Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.</p></div>',
				bodyMarkdown:
					'Users are warned of the duration of any [user inactivity](https://www.w3.org/TR/WCAG21/#dfn-user-inactivity "any continuous period of time where no user actions occur") that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.\n\nNote\n\nPrivacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
				bodyPlain:
					'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.\n\nNotePrivacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: 'Three Flashes or Below Threshold',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-1" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="https://www.w3.org/TR/WCAG21/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-1" title="a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range">flash</a> is below the <a href="https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-general-flash-and-red-flash-thresholds-1" title="a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:">general flash and red flash thresholds</a>. </p> <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG21/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") do not contain anything that flashes more than three times in any one second period, or the [flash](https://www.w3.org/TR/WCAG21/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range") is below the [general flash and red flash thresholds](https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds "a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:").\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).',
				bodyPlain:
					"Web pages do not contain anything that flashes more than three times in any one second period,\nor the flash is below the general flash and red flash thresholds.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: 'Three Flashes',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-2" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> do not contain anything that <a href="https://www.w3.org/TR/WCAG21/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-2" title="a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range">flashes</a> more than three times in any one second period. </p>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") do not contain anything that [flashes](https://www.w3.org/TR/WCAG21/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range") more than three times in any one second period.',
				bodyPlain:
					'Web pages do not contain anything that flashes more than three times in any one second period.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html',
			},
			'2.3.3': {
				id: '2.3.3',
				title: 'Animation from Interactions',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-motion-animation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-motion-animation-1" title="addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition">Motion animation</a> triggered by interaction can be disabled, unless the animation is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-8" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the functionality or the information being conveyed.</p>',
				bodyMarkdown:
					'[Motion animation](https://www.w3.org/TR/WCAG21/#dfn-motion-animation "addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition") triggered by interaction can be disabled, unless the animation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") to the functionality or the information being conveyed.',
				bodyPlain:
					'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'Bypass Blocks',
				level: 'A',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-5" title="process or technique for achieving a result">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-3" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available to bypass blocks of content that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent").',
				bodyPlain:
					'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'Page Titled',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-4" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> have titles that describe topic or purpose. </p>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") have titles that describe topic or purpose.',
				bodyPlain: 'Web pages have titles that describe topic or purpose.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'Focus Order',
				level: 'A',
				bodyHTML:
					'<p>If a <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-5" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-navigated-sequentially" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-navigated-sequentially-1" title="navigated in the order defined for advancing focus (from one element to the next) using a keyboard interface">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. </p>',
				bodyMarkdown:
					'If a [Web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") can be [navigated sequentially](https://www.w3.org/TR/WCAG21/#dfn-navigated-sequentially "navigated in the order defined for advancing focus (from one element to the next) using a keyboard interface") and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
				bodyPlain:
					'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive\nfocus in an order that preserves meaning and operability.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'Link Purpose (In Context)',
				level: 'A',
				bodyHTML:
					'<p>The <a href="https://www.w3.org/TR/WCAG21/#dfn-purpose-of-each-link" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-purpose-of-each-link-1" title="nature of the result obtained by activating a hyperlink">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determined-link-context-1" title="additional information that can be programmatically determined from relationships with a link, combined with the link text, and presented to users in different modalities">programmatically determined link context</a>, except where the purpose of the link would be <a href="https://www.w3.org/TR/WCAG21/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-1" title="the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)">ambiguous to users in general</a>. </p>',
				bodyMarkdown:
					'The [purpose of each link](https://www.w3.org/TR/WCAG21/#dfn-purpose-of-each-link "nature of the result obtained by activating a hyperlink") can be determined from the link text alone or from the link text together with its [programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context "additional information that can be programmatically determined from relationships with a link, combined with the link text, and presented to users in different modalities"), except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG21/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)").',
				bodyPlain:
					'The purpose of each link can be determined from the link text alone or from the link text together with its\nprogrammatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: 'Multiple Ways',
				level: 'AA',
				bodyHTML:
					'<p>More than one way is available to locate a <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-6" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> within a <a href="https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-1" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="https://www.w3.org/TR/WCAG21/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-1" title="series of user actions where each action is required in order to complete an activity">process</a>. </p>',
				bodyMarkdown:
					'More than one way is available to locate a [Web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") within a [set of Web pages](https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") except where the Web Page is the result of, or a step in, a [process](https://www.w3.org/TR/WCAG21/#dfn-processes "series of user actions where each action is required in order to complete an activity").',
				bodyPlain:
					'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: 'Headings and Labels',
				level: 'AA',
				bodyHTML:
					'<p>Headings and <a href="https://www.w3.org/TR/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-1" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">labels</a> describe topic or purpose. </p>',
				bodyMarkdown:
					'Headings and [labels](https://www.w3.org/TR/WCAG21/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") describe topic or purpose.',
				bodyPlain: 'Headings and labels describe topic or purpose.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'Focus Visible',
				level: 'AA',
				bodyHTML:
					'<p>Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. </p>',
				bodyMarkdown:
					'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
				bodyPlain:
					'Any keyboard operable user interface has a mode of operation where the keyboard focus\nindicator is visible.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: 'Location',
				level: 'AAA',
				bodyHTML:
					'<p>Information about the user\'s location within a <a href="https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-2" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> is available. </p>',
				bodyMarkdown:
					'Information about the user\'s location within a [set of Web pages](https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") is available.',
				bodyPlain:
					"Information about the user's location within a set of Web pages is available.",
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'Link Purpose (Link Only)',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-6" title="process or technique for achieving a result">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="https://www.w3.org/TR/WCAG21/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-2" title="the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)">ambiguous to users in general</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG21/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)").',
				bodyPlain:
					'A mechanism is available to allow the purpose of each link to be identified from link text alone,\nexcept where the purpose of the link would be ambiguous to users in general.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'Section Headings',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-section" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-section-1" title="a self-contained portion of written content that deals with one or more related topics or thoughts">Section</a> headings are used to organize the content. </p> <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="5"><span>Note</span></div><p class="">"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content. </p></div> <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="5"><span>Note</span></div><p class="">This success criterion covers sections within writing, not <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-6" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a>. User interface components are covered under <a href="https://www.w3.org/TR/WCAG21/#name-role-value">Success Criterion 4.1.2</a>. </p></div>',
				bodyMarkdown:
					'[Section](https://www.w3.org/TR/WCAG21/#dfn-section "a self-contained portion of written content that deals with one or more related topics or thoughts") headings are used to organize the content.\n\nNote\n\n"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.\n\nNote\n\nThis success criterion covers sections within writing, not [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function"). User interface components are covered under [Success Criterion 4.1.2](https://www.w3.org/TR/WCAG21/#name-role-value).',
				bodyPlain:
					'Section headings are used to organize the content.\n\nNote"Heading" is used in its general sense and includes titles and other ways to add a\nheading to different types of content.\n\nNoteThis success criterion covers sections within writing, not user interface components. User interface components are covered under Success Criterion 4.1.2.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html',
			},
			'2.5.1': {
				id: '2.5.1',
				title: 'Pointer Gestures',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-3" title="processes and outcomes achievable through user action">functionality</a> that uses multipoint or path-based gestures for operation can be operated with a <a href="https://www.w3.org/TR/WCAG21/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-1" title="pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures">single pointer</a> without a path-based gesture, unless a multipoint or path-based gesture is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-9" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</p> <div class="note" role="note" id="issue-container-generatedID-22"><div role="heading" class="note-title marker" id="h-note-22" aria-level="5"><span>Note</span></div><p class="">This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p></div>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG21/#dfn-functionality "processes and outcomes achievable through user action") that uses multipoint or path-based gestures for operation can be operated with a [single pointer](https://www.w3.org/TR/WCAG21/#dfn-single-pointer "pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures") without a path-based gesture, unless a multipoint or path-based gesture is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform").\n\nNote\n\nThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				bodyPlain:
					'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.\n\nNoteThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html',
			},
			'2.5.2': {
				id: '2.5.2',
				title: 'Pointer Cancellation',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-4" title="processes and outcomes achievable through user action">functionality</a> that can be operated using a <a href="https://www.w3.org/TR/WCAG21/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-2" title="pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures">single pointer</a>, at least one of the following is true:</p> <dl> <dt>No Down-Event</dt> <dd>The <a href="https://www.w3.org/TR/WCAG21/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="platform event that occurs when the trigger stimulus of a pointer is depressed">down-event</a> of the pointer is not used to execute any part of the function;</dd> <dt>Abort or Undo</dt> <dd>Completion of the function is on the <a href="https://www.w3.org/TR/WCAG21/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="platform event that occurs when the trigger stimulus of a pointer is released">up-event</a>, and a <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="process or technique for achieving a result">mechanism</a> is available to abort the function before completion or to undo the function after completion;</dd> <dt>Up Reversal</dt> <dd>The up-event reverses any outcome of the preceding down-event;</dd> <dt>Essential</dt> <dd>Completing the function on the down-event is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-23"><div role="heading" class="note-title marker" id="h-note-23" aria-level="5"><span>Note</span></div><p class="">Functions that emulate a keyboard or numeric keypad key press are considered essential.</p></div> <div class="note" role="note" id="issue-container-generatedID-24"><div role="heading" class="note-title marker" id="h-note-24" aria-level="5"><span>Note</span></div><p class="">This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p></div>',
				bodyMarkdown:
					'For [functionality](https://www.w3.org/TR/WCAG21/#dfn-functionality "processes and outcomes achievable through user action") that can be operated using a [single pointer](https://www.w3.org/TR/WCAG21/#dfn-single-pointer "pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures"), at least one of the following is true:\n\n<dl><dt>No Down-Event</dt><dd>The <a href="https://www.w3.org/TR/WCAG21/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="platform event that occurs when the trigger stimulus of a pointer is depressed">down-event</a> of the pointer is not used to execute any part of the function;</dd><dt>Abort or Undo</dt><dd>Completion of the function is on the <a href="https://www.w3.org/TR/WCAG21/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="platform event that occurs when the trigger stimulus of a pointer is released">up-event</a>, and a <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="process or technique for achieving a result">mechanism</a> is available to abort the function before completion or to undo the function after completion;</dd><dt>Up Reversal</dt><dd>The up-event reverses any outcome of the preceding down-event;</dd><dt>Essential</dt><dd>Completing the function on the down-event is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</dd></dl>\n\nNote\n\nFunctions that emulate a keyboard or numeric keypad key press are considered essential.\n\nNote\n\nThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				bodyPlain:
					'For functionality that can be operated using a single pointer, at least one of the following is true:\n\nNo Down-Event\nThe down-event of the pointer is not used to execute any part of the function;\n\nAbort or Undo\nCompletion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;\n\nUp Reversal\nThe up-event reverses any outcome of the preceding down-event;\n\nEssential\nCompleting the function on the down-event is essential.\n\nNoteFunctions that emulate a keyboard or numeric keypad key press are considered essential.\n\nNoteThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html',
			},
			'2.5.3': {
				id: '2.5.3',
				title: 'Label in Name',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-7" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> with <a href="https://www.w3.org/TR/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-2" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">labels</a> that include <a href="https://www.w3.org/TR/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-8" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> or <a href="https://www.w3.org/TR/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-6" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a>, the <a href="https://www.w3.org/TR/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-2" title="text by which software can identify a component within Web content to the user">name</a> contains the text that is presented visually.</p> <div class="note" role="note" id="issue-container-generatedID-25"><div role="heading" class="note-title marker" id="h-note-25" aria-level="5"><span>Note</span></div><p class="">A best practice is to have the text of the label at the start of the name.</p></div>',
				bodyMarkdown:
					'For [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") with [labels](https://www.w3.org/TR/WCAG21/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") that include [text](https://www.w3.org/TR/WCAG21/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") or [images of text](https://www.w3.org/TR/WCAG21/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect"), the [name](https://www.w3.org/TR/WCAG21/#dfn-name "text by which software can identify a component within Web content to the user") contains the text that is presented visually.\n\nNote\n\nA best practice is to have the text of the label at the start of the name.',
				bodyPlain:
					'For user interface components with labels that include text or images of text, the name contains the text that is presented visually.\n\nNoteA best practice is to have the text of the label at the start of the name.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html',
			},
			'2.5.4': {
				id: '2.5.4',
				title: 'Motion Actuation',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-5" title="processes and outcomes achievable through user action">Functionality</a> that can be operated by device motion or user motion can also be operated by <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-8" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and responding to the motion can be disabled to prevent accidental actuation, except when:</p> <dl> <dt>Supported Interface</dt> <dd>The motion is used to operate functionality through an <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="supported by users\' assistive technologies as well as the accessibility features in browsers and other user agents">accessibility supported</a> interface;</dd> <dt>Essential</dt> <dd>The motion is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> for the function and doing so would invalidate the activity.</dd> </dl>',
				bodyMarkdown:
					'[Functionality](https://www.w3.org/TR/WCAG21/#dfn-functionality "processes and outcomes achievable through user action") that can be operated by device motion or user motion can also be operated by [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") and responding to the motion can be disabled to prevent accidental actuation, except when:\n\n<dl><dt>Supported Interface</dt><dd>The motion is used to operate functionality through an <a href="https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="supported by users\' assistive technologies as well as the accessibility features in browsers and other user agents">accessibility supported</a> interface;</dd><dt>Essential</dt><dd>The motion is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> for the function and doing so would invalidate the activity.</dd></dl>',
				bodyPlain:
					'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:\n\nSupported Interface\nThe motion is used to operate functionality through an accessibility supported interface;\n\nEssential\nThe motion is essential for the function and doing so would invalidate the activity.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html',
			},
			'2.5.5': {
				id: '2.5.5',
				title: 'Target Size',
				level: 'AAA',
				bodyHTML:
					'<p>The size of the <a href="https://www.w3.org/TR/WCAG21/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-1" title="region of the display that will accept a pointer action, such as the interactive area of a user interface component">target</a> for <a href="https://www.w3.org/TR/WCAG21/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-1" title="input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact">pointer inputs</a> is at least 44 by 44 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-3" title="visual angle of about 0.0213 degrees">CSS pixels</a> except when:</p> <dl> <dt>Equivalent</dt> <dd>The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;</dd> <dt>Inline</dt> <dd>The target is in a sentence or block of text;</dd> <dt>User Agent Control</dt> <dd>The size of the target is determined by the user agent and is not modified by the author;</dd> <dt>Essential</dt> <dd>A particular presentation of the target is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd> </dl>',
				bodyMarkdown:
					'The size of the [target](https://www.w3.org/TR/WCAG21/#dfn-targets "region of the display that will accept a pointer action, such as the interactive area of a user interface component") for [pointer inputs](https://www.w3.org/TR/WCAG21/#dfn-pointer-inputs "input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact") is at least 44 by 44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels "visual angle of about 0.0213 degrees") except when:\n\n<dl><dt>Equivalent</dt><dd>The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;</dd><dt>Inline</dt><dd>The target is in a sentence or block of text;</dd><dt>User Agent Control</dt><dd>The size of the target is determined by the user agent and is not modified by the author;</dd><dt>Essential</dt><dd>A particular presentation of the target is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd></dl>',
				bodyPlain:
					'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:\n\nEquivalent \nThe target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;\nInline \nThe target is in a sentence or block of text;\nUser Agent Control \nThe size of the target is determined by the user agent and is not modified by the author;\nEssential \nA particular presentation of the target is essential to the information being conveyed.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html',
			},
			'2.5.6': {
				id: '2.5.6',
				title: 'Concurrent Input Mechanisms',
				level: 'AAA',
				bodyHTML:
					'<p>Web content does not restrict use of input modalities available on a platform except where the restriction is <a href="https://www.w3.org/TR/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-13" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>, required to ensure the security of the content, or required to respect user settings.</p>',
				bodyMarkdown:
					'Web content does not restrict use of input modalities available on a platform except where the restriction is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform"), required to ensure the security of the content, or required to respect user settings.',
				bodyPlain:
					'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'Language of Page',
				level: 'A',
				bodyHTML:
					'<p>The default <a href="https://www.w3.org/TR/WCAG21/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-1" title="language that is spoken, written or signed (through visual or tactile means) to communicate with humans">human language</a> of each <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-7" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-5" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>. </p>',
				bodyMarkdown:
					'The default [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans") of each [Web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'The default human language of each Web page can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: 'Language of Parts',
				level: 'AA',
				bodyHTML:
					'<p>The <a href="https://www.w3.org/TR/WCAG21/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-2" title="language that is spoken, written or signed (through visual or tactile means) to communicate with humans">human language</a> of each passage or phrase in the content can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-6" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. </p>',
				bodyMarkdown:
					'The [human language](https://www.w3.org/TR/WCAG21/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans") of each passage or phrase in the content can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
				bodyPlain:
					'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words\nor phrases that have become part of the vernacular of the immediately surrounding\ntext.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: 'Unusual Words',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-8" title="process or technique for achieving a result">mechanism</a> is available for identifying specific definitions of words or phrases <a href="https://www.w3.org/TR/WCAG21/#dfn-used-in-an-unusual-or-restricted-way" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-used-in-an-unusual-or-restricted-way-1" title="words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly">used in an unusual or restricted way</a>, including <a href="https://www.w3.org/TR/WCAG21/#dfn-idioms" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-idioms-1" title="phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning">idioms</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-jargon" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-jargon-1" title="words used in a particular way by people in a particular field">jargon</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available for identifying specific definitions of words or phrases [used in an unusual or restricted way](https://www.w3.org/TR/WCAG21/#dfn-used-in-an-unusual-or-restricted-way "words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly"), including [idioms](https://www.w3.org/TR/WCAG21/#dfn-idioms "phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning") and [jargon](https://www.w3.org/TR/WCAG21/#dfn-jargon "words used in a particular way by people in a particular field").',
				bodyPlain:
					'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: 'Abbreviations',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-9" title="process or technique for achieving a result">mechanism</a> for identifying the expanded form or meaning of <a href="https://www.w3.org/TR/WCAG21/#dfn-abbreviations" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-abbreviations-1" title="shortened form of a word, phrase, or name where the abbreviation has not become part of the language">abbreviations</a> is available. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") for identifying the expanded form or meaning of [abbreviations](https://www.w3.org/TR/WCAG21/#dfn-abbreviations "shortened form of a word, phrase, or name where the abbreviation has not become part of the language") is available.',
				bodyPlain:
					'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: 'Reading Level',
				level: 'AAA',
				bodyHTML:
					'<p>When text requires reading ability more advanced than the <a href="https://www.w3.org/TR/WCAG21/#dfn-lower-secondary-education-level" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-lower-secondary-education-level-1" title="the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of primary education">lower secondary education level</a> after removal of proper names and titles, <a href="https://www.w3.org/TR/WCAG21/#dfn-supplementary-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-supplementary-content-1" title="additional content that illustrates or clarifies the primary content">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. </p>',
				bodyMarkdown:
					'When text requires reading ability more advanced than the [lower secondary education level](https://www.w3.org/TR/WCAG21/#dfn-lower-secondary-education-level "the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of primary education") after removal of proper names and titles, [supplemental content](https://www.w3.org/TR/WCAG21/#dfn-supplementary-content "additional content that illustrates or clarifies the primary content"), or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
				bodyPlain:
					'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower\nsecondary education level, is available.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: 'Pronunciation',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-10" title="process or technique for achieving a result">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
				bodyPlain:
					'A mechanism is available for identifying specific pronunciation of words where meaning of the\nwords, in context, is ambiguous without knowing the pronunciation.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'On Focus',
				level: 'A',
				bodyHTML:
					'<p>When any <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-9" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> receives focus, it does not initiate a <a href="https://www.w3.org/TR/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-1" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">change of context</a>. </p>',
				bodyMarkdown:
					'When any [user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") receives focus, it does not initiate a [change of context](https://www.w3.org/TR/WCAG21/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously").',
				bodyPlain:
					'When any user interface component receives focus, it does not initiate a change of context.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: 'On Input',
				level: 'A',
				bodyHTML:
					'<p>Changing the setting of any <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-10" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> does not automatically cause a <a href="https://www.w3.org/TR/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-2" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">change of context</a> unless the user has been advised of the behavior before using the component. </p>',
				bodyMarkdown:
					'Changing the setting of any [user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") does not automatically cause a [change of context](https://www.w3.org/TR/WCAG21/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously") unless the user has been advised of the behavior before using the component.',
				bodyPlain:
					'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: 'Consistent Navigation',
				level: 'AA',
				bodyHTML:
					'<p>Navigational mechanisms that are repeated on multiple <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-8" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> within a <a href="https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-3" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> occur in the <a href="https://www.w3.org/TR/WCAG21/#dfn-same-relative-order" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-relative-order-1" title="same position relative to other items">same relative order</a> each time they are repeated, unless a change is initiated by the user. </p>',
				bodyMarkdown:
					'Navigational mechanisms that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") within a [set of Web pages](https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") occur in the [same relative order](https://www.w3.org/TR/WCAG21/#dfn-same-relative-order "same position relative to other items") each time they are repeated, unless a change is initiated by the user.',
				bodyPlain:
					'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: 'Consistent Identification',
				level: 'AA',
				bodyHTML:
					'<p>Components that have the <a href="https://www.w3.org/TR/WCAG21/#dfn-same-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-functionality-1" title="same result when used">same functionality</a> within a <a href="https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-4" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> are identified consistently. </p>',
				bodyMarkdown:
					'Components that have the [same functionality](https://www.w3.org/TR/WCAG21/#dfn-same-functionality "same result when used") within a [set of Web pages](https://www.w3.org/TR/WCAG21/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") are identified consistently.',
				bodyPlain:
					'Components that have the same functionality within a set of Web pages are identified consistently.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: 'Change on Request',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-3" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">Changes of context</a> are initiated only by user request or a <a href="https://www.w3.org/TR/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-11" title="process or technique for achieving a result">mechanism</a> is available to turn off such changes. </p>',
				bodyMarkdown:
					'[Changes of context](https://www.w3.org/TR/WCAG21/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously") are initiated only by user request or a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism "process or technique for achieving a result") is available to turn off such changes.',
				bodyPlain:
					'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'Error Identification',
				level: 'A',
				bodyHTML:
					'<p>If an <a href="https://www.w3.org/TR/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-2" title="information provided by the user that is not accepted">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. </p>',
				bodyMarkdown:
					'If an [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error "information provided by the user that is not accepted") is automatically detected, the item that is in error is identified and the error is described to the user in text.',
				bodyPlain:
					'If an input error is automatically detected, the item that is in error is identified and the error\nis described to the user in text.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'Labels or Instructions',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-3" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">Labels</a> or instructions are provided when content requires user input. </p>',
				bodyMarkdown:
					'[Labels](https://www.w3.org/TR/WCAG21/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") or instructions are provided when content requires user input.',
				bodyPlain:
					'Labels or instructions are provided when content requires user input.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'Error Suggestion',
				level: 'AA',
				bodyHTML:
					'<p>If an <a href="https://www.w3.org/TR/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-3" title="information provided by the user that is not accepted">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. </p>',
				bodyMarkdown:
					'If an [input error](https://www.w3.org/TR/WCAG21/#dfn-input-error "information provided by the user that is not accepted") is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
				bodyPlain:
					'If an input error is automatically detected and suggestions for correction are known, then the suggestions\nare provided to the user, unless it would jeopardize the security or purpose of the\ncontent.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: 'Error Prevention (Legal, Financial, Data)',
				level: 'AA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-9" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> that cause <a href="https://www.w3.org/TR/WCAG21/#dfn-legal-commitments" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-legal-commitments-1" title="transactions where the person incurs a legally binding obligation or benefit">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="https://www.w3.org/TR/WCAG21/#dfn-user-controllable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-controllable-1" title="data that is intended to be accessed by users">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: </p> <dl> <dt>Reversible</dt><dd>Submissions are reversible.</dd> <dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd> <dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd> </dl>',
				bodyMarkdown:
					'For [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") that cause [legal commitments](https://www.w3.org/TR/WCAG21/#dfn-legal-commitments "transactions where the person incurs a legally binding obligation or benefit") or financial transactions for the user to occur, that modify or delete [user-controllable](https://www.w3.org/TR/WCAG21/#dfn-user-controllable "data that is intended to be accessed by users") data in data storage systems, or that submit user test responses, at least one of the following is true:\n\n<dl><dt>Reversible</dt><dd>Submissions are reversible.</dd><dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd><dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd></dl>',
				bodyPlain:
					'For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of\nthe following is true:\n\nReversibleSubmissions are reversible.\nCheckedData entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmedA mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'Help',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG21/#dfn-context-sensitive-help" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-context-sensitive-help-1" title="help text that provides information related to the function currently being performed">Context-sensitive help</a> is available. </p>',
				bodyMarkdown:
					'[Context-sensitive help](https://www.w3.org/TR/WCAG21/#dfn-context-sensitive-help "help text that provides information related to the function currently being performed") is available.',
				bodyPlain: 'Context-sensitive help is available.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: 'Error Prevention (All)',
				level: 'AAA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-10" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> that require the user to submit information, at least one of the following is true: </p> <dl> <dt>Reversible</dt><dd>Submissions are reversible.</dd> <dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd> <dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd> </dl>',
				bodyMarkdown:
					'For [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") that require the user to submit information, at least one of the following is true:\n\n<dl><dt>Reversible</dt><dd>Submissions are reversible.</dd><dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd><dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd></dl>',
				bodyPlain:
					'For Web pages that require the user to submit information, at least one of the following is true:\n\nReversibleSubmissions are reversible.\nCheckedData entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmedA mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html',
			},
			'4.1.1': {
				id: '4.1.1',
				title: 'Parsing',
				level: 'A',
				bodyHTML:
					'<p>In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. </p> <div class="note" role="note" id="issue-container-generatedID-26"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>Note</span></div><p class="">This Success Criterion should be considered as always satisfied for any content using HTML or XML.</p></div> <div class="note" role="note" id="issue-container-generatedID-27"><div role="heading" class="note-title marker" id="h-note-27" aria-level="5"><span>Note</span></div><div class=""> <p>Since this criterion was written, the HTML Living Standard has adopted specific requirements governing how user agents must handle incomplete tags, incorrect element nesting, duplicate attributes, and non-unique IDs. [<cite><a class="bibref" data-link-type="biblio" href="https://www.w3.org/TR/WCAG21/#bib-html" title="HTML Standard">HTML</a></cite>]</p> <p>Although the HTML Standard treats some of these cases as non-conforming for authors, it is considered to "allow these features" for the purposes of this Success Criterion because the specification requires that user agents support handling these cases consistently. In practice, this criterion no longer provides any benefit to people with disabilities in itself.</p> <p>Issues such as missing roles due to inappropriately nested elements or incorrect states or names due to a duplicate ID are covered by different Success Criteria and should be reported under those criteria rather than as issues with 4.1.1.</p> </div></div>',
				bodyMarkdown:
					'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.\n\nNote\n\nThis Success Criterion should be considered as always satisfied for any content using HTML or XML.\n\nNote\n\nSince this criterion was written, the HTML Living Standard has adopted specific requirements governing how user agents must handle incomplete tags, incorrect element nesting, duplicate attributes, and non-unique IDs. \\[[HTML](https://www.w3.org/TR/WCAG21/#bib-html "HTML Standard")\\]\n\nAlthough the HTML Standard treats some of these cases as non-conforming for authors, it is considered to "allow these features" for the purposes of this Success Criterion because the specification requires that user agents support handling these cases consistently. In practice, this criterion no longer provides any benefit to people with disabilities in itself.\n\nIssues such as missing roles due to inappropriately nested elements or incorrect states or names due to a duplicate ID are covered by different Success Criteria and should be reported under those criteria rather than as issues with 4.1.1.',
				bodyPlain:
					'In content implemented using markup languages, elements have complete start and end\ntags, elements are nested according to their specifications, elements do not contain\nduplicate attributes, and any IDs are unique, except where the specifications allow\nthese features.\n\nNoteThis Success Criterion should be considered as always satisfied for any content using HTML or XML.\n\nNote\nSince this criterion was written, the HTML Living Standard has adopted specific requirements governing how user agents must handle incomplete tags, incorrect element nesting, duplicate attributes, and non-unique IDs. [HTML]\n\nAlthough the HTML Standard treats some of these cases as non-conforming for authors, it is considered to "allow these features" for the purposes of this Success Criterion because the specification requires that user agents support handling these cases consistently. In practice, this criterion no longer provides any benefit to people with disabilities in itself.\n\nIssues such as missing roles due to inappropriately nested elements or incorrect states or names due to a duplicate ID are covered by different Success Criteria and should be reported under those criteria rather than as issues with 4.1.1.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: 'Name, Role, Value',
				level: 'A',
				bodyHTML:
					'<p>For all <a href="https://www.w3.org/TR/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-11" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="https://www.w3.org/TR/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-3" title="text by which software can identify a component within Web content to the user">name</a> and <a href="https://www.w3.org/TR/WCAG21/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-1" title="text or number by which software can identify the function of a component within Web content">role</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-7" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-set" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-set-1" title="set by software using methods that are supported by user agents, including assistive technologies">programmatically set</a>; and notification of changes to these items is available to <a href="https://www.w3.org/TR/WCAG21/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-1" title="any software that retrieves and presents Web content for users">user agents</a>, including <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-3" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technologies</a>. </p> <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-28" aria-level="5"><span>Note</span></div><p class="">This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification. </p></div>',
				bodyMarkdown:
					'For all [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") (including but not limited to: form elements, links and components generated by scripts), the [name](https://www.w3.org/TR/WCAG21/#dfn-name "text by which software can identify a component within Web content to the user") and [role](https://www.w3.org/TR/WCAG21/#dfn-role "text or number by which software can identify the function of a component within Web content") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities"); states, properties, and values that can be set by the user can be [programmatically set](https://www.w3.org/TR/WCAG21/#dfn-programmatically-set "set by software using methods that are supported by user agents, including assistive technologies"); and notification of changes to these items is available to [user agents](https://www.w3.org/TR/WCAG21/#dfn-user-agents "any software that retrieves and presents Web content for users"), including [assistive technologies](https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents").\n\nNote\n\nThis success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
				bodyPlain:
					'For all user interface components (including but not limited to: form elements, links and components generated by scripts),\nthe name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.\n\nNoteThis success criterion is primarily for Web authors who develop or script their own\nuser interface components. For example, standard HTML controls already meet this success\ncriterion when used according to specification.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
			},
			'4.1.3': {
				id: '4.1.3',
				title: 'Status Messages',
				level: 'AA',
				bodyHTML:
					'<p>In content implemented using markup languages, <a href="https://www.w3.org/TR/WCAG21/#dfn-status-messages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-status-messages-1" title="change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors">status messages</a> can be <a href="https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-8" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> through <a href="https://www.w3.org/TR/WCAG21/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-2" title="text or number by which software can identify the function of a component within Web content">role</a> or properties such that they can be presented to the user by <a href="https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-4" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technologies</a> without receiving focus.</p>',
				bodyMarkdown:
					'In content implemented using markup languages, [status messages](https://www.w3.org/TR/WCAG21/#dfn-status-messages "change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors") can be [programmatically determined](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") through [role](https://www.w3.org/TR/WCAG21/#dfn-role "text or number by which software can identify the function of a component within Web content") or properties such that they can be presented to the user by [assistive technologies](https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents") without receiving focus.',
				bodyPlain:
					'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
				understanding: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
			},
		},
		ja: {
			'1.1.1': {
				id: '1.1.1',
				title: '非テキストコンテンツ',
				level: 'A',
				bodyHTML:
					'<p>利用者に提示されるすべての<a href="https://waic.jp/translations/WCAG21/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-1" title="プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。">非テキストコンテンツ</a>には、同等の目的を果たす<a href="https://waic.jp/translations/WCAG21/#dfn-text-alternative" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-alternative-1" title="非テキストコンテンツとプログラムで関連付けられるテキスト。又は非テキストコンテンツとプログラムで関連付けられるテキストから参照されるテキスト。プログラムで関連付けられたテキストとは、その場所を、非テキストコンテンツからプログラムによる解釈が可能なテキストである。">テキストによる代替</a>が提供されている。ただし、次の場合は除く:</p> <dl> <dt>コントロール、入力</dt> <dd><p>非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する<a href="https://waic.jp/translations/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、<a href="https://waic.jp/translations/WCAG21/#name-role-value">Success Criterion 4.1.2</a> を参照。) </p> </dd> <dt>時間依存メディア</dt> <dd><p>非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、<a href="https://waic.jp/translations/WCAG21/#time-based-media">ガイドライン 1.2</a> を参照。) </p> </dd> <dt>テスト</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p> </dd> <dt>感覚的</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="純粋な装飾ではなく、かつ、重要な情報を伝える、又は機能を果たすことを主としない、感覚的な体験。">特定の感覚的体験</a>を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p> </dd> <dt><a href="https://waic.jp/translations/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a></dt> <dd><p>非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。</p> </dd> <dt>装飾、整形、非表示</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、<a href="https://waic.jp/translations/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>が無視できるように実装されている。</p> </dd> </dl>',
				bodyMarkdown:
					'利用者に提示されるすべての[非テキストコンテンツ](https://waic.jp/translations/WCAG21/#dfn-non-text-content "プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。")には、同等の目的を果たす[テキストによる代替](https://waic.jp/translations/WCAG21/#dfn-text-alternative "非テキストコンテンツとプログラムで関連付けられるテキスト。又は非テキストコンテンツとプログラムで関連付けられるテキストから参照されるテキスト。プログラムで関連付けられたテキストとは、その場所を、非テキストコンテンツからプログラムによる解釈が可能なテキストである。")が提供されている。ただし、次の場合は除く:\n\n<dl><dt>コントロール、入力</dt><dd><p>非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する<a href="https://waic.jp/translations/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、<a href="https://waic.jp/translations/WCAG21/#name-role-value">Success Criterion 4.1.2</a> を参照。)</p></dd><dt>時間依存メディア</dt><dd><p>非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、<a href="https://waic.jp/translations/WCAG21/#time-based-media">ガイドライン 1.2</a> を参照。)</p></dd><dt>テスト</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p></dd><dt>感覚的</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="純粋な装飾ではなく、かつ、重要な情報を伝える、又は機能を果たすことを主としない、感覚的な体験。">特定の感覚的体験</a>を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p></dd><dt><a href="https://waic.jp/translations/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a></dt><dd><p>非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。</p></dd><dt>装飾、整形、非表示</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、<a href="https://waic.jp/translations/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>が無視できるように実装されている。</p></dd></dl>',
				bodyPlain:
					'利用者に提示されるすべての非テキストコンテンツには、同等の目的を果たすテキストによる代替が提供されている。ただし、次の場合は除く:\n\nコントロール、入力\n\n非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する名前 (name) を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、Success Criterion 4.1.2 を参照。) \n\n時間依存メディア\n\n非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、ガイドライン 1.2 を参照。) \n\nテスト\n\n非テキストコンテンツが、テキストで提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\n感覚的\n\n非テキストコンテンツが、特定の感覚的体験を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\nCAPTCHA\n\n非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。\n\n装飾、整形、非表示\n\n非テキストコンテンツが、純粋な装飾である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、支援技術が無視できるように実装されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/non-text-content.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: '音声のみ及び映像のみ (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-1" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-1" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか</a>含まないメディア及び収録済の<a href="https://waic.jp/translations/WCAG21/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-1" title="映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。">映像しか</a>含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、<a href="https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-1" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによる代替</a>であることが明確にラベル付けされている場合は除く:</p> <dl> <dt>収録済の音声しか含まない</dt> <dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。</p> </dd> <dt>収録済の映像しか含まない</dt> <dd><p>時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。</p> </dd> </dl>',
				bodyMarkdown:
					'[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[音声しか](https://waic.jp/translations/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")含まないメディア及び収録済の[映像しか](https://waic.jp/translations/WCAG21/#dfn-video-only "映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。")含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、[メディアによる代替](https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であることが明確にラベル付けされている場合は除く:\n\n<dl><dt>収録済の音声しか含まない</dt><dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。</p></dd><dt>収録済の映像しか含まない</dt><dd><p>時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。</p></dd></dl>',
				bodyPlain:
					'収録済の音声しか含まないメディア及び収録済の映像しか含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く:\n\n収録済の音声しか含まない\n\n時間依存メディアに対する代替コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。\n\n収録済の映像しか含まない\n\n時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'キャプション (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-1" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-2" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-1" title="音の再生技術。">音声</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-1" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>が提供されている。ただし、その同期したメディアが<a href="https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-2" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[音声](https://waic.jp/translations/WCAG21/#dfn-audio "音の再生技術。")コンテンツに対して、[キャプション](https://waic.jp/translations/WCAG21/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の音声コンテンツに対して、キャプションが提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/captions-prerecorded.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: '音声解説、又はメディアに対する代替 (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-2" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれている<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-3" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-1" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-2" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツ又は<a href="https://waic.jp/translations/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-1" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>が提供されている。ただし、その同期したメディアが<a href="https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-3" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれている[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG21/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[時間依存メディアに対する代替](https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツ又は[音声解説](https://waic.jp/translations/WCAG21/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG21/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				bodyPlain:
					'同期したメディアに含まれている収録済の映像コンテンツに対して、時間依存メディアに対する代替コンテンツ又は音声解説が提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'キャプション (ライブ)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-3" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG21/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-1" title="現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。">ライブ</a>の<a href="https://waic.jp/translations/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-2" title="音の再生技術。">音声</a>コンテンツに対して<a href="https://waic.jp/translations/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-2" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[ライブ](https://waic.jp/translations/WCAG21/#dfn-live "現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。")の[音声](https://waic.jp/translations/WCAG21/#dfn-audio "音の再生技術。")コンテンツに対して[キャプション](https://waic.jp/translations/WCAG21/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべてのライブの音声コンテンツに対してキャプションが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/captions-live.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: '音声解説 (収録済)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-4" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-4" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-2" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-2" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG21/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[音声解説](https://waic.jp/translations/WCAG21/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の映像コンテンツに対して、音声解説が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/audio-description-prerecorded.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: '手話 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-5" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-5" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-3" title="音の再生技術。">音声</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-sign-language-interpretation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-sign-language-interpretation-1" title="ある言語、通常は話されている言語を、手話に訳すこと。">手話通訳</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[音声](https://waic.jp/translations/WCAG21/#dfn-audio "音の再生技術。")コンテンツに対して、[手話通訳](https://waic.jp/translations/WCAG21/#dfn-sign-language-interpretation "ある言語、通常は話されている言語を、手話に訳すこと。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の音声コンテンツに対して、手話通訳が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/sign-language-prerecorded.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: '拡張音声解説 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p>前景音の合間が、<a href="https://waic.jp/translations/WCAG21/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-3" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>で映像の意味を伝達するのに不十分な場合、<a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-6" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-6" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-3" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-extended-audio-description" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-extended-audio-description-1" title="映像を一時停止することで追加の説明を付加するための時間を確保し、視聴覚提示に付加した音声解説。">拡張音声解説</a>が提供されている。</p>',
				bodyMarkdown:
					'前景音の合間が、[音声解説](https://waic.jp/translations/WCAG21/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")で映像の意味を伝達するのに不十分な場合、[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG21/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[拡張音声解説](https://waic.jp/translations/WCAG21/#dfn-extended-audio-description "映像を一時停止することで追加の説明を付加するための時間を確保し、視聴覚提示に付加した音声解説。")が提供されている。',
				bodyPlain:
					'前景音の合間が、音声解説で映像の意味を伝達するのに不十分な場合、同期したメディアに含まれているすべての収録済の映像コンテンツに対して、拡張音声解説が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/extended-audio-description-prerecorded.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'メディアに対する代替 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p>すべての<a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-7" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-7" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>及びすべての収録済の<a href="https://waic.jp/translations/WCAG21/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-2" title="映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。">映像しか含まない</a>メディアに対して、<a href="https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-3" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツが提供されている。</p>',
				bodyMarkdown:
					'すべての[収録済の](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")及びすべての収録済の[映像しか含まない](https://waic.jp/translations/WCAG21/#dfn-video-only "映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。")メディアに対して、[時間依存メディアに対する代替](https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツが提供されている。',
				bodyPlain:
					'すべての収録済の同期したメディア及びすべての収録済の映像しか含まないメディアに対して、時間依存メディアに対する代替コンテンツが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/media-alternative-prerecorded.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: '音声のみ (ライブ)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-2" title="現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。">ライブ</a>の<a href="https://waic.jp/translations/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-2" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか含まない</a>コンテンツに対して、それと同等の情報を提示する、<a href="https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-4" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアの代替</a>コンテンツが提供されている。</p>',
				bodyMarkdown:
					'[ライブ](https://waic.jp/translations/WCAG21/#dfn-live "現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。")の[音声しか含まない](https://waic.jp/translations/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")コンテンツに対して、それと同等の情報を提示する、[時間依存メディアの代替](https://waic.jp/translations/WCAG21/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツが提供されている。',
				bodyPlain:
					'ライブの音声しか含まないコンテンツに対して、それと同等の情報を提示する、時間依存メディアの代替コンテンツが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/audio-only-live.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: '情報及び関係性',
				level: 'A',
				bodyHTML:
					'<p>何らかの形で<a href="https://waic.jp/translations/WCAG21/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-1" title="rendering of the content in a form to be perceived by users">提示</a>されている情報、<a href="https://waic.jp/translations/WCAG21/#dfn-structure" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-structure-1" title="ウェブページの各部を相互の関係性によりまとめる方法論。一連のウェブページをまとめる方法論。">構造</a>、及び<a href="https://waic.jp/translations/WCAG21/#dfn-relationships" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-relationships-1" title="コンテンツの異なる部分間における意味のあるつながり。">関係性</a>は、<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-1" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である、又はテキストで提供されている。</p>',
				bodyMarkdown:
					'何らかの形で[提示](https://waic.jp/translations/WCAG21/#dfn-presentation "rendering of the content in a form to be perceived by users")されている情報、[構造](https://waic.jp/translations/WCAG21/#dfn-structure "ウェブページの各部を相互の関係性によりまとめる方法論。一連のウェブページをまとめる方法論。")、及び[関係性](https://waic.jp/translations/WCAG21/#dfn-relationships "コンテンツの異なる部分間における意味のあるつながり。")は、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である、又はテキストで提供されている。',
				bodyPlain:
					'何らかの形で提示されている情報、構造、及び関係性は、プログラムによる解釈が可能である、又はテキストで提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/info-and-relationships.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: '意味のあるシーケンス',
				level: 'A',
				bodyHTML:
					'<p>コンテンツが提示されている順序が意味に影響を及ぼす場合には、<a href="https://waic.jp/translations/WCAG21/#dfn-correct-reading-sequence" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-correct-reading-sequence-1" title="コンテンツの意味を変更せずに、単語及び段落が提示されるシーケンス。">正しく読むシーケンス</a>は<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-2" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'コンテンツが提示されている順序が意味に影響を及ぼす場合には、[正しく読むシーケンス](https://waic.jp/translations/WCAG21/#dfn-correct-reading-sequence "コンテンツの意味を変更せずに、単語及び段落が提示されるシーケンス。")は[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'コンテンツが提示されている順序が意味に影響を及ぼす場合には、正しく読むシーケンスはプログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/meaningful-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: '感覚的な特徴',
				level: 'A',
				bodyHTML:
					'<p>コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。</p> <div class="note" role="note" id="issue-container-generatedID"><div role="heading" class="note-title marker" id="h-note" aria-level="5"><span>注記</span></div><p class="">色に関する要件は、<a href="https://waic.jp/translations/WCAG21/#distinguishable">ガイドライン 1.4</a> を参照。</p></div>',
				bodyMarkdown:
					'コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。\n\n注記\n\n色に関する要件は、[ガイドライン 1.4](https://waic.jp/translations/WCAG21/#distinguishable) を参照。',
				bodyPlain:
					'コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。\n\n注記色に関する要件は、ガイドライン 1.4 を参照。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/sensory-characteristics.html',
			},
			'1.3.4': {
				id: '1.3.4',
				title: '表示の向き',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-1" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</p> <div class="note" role="note" id="issue-container-generatedID-0"><div role="heading" class="note-title marker" id="h-note-0" aria-level="5"><span>注記</span></div><p class="">特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。</p></div>',
				bodyMarkdown:
					'コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な場合は除く。\n\n注記\n\n特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。',
				bodyPlain:
					'コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが必要不可欠な場合は除く。\n\n注記特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/orientation.html',
			},
			'1.3.5': {
				id: '1.3.5',
				title: '入力目的の特定',
				level: 'AA',
				bodyHTML:
					'<p>利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合に<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-3" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である:</p> <ul> <li>入力フィールドが、<a href="https://waic.jp/translations/WCAG21/#input-purposes">ユーザインタフェース コンポーネントの入力目的の節</a>で示される目的を提供している、 かつ</li> <li>フォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。</li> </ul>',
				bodyMarkdown:
					'利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合に[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である:\n\n-   入力フィールドが、[ユーザインタフェース コンポーネントの入力目的の節](https://waic.jp/translations/WCAG21/#input-purposes)で示される目的を提供している、 かつ\n-   フォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。',
				bodyPlain:
					'利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合にプログラムによる解釈が可能である:\n\n入力フィールドが、ユーザインタフェース コンポーネントの入力目的の節で示される目的を提供している、 かつ\nフォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/identify-input-purpose.html',
			},
			'1.3.6': {
				id: '1.3.6',
				title: '目的の特定',
				level: 'AAA',
				bodyHTML:
					'<p>マークアップ言語で実装されたコンテンツでは、<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-1" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>、アイコン、<a href="https://waic.jp/translations/WCAG21/#dfn-regions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-regions-1" title="コンテンツの知覚可能、プログラムによる解釈が可能なセクション">領域</a>の目的は<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-4" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'マークアップ言語で実装されたコンテンツでは、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")、アイコン、[領域](https://waic.jp/translations/WCAG21/#dfn-regions "コンテンツの知覚可能、プログラムによる解釈が可能なセクション")の目的は[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'マークアップ言語で実装されたコンテンツでは、ユーザインタフェース コンポーネント、アイコン、領域の目的はプログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/identify-purpose.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: '色の使用',
				level: 'A',
				bodyHTML:
					'<p>色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。</p> <div class="note" role="note" id="issue-container-generatedID-1"><div role="heading" class="note-title marker" id="h-note-1" aria-level="5"><span>注記</span></div><p class="">この達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、<a href="https://waic.jp/translations/WCAG21/#adaptable">ガイドライン 1.3</a> で網羅されている。</p></div>',
				bodyMarkdown:
					'色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。\n\n注記\n\nこの達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、[ガイドライン 1.3](https://waic.jp/translations/WCAG21/#adaptable) で網羅されている。',
				bodyPlain:
					'色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。\n\n注記この達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、ガイドライン 1.3 で網羅されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/use-of-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: '音声の制御',
				level: 'A',
				bodyHTML:
					'<p>ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-1" title="結果を得るためのプロセス又は手法。">メカニズム</a>、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。</p> <div class="note" role="note" id="issue-container-generatedID-2"><div role="heading" class="note-title marker" id="h-note-2" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG21/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止する[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG21/#cc5)を参照。',
				bodyPlain:
					'ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止するメカニズム、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/audio-control.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'コントラスト (最低限)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-2" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-1" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>の視覚的提示に、少なくとも 4.5:1 の<a href="https://waic.jp/translations/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-1" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。ただし、次の場合は除く:</p> <dl> <dt>大きな文字</dt> <dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。</p> </dd> <dt> 付随的</dt> <dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p> </dd> <dt>ロゴタイプ</dt> <dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p> </dd> </dl>',
				bodyMarkdown:
					'[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")及び[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")の視覚的提示に、少なくとも 4.5:1 の[コントラスト比](https://waic.jp/translations/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。ただし、次の場合は除く:\n\n<dl><dt>大きな文字</dt><dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。</p></dd><dt>付随的</dt><dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></dd><dt>ロゴタイプ</dt><dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></dd></dl>',
				bodyPlain:
					'テキスト及び文字画像の視覚的提示に、少なくとも 4.5:1 のコントラスト比がある。ただし、次の場合は除く:\n\n大きな文字\n\nサイズの大きなテキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。\n\n付随的\n\nテキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n\nロゴタイプ\n\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/contrast-minimum.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'テキストのサイズ変更',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-3" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-2" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>を除き、<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-3" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>は、コンテンツ又は機能を損なうことなく、<a href="https://waic.jp/translations/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-2" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>なしで 200％ までサイズ変更できる。</p>',
				bodyMarkdown:
					'[キャプション](https://waic.jp/translations/WCAG21/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")及び[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")を除き、[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")は、コンテンツ又は機能を損なうことなく、[支援技術](https://waic.jp/translations/WCAG21/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")なしで 200％ までサイズ変更できる。',
				bodyPlain:
					'キャプション及び文字画像を除き、テキストは、コンテンツ又は機能を損なうことなく、支援技術なしで 200％ までサイズ変更できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/resize-text.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: '文字画像',
				level: 'AA',
				bodyHTML:
					'<p>使用している技術で意図した視覚的提示が可能である場合、<a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-3" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>ではなく<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-4" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>が情報伝達に用いられている。ただし、次に挙げる場合を除く:</p> <dl> <dt>カスタマイズ可能</dt> <dd><p>文字画像は、利用者の要求に応じた<a href="https://waic.jp/translations/WCAG21/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="フォント、サイズ、色、及び背景を設定できること。">視覚的なカスタマイズ</a>ができる。</p> </dd> <dt>必要不可欠</dt> <dd><p>テキストの特定の提示が、伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-3"><div role="heading" class="note-title marker" id="h-note-3" aria-level="5"><span>注記</span></div><p class="">ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'使用している技術で意図した視覚的提示が可能である場合、[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")ではなく[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")が情報伝達に用いられている。ただし、次に挙げる場合を除く:\n\n<dl><dt>カスタマイズ可能</dt><dd><p>文字画像は、利用者の要求に応じた<a href="https://waic.jp/translations/WCAG21/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="フォント、サイズ、色、及び背景を設定できること。">視覚的なカスタマイズ</a>ができる。</p></dd><dt>必要不可欠</dt><dd><p>テキストの特定の提示が、伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</p></dd></dl>\n\n注記\n\nロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられている。ただし、次に挙げる場合を除く:\n\nカスタマイズ可能\n\n文字画像は、利用者の要求に応じた視覚的なカスタマイズができる。\n\n必要不可欠\n\nテキストの特定の提示が、伝えようとする情報にとって必要不可欠である。\n\n注記ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/images-of-text.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'コントラスト (高度)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-5" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-4" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>の視覚的提示に、少なくとも 7:1 の<a href="https://waic.jp/translations/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-2" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。ただし、次の場合は除く:</p> <dl> <dt>大きな文字</dt> <dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。</p> </dd> <dt> 付随的</dt> <dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p> </dd> <dt>ロゴタイプ</dt> <dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p> </dd> </dl>',
				bodyMarkdown:
					'[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")及び[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")の視覚的提示に、少なくとも 7:1 の[コントラスト比](https://waic.jp/translations/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。ただし、次の場合は除く:\n\n<dl><dt>大きな文字</dt><dd><p><a href="https://waic.jp/translations/WCAG21/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。</p></dd><dt>付随的</dt><dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></dd><dt>ロゴタイプ</dt><dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></dd></dl>',
				bodyPlain:
					'テキスト及び文字画像の視覚的提示に、少なくとも 7:1 のコントラスト比がある。ただし、次の場合は除く:\n\n大きな文字\n\nサイズの大きなテキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。\n\n付随的\n\nテキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n\nロゴタイプ\n\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/contrast-enhanced.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: '小さな背景音、又は背景音なし',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-8" title="ライブではない情報。">収録済</a>の<a href="https://waic.jp/translations/WCAG21/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-3" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか</a>含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 <a href="https://waic.jp/translations/WCAG21/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-2" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a> 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:</p> <dl> <dt>背景音なし</dt> <dd><p>音声は背景音を含まない。</p> </dd> <dt>消音</dt> <dd><p>背景音を消すことができる。</p> </dd> <dt>20 デシベル</dt> <dd><p>背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。</p> <div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>注記</span></div><p class="">デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。</p></div> </dd> </dl>',
				bodyMarkdown:
					'[収録済](https://waic.jp/translations/WCAG21/#dfn-prerecorded "ライブではない情報。")の[音声しか](https://waic.jp/translations/WCAG21/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 [CAPTCHA](https://waic.jp/translations/WCAG21/#dfn-captcha "コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。") 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n<dl><dt>背景音なし</dt><dd><p>音声は背景音を含まない。</p></dd><dt>消音</dt><dd><p>背景音を消すことができる。</p></dd><dt>20 デシベル</dt><dd><p>背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。</p><div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>注記</span></div><p class="">デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。</p></div></dd></dl>',
				bodyPlain:
					'収録済の音声しか含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 CAPTCHA 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n背景音なし\n\n音声は背景音を含まない。\n\n消音\n\n背景音を消すことができる。\n\n20 デシベル\n\n背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。\n\n注記デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/low-or-no-background-audio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: '視覚的提示',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-blocks-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blocks-of-text-1" title="一文よりも長いテキスト。">テキストブロック</a>の視覚的提示において、次を実現する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-2" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる:</p> <ul> <li>利用者が、前景色と背景色を選択できる。</li> <li>幅が 80 字を越えない (全角文字の場合は、40 字)。</li> <li>テキストが、均等割り付けされていない (両端揃えではない)。</li> <li>段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。</li> <li>テキストは、支援技術なしで 200％までサイズ変更でき、利用者が<a href="https://waic.jp/translations/WCAG21/#dfn-on-a-full-screen-window" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-on-a-full-screen-window-1" title="最も普及したサイズのデスクトップやラップトップのディスプレイで、ビューポートを最大化した状態。">全画面表示</a>にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。</li> </ul>',
				bodyMarkdown:
					'[テキストブロック](https://waic.jp/translations/WCAG21/#dfn-blocks-of-text "一文よりも長いテキスト。")の視覚的提示において、次を実現する[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる:\n\n-   利用者が、前景色と背景色を選択できる。\n-   幅が 80 字を越えない (全角文字の場合は、40 字)。\n-   テキストが、均等割り付けされていない (両端揃えではない)。\n-   段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。\n-   テキストは、支援技術なしで 200％までサイズ変更でき、利用者が[全画面表示](https://waic.jp/translations/WCAG21/#dfn-on-a-full-screen-window "最も普及したサイズのデスクトップやラップトップのディスプレイで、ビューポートを最大化した状態。")にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。',
				bodyPlain:
					'テキストブロックの視覚的提示において、次を実現するメカニズムが利用できる:\n\n利用者が、前景色と背景色を選択できる。 \n幅が 80 字を越えない (全角文字の場合は、40 字)。 \nテキストが、均等割り付けされていない (両端揃えではない)。 \n段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。 \nテキストは、支援技術なしで 200％までサイズ変更でき、利用者が全画面表示にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: '文字画像 (例外なし)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-5" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>は、<a href="https://waic.jp/translations/WCAG21/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-4" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>に用いられているか、<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-6" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>の特定の提示が伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-3" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である場合に用いられている。</p> <div class="note" role="note" id="issue-container-generatedID-5"><div role="heading" class="note-title marker" id="h-note-5" aria-level="5"><span>注記</span></div><p class="">ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")は、[純粋な装飾](https://waic.jp/translations/WCAG21/#dfn-pure-decoration "見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。")に用いられているか、[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")の特定の提示が伝えようとする情報にとって[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である場合に用いられている。\n\n注記\n\nロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'文字画像は、純粋な装飾に用いられているか、テキストの特定の提示が伝えようとする情報にとって必要不可欠である場合に用いられている。\n\n注記ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/images-of-text-no-exception.html',
			},
			'1.4.10': {
				id: '1.4.10',
				title: 'リフロー',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:</p> <ul> <li>320 <a href="https://waic.jp/translations/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-1" title="約 0.0213 度の視野角。">CSS ピクセル</a>に相当する幅の縦スクロールのコンテンツ。</li> <li>256 <a href="https://waic.jp/translations/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-2" title="約 0.0213 度の視野角。">CSS ピクセル</a>に相当する高さの横スクロールのコンテンツ。</li> </ul> <p>利用や意味の理解に 2 次元のレイアウトが必須である一部のコンテンツを除く。</p> <div class="note" role="note" id="issue-container-generatedID-6"><div role="heading" class="note-title marker" id="h-note-6" aria-level="5"><span>注記</span></div><p class="">320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。</p></div> <div class="note" role="note" id="issue-container-generatedID-7"><div role="heading" class="note-title marker" id="h-note-7" aria-level="5"><span>注記</span></div><p class="">2 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。</p></div>',
				bodyMarkdown:
					'コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:\n\n-   320 [CSS ピクセル](https://waic.jp/translations/WCAG21/#dfn-css-pixels "約 0.0213 度の視野角。")に相当する幅の縦スクロールのコンテンツ。\n-   256 [CSS ピクセル](https://waic.jp/translations/WCAG21/#dfn-css-pixels "約 0.0213 度の視野角。")に相当する高さの横スクロールのコンテンツ。\n\n利用や意味の理解に 2 次元のレイアウトが必須である一部のコンテンツを除く。\n\n注記\n\n320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。\n\n注記\n\n2 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。',
				bodyPlain:
					'コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:\n\n320 CSS ピクセルに相当する幅の縦スクロールのコンテンツ。\n256 CSS ピクセルに相当する高さの横スクロールのコンテンツ。\n\n利用や意味の理解に 2 次元のレイアウトが必須である一部のコンテンツを除く。\n\n注記320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。\n\n注記2 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/reflow.html',
			},
			'1.4.11': {
				id: '1.4.11',
				title: '非テキストのコントラスト',
				level: 'AA',
				bodyHTML:
					'<p>以下の視覚的<a href="https://waic.jp/translations/WCAG21/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-2" title="rendering of the content in a form to be perceived by users">提示</a>には、隣接した色との間で少なくとも 3:1 の<a href="https://waic.jp/translations/WCAG21/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-3" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。</p> <dl> <dt>ユーザインタフェース コンポーネント </dt> <dd><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="利用者のアクション又は自動プロセスに応答して変化し得るユーザインタフェースコンポーネントの特性を表現する動的プロパティ。">状態 (state)</a> を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。</dd> <dt>グラフィカルオブジェクト </dt> <dd>コンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</dd> </dl>',
				bodyMarkdown:
					'以下の視覚的[提示](https://waic.jp/translations/WCAG21/#dfn-presentation "rendering of the content in a form to be perceived by users")には、隣接した色との間で少なくとも 3:1 の[コントラスト比](https://waic.jp/translations/WCAG21/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。\n\n<dl><dt>ユーザインタフェース コンポーネント</dt><dd><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="利用者のアクション又は自動プロセスに応答して変化し得るユーザインタフェースコンポーネントの特性を表現する動的プロパティ。">状態 (state)</a> を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。</dd><dt>グラフィカルオブジェクト</dt><dd>コンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</dd></dl>',
				bodyPlain:
					'以下の視覚的提示には、隣接した色との間で少なくとも 3:1 のコントラスト比がある。\n\nユーザインタフェース コンポーネント \n\nユーザインタフェース コンポーネント及び状態 (state) を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。\n\nグラフィカルオブジェクト \n\nコンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで必要不可欠な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/non-text-contrast.html',
			},
			'1.4.12': {
				id: '1.4.12',
				title: 'テキストの間隔',
				level: 'AA',
				bodyHTML:
					'<p>以下の<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-7" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a><a href="https://waic.jp/translations/WCAG21/#dfn-style-properties" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-style-properties-1" title="ユーザエージェントによってコンテンツ要素が (画面、音声スピーカー、点字ディスプレイなどを介して) レンダリングされるとき、その値の提示 (フォント、色、サイズ、位置、パディング、音量、合成音声の韻律など) を定義するプロパティ。">スタイルプロパティ</a>をサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:</p> <ul> <li>行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する</li> <li>段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する</li> <li>文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する</li> <li>単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する</li> </ul> <p>例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。</p>',
				bodyMarkdown:
					'以下の[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")[スタイルプロパティ](https://waic.jp/translations/WCAG21/#dfn-style-properties "ユーザエージェントによってコンテンツ要素が (画面、音声スピーカー、点字ディスプレイなどを介して) レンダリングされるとき、その値の提示 (フォント、色、サイズ、位置、パディング、音量、合成音声の韻律など) を定義するプロパティ。")をサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:\n\n-   行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する\n-   段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する\n-   文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する\n-   単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する\n\n例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。',
				bodyPlain:
					'以下のテキストスタイルプロパティをサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:\n\n行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する\n段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する\n文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する\n単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する\n\n例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/text-spacing.html',
			},
			'1.4.13': {
				id: '1.4.13',
				title: 'ホバー又はフォーカスで表示されるコンテンツ',
				level: 'AA',
				bodyHTML:
					'<p>ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:</p> <dl> <dt>非表示にすることができる </dt> <dd>ポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にする<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="結果を得るためのプロセス又は手法。">メカニズム</a>が存在する。ただし、追加コンテンツが<a href="https://waic.jp/translations/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>を伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。</dd> <dt>ホバーすることができる </dt> <dd>ポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。</dd> <dt>表示が継続される </dt> <dd>ホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。</dd> </dl> <p>例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。</p> <div class="note" role="note" id="issue-container-generatedID-8"><div role="heading" class="note-title marker" id="h-note-8" aria-level="5"><span>注記</span></div><p class="">ユーザエージェントによって制御されている追加コンテンツの例としては、HTML の <a href="https://www.w3.org/TR/html/dom.html#the-title-attribute"><code>title</code> 属性</a>を用いて作られているブラウザのツールチップが挙げられる。</p></div> <div class="note" role="note" id="issue-container-generatedID-9"><div role="heading" class="note-title marker" id="h-note-9" aria-level="5"><span>注記</span></div><p class="">ホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。</p></div>',
				bodyMarkdown:
					'ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:\n\n<dl><dt>非表示にすることができる</dt><dd>ポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にする<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="結果を得るためのプロセス又は手法。">メカニズム</a>が存在する。ただし、追加コンテンツが<a href="https://waic.jp/translations/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>を伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。</dd><dt>ホバーすることができる</dt><dd>ポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。</dd><dt>表示が継続される</dt><dd>ホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。</dd></dl>\n\n例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。\n\n注記\n\nユーザエージェントによって制御されている追加コンテンツの例としては、HTML の [`title` 属性](https://www.w3.org/TR/html/dom.html#the-title-attribute)を用いて作られているブラウザのツールチップが挙げられる。\n\n注記\n\nホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。',
				bodyPlain:
					'ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:\n\n非表示にすることができる \nポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にするメカニズムが存在する。ただし、追加コンテンツが入力エラーを伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。\n\nホバーすることができる \nポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。\n\n表示が継続される \nホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。\n\n例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。\n\n注記ユーザエージェントによって制御されている追加コンテンツの例としては、HTML の title 属性を用いて作られているブラウザのツールチップが挙げられる。\n注記ホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/content-on-hover-or-focus.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'キーボード',
				level: 'A',
				bodyHTML:
					'<p>コンテンツのすべての<a href="https://waic.jp/translations/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-1" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a href="https://waic.jp/translations/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-1" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。</p> <div class="note" role="note" id="issue-container-generatedID-10"><div role="heading" class="note-title marker" id="h-note-10" aria-level="5"><span>注記</span></div><p class="">上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。</p></div> <div class="note" role="note" id="issue-container-generatedID-11"><div role="heading" class="note-title marker" id="h-note-11" aria-level="5"><span>注記</span></div><p class="">これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。</p></div>',
				bodyMarkdown:
					'コンテンツのすべての[機能](https://waic.jp/translations/WCAG21/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG21/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。\n\n注記\n\n上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。\n\n注記\n\nこれは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				bodyPlain:
					'コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。\n\n注記上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。\n\n注記これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/keyboard.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'キーボードトラップなし',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-2" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。</p> <div class="note" role="note" id="issue-container-generatedID-12"><div role="heading" class="note-title marker" id="h-note-12" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG21/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'[キーボードインタフェース](https://waic.jp/translations/WCAG21/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG21/#cc5)を参照。',
				bodyPlain:
					'キーボードインタフェースを用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/no-keyboard-trap.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'キーボード (例外なし)',
				level: 'AAA',
				bodyHTML:
					'<p>コンテンツのすべての<a href="https://waic.jp/translations/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-2" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a href="https://waic.jp/translations/WCAG21/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-3" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を通じて操作可能である。</p>',
				bodyMarkdown:
					'コンテンツのすべての[機能](https://waic.jp/translations/WCAG21/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG21/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を通じて操作可能である。',
				bodyPlain:
					'コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/keyboard-no-exception.html',
			},
			'2.1.4': {
				id: '2.1.4',
				title: '文字キーのショートカット',
				level: 'A',
				bodyHTML:
					'<p>文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用した<a href="https://waic.jp/translations/WCAG21/#dfn-keyboard-shortcuts" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-shortcuts-1" title="一つ以上のキーを押すことによる、動作のトリガーの代替手段">キーボードショートカット</a>がコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:</p> <dl> <dt>解除</dt> <dd>ショートカットを解除する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる </dd> <dt>再割当て</dt> <dd>一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる </dd> <dt>フォーカス中にのみ有効化</dt> <dd><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>のキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。</dd> </dl>',
				bodyMarkdown:
					'文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用した[キーボードショートカット](https://waic.jp/translations/WCAG21/#dfn-keyboard-shortcuts "一つ以上のキーを押すことによる、動作のトリガーの代替手段")がコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:\n\n<dl><dt>解除</dt><dd>ショートカットを解除する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる</dd><dt>再割当て</dt><dd>一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる</dd><dt>フォーカス中にのみ有効化</dt><dd><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>のキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。</dd></dl>',
				bodyPlain:
					'文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用したキーボードショートカットがコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:\n\n解除\nショートカットを解除するメカニズムが利用できる \n\n再割当て\n一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる \n\nフォーカス中にのみ有効化\nユーザインタフェース コンポーネントのキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/character-key-shortcuts.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'タイミング調整可能',
				level: 'A',
				bodyHTML:
					'<p>コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>解除</dt> <dd><p>制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、</p> </dd> <dt>調整</dt> <dd><p>制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、</p> </dd> <dt>延長</dt> <dd><p>時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、</p> </dd> <dt>リアルタイムの例外</dt> <dd><p>リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、</p> </dd> <dt>必要不可欠な例外</dt> <dd><p>制限時間が<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、</p> </dd> <dt>20 時間の例外</dt> <dd><p>制限時間が 20 時間よりも長い。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-13"><div role="heading" class="note-title marker" id="h-note-13" aria-level="5"><span>注記</span></div><p class="">この達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する<a href="https://waic.jp/translations/WCAG21/#on-focus">達成基準 3.2.1</a> と併せて考慮すること。</p></div>',
				bodyMarkdown:
					'コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>解除</dt><dd><p>制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、</p></dd><dt>調整</dt><dd><p>制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、</p></dd><dt>延長</dt><dd><p>時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、</p></dd><dt>リアルタイムの例外</dt><dd><p>リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、</p></dd><dt>必要不可欠な例外</dt><dd><p>制限時間が<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、</p></dd><dt>20 時間の例外</dt><dd><p>制限時間が 20 時間よりも長い。</p></dd></dl>\n\n注記\n\nこの達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する[達成基準 3.2.1](https://waic.jp/translations/WCAG21/#on-focus) と併せて考慮すること。',
				bodyPlain:
					'コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている\n\n解除\n\n制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、\n\n調整\n\n制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、\n\n延長\n\n時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、\n\nリアルタイムの例外\n\nリアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、\n\n必要不可欠な例外\n\n制限時間が必要不可欠なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、\n\n20 時間の例外\n\n制限時間が 20 時間よりも長い。\n\n注記この達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する達成基準 3.2.1 と併せて考慮すること。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/timing-adjustable.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: '一時停止、停止、非表示',
				level: 'A',
				bodyHTML:
					'<p>動きのある、<a href="https://waic.jp/translations/WCAG21/#dfn-blinking" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blinking-1" title="注意を引く意図で、二つの視覚的な状態を交互に切り替えること。">点滅</a>している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている</p> <dl> <dt>動き、点滅、スクロール</dt> <dd><p>動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを<a href="https://waic.jp/translations/WCAG21/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="利用者の要求により停止し、利用者の要求があるまで再開しない。">一時停止</a>、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な動作の一部である場合は除く。</p> </dd> <dt>自動更新</dt> <dd><p>自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-14"><div role="heading" class="note-title marker" id="h-note-14" aria-level="5"><span>注記</span></div><p class="">画面がちらつく、又は閃光を放つコンテンツに関する要件は、<a href="https://waic.jp/translations/WCAG21/#seizures-and-physical-reactions">ガイドライン 2.3</a> を参照。</p></div> <div class="note" role="note" id="issue-container-generatedID-15"><div role="heading" class="note-title marker" id="h-note-15" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG21/#cc5">適合要件 5: 非干渉</a>を参照。</p></div> <div class="note" role="note" id="issue-container-generatedID-16"><div role="heading" class="note-title marker" id="h-note-16" aria-level="5"><span>注記</span></div><p class="">定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。</p></div> <div class="note" role="note" id="issue-container-generatedID-17"><div role="heading" class="note-title marker" id="h-note-17" aria-level="5"><span>注記</span></div><p class="">コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。</p></div>',
				bodyMarkdown:
					'動きのある、[点滅](https://waic.jp/translations/WCAG21/#dfn-blinking "注意を引く意図で、二つの視覚的な状態を交互に切り替えること。")している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている\n\n<dl><dt>動き、点滅、スクロール</dt><dd><p>動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを<a href="https://waic.jp/translations/WCAG21/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="利用者の要求により停止し、利用者の要求があるまで再開しない。">一時停止</a>、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な動作の一部である場合は除く。</p></dd><dt>自動更新</dt><dd><p>自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。</p></dd></dl>\n\n注記\n\n画面がちらつく、又は閃光を放つコンテンツに関する要件は、[ガイドライン 2.3](https://waic.jp/translations/WCAG21/#seizures-and-physical-reactions) を参照。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG21/#cc5)を参照。\n\n注記\n\n定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n\n注記\n\nコンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				bodyPlain:
					'動きのある、点滅している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている\n\n動き、点滅、スクロール\n\n動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを一時停止、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが必要不可欠な動作の一部である場合は除く。\n\n自動更新\n\n自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。\n\n注記画面がちらつく、又は閃光を放つコンテンツに関する要件は、ガイドライン 2.3 を参照。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。\n\n注記定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n\n注記コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/pause-stop-hide.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'タイミング非依存',
				level: 'AAA',
				bodyHTML:
					'<p>タイミングは、コンテンツによって提示されるイベント又は動作の<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-7" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な部分ではない。ただし、インタラクティブではない<a href="https://waic.jp/translations/WCAG21/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-8" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-real-time-events" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-real-time-events-1" title="a) 閲覧と同時に発生し、かつ b) コンテンツによる生成だけでは完結しないイベント。">リアルタイムのイベント</a>は除く。</p>',
				bodyMarkdown:
					'タイミングは、コンテンツによって提示されるイベント又は動作の[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な部分ではない。ただし、インタラクティブではない[同期したメディア](https://waic.jp/translations/WCAG21/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")及び[リアルタイムのイベント](https://waic.jp/translations/WCAG21/#dfn-real-time-events "a) 閲覧と同時に発生し、かつ b) コンテンツによる生成だけでは完結しないイベント。")は除く。',
				bodyPlain:
					'タイミングは、コンテンツによって提示されるイベント又は動作の必要不可欠な部分ではない。ただし、インタラクティブではない同期したメディア及びリアルタイムのイベントは除く。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/no-timing.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: '割り込み',
				level: 'AAA',
				bodyHTML:
					'<p>割り込みは、利用者が延期、又は抑制することができる。ただし、<a href="https://waic.jp/translations/WCAG21/#dfn-emergency" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-emergency-1" title="健康、安全、又は財産を守るために即座の行動を必要とする、突然で予期しない状況又は出来事。">緊急</a>を要する割り込みは除く。</p>',
				bodyMarkdown:
					'割り込みは、利用者が延期、又は抑制することができる。ただし、[緊急](https://waic.jp/translations/WCAG21/#dfn-emergency "健康、安全、又は財産を守るために即座の行動を必要とする、突然で予期しない状況又は出来事。")を要する割り込みは除く。',
				bodyPlain:
					'割り込みは、利用者が延期、又は抑制することができる。ただし、緊急を要する割り込みは除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/interruptions.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: '再認証',
				level: 'AAA',
				bodyHTML:
					'<p>認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。</p>',
				bodyMarkdown:
					'認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。',
				bodyPlain:
					'認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/re-authenticating.html',
			},
			'2.2.6': {
				id: '2.2.6',
				title: 'タイムアウト',
				level: 'AAA',
				bodyHTML:
					'<p>データの損失を引き起こす恐れのある<a href="https://waic.jp/translations/WCAG21/#dfn-user-inactivity" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-inactivity-1" title="利用者がいかなる操作も行わない時間が続くこと。">利用者の無操作</a>の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。</p> <div class="note" role="note" id="issue-container-generatedID-18"><div role="heading" class="note-title marker" id="h-note-18" aria-level="5"><span>注記</span></div><p class="">プライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。</p></div>',
				bodyMarkdown:
					'データの損失を引き起こす恐れのある[利用者の無操作](https://waic.jp/translations/WCAG21/#dfn-user-inactivity "利用者がいかなる操作も行わない時間が続くこと。")の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。\n\n注記\n\nプライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。',
				bodyPlain:
					'データの損失を引き起こす恐れのある利用者の無操作の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。\n\n注記プライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/timeouts.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: '3 回の閃光、又は閾値以下',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-1" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は<a href="https://waic.jp/translations/WCAG21/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-1" title="相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。">閃光</a>が<a href="https://waic.jp/translations/WCAG21/#dfn-general-flash-and-red-flash-thresholds" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-general-flash-and-red-flash-thresholds-1" title="次のいずれかに該当する場合、閃光、又は急速に変化する映像シーケンスは、閾値を下回っている (すなわち、コンテンツは基準を満たしている) ことになる:">一般閃光閾値及び赤色閃光閾値</a>を下回っている。</p> <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG21/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は[閃光](https://waic.jp/translations/WCAG21/#dfn-flashes "相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。")が[一般閃光閾値及び赤色閃光閾値](https://waic.jp/translations/WCAG21/#dfn-general-flash-and-red-flash-thresholds "次のいずれかに該当する場合、閃光、又は急速に変化する映像シーケンスは、閾値を下回っている (すなわち、コンテンツは基準を満たしている) ことになる:")を下回っている。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG21/#cc5)を参照。',
				bodyPlain:
					'ウェブページには、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は閃光が一般閃光閾値及び赤色閃光閾値を下回っている。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/three-flashes-or-below-threshold.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: '3 回の閃光',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-2" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、どの 1 秒間においても 3 回を超える<a href="https://waic.jp/translations/WCAG21/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-2" title="相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。">閃光</a>を放つものがない。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、どの 1 秒間においても 3 回を超える[閃光](https://waic.jp/translations/WCAG21/#dfn-flashes "相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。")を放つものがない。',
				bodyPlain:
					'ウェブページには、どの 1 秒間においても 3 回を超える閃光を放つものがない。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/three-flashes.html',
			},
			'2.3.3': {
				id: '2.3.3',
				title: 'インタラクションによるアニメーション',
				level: 'AAA',
				bodyHTML:
					'<p>アニメーションが、機能又は伝達されている情報に<a href="https://waic.jp/translations/WCAG21/#dfn-motion-animation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-motion-animation-1" title="動いているような錯覚を作り出す、又は滑らかに遷移しているような感覚を与えるための、状態間へのステップの追加。">必要不可欠</a>でない限り、インタラクションによって引き起こされる<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-8" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">モーションアニメーション</a>を無効にできる。</p>',
				bodyMarkdown:
					'アニメーションが、機能又は伝達されている情報に[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-motion-animation "動いているような錯覚を作り出す、又は滑らかに遷移しているような感覚を与えるための、状態間へのステップの追加。")でない限り、インタラクションによって引き起こされる[モーションアニメーション](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")を無効にできる。',
				bodyPlain:
					'アニメーションが、機能又は伝達されている情報に必要不可欠でない限り、インタラクションによって引き起こされるモーションアニメーションを無効にできる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/animation-from-interactions.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'ブロックスキップ',
				level: 'A',
				bodyHTML:
					'<p>複数の<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-3" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>上で繰り返されているコンテンツのブロックをスキップする<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-5" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'複数の[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")上で繰り返されているコンテンツのブロックをスキップする[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'複数のウェブページ上で繰り返されているコンテンツのブロックをスキップするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/bypass-blocks.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'ページタイトル',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-4" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、主題又は目的を説明したタイトルがある。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、主題又は目的を説明したタイトルがある。',
				bodyPlain: 'ウェブページには、主題又は目的を説明したタイトルがある。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/page-titled.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'フォーカス順序',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-5" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>が<a href="https://waic.jp/translations/WCAG21/#dfn-navigated-sequentially" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-navigated-sequentially-1" title="キーボードインタフェースを用いて (一つの要素から次へ) フォーカスを移動するために、定義された順序でナビゲートすること。">順を追ってナビゲート</a>できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")が[順を追ってナビゲート](https://waic.jp/translations/WCAG21/#dfn-navigated-sequentially "キーボードインタフェースを用いて (一つの要素から次へ) フォーカスを移動するために、定義された順序でナビゲートすること。")できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。',
				bodyPlain:
					'ウェブページが順を追ってナビゲートできて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'リンクの目的 (コンテキスト内)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-purpose-of-each-link" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-purpose-of-each-link-1" title="ハイパーリンクを動作させたときに得られる結果の本質。">それぞれのリンクの目的</a>が、リンクのテキスト単独で、又はリンクのテキストと<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determined-link-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determined-link-context-1" title="リンクとの関係性からプログラムによる解釈が可能であり、リンクテキストと結びつけることができ、様々な感覚モダリティで利用者に提示することができる付加的情報。">プログラムによる解釈が可能</a>なリンクのコンテキストから判断できる。ただし、リンクの目的が<a href="https://waic.jp/translations/WCAG21/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-1" title="リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。">ほとんどの利用者にとって曖昧</a>な場合は除く。</p>',
				bodyMarkdown:
					'[それぞれのリンクの目的](https://waic.jp/translations/WCAG21/#dfn-purpose-of-each-link "ハイパーリンクを動作させたときに得られる結果の本質。")が、リンクのテキスト単独で、又はリンクのテキストと[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determined-link-context "リンクとの関係性からプログラムによる解釈が可能であり、リンクテキストと結びつけることができ、様々な感覚モダリティで利用者に提示することができる付加的情報。")なリンクのコンテキストから判断できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG21/#dfn-ambiguous-to-users-in-general "リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。")な場合は除く。',
				bodyPlain:
					'それぞれのリンクの目的が、リンクのテキスト単独で、又はリンクのテキストとプログラムによる解釈が可能なリンクのコンテキストから判断できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/link-purpose-in-context.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: '複数の手段',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-1" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中で、ある<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-6" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>を見つける複数の手段が利用できる。ただし、ウェブページが一連の<a href="https://waic.jp/translations/WCAG21/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-1" title="ある活動を完了させるために必要な利用者の一連の動作。">プロセス</a>の中の 1 ステップ又は結果である場合は除く。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中で、ある[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")を見つける複数の手段が利用できる。ただし、ウェブページが一連の[プロセス](https://waic.jp/translations/WCAG21/#dfn-processes "ある活動を完了させるために必要な利用者の一連の動作。")の中の 1 ステップ又は結果である場合は除く。',
				bodyPlain:
					'ウェブページ一式の中で、あるウェブページを見つける複数の手段が利用できる。ただし、ウェブページが一連のプロセスの中の 1 ステップ又は結果である場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/multiple-ways.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: '見出し及びラベル',
				level: 'AA',
				bodyHTML:
					'<p>見出し及び<a href="https://waic.jp/translations/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-1" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>は、主題又は目的を説明している。</p>',
				bodyMarkdown:
					'見出し及び[ラベル](https://waic.jp/translations/WCAG21/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")は、主題又は目的を説明している。',
				bodyPlain: '見出し及びラベルは、主題又は目的を説明している。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/headings-and-labels.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'フォーカスの可視化',
				level: 'AA',
				bodyHTML:
					'<p>キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。</p>',
				bodyMarkdown:
					'キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。',
				bodyPlain:
					'キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: '現在位置',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-2" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中での利用者の位置に関する情報が利用できる。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中での利用者の位置に関する情報が利用できる。',
				bodyPlain: 'ウェブページ一式の中での利用者の位置に関する情報が利用できる。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'リンクの目的 (リンクのみ)',
				level: 'AAA',
				bodyHTML:
					'<p>それぞれのリンクの目的を、リンクのテキスト単独で特定できる<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-6" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。ただし、リンクの目的が<a href="https://waic.jp/translations/WCAG21/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-2" title="リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。">ほとんどの利用者にとって曖昧</a>な場合は除く。</p>',
				bodyMarkdown:
					'それぞれのリンクの目的を、リンクのテキスト単独で特定できる[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG21/#dfn-ambiguous-to-users-in-general "リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。")な場合は除く。',
				bodyPlain:
					'それぞれのリンクの目的を、リンクのテキスト単独で特定できるメカニズムが利用できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/link-purpose-link-only.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'セクション見出し',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-section" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-section-1" title="一つ以上の関連する話題、又は考えについて書かれたコンテンツの自己完結している部分。">セクション</a>見出しを用いて、コンテンツが整理されている。</p> <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="5"><span>注記</span></div><p class="">見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。</p></div> <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="5"><span>注記</span></div><p class="">この達成基準は、文書におけるセクションを対象としており、<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-6" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>は対象としていない。ユーザインタフェース コンポーネントについては、<a href="https://waic.jp/translations/WCAG21/#name-role-value">達成基準 4.1.2</a> が対象にしている。</p></div>',
				bodyMarkdown:
					'[セクション](https://waic.jp/translations/WCAG21/#dfn-section "一つ以上の関連する話題、又は考えについて書かれたコンテンツの自己完結している部分。")見出しを用いて、コンテンツが整理されている。\n\n注記\n\n見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n\n注記\n\nこの達成基準は、文書におけるセクションを対象としており、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")は対象としていない。ユーザインタフェース コンポーネントについては、[達成基準 4.1.2](https://waic.jp/translations/WCAG21/#name-role-value) が対象にしている。',
				bodyPlain:
					'セクション見出しを用いて、コンテンツが整理されている。\n\n注記見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n\n注記この達成基準は、文書におけるセクションを対象としており、ユーザインタフェース コンポーネントは対象としていない。ユーザインタフェース コンポーネントについては、達成基準 4.1.2 が対象にしている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/section-headings.html',
			},
			'2.5.1': {
				id: '2.5.1',
				title: 'ポインタのジェスチャ',
				level: 'A',
				bodyHTML:
					'<p>マルチポイント又は軌跡ベースのジェスチャを使って操作する<a href="https://waic.jp/translations/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-3" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>はすべて、軌跡ベースのジェスチャなしの<a href="https://waic.jp/translations/WCAG21/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-1" title="シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。">シングルポインタ</a>で操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-9" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である場合は例外とする。</p> <div class="note" role="note" id="issue-container-generatedID-22"><div role="heading" class="note-title marker" id="h-note-22" aria-level="5"><span>注記</span></div><p class="">この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。</p></div>',
				bodyMarkdown:
					'マルチポイント又は軌跡ベースのジェスチャを使って操作する[機能](https://waic.jp/translations/WCAG21/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")はすべて、軌跡ベースのジェスチャなしの[シングルポインタ](https://waic.jp/translations/WCAG21/#dfn-single-pointer "シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。")で操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である場合は例外とする。\n\n注記\n\nこの要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				bodyPlain:
					'マルチポイント又は軌跡ベースのジェスチャを使って操作する機能はすべて、軌跡ベースのジェスチャなしのシングルポインタで操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが必要不可欠である場合は例外とする。\n\n注記この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/pointer-gestures.html',
			},
			'2.5.2': {
				id: '2.5.2',
				title: 'ポインタのキャンセル',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-2" title="シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。">シングルポインタ</a>を使って操作できる<a href="https://waic.jp/translations/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-4" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、以下の要件の少なくとも 一つを満たす。</p> <dl> <dt>ダウンイベントがない </dt> <dd>機能を実行する目的でポインタの<a href="https://waic.jp/translations/WCAG21/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="トリガ刺激が depressed (押し下げられた) となった時に発生するプラットフォームのイベント。">ダウンイベント</a>を使用していない。</dd> <dt>中止又は元に戻すことができる </dt> <dd>機能の完了には<a href="https://waic.jp/translations/WCAG21/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="ポインタのトリガが解除されたときに生じるプラットフォームイベント。">アップイベント</a>を使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すための<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd> <dt>アップイベントで反転 </dt> <dd>アップイベントによって、先のダウンイベントのすべての結果が反転する。</dd> <dt>必要不可欠</dt> <dd>ダウンイベントによって機能を完了させることが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-23"><div role="heading" class="note-title marker" id="h-note-23" aria-level="5"><span>注記</span></div><p class="">キーボード又はテンキーパッドのキープレスをエミュレートする機能は必要不可欠とみなされる。</p></div> <div class="note" role="note" id="issue-container-generatedID-24"><div role="heading" class="note-title marker" id="h-note-24" aria-level="5"><span>注記</span></div><p class="">この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。</p></div>',
				bodyMarkdown:
					'[シングルポインタ](https://waic.jp/translations/WCAG21/#dfn-single-pointer "シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。")を使って操作できる[機能](https://waic.jp/translations/WCAG21/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、以下の要件の少なくとも 一つを満たす。\n\n<dl><dt>ダウンイベントがない</dt><dd>機能を実行する目的でポインタの<a href="https://waic.jp/translations/WCAG21/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="トリガ刺激が depressed (押し下げられた) となった時に発生するプラットフォームのイベント。">ダウンイベント</a>を使用していない。</dd><dt>中止又は元に戻すことができる</dt><dd>機能の完了には<a href="https://waic.jp/translations/WCAG21/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="ポインタのトリガが解除されたときに生じるプラットフォームイベント。">アップイベント</a>を使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すための<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd><dt>アップイベントで反転</dt><dd>アップイベントによって、先のダウンイベントのすべての結果が反転する。</dd><dt>必要不可欠</dt><dd>ダウンイベントによって機能を完了させることが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd></dl>\n\n注記\n\nキーボード又はテンキーパッドのキープレスをエミュレートする機能は必要不可欠とみなされる。\n\n注記\n\nこの要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				bodyPlain:
					'シングルポインタを使って操作できる機能は、以下の要件の少なくとも 一つを満たす。\n\nダウンイベントがない \n機能を実行する目的でポインタのダウンイベントを使用していない。\n\n中止又は元に戻すことができる \n機能の完了にはアップイベントを使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すためのメカニズムが利用できる。\n\nアップイベントで反転 \nアップイベントによって、先のダウンイベントのすべての結果が反転する。\n\n必要不可欠\nダウンイベントによって機能を完了させることが必要不可欠である。\n\n注記キーボード又はテンキーパッドのキープレスをエミュレートする機能は必要不可欠とみなされる。\n\n注記この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/pointer-cancellation.html',
			},
			'2.5.3': {
				id: '2.5.3',
				title: 'ラベルを含む名前 (name)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-7" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>が<a href="https://waic.jp/translations/WCAG21/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-8" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>又は<a href="https://waic.jp/translations/WCAG21/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-6" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>を含む<a href="https://waic.jp/translations/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-2" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>を持つ場合、視覚的に提示されたテキストが<a href="https://waic.jp/translations/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-2" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name) </a>に含まれている。</p> <div class="note" role="note" id="issue-container-generatedID-25"><div role="heading" class="note-title marker" id="h-note-25" aria-level="5"><span>注記</span></div><p class="">ベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。</p></div>',
				bodyMarkdown:
					'[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")が[テキスト](https://waic.jp/translations/WCAG21/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")又は[文字画像](https://waic.jp/translations/WCAG21/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")を含む[ラベル](https://waic.jp/translations/WCAG21/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")を持つ場合、視覚的に提示されたテキストが[名前 (name)](https://waic.jp/translations/WCAG21/#dfn-name "ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。") に含まれている。\n\n注記\n\nベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。',
				bodyPlain:
					'ユーザインタフェース コンポーネントがテキスト又は文字画像を含むラベルを持つ場合、視覚的に提示されたテキストが名前 (name) に含まれている。\n\n注記ベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/label-in-name.html',
			},
			'2.5.4': {
				id: '2.5.4',
				title: '動きによる起動',
				level: 'A',
				bodyHTML:
					'<p>デバイスの動き又は利用者の動きで操作できる<a href="https://waic.jp/translations/WCAG21/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-5" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-8" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>でも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、以下の場合は例外とする。</p> <dl> <dt>サポートされたインタフェース </dt> <dd><a href="https://waic.jp/translations/WCAG21/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="利用者の支援技術だけでなく、ブラウザ及びその他のユーザエージェントにあるアクセシビリティ機能でサポートされていること。">アクセシビリティ サポーテッド</a>なインタフェースを通じて機能を操作するために動きが用いられる。</dd> <dt>必要不可欠</dt> <dd>その機能にとって動きが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>であり、この達成基準に従うと動作を無効化してしまう。</dd> </dl>',
				bodyMarkdown:
					'デバイスの動き又は利用者の動きで操作できる[機能](https://waic.jp/translations/WCAG21/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")でも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、以下の場合は例外とする。\n\n<dl><dt>サポートされたインタフェース</dt><dd><a href="https://waic.jp/translations/WCAG21/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="利用者の支援技術だけでなく、ブラウザ及びその他のユーザエージェントにあるアクセシビリティ機能でサポートされていること。">アクセシビリティ サポーテッド</a>なインタフェースを通じて機能を操作するために動きが用いられる。</dd><dt>必要不可欠</dt><dd>その機能にとって動きが<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>であり、この達成基準に従うと動作を無効化してしまう。</dd></dl>',
				bodyPlain:
					'デバイスの動き又は利用者の動きで操作できる機能は、ユーザインタフェース コンポーネントでも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、以下の場合は例外とする。\n\nサポートされたインタフェース \nアクセシビリティ サポーテッドなインタフェースを通じて機能を操作するために動きが用いられる。\n\n必要不可欠\nその機能にとって動きが必要不可欠であり、この達成基準に従うと動作を無効化してしまう。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/motion-actuation.html',
			},
			'2.5.5': {
				id: '2.5.5',
				title: 'ターゲットのサイズ',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-1" title="マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。">ポインタ入力</a>の<a href="https://waic.jp/translations/WCAG21/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-1" title="ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域">ターゲット</a>のサイズが 44 × 44 <a href="https://waic.jp/translations/WCAG21/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-3" title="約 0.0213 度の視野角。">CSS ピクセル</a>以上である。ただし、以下の場合は例外とする。</p> <dl> <dt>同等のものが存在する </dt> <dd>そのターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。</dd> <dt>インラインである </dt> <dd>そのターゲットが文中、又はテキストブロック内に存在する。</dd> <dt>ユーザエージェントのコントロールである </dt> <dd>ターゲットのサイズがユーザエージェントによって定められており、かつコンテンツ制作者が変更していない。</dd> <dt>必要不可欠</dt> <dd>そのターゲットを特定の方法で提示することが、情報伝達にとって<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd> </dl>',
				bodyMarkdown:
					'[ポインタ入力](https://waic.jp/translations/WCAG21/#dfn-pointer-inputs "マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。")の[ターゲット](https://waic.jp/translations/WCAG21/#dfn-targets "ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域")のサイズが 44 × 44 [CSS ピクセル](https://waic.jp/translations/WCAG21/#dfn-css-pixels "約 0.0213 度の視野角。")以上である。ただし、以下の場合は例外とする。\n\n<dl><dt>同等のものが存在する</dt><dd>そのターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。</dd><dt>インラインである</dt><dd>そのターゲットが文中、又はテキストブロック内に存在する。</dd><dt>ユーザエージェントのコントロールである</dt><dd>ターゲットのサイズがユーザエージェントによって定められており、かつコンテンツ制作者が変更していない。</dd><dt>必要不可欠</dt><dd>そのターゲットを特定の方法で提示することが、情報伝達にとって<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd></dl>',
				bodyPlain:
					'ポインタ入力のターゲットのサイズが 44 × 44 CSS ピクセル以上である。ただし、以下の場合は例外とする。\n\n同等のものが存在する \nそのターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。\nインラインである \nそのターゲットが文中、又はテキストブロック内に存在する。\nユーザエージェントのコントロールである \nターゲットのサイズがユーザエージェントによって定められており、かつコンテンツ制作者が変更していない。\n必要不可欠 \nそのターゲットを特定の方法で提示することが、情報伝達にとって必要不可欠である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/target-size.html',
			},
			'2.5.6': {
				id: '2.5.6',
				title: '入力メカニズムの共存',
				level: 'AAA',
				bodyHTML:
					'<p>プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が<a href="https://waic.jp/translations/WCAG21/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-13" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。</p>',
				bodyMarkdown:
					'プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が[必要不可欠](https://waic.jp/translations/WCAG21/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。',
				bodyPlain:
					'プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が必要不可欠な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/concurrent-input-mechanisms.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'ページの言語',
				level: 'A',
				bodyHTML:
					'<p>それぞれの<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-7" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>のデフォルトの<a href="https://waic.jp/translations/WCAG21/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-1" title="人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。">自然言語</a>がどの言語であるか、<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-5" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'それぞれの[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")のデフォルトの[自然言語](https://waic.jp/translations/WCAG21/#dfn-human-language-s "人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。")がどの言語であるか、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'それぞれのウェブページのデフォルトの自然言語がどの言語であるか、プログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/language-of-page.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: '一部分の言語',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツの一節、又は語句それぞれの<a href="https://waic.jp/translations/WCAG21/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-2" title="人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。">自然言語</a>がどの言語であるか、<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-6" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。</p>',
				bodyMarkdown:
					'コンテンツの一節、又は語句それぞれの[自然言語](https://waic.jp/translations/WCAG21/#dfn-human-language-s "人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。")がどの言語であるか、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。',
				bodyPlain:
					'コンテンツの一節、又は語句それぞれの自然言語がどの言語であるか、プログラムによる解釈が可能である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/language-of-parts.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: '一般的ではない用語',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-idioms" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-idioms-1" title="個々の単語の意味からはその意味を推測できず、特定の単語を変えると意味が通じなくなる言い回し。">慣用句</a>及び<a href="https://waic.jp/translations/WCAG21/#dfn-jargon" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-jargon-1" title="特定の分野の人々が特定の用法で用いる単語。">業界用語</a>を含めて、一般的ではない、又は<a href="https://waic.jp/translations/WCAG21/#dfn-used-in-an-unusual-or-restricted-way" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-used-in-an-unusual-or-restricted-way-1" title="そのコンテンツを正しく理解するために、どの定義で使われているのかを利用者が正確に知る必要があるような使われ方をしている言葉。">限定された用法で使われている</a>単語、又は語句の、明確な定義を特定する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-8" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[慣用句](https://waic.jp/translations/WCAG21/#dfn-idioms "個々の単語の意味からはその意味を推測できず、特定の単語を変えると意味が通じなくなる言い回し。")及び[業界用語](https://waic.jp/translations/WCAG21/#dfn-jargon "特定の分野の人々が特定の用法で用いる単語。")を含めて、一般的ではない、又は[限定された用法で使われている](https://waic.jp/translations/WCAG21/#dfn-used-in-an-unusual-or-restricted-way "そのコンテンツを正しく理解するために、どの定義で使われているのかを利用者が正確に知る必要があるような使われ方をしている言葉。")単語、又は語句の、明確な定義を特定する[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'慣用句及び業界用語を含めて、一般的ではない、又は限定された用法で使われている単語、又は語句の、明確な定義を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/unusual-words.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: '略語',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-9" title="結果を得るためのプロセス又は手法。">略語</a>の元の語、又は意味を特定する<a href="https://waic.jp/translations/WCAG21/#dfn-abbreviations" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-abbreviations-1" title="単語、語句、又は名称の短縮形で、その略語が言語の一部になっていないもの。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[略語](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")の元の語、又は意味を特定する[メカニズム](https://waic.jp/translations/WCAG21/#dfn-abbreviations "単語、語句、又は名称の短縮形で、その略語が言語の一部になっていないもの。")が利用できる。',
				bodyPlain: '略語の元の語、又は意味を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/abbreviations.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: '読解レベル',
				level: 'AAA',
				bodyHTML:
					'<p>固有名詞や題名を取り除いた状態で、テキストが<a href="https://waic.jp/translations/WCAG21/#dfn-lower-secondary-education-level" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-lower-secondary-education-level-1" title="6 年間の学校教育卒業の後に始まり、初等教育の開始から 9 年後に終わる、2 年、又は 3 年の教育期間。">前期中等教育レベル</a>を超えた読解力を必要とする場合は、<a href="https://waic.jp/translations/WCAG21/#dfn-supplementary-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-supplementary-content-1" title="元のコンテンツを説明、又はより明確にするために付加されたコンテンツ。">補足コンテンツ</a>又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。</p>',
				bodyMarkdown:
					'固有名詞や題名を取り除いた状態で、テキストが[前期中等教育レベル](https://waic.jp/translations/WCAG21/#dfn-lower-secondary-education-level "6 年間の学校教育卒業の後に始まり、初等教育の開始から 9 年後に終わる、2 年、又は 3 年の教育期間。")を超えた読解力を必要とする場合は、[補足コンテンツ](https://waic.jp/translations/WCAG21/#dfn-supplementary-content "元のコンテンツを説明、又はより明確にするために付加されたコンテンツ。")又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。',
				bodyPlain:
					'固有名詞や題名を取り除いた状態で、テキストが前期中等教育レベルを超えた読解力を必要とする場合は、補足コンテンツ又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/reading-level.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: '発音',
				level: 'AAA',
				bodyHTML:
					'<p>文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-10" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'フォーカス時',
				level: 'A',
				bodyHTML:
					'<p>いずれの<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-9" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>も、フォーカスを受け取ったときに<a href="https://waic.jp/translations/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-1" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>を引き起こさない。</p>',
				bodyMarkdown:
					'いずれの[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")も、フォーカスを受け取ったときに[コンテキストの変化](https://waic.jp/translations/WCAG21/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")を引き起こさない。',
				bodyPlain:
					'いずれのユーザインタフェース コンポーネントも、フォーカスを受け取ったときにコンテキストの変化を引き起こさない。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/on-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: '入力時',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-10" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の設定を変更することが、<a href="https://waic.jp/translations/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-2" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。</p>',
				bodyMarkdown:
					'[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")の設定を変更することが、[コンテキストの変化](https://waic.jp/translations/WCAG21/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。',
				bodyPlain:
					'ユーザインタフェース コンポーネントの設定を変更することが、コンテキストの変化を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/on-input.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: '一貫したナビゲーション',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-3" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中にある複数の<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-8" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに<a href="https://waic.jp/translations/WCAG21/#dfn-same-relative-order" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-relative-order-1" title="他の項目との相対位置が同じ。">相対的に同じ順序</a>で出現する。ただし、利用者が変更した場合は除く。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中にある複数の[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに[相対的に同じ順序](https://waic.jp/translations/WCAG21/#dfn-same-relative-order "他の項目との相対位置が同じ。")で出現する。ただし、利用者が変更した場合は除く。',
				bodyPlain:
					'ウェブページ一式の中にある複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現する。ただし、利用者が変更した場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/consistent-navigation.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: '一貫した識別性',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-4" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中で<a href="https://waic.jp/translations/WCAG21/#dfn-same-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-functionality-1" title="使うと同じ結果が得られること。">同じ機能</a>を有するコンポーネントは、一貫して識別できる。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG21/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中で[同じ機能](https://waic.jp/translations/WCAG21/#dfn-same-functionality "使うと同じ結果が得られること。")を有するコンポーネントは、一貫して識別できる。',
				bodyPlain:
					'ウェブページ一式の中で同じ機能を有するコンポーネントは、一貫して識別できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/consistent-identification.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: '要求による変化',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-3" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>は利用者の要求によってだけ生じるか、又は、そのような変化を止める<a href="https://waic.jp/translations/WCAG21/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-11" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[コンテキストの変化](https://waic.jp/translations/WCAG21/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")は利用者の要求によってだけ生じるか、又は、そのような変化を止める[メカニズム](https://waic.jp/translations/WCAG21/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'コンテキストの変化は利用者の要求によってだけ生じるか、又は、そのような変化を止めるメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/change-on-request.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'エラーの特定',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-2" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。</p>',
				bodyMarkdown:
					'[入力エラー](https://waic.jp/translations/WCAG21/#dfn-input-error "利用者が入力した情報で、受け付けられないもの。")が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。',
				bodyPlain:
					'入力エラーが自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/error-identification.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'ラベル又は説明',
				level: 'A',
				bodyHTML:
					'<p>コンテンツが利用者の入力を要求する場合は、<a href="https://waic.jp/translations/WCAG21/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-3" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>又は説明文が提供されている。</p>',
				bodyMarkdown:
					'コンテンツが利用者の入力を要求する場合は、[ラベル](https://waic.jp/translations/WCAG21/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")又は説明文が提供されている。',
				bodyPlain:
					'コンテンツが利用者の入力を要求する場合は、ラベル又は説明文が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/labels-or-instructions.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'エラー修正の提案',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-3" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。</p>',
				bodyMarkdown:
					'[入力エラー](https://waic.jp/translations/WCAG21/#dfn-input-error "利用者が入力した情報で、受け付けられないもの。")が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。',
				bodyPlain:
					'入力エラーが自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/error-suggestion.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: '誤り防止 (法的、金融、データ)',
				level: 'AA',
				bodyHTML:
					'<p>利用者にとって<a href="https://waic.jp/translations/WCAG21/#dfn-legal-commitments" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-legal-commitments-1" title="法的に拘束力のある義務あるいは利益が発生する取引。">法律行為</a>もしくは金融取引が生じる、<a href="https://waic.jp/translations/WCAG21/#dfn-user-controllable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-controllable-1" title="利用者によってアクセスされることを意図したデータ。">利用者が制御可能な</a>データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-9" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>取消</dt><dd>送信を取り消すことができる。</dd> <dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd> <dt>確認 </dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd> </dl>',
				bodyMarkdown:
					'利用者にとって[法律行為](https://waic.jp/translations/WCAG21/#dfn-legal-commitments "法的に拘束力のある義務あるいは利益が発生する取引。")もしくは金融取引が生じる、[利用者が制御可能な](https://waic.jp/translations/WCAG21/#dfn-user-controllable "利用者によってアクセスされることを意図したデータ。")データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")では、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>取消</dt><dd>送信を取り消すことができる。</dd><dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd><dt>確認</dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd></dl>',
				bodyPlain:
					'利用者にとって法律行為もしくは金融取引が生じる、利用者が制御可能なデータストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている\n\n取消送信を取り消すことができる。\nチェック利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/error-prevention-legal-financial-data.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'ヘルプ',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG21/#dfn-context-sensitive-help" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-context-sensitive-help-1" title="そのとき実行されている機能に関する情報を提供するヘルプのテキスト。">コンテキストに応じたヘルプ</a>が利用できる。</p>',
				bodyMarkdown:
					'[コンテキストに応じたヘルプ](https://waic.jp/translations/WCAG21/#dfn-context-sensitive-help "そのとき実行されている機能に関する情報を提供するヘルプのテキスト。")が利用できる。',
				bodyPlain: 'コンテキストに応じたヘルプが利用できる。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: '誤り防止 (すべて)',
				level: 'AAA',
				bodyHTML:
					'<p>利用者に情報の送信を要求する<a href="https://waic.jp/translations/WCAG21/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-10" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>取消</dt><dd>送信を取り消すことができる。</dd> <dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd> <dt>確認 </dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd> </dl>',
				bodyMarkdown:
					'利用者に情報の送信を要求する[ウェブページ](https://waic.jp/translations/WCAG21/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")では、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>取消</dt><dd>送信を取り消すことができる。</dd><dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd><dt>確認</dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd></dl>',
				bodyPlain:
					'利用者に情報の送信を要求するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている\n\n取消送信を取り消すことができる。\nチェック利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/error-prevention-all.html',
			},
			'4.1.1': {
				id: '4.1.1',
				title: '構文解析',
				level: 'A',
				bodyHTML:
					'<p>マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。</p> <div class="note" role="note" id="issue-container-generatedID-26"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>注記</span></div><p class="">HTML 又は XML を使用するすべてのコンテンツでは、この達成基準は常に満たされているとみなすべきである。</p></div> <div class="note" role="note" id="issue-container-generatedID-27"><div role="heading" class="note-title marker" id="h-note-27" aria-level="5"><span>注記</span></div><div class=""><p>この基準が作成されて以降、HTML Living Standard は、ユーザエージェントが不完全なタグ、不正な要素の入れ子、重複した属性、及び一意でない ID をどのように処理しなければならないかを規定する明確な要件を採用した。[<cite><a class="bibref" data-link-type="biblio" href="https://waic.jp/translations/WCAG21/#bib-html" title="HTML Standard">HTML</a></cite>]</p> <p>HTML Standard では、これらのケースのいくつかをコンテンツ制作者に対する不適合として扱うが、仕様ではユーザエージェントがこれらのケースの一貫した処理をサポートすることを要求しているため、この達成基準の説明にある「仕様で認められているもの」とみなせる。実際には、この基準自体は、もはや障害のある人々に何の利益ももたらさない。</p> <p>不適切に入れ子にされた要素による役割の欠落、ID の重複による不正な状態や名前などの問題は、別の達成基準で扱われており、4.1.1 の問題としてではなく、それらの基準に基づいて報告されるべきである。</p> </div></div>',
				bodyMarkdown:
					'マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。\n\n注記\n\nHTML 又は XML を使用するすべてのコンテンツでは、この達成基準は常に満たされているとみなすべきである。\n\n注記\n\nこの基準が作成されて以降、HTML Living Standard は、ユーザエージェントが不完全なタグ、不正な要素の入れ子、重複した属性、及び一意でない ID をどのように処理しなければならないかを規定する明確な要件を採用した。\\[[HTML](https://waic.jp/translations/WCAG21/#bib-html "HTML Standard")\\]\n\nHTML Standard では、これらのケースのいくつかをコンテンツ制作者に対する不適合として扱うが、仕様ではユーザエージェントがこれらのケースの一貫した処理をサポートすることを要求しているため、この達成基準の説明にある「仕様で認められているもの」とみなせる。実際には、この基準自体は、もはや障害のある人々に何の利益ももたらさない。\n\n不適切に入れ子にされた要素による役割の欠落、ID の重複による不正な状態や名前などの問題は、別の達成基準で扱われており、4.1.1 の問題としてではなく、それらの基準に基づいて報告されるべきである。',
				bodyPlain:
					'マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どの ID も一意的である。ただし、仕様で認められているものを除く。\n\n注記HTML 又は XML を使用するすべてのコンテンツでは、この達成基準は常に満たされているとみなすべきである。\n\n注記この基準が作成されて以降、HTML Living Standard は、ユーザエージェントが不完全なタグ、不正な要素の入れ子、重複した属性、及び一意でない ID をどのように処理しなければならないかを規定する明確な要件を採用した。[HTML]\n\nHTML Standard では、これらのケースのいくつかをコンテンツ制作者に対する不適合として扱うが、仕様ではユーザエージェントがこれらのケースの一貫した処理をサポートすることを要求しているため、この達成基準の説明にある「仕様で認められているもの」とみなせる。実際には、この基準自体は、もはや障害のある人々に何の利益ももたらさない。\n\n不適切に入れ子にされた要素による役割の欠落、ID の重複による不正な状態や名前などの問題は、別の達成基準で扱われており、4.1.1 の問題としてではなく、それらの基準に基づいて報告されるべきである。',
				understanding: 'https://waic.jp/translations/WCAG21/Understanding/parsing.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: '名前 (name)・役割 (role)・値 (value)',
				level: 'A',
				bodyHTML:
					'<p>すべての<a href="https://waic.jp/translations/WCAG21/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-11" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a> (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、<a href="https://waic.jp/translations/WCAG21/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-3" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> 及び<a href="https://waic.jp/translations/WCAG21/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-1" title="ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。">役割 (role)</a> は、<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-7" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。又、状態、プロパティ、利用者が設定可能な値は<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-set" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-set-1" title="支援技術を含むユーザエージェントがサポートしている手法を用いて、ソフトウェアによって設定されること。">プログラムによる設定</a>が可能である。そして、<a href="https://waic.jp/translations/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-3" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>を含む<a href="https://waic.jp/translations/WCAG21/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-1" title="ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。">ユーザエージェント</a>が、これらの項目に対する変更通知を利用できる。</p> <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-28" aria-level="5"><span>注記</span></div><p class="">この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。</p></div>',
				bodyMarkdown:
					'すべての[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG21/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。") (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、[名前 (name)](https://waic.jp/translations/WCAG21/#dfn-name "ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。") 及び[役割 (role)](https://waic.jp/translations/WCAG21/#dfn-role "ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。") は、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。又、状態、プロパティ、利用者が設定可能な値は[プログラムによる設定](https://waic.jp/translations/WCAG21/#dfn-programmatically-set "支援技術を含むユーザエージェントがサポートしている手法を用いて、ソフトウェアによって設定されること。")が可能である。そして、[支援技術](https://waic.jp/translations/WCAG21/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")を含む[ユーザエージェント](https://waic.jp/translations/WCAG21/#dfn-user-agents "ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。")が、これらの項目に対する変更通知を利用できる。\n\n注記\n\nこの達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				bodyPlain:
					'すべてのユーザインタフェース コンポーネント (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、名前 (name) 及び役割 (role) は、プログラムによる解釈が可能である。又、状態、プロパティ、利用者が設定可能な値はプログラムによる設定が可能である。そして、支援技術を含むユーザエージェントが、これらの項目に対する変更通知を利用できる。\n\n注記この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/name-role-value.html',
			},
			'4.1.3': {
				id: '4.1.3',
				title: 'ステータスメッセージ',
				level: 'AA',
				bodyHTML:
					'<p>マークアップ言語を使って実装されたコンテンツでは、<a href="https://waic.jp/translations/WCAG21/#dfn-status-messages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-status-messages-1" title="コンテンツ内の変化であって、コンテキストの変化ではなく、かつ、アクションの成否もしくは結果、アプリケーションの処理待ち状態、プロセスの進捗、又はエラーの存在に関する情報を利用者に提供するもの。">ステータスメッセージ</a>は、<a href="https://waic.jp/translations/WCAG21/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-2" title="ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。">役割 (role)</a> 又はプロパティを通して<a href="https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-8" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>であり、フォーカスを受けとらなくても<a href="https://waic.jp/translations/WCAG21/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-4" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>によって利用者に提示することができる。</p>',
				bodyMarkdown:
					'マークアップ言語を使って実装されたコンテンツでは、[ステータスメッセージ](https://waic.jp/translations/WCAG21/#dfn-status-messages "コンテンツ内の変化であって、コンテキストの変化ではなく、かつ、アクションの成否もしくは結果、アプリケーションの処理待ち状態、プロセスの進捗、又はエラーの存在に関する情報を利用者に提供するもの。")は、[役割 (role)](https://waic.jp/translations/WCAG21/#dfn-role "ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。") 又はプロパティを通して[プログラムによる解釈が可能](https://waic.jp/translations/WCAG21/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")であり、フォーカスを受けとらなくても[支援技術](https://waic.jp/translations/WCAG21/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")によって利用者に提示することができる。',
				bodyPlain:
					'マークアップ言語を使って実装されたコンテンツでは、ステータスメッセージは、役割 (role) 又はプロパティを通してプログラムによる解釈が可能であり、フォーカスを受けとらなくても支援技術によって利用者に提示することができる。',
				understanding:
					'https://waic.jp/translations/WCAG21/Understanding/status-messages.html',
			},
		},
	},
	'wcag_2.2': {
		en: {
			'1.1.1': {
				id: '1.1.1',
				title: 'Non-text Content',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-1" title="any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language">non-text content</a> that is presented to the user has a <a href="https://www.w3.org/TR/WCAG22/#dfn-text-alternative" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-alternative-1" title="Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.">text alternative</a> that serves the equivalent purpose, except for the situations listed below. </p> <dl> <dt>Controls, Input</dt> <dd> <p>If non-text content is a control or accepts user input, then it has a <a href="https://www.w3.org/TR/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="text by which software can identify a component within Web content to the user">name</a> that describes its purpose. (Refer to <a href="https://www.w3.org/TR/WCAG22/#name-role-value">Success Criterion 4.1.2</a> for additional requirements for controls and content that accepts user input.) </p> </dd> <dt>Time-Based Media</dt> <dd> <p>If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to <a href="https://www.w3.org/TR/WCAG22/#time-based-media">Guideline 1.2</a> for additional requirements for media.) </p> </dd> <dt>Test</dt> <dd> <p>If non-text content is a test or exercise that would be invalid if presented in <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a>, then text alternatives at least provide descriptive identification of the non-text content. </p> </dd> <dt>Sensory</dt> <dd> <p>If non-text content is primarily intended to create a <a href="https://www.w3.org/TR/WCAG22/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="a sensory experience that is not purely decorative and does not primarily convey important information or perform a function">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content. </p> </dd> <dt><a href="https://www.w3.org/TR/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a></dt> <dd> <p>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. </p> </dd> <dt>Decoration, Formatting, Invisible</dt> <dd> <p>If non-text content is <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a>. </p> </dd> </dl>',
				bodyMarkdown:
					'All [non-text content](https://www.w3.org/TR/WCAG22/#dfn-non-text-content "any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language") that is presented to the user has a [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative "Text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. Programmatically associated text is text whose location can be programmatically determined from the non-text content.") that serves the equivalent purpose, except for the situations listed below.\n\n<dl><dt>Controls, Input</dt><dd><p>If non-text content is a control or accepts user input, then it has a <a href="https://www.w3.org/TR/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="text by which software can identify a component within Web content to the user">name</a> that describes its purpose. (Refer to <a href="https://www.w3.org/TR/WCAG22/#name-role-value">Success Criterion 4.1.2</a> for additional requirements for controls and content that accepts user input.)</p></dd><dt>Time-Based Media</dt><dd><p>If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to <a href="https://www.w3.org/TR/WCAG22/#time-based-media">Guideline 1.2</a> for additional requirements for media.)</p></dd><dt>Test</dt><dd><p>If non-text content is a test or exercise that would be invalid if presented in <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a>, then text alternatives at least provide descriptive identification of the non-text content.</p></dd><dt>Sensory</dt><dd><p>If non-text content is primarily intended to create a <a href="https://www.w3.org/TR/WCAG22/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="a sensory experience that is not purely decorative and does not primarily convey important information or perform a function">specific sensory experience</a>, then text alternatives at least provide descriptive identification of the non-text content.</p></dd><dt><a href="https://www.w3.org/TR/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a></dt><dd><p>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.</p></dd><dt>Decoration, Formatting, Invisible</dt><dd><p>If non-text content is <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by <a href="https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a>.</p></dd></dl>',
				bodyPlain:
					'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.\n\nControls, Input\n\nIf non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.)\n\nTime-Based Media\n\nIf non-text content is time-based media, then text alternatives at least provide descriptive\nidentification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)\n\nTest\n\nIf non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text\ncontent.\n\nSensory\n\nIf non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text\ncontent.\n\nCAPTCHA\n\nIf the purpose of non-text content is to confirm that content is being accessed by\na person rather than a computer, then text alternatives that identify and describe\nthe purpose of the non-text content are provided, and alternative forms of CAPTCHA\nusing output modes for different types of sensory perception are provided to accommodate\ndifferent disabilities.\n\nDecoration, Formatting, Invisible\n\nIf non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented\nin a way that it can be ignored by assistive technology.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: 'Audio-only and Video-only (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-1" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-1" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> and prerecorded <a href="https://www.w3.org/TR/WCAG22/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-1" title="a time-based presentation that contains only video (no audio and no interaction)">video-only</a> media, the following are true, except when the audio or video is a <a href="https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-1" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such: </p> <dl> <dt>Prerecorded Audio-only</dt> <dd> <p>An <a href="https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content. </p> </dd> <dt>Prerecorded Video-only</dt> <dd> <p>Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content. </p> </dd> </dl>',
				bodyMarkdown:
					'For [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [audio-only](https://www.w3.org/TR/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") and prerecorded [video-only](https://www.w3.org/TR/WCAG22/#dfn-video-only "a time-based presentation that contains only video (no audio and no interaction)") media, the following are true, except when the audio or video is a [media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such:\n\n<dl><dt>Prerecorded Audio-only</dt><dd><p>An <a href="https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided that presents equivalent information for prerecorded audio-only content.</p></dd><dt>Prerecorded Video-only</dt><dd><p>Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.</p></dd></dl>',
				bodyPlain:
					'For prerecorded\naudio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:\n\nPrerecorded Audio-only\n\nAn alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.\n\nPrerecorded Video-only\n\nEither an alternative for time-based media or an audio track is provided that presents\nequivalent information for prerecorded video-only content.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'Captions (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-1" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">Captions</a> are provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-2" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-1" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-1" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>, except when the media is a <a href="https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-2" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such. </p>',
				bodyMarkdown:
					'[Captions](https://www.w3.org/TR/WCAG22/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") are provided for all [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [audio](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such.',
				bodyPlain:
					'Captions are provided for all prerecorded\naudio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: 'Audio Description or Media Alternative (Prerecorded)',
				level: 'A',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-2" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> or <a href="https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-1" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">audio description</a> of the <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-3" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-1" title="the technology of moving or sequenced pictures or images">video</a> content is provided for <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-2" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>, except when the media is a <a href="https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-3" title="media that presents no more information than is already presented in text (directly or via text alternatives)">media alternative for text</a> and is clearly labeled as such. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") or [audio description](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") of the [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images") content is provided for [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such"), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text "media that presents no more information than is already presented in text (directly or via text alternatives)") and is clearly labeled as such.',
				bodyPlain:
					'An alternative for time-based media or audio description of the prerecorded\nvideo content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'Captions (Live)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-2" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">Captions</a> are provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-1" title="information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay">live</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-2" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-3" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Captions](https://www.w3.org/TR/WCAG22/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") are provided for all [live](https://www.w3.org/TR/WCAG22/#dfn-live "information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay") [audio](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Captions are provided for all live\naudio content in synchronized media.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: 'Audio Description (Prerecorded)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-2" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">Audio description</a> is provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-4" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-2" title="the technology of moving or sequenced pictures or images">video</a> content in <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-4" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Audio description](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") is provided for all [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images") content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Audio description is provided for all prerecorded\nvideo content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: 'Sign Language (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-sign-language-interpretation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-sign-language-interpretation-1" title="translation of one language, generally a spoken language, into a sign language">Sign language interpretation</a> is provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-5" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-3" title="the technology of sound reproduction">audio</a> content in <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-5" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'[Sign language interpretation](https://www.w3.org/TR/WCAG22/#dfn-sign-language-interpretation "translation of one language, generally a spoken language, into a sign language") is provided for all [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [audio](https://www.w3.org/TR/WCAG22/#dfn-audio "the technology of sound reproduction") content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Sign language interpretation is provided for all prerecorded\naudio content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: 'Extended Audio Description (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p>Where pauses in foreground audio are insufficient to allow <a href="https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-3" title="narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone">audio descriptions</a> to convey the sense of the video, <a href="https://www.w3.org/TR/WCAG22/#dfn-extended-audio-description" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-extended-audio-description-1" title="audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description">extended audio description</a> is provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-6" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-3" title="the technology of moving or sequenced pictures or images">video</a> content in <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-6" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a>. </p>',
				bodyMarkdown:
					'Where pauses in foreground audio are insufficient to allow [audio descriptions](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions "narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone") to convey the sense of the video, [extended audio description](https://www.w3.org/TR/WCAG22/#dfn-extended-audio-description "audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description") is provided for all [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [video](https://www.w3.org/TR/WCAG22/#dfn-video "the technology of moving or sequenced pictures or images") content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such").',
				bodyPlain:
					'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded\nvideo content in synchronized media.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'Media Alternative (Prerecorded)',
				level: 'AAA',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-3" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> is provided for all <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-7" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-7" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a> and for all prerecorded <a href="https://www.w3.org/TR/WCAG22/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-2" title="a time-based presentation that contains only video (no audio and no interaction)">video-only</a> media. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") is provided for all [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such") and for all prerecorded [video-only](https://www.w3.org/TR/WCAG22/#dfn-video-only "a time-based presentation that contains only video (no audio and no interaction)") media.',
				bodyPlain:
					'An alternative for time-based media is provided for all prerecorded\nsynchronized media and for all prerecorded video-only media.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: 'Audio-only (Live)',
				level: 'AAA',
				bodyHTML:
					'<p>An <a href="https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-4" title="document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction">alternative for time-based media</a> that presents equivalent information for <a href="https://www.w3.org/TR/WCAG22/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-2" title="information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay">live</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-2" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> content is provided. </p>',
				bodyMarkdown:
					'An [alternative for time-based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media "document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction") that presents equivalent information for [live](https://www.w3.org/TR/WCAG22/#dfn-live "information captured from a real-world event and transmitted to the receiver with no more than a broadcast delay") [audio-only](https://www.w3.org/TR/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") content is provided.',
				bodyPlain:
					'An alternative for time-based media that presents equivalent information for live\naudio-only content is provided.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: 'Info and Relationships',
				level: 'A',
				bodyHTML:
					'<p>Information, <a href="https://www.w3.org/TR/WCAG22/#dfn-structure" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-structure-1" title="The way the parts of a Web page are organized in relation to each other; and The way a collection of Web pages is organized">structure</a>, and <a href="https://www.w3.org/TR/WCAG22/#dfn-relationships" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-relationships-1" title="meaningful associations between distinct pieces of content">relationships</a> conveyed through <a href="https://www.w3.org/TR/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-1" title="rendering of the content in a form to be perceived by users">presentation</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-1" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> or are available in text. </p>',
				bodyMarkdown:
					'Information, [structure](https://www.w3.org/TR/WCAG22/#dfn-structure "The way the parts of a Web page are organized in relation to each other; and The way a collection of Web pages is organized"), and [relationships](https://www.w3.org/TR/WCAG22/#dfn-relationships "meaningful associations between distinct pieces of content") conveyed through [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") or are available in text.',
				bodyPlain:
					'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: 'Meaningful Sequence',
				level: 'A',
				bodyHTML:
					'<p>When the sequence in which content is presented affects its meaning, a <a href="https://www.w3.org/TR/WCAG22/#dfn-correct-reading-sequence" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-correct-reading-sequence-1" title="any sequence where words and paragraphs are presented in an order that does not change the meaning of the content">correct reading sequence</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-2" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>. </p>',
				bodyMarkdown:
					'When the sequence in which content is presented affects its meaning, a [correct reading sequence](https://www.w3.org/TR/WCAG22/#dfn-correct-reading-sequence "any sequence where words and paragraphs are presented in an order that does not change the meaning of the content") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: 'Sensory Characteristics',
				level: 'A',
				bodyHTML:
					'<p>Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound. </p> <div class="note" role="note" id="issue-container-generatedID"><div role="heading" class="note-title marker" id="h-note" aria-level="5"><span>Note</span></div><p class="">For requirements related to color, refer to <a href="https://www.w3.org/TR/WCAG22/#distinguishable">Guideline 1.4</a>.</p></div>',
				bodyMarkdown:
					'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.\n\nNote\n\nFor requirements related to color, refer to [Guideline 1.4](https://www.w3.org/TR/WCAG22/#distinguishable).',
				bodyPlain:
					'Instructions provided for understanding and operating content do not rely solely on\nsensory characteristics of components such as shape, color, size, visual location, orientation,\nor sound.\n\nNoteFor requirements related to color, refer to Guideline 1.4.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html',
			},
			'1.3.4': {
				id: '1.3.4',
				title: 'Orientation',
				level: 'AA',
				bodyHTML:
					'<p>Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-1" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</p> <div class="note" role="note" id="issue-container-generatedID-0"><div role="heading" class="note-title marker" id="h-note-0" aria-level="5"><span>Note</span></div><p class="">Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.</p></div>',
				bodyMarkdown:
					'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform").\n\nNote\n\nExamples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.',
				bodyPlain:
					'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.\n\nNoteExamples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation.html',
			},
			'1.3.5': {
				id: '1.3.5',
				title: 'Identify Input Purpose',
				level: 'AA',
				bodyHTML:
					'<p>The purpose of each input field collecting information about the user can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-3" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> when:</p> <ul> <li>The input field serves a purpose identified in the <a href="https://www.w3.org/TR/WCAG22/#input-purposes">Input Purposes for user interface components section</a>; and</li> <li>The content is implemented using technologies with support for identifying the expected meaning for form input data.</li> </ul>',
				bodyMarkdown:
					'The purpose of each input field collecting information about the user can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") when:\n\n-   The input field serves a purpose identified in the [Input Purposes for user interface components section](https://www.w3.org/TR/WCAG22/#input-purposes); and\n-   The content is implemented using technologies with support for identifying the expected meaning for form input data.',
				bodyPlain:
					'The purpose of each input field collecting information about the user can be programmatically determined when:\n\nThe input field serves a purpose identified in the Input Purposes for user interface components section; and\nThe content is implemented using technologies with support for identifying the expected meaning for form input data.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html',
			},
			'1.3.6': {
				id: '1.3.6',
				title: 'Identify Purpose',
				level: 'AAA',
				bodyHTML:
					'<p>In content implemented using markup languages, the purpose of <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-1" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a>, icons, and <a href="https://www.w3.org/TR/WCAG22/#dfn-regions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-regions-1" title="perceivable, programmatically determined section of content">regions</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-4" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>.</p>',
				bodyMarkdown:
					'In content implemented using markup languages, the purpose of [user interface components](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function"), icons, and [regions](https://www.w3.org/TR/WCAG22/#dfn-regions "perceivable, programmatically determined section of content") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'In content implemented using markup languages, the purpose of user interface components, icons, and regions can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: 'Use of Color',
				level: 'A',
				bodyHTML:
					'<p>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. </p> <div class="note" role="note" id="issue-container-generatedID-1"><div role="heading" class="note-title marker" id="h-note-1" aria-level="5"><span>Note</span></div><p class="">This success criterion addresses color perception specifically. Other forms of perception are covered in <a href="https://www.w3.org/TR/WCAG22/#adaptable">Guideline 1.3</a> including programmatic access to color and other visual presentation coding.</p></div>',
				bodyMarkdown:
					'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.\n\nNote\n\nThis success criterion addresses color perception specifically. Other forms of perception are covered in [Guideline 1.3](https://www.w3.org/TR/WCAG22/#adaptable) including programmatic access to color and other visual presentation coding.',
				bodyPlain:
					'Color is not used as the only visual means of conveying information, indicating an\naction, prompting a response, or distinguishing a visual element.\n\nNoteThis success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: 'Audio Control',
				level: 'A',
				bodyHTML:
					'<p>If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-1" title="process or technique for achieving a result">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. </p> <div class="note" role="note" id="issue-container-generatedID-2"><div role="heading" class="note-title marker" id="h-note-2" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG22/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'If any audio on a Web page plays automatically for more than 3 seconds, either a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG22/#cc5).',
				bodyPlain:
					"If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio\nvolume independently from the overall system volume level.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether or not it is used\nto meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'Contrast (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p>The visual presentation of <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-2" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-1" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> has a <a href="https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-1" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 4.5:1, except for the following: </p> <dl> <dt>Large Text</dt> <dd> <p><a href="https://www.w3.org/TR/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1; </p> </dd> <dt>Incidental</dt> <dd> <p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. </p> </dd> <dt>Logotypes</dt> <dd> <p>Text that is part of a logo or brand name has no contrast requirement.</p> </dd> </dl>',
				bodyMarkdown:
					'The visual presentation of [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") and [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") has a [contrast ratio](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 4.5:1, except for the following:\n\n<dl><dt>Large Text</dt><dd><p><a href="https://www.w3.org/TR/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 3:1;</p></dd><dt>Incidental</dt><dd><p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></dd><dt>Logotypes</dt><dd><p>Text that is part of a logo or brand name has no contrast requirement.</p></dd></dl>',
				bodyPlain:
					'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:\n\nLarge Text\n\nLarge-scale text and images of large-scale text have a contrast ratio of at least 3:1;\n\nIncidental\n\nText or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant\nother visual content, have no contrast requirement.\n\nLogotypes\n\nText that is part of a logo or brand name has no contrast requirement.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'Resize Text',
				level: 'AA',
				bodyHTML:
					'<p>Except for <a href="https://www.w3.org/TR/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-3" title="synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content">captions</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-2" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a>, <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-3" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> can be resized without <a href="https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-2" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technology</a> up to 200 percent without loss of content or functionality. </p>',
				bodyMarkdown:
					'Except for [captions](https://www.w3.org/TR/WCAG22/#dfn-captions "synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content") and [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect"), [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") can be resized without [assistive technology](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents") up to 200 percent without loss of content or functionality.',
				bodyPlain:
					'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: 'Images of Text',
				level: 'AA',
				bodyHTML:
					'<p>If the technologies being used can achieve the visual presentation, <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-4" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> is used to convey information rather than <a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-3" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> except for the following: </p> <dl> <dt>Customizable</dt> <dd> <p>The image of text can be <a href="https://www.w3.org/TR/WCAG22/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="the font, size, color, and background can be set">visually customized</a> to the user\'s requirements; </p> </dd> <dt>Essential</dt> <dd> <p>A particular presentation of text is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed. </p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-3"><div role="heading" class="note-title marker" id="h-note-3" aria-level="5"><span>Note</span></div><p class="">Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'If the technologies being used can achieve the visual presentation, [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") is used to convey information rather than [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") except for the following:\n\n<dl><dt>Customizable</dt><dd><p>The image of text can be <a href="https://www.w3.org/TR/WCAG22/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="the font, size, color, and background can be set">visually customized</a> to the user\'s requirements;</p></dd><dt>Essential</dt><dd><p>A particular presentation of text is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</p></dd></dl>\n\nNote\n\nLogotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					"If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:\n\nCustomizable\n\nThe image of text can be visually customized to the user's requirements;\n\nEssential\n\nA particular presentation of text is essential to the information being conveyed.\n\nNoteLogotypes (text that is part of a logo or brand name) are considered essential.",
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'Contrast (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p>The visual presentation of <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-5" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-4" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a> has a <a href="https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-2" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 7:1, except for the following: </p> <dl> <dt>Large Text</dt> <dd> <p><a href="https://www.w3.org/TR/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1; </p> </dd> <dt>Incidental</dt> <dd> <p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. </p> </dd> <dt>Logotypes</dt> <dd> <p>Text that is part of a logo or brand name has no contrast requirement.</p> </dd> </dl>',
				bodyMarkdown:
					'The visual presentation of [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") and [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") has a [contrast ratio](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 7:1, except for the following:\n\n<dl><dt>Large Text</dt><dd><p><a href="https://www.w3.org/TR/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts">Large-scale</a> text and images of large-scale text have a contrast ratio of at least 4.5:1;</p></dd><dt>Incidental</dt><dd><p>Text or images of text that are part of an inactive <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a>, that are <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a>, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.</p></dd><dt>Logotypes</dt><dd><p>Text that is part of a logo or brand name has no contrast requirement.</p></dd></dl>',
				bodyPlain:
					'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:\n\nLarge Text\n\nLarge-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;\n\nIncidental\n\nText or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant\nother visual content, have no contrast requirement.\n\nLogotypes\n\nText that is part of a logo or brand name has no contrast requirement.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: 'Low or No Background Audio',
				level: 'AAA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-8" title="information that is not live">prerecorded</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-3" title="a time-based presentation that contains only audio (no video and no interaction)">audio-only</a> content that (1) contains primarily speech in the foreground, (2) is not an audio <a href="https://www.w3.org/TR/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-2" title="initialism for &quot;Completely Automated Public Turing test to tell Computers and Humans Apart&quot;">CAPTCHA</a> or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: </p> <dl> <dt>No Background</dt> <dd> <p>The audio does not contain background sounds.</p> </dd> <dt>Turn Off</dt> <dd> <p>The background sounds can be turned off.</p> </dd> <dt>20 dB</dt> <dd> <p>The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. </p> <div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>Note</span></div><p class="">Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content. </p></div> </dd> </dl>',
				bodyMarkdown:
					'For [prerecorded](https://www.w3.org/TR/WCAG22/#dfn-prerecorded "information that is not live") [audio-only](https://www.w3.org/TR/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)") content that (1) contains primarily speech in the foreground, (2) is not an audio [CAPTCHA](https://www.w3.org/TR/WCAG22/#dfn-captcha "initialism for \\"Completely Automated Public Turing test to tell Computers and Humans Apart\\"") or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:\n\n<dl><dt>No Background</dt><dd><p>The audio does not contain background sounds.</p></dd><dt>Turn Off</dt><dd><p>The background sounds can be turned off.</p></dd><dt>20 dB</dt><dd><p>The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.</p><div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>Note</span></div><p class="">Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.</p></div></dd></dl>',
				bodyPlain:
					'For prerecorded\naudio-only content that (1) contains primarily speech in the foreground, (2) is not an audio\nCAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression\nsuch as singing or rapping, at least one of the following is true:\n\nNo Background\n\nThe audio does not contain background sounds.\n\nTurn Off\n\nThe background sounds can be turned off.\n\n20 dB\n\nThe background sounds are at least 20 decibels lower than the foreground speech content,\nwith the exception of occasional sounds that last for only one or two seconds.\n\nNotePer the definition of "decibel," background sound that meets this requirement will\nbe approximately four times quieter than the foreground speech content.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: 'Visual Presentation',
				level: 'AAA',
				bodyHTML:
					'<p>For the visual presentation of <a href="https://www.w3.org/TR/WCAG22/#dfn-blocks-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blocks-of-text-1" title="more than one sentence of text">blocks of text</a>, a <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-2" title="process or technique for achieving a result">mechanism</a> is available to achieve the following: </p> <ul> <li>Foreground and background colors can be selected by the user.</li> <li>Width is no more than 80 characters or glyphs (40 if CJK).</li> <li>Text is not justified (aligned to both the left and the right margins).</li> <li>Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.</li> <li>Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text <a href="https://www.w3.org/TR/WCAG22/#dfn-on-a-full-screen-window" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-on-a-full-screen-window-1" title="on the most common sized desktop/laptop display with the viewport maximized">on a full-screen window</a>.</li> </ul> <div class="note" role="note" id="issue-container-generatedID-5"><div role="heading" class="note-title marker" id="h-note-5" aria-level="5"><span>Note 1</span></div><p class="">Content is not required to use these values. The requirement is that a mechanism is available for users to change these presentation aspects. The mechanism can be provided by the browser or other user agent. Content is not required to provide the mechanism.</p></div> <div class="note" role="note" id="issue-container-generatedID-6"><div role="heading" class="note-title marker" id="h-note-6" aria-level="5"><span>Note 2</span></div><p class="">Writing systems for some languages use different presentation aspects to improve readability and legibility. If a presentation aspect in this success criterion is not used in a writing system, content in that writing system does not need to use that presentation setting and can conform without it. Authors are encouraged to follow guidance for improving readability and legibility of text in their writing system.</p></div>',
				bodyMarkdown:
					'For the visual presentation of [blocks of text](https://www.w3.org/TR/WCAG22/#dfn-blocks-of-text "more than one sentence of text"), a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available to achieve the following:\n\n-   Foreground and background colors can be selected by the user.\n-   Width is no more than 80 characters or glyphs (40 if CJK).\n-   Text is not justified (aligned to both the left and the right margins).\n-   Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.\n-   Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text [on a full-screen window](https://www.w3.org/TR/WCAG22/#dfn-on-a-full-screen-window "on the most common sized desktop/laptop display with the viewport maximized").\n\nNote 1\n\nContent is not required to use these values. The requirement is that a mechanism is available for users to change these presentation aspects. The mechanism can be provided by the browser or other user agent. Content is not required to provide the mechanism.\n\nNote 2\n\nWriting systems for some languages use different presentation aspects to improve readability and legibility. If a presentation aspect in this success criterion is not used in a writing system, content in that writing system does not need to use that presentation setting and can conform without it. Authors are encouraged to follow guidance for improving readability and legibility of text in their writing system.',
				bodyPlain:
					'For the visual presentation of blocks of text, a mechanism is available to achieve the following:\n\nForeground and background colors can be selected by the user. \nWidth is no more than 80 characters or glyphs (40 if CJK). \nText is not justified (aligned to both the left and the right margins). \nLine spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing. \nText can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window. \n\nNote 1Content is not required to use these values. The requirement is that a mechanism is available for users to change these presentation aspects. The mechanism can be provided by the browser or other user agent. Content is not required to provide the mechanism.\n\nNote 2Writing systems for some languages use different presentation aspects to improve readability and legibility. If a presentation aspect in this success criterion is not used in a writing system, content in that writing system does not need to use that presentation setting and can conform without it. Authors are encouraged to follow guidance for improving readability and legibility of text in their writing system.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: 'Images of Text (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-5" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">Images of text</a> are only used for <a href="https://www.w3.org/TR/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-4" title="serving only an aesthetic purpose, providing no information, and having no functionality">pure decoration</a> or where a particular presentation of <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-6" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-3" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed. </p> <div class="note" role="note" id="issue-container-generatedID-7"><div role="heading" class="note-title marker" id="h-note-7" aria-level="5"><span>Note</span></div><p class="">Logotypes (text that is part of a logo or brand name) are considered essential.</p></div>',
				bodyMarkdown:
					'[Images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect") are only used for [pure decoration](https://www.w3.org/TR/WCAG22/#dfn-pure-decoration "serving only an aesthetic purpose, providing no information, and having no functionality") or where a particular presentation of [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") to the information being conveyed.\n\nNote\n\nLogotypes (text that is part of a logo or brand name) are considered essential.',
				bodyPlain:
					'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.\n\nNoteLogotypes (text that is part of a logo or brand name) are considered essential.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html',
			},
			'1.4.10': {
				id: '1.4.10',
				title: 'Reflow',
				level: 'AA',
				bodyHTML:
					'<p>Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:</p> <ul> <li>Vertical scrolling content at a width equivalent to 320 <a href="https://www.w3.org/TR/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-1" title="visual angle of about 0.0213 degrees">CSS pixels</a>;</li> <li>Horizontal scrolling content at a height equivalent to 256 <a href="https://www.w3.org/TR/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-2" title="visual angle of about 0.0213 degrees">CSS pixels</a>.</li> </ul> <p>Except for parts of the content which require two-dimensional layout for usage or meaning.</p> <div class="note" role="note" id="issue-container-generatedID-8"><div role="heading" class="note-title marker" id="h-note-8" aria-level="5"><span>Note 1</span></div><p class="">320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.</p></div> <div class="note" role="note" id="issue-container-generatedID-9"><div role="heading" class="note-title marker" id="h-note-9" aria-level="5"><span>Note 2</span></div><p class="">Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.</p></div>',
				bodyMarkdown:
					'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:\n\n-   Vertical scrolling content at a width equivalent to 320 [CSS pixels](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees");\n-   Horizontal scrolling content at a height equivalent to 256 [CSS pixels](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees").\n\nExcept for parts of the content which require two-dimensional layout for usage or meaning.\n\nNote 1\n\n320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.\n\nNote 2\n\nExamples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.',
				bodyPlain:
					'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:\n\nVertical scrolling content at a width equivalent to 320 CSS pixels;\nHorizontal scrolling content at a height equivalent to 256 CSS pixels.\n\nExcept for parts of the content which require two-dimensional layout for usage or meaning.\n\nNote 1320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom.\n\nNote 2Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html',
			},
			'1.4.11': {
				id: '1.4.11',
				title: 'Non-text Contrast',
				level: 'AA',
				bodyHTML:
					'<p>The visual <a href="https://www.w3.org/TR/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-2" title="rendering of the content in a form to be perceived by users">presentation</a> of the following have a <a href="https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-3" title="(L1 + 0.05) / (L2 + 0.05), where">contrast ratio</a> of at least 3:1 against adjacent color(s):</p> <dl> <dt>User Interface Components</dt> <dd>Visual information required to identify <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes">states</a>, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;</dd> <dt>Graphical Objects</dt> <dd>Parts of graphics required to understand the content, except when a particular presentation of graphics is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd> </dl>',
				bodyMarkdown:
					'The visual [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users") of the following have a [contrast ratio](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05), where") of at least 3:1 against adjacent color(s):\n\n<dl><dt>User Interface Components</dt><dd>Visual information required to identify <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="dynamic property expressing characteristics of a user interface component that may change in response to user action or automated processes">states</a>, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;</dd><dt>Graphical Objects</dt><dd>Parts of graphics required to understand the content, except when a particular presentation of graphics is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd></dl>',
				bodyPlain:
					'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):\n\nUser Interface Components\n\nVisual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;\n\nGraphical Objects\n\nParts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html',
			},
			'1.4.12': {
				id: '1.4.12',
				title: 'Text Spacing',
				level: 'AA',
				bodyHTML:
					'<p>In content implemented using markup languages that support the following <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-7" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> <a href="https://www.w3.org/TR/WCAG22/#dfn-style-properties" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-style-properties-1" title="property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents">style properties</a>, no loss of content or functionality occurs by setting all of the following and by changing no other style property:</p> <ul> <li>Line height (line spacing) to at least 1.5 times the font size;</li> <li>Spacing following paragraphs to at least 2 times the font size;</li> <li>Letter spacing (tracking) to at least 0.12 times the font size;</li> <li>Word spacing to at least 0.16 times the font size.</li> </ul> <p>Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.</p> <div class="note" role="note" id="issue-container-generatedID-10"><div role="heading" class="note-title marker" id="h-note-10" aria-level="5"><span>Note 1</span></div><p class="">Content is not required to use these text spacing values. The requirement is to ensure that when a user overrides the authored text spacing, content or functionality is not lost.</p></div> <div class="note" role="note" id="issue-container-generatedID-11"><div role="heading" class="note-title marker" id="h-note-11" aria-level="5"><span>Note 2</span></div><p class="">Writing systems for some languages use different text spacing settings, such as paragraph start indent. Authors are encouraged to follow locally available guidance for improving readability and legibility of text in their writing system.</p></div>',
				bodyMarkdown:
					'In content implemented using markup languages that support the following [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") [style properties](https://www.w3.org/TR/WCAG22/#dfn-style-properties "property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by user agents"), no loss of content or functionality occurs by setting all of the following and by changing no other style property:\n\n-   Line height (line spacing) to at least 1.5 times the font size;\n-   Spacing following paragraphs to at least 2 times the font size;\n-   Letter spacing (tracking) to at least 0.12 times the font size;\n-   Word spacing to at least 0.16 times the font size.\n\nException: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.\n\nNote 1\n\nContent is not required to use these text spacing values. The requirement is to ensure that when a user overrides the authored text spacing, content or functionality is not lost.\n\nNote 2\n\nWriting systems for some languages use different text spacing settings, such as paragraph start indent. Authors are encouraged to follow locally available guidance for improving readability and legibility of text in their writing system.',
				bodyPlain:
					'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:\n\nLine height (line spacing) to at least 1.5 times the font size;\nSpacing following paragraphs to at least 2 times the font size;\nLetter spacing (tracking) to at least 0.12 times the font size;\nWord spacing to at least 0.16 times the font size.\n\nException: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.\n\nNote 1Content is not required to use these text spacing values. The requirement is to ensure that when a user overrides the authored text spacing, content or functionality is not lost.\n\nNote 2Writing systems for some languages use different text spacing settings, such as paragraph start indent. Authors are encouraged to follow locally available guidance for improving readability and legibility of text in their writing system.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html',
			},
			'1.4.13': {
				id: '1.4.13',
				title: 'Content on Hover or Focus',
				level: 'AA',
				bodyHTML:
					'<p>Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:</p> <dl> <dt>Dismissible</dt> <dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="process or technique for achieving a result">mechanism</a> is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an <a href="https://www.w3.org/TR/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="information provided by the user that is not accepted">input error</a> or does not obscure or replace other content;</dd> <dt>Hoverable</dt> <dd>If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</dd> <dt>Persistent</dt> <dd>The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</dd> </dl> <p>Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.</p> <div class="note" role="note" id="issue-container-generatedID-12"><div role="heading" class="note-title marker" id="h-note-12" aria-level="5"><span>Note 1</span></div><p class="">Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <a href="https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute"><code>title</code> attribute</a> [<cite><a class="bibref" data-link-type="biblio" href="https://www.w3.org/TR/WCAG22/#bib-html" title="HTML Standard">HTML</a></cite>].</p></div> <div class="note" role="note" id="issue-container-generatedID-13"><div role="heading" class="note-title marker" id="h-note-13" aria-level="5"><span>Note 2</span></div><p class="">Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.</p></div> <div class="note" role="note" id="issue-container-generatedID-14"><div role="heading" class="note-title marker" id="h-note-14" aria-level="5"><span>Note 3</span></div><p class="">This criterion applies to content that appears in addition to the triggering component itself. Since hidden components that are made visible on keyboard focus (such as links used to skip to another part of a page) do not present additional content they are not covered by this criterion.</p></div>',
				bodyMarkdown:
					'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:\n\n<dl><dt>Dismissible</dt><dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="process or technique for achieving a result">mechanism</a> is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an <a href="https://www.w3.org/TR/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="information provided by the user that is not accepted">input error</a> or does not obscure or replace other content;</dd><dt>Hoverable</dt><dd>If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</dd><dt>Persistent</dt><dd>The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.</dd></dl>\n\nException: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.\n\nNote 1\n\nExamples of additional content controlled by the user agent include browser tooltips created through use of the HTML [`title` attribute](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute) \\[[HTML](https://www.w3.org/TR/WCAG22/#bib-html "HTML Standard")\\].\n\nNote 2\n\nCustom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.\n\nNote 3\n\nThis criterion applies to content that appears in addition to the triggering component itself. Since hidden components that are made visible on keyboard focus (such as links used to skip to another part of a page) do not present additional content they are not covered by this criterion.',
				bodyPlain:
					'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:\n\nDismissible\nA mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;\n\nHoverable\nIf pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;\n\nPersistent\nThe additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.\n\nException: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.\n\nNote 1Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute [HTML].\nNote 2Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.\nNote 3This criterion applies to content that appears in addition to the triggering component itself. Since hidden components that are made visible on keyboard focus (such as links used to skip to another part of a page) do not present additional content they are not covered by this criterion.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'Keyboard',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-1" title="processes and outcomes achievable through user action">functionality</a> of the content is operable through a <a href="https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-1" title="interface used by software to obtain keystroke input">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. </p> <div class="note" role="note" id="issue-container-generatedID-15"><div role="heading" class="note-title marker" id="h-note-15" aria-level="5"><span>Note 1</span></div><p class="">This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not. </p></div> <div class="note" role="note" id="issue-container-generatedID-16"><div role="heading" class="note-title marker" id="h-note-16" aria-level="5"><span>Note 2</span></div><p class="">This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation. </p></div>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input") without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints.\n\nNote 1\n\nThis exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.\n\nNote 2\n\nThis does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
				bodyPlain:
					"All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying\nfunction requires input that depends on the path of the user's movement and not just\nthe endpoints.\n\nNote 1This exception relates to the underlying function, not the input technique. For example,\nif using handwriting to enter text, the input technique (handwriting) requires path-dependent\ninput but the underlying function (text input) does not.\n\nNote 2This does not forbid and should not discourage providing mouse input or other input\nmethods in addition to keyboard operation.",
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'No Keyboard Trap',
				level: 'A',
				bodyHTML:
					'<p>If keyboard focus can be moved to a component of the page using a <a href="https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-2" title="interface used by software to obtain keystroke input">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. </p> <div class="note" role="note" id="issue-container-generatedID-17"><div role="heading" class="note-title marker" id="h-note-17" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG22/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'If keyboard focus can be moved to a component of the page using a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input"), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG22/#cc5).',
				bodyPlain:
					"If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface,\nand, if it requires more than unmodified arrow or tab keys or other standard exit\nmethods, the user is advised of the method for moving focus away.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'Keyboard (No Exception)',
				level: 'AAA',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-2" title="processes and outcomes achievable through user action">functionality</a> of the content is operable through a <a href="https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-3" title="interface used by software to obtain keystroke input">keyboard interface</a> without requiring specific timings for individual keystrokes. </p>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "interface used by software to obtain keystroke input") without requiring specific timings for individual keystrokes.',
				bodyPlain:
					'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html',
			},
			'2.1.4': {
				id: '2.1.4',
				title: 'Character Key Shortcuts',
				level: 'A',
				bodyHTML:
					'<p>If a <a href="https://www.w3.org/TR/WCAG22/#dfn-keyboard-shortcuts" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-shortcuts-1" title="alternative means of triggering an action by the pressing of one or more keys">keyboard shortcut</a> is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:</p> <dl> <dt>Turn off</dt> <dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="process or technique for achieving a result">mechanism</a> is available to turn the shortcut off;</dd> <dt>Remap</dt> <dd>A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);</dd> <dt>Active only on focus</dt> <dd>The keyboard shortcut for a <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> is only active when that component has focus.</dd> </dl>',
				bodyMarkdown:
					'If a [keyboard shortcut](https://www.w3.org/TR/WCAG22/#dfn-keyboard-shortcuts "alternative means of triggering an action by the pressing of one or more keys") is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:\n\n<dl><dt>Turn off</dt><dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="process or technique for achieving a result">mechanism</a> is available to turn the shortcut off;</dd><dt>Remap</dt><dd>A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);</dd><dt>Active only on focus</dt><dd>The keyboard shortcut for a <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> is only active when that component has focus.</dd></dl>',
				bodyPlain:
					'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:\n\nTurn off\nA mechanism is available to turn the shortcut off;\n\nRemap\nA mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);\n\nActive only on focus\nThe keyboard shortcut for a user interface component is only active when that component has focus.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'Timing Adjustable',
				level: 'A',
				bodyHTML:
					'<p>For each time limit that is set by the content, at least one of the following is true:</p> <dl> <dt>Turn off</dt> <dd> <p>The user is allowed to turn off the time limit before encountering it; or</p> </dd> <dt>Adjust</dt> <dd> <p>The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or </p> </dd> <dt>Extend</dt> <dd> <p>The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or </p> </dd> <dt>Real-time Exception</dt> <dd> <p>The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or </p> </dd> <dt>Essential Exception</dt> <dd> <p>The time limit is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> and extending it would invalidate the activity; or </p> </dd> <dt>20 Hour Exception</dt> <dd> <p>The time limit is longer than 20 hours.</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-18"><div role="heading" class="note-title marker" id="h-note-18" aria-level="5"><span>Note</span></div><p class="">This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="https://www.w3.org/TR/WCAG22/#on-focus">Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action. </p></div>',
				bodyMarkdown:
					'For each time limit that is set by the content, at least one of the following is true:\n\n<dl><dt>Turn off</dt><dd><p>The user is allowed to turn off the time limit before encountering it; or</p></dd><dt>Adjust</dt><dd><p>The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</p></dd><dt>Extend</dt><dd><p>The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or</p></dd><dt>Real-time Exception</dt><dd><p>The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</p></dd><dt>Essential Exception</dt><dd><p>The time limit is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> and extending it would invalidate the activity; or</p></dd><dt>20 Hour Exception</dt><dd><p>The time limit is longer than 20 hours.</p></dd></dl>\n\nNote\n\nThis success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](https://www.w3.org/TR/WCAG22/#on-focus), which puts limits on changes of content or context as a result of user action.',
				bodyPlain:
					'For each time limit that is set by the content, at least one of the following is true:\n\nTurn off\n\nThe user is allowed to turn off the time limit before encountering it; or\n\nAdjust\n\nThe user is allowed to adjust the time limit before encountering it over a wide range\nthat is at least ten times the length of the default setting; or\n\nExtend\n\nThe user is warned before time expires and given at least 20 seconds to extend the\ntime limit with a simple action (for example, "press the space bar"), and the user\nis allowed to extend the time limit at least ten times; or\n\nReal-time Exception\n\nThe time limit is a required part of a real-time event (for example, an auction),\nand no alternative to the time limit is possible; or\n\nEssential Exception\n\nThe time limit is essential and extending it would invalidate the activity; or\n\n20 Hour Exception\n\nThe time limit is longer than 20 hours.\n\nNoteThis success criterion helps ensure that users can complete tasks without unexpected\nchanges in content or context that are a result of a time limit. This success criterion\nshould be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: 'Pause, Stop, Hide',
				level: 'A',
				bodyHTML:
					'<p>For moving, <a href="https://www.w3.org/TR/WCAG22/#dfn-blinking" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blinking-1" title="switch back and forth between two visual states in a way that is meant to draw attention">blinking</a>, scrolling, or auto-updating information, all of the following are true: </p> <dl> <dt>Moving, blinking, scrolling</dt> <dd> <p>For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="https://www.w3.org/TR/WCAG22/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="stopped by user request and not resumed until requested by user">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>; and </p> </dd> <dt>Auto-updating</dt> <dd> <p>For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential. </p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="5"><span>Note 1</span></div><p class="">For requirements related to flickering or flashing content, refer to <a href="https://www.w3.org/TR/WCAG22/#seizures-and-physical-reactions">Guideline 2.3</a>. </p></div> <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="5"><span>Note 2</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG22/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div> <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="5"><span>Note 3</span></div><p class="">Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. </p></div> <div class="note" role="note" id="issue-container-generatedID-22"><div role="heading" class="note-title marker" id="h-note-22" aria-level="5"><span>Note 4</span></div><p class="">An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken. </p></div>',
				bodyMarkdown:
					'For moving, [blinking](https://www.w3.org/TR/WCAG22/#dfn-blinking "switch back and forth between two visual states in a way that is meant to draw attention"), scrolling, or auto-updating information, all of the following are true:\n\n<dl><dt>Moving, blinking, scrolling</dt><dd><p>For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="https://www.w3.org/TR/WCAG22/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="stopped by user request and not resumed until requested by user">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>; and</p></dd><dt>Auto-updating</dt><dd><p>For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</p></dd></dl>\n\nNote 1\n\nFor requirements related to flickering or flashing content, refer to [Guideline 2.3](https://www.w3.org/TR/WCAG22/#seizures-and-physical-reactions).\n\nNote 2\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG22/#cc5).\n\nNote 3\n\nContent that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.\n\nNote 4\n\nAn animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
				bodyPlain:
					"For moving, blinking, scrolling, or auto-updating information, all of the following are true:\n\nMoving, blinking, scrolling\n\nFor any moving, blinking or scrolling information that (1) starts automatically, (2)\nlasts more than five seconds, and (3) is presented in parallel with other content,\nthere is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity\nwhere it is essential; and\n\nAuto-updating\n\nFor any auto-updating information that (1) starts automatically and (2) is presented\nin parallel with other content, there is a mechanism for the user to pause, stop,\nor hide it or to control the frequency of the update unless the auto-updating is part\nof an activity where it is essential.\n\nNote 1For requirements related to flickering or flashing content, refer to Guideline 2.3.\n\nNote 2Since any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.\n\nNote 3Content that is updated periodically by software or that is streamed to the user agent\nis not required to preserve or present information that is generated or received between\nthe initiation of the pause and resuming presentation, as this may not be technically\npossible, and in many situations could be misleading to do so.\n\nNote 4An animation that occurs as part of a preload phase or similar situation can be considered\nessential if interaction cannot occur during that phase for all users and if not indicating\nprogress could confuse users or cause them to think that content was frozen or broken.",
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'No Timing',
				level: 'AAA',
				bodyHTML:
					'<p>Timing is not an <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-7" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> part of the event or activity presented by the content, except for non-interactive <a href="https://www.w3.org/TR/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-8" title="audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such">synchronized media</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-real-time-events" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-real-time-events-1" title="event that a) occurs at the same time as the viewing and b) is not completely generated by the content">real-time events</a>. </p>',
				bodyMarkdown:
					'Timing is not an [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") part of the event or activity presented by the content, except for non-interactive [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media "audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such") and [real-time events](https://www.w3.org/TR/WCAG22/#dfn-real-time-events "event that a) occurs at the same time as the viewing and b) is not completely generated by the content").',
				bodyPlain:
					'Timing is not an essential part of the event or activity presented by the content, except for non-interactive\nsynchronized media and real-time events.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: 'Interruptions',
				level: 'AAA',
				bodyHTML:
					'<p>Interruptions can be postponed or suppressed by the user, except interruptions involving an <a href="https://www.w3.org/TR/WCAG22/#dfn-emergency" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-emergency-1" title="a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property">emergency</a>. </p>',
				bodyMarkdown:
					'Interruptions can be postponed or suppressed by the user, except interruptions involving an [emergency](https://www.w3.org/TR/WCAG22/#dfn-emergency "a sudden, unexpected situation or occurrence that requires immediate action to preserve health, safety, or property").',
				bodyPlain:
					'Interruptions can be postponed or suppressed by the user, except interruptions involving\nan emergency.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: 'Re-authenticating',
				level: 'AAA',
				bodyHTML:
					'<p>When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating. </p>',
				bodyMarkdown:
					'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
				bodyPlain:
					'When an authenticated session expires, the user can continue the activity without\nloss of data after re-authenticating.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html',
			},
			'2.2.6': {
				id: '2.2.6',
				title: 'Timeouts',
				level: 'AAA',
				bodyHTML:
					'<p>Users are warned of the duration of any <a href="https://www.w3.org/TR/WCAG22/#dfn-user-inactivity" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-inactivity-1" title="any continuous period of time where no user actions occur">user inactivity</a> that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.</p> <div class="note" role="note" id="issue-container-generatedID-23"><div role="heading" class="note-title marker" id="h-note-23" aria-level="5"><span>Note</span></div><p class="">Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.</p></div>',
				bodyMarkdown:
					'Users are warned of the duration of any [user inactivity](https://www.w3.org/TR/WCAG22/#dfn-user-inactivity "any continuous period of time where no user actions occur") that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.\n\nNote\n\nPrivacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
				bodyPlain:
					'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.\n\nNotePrivacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: 'Three Flashes or Below Threshold',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-1" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> do not contain anything that flashes more than three times in any one second period, or the <a href="https://www.w3.org/TR/WCAG22/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-1" title="a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range">flash</a> is below the <a href="https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-general-flash-and-red-flash-thresholds-1" title="a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:">general flash and red flash thresholds</a>. </p> <div class="note" role="note" id="issue-container-generatedID-24"><div role="heading" class="note-title marker" id="h-note-24" aria-level="5"><span>Note</span></div><p class="">Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See <a href="https://www.w3.org/TR/WCAG22/#cc5">Conformance Requirement 5: Non-Interference</a>. </p></div>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") do not contain anything that flashes more than three times in any one second period, or the [flash](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range") is below the [general flash and red flash thresholds](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds "a flash or rapidly changing image sequence is below the threshold (i.e., content passes) if any of the following are true:").\n\nNote\n\nSince any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG22/#cc5).',
				bodyPlain:
					"Web pages do not contain anything that flashes more than three times in any one second period,\nor the flash is below the general flash and red flash thresholds.\n\nNoteSince any content that does not meet this success criterion can interfere with a user's\nability to use the whole page, all content on the Web page (whether it is used to\nmeet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.",
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: 'Three Flashes',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-2" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> do not contain anything that <a href="https://www.w3.org/TR/WCAG22/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-2" title="a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range">flashes</a> more than three times in any one second period. </p>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") do not contain anything that [flashes](https://www.w3.org/TR/WCAG22/#dfn-flashes "a pair of opposing changes in relative luminance that can cause seizures in some people if it is large enough and in the right frequency range") more than three times in any one second period.',
				bodyPlain:
					'Web pages do not contain anything that flashes more than three times in any one second period.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html',
			},
			'2.3.3': {
				id: '2.3.3',
				title: 'Animation from Interactions',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-motion-animation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-motion-animation-1" title="addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition">Motion animation</a> triggered by interaction can be disabled, unless the animation is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-8" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the functionality or the information being conveyed.</p>',
				bodyMarkdown:
					'[Motion animation](https://www.w3.org/TR/WCAG22/#dfn-motion-animation "addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition") triggered by interaction can be disabled, unless the animation is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") to the functionality or the information being conveyed.',
				bodyPlain:
					'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'Bypass Blocks',
				level: 'A',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-5" title="process or technique for achieving a result">mechanism</a> is available to bypass blocks of content that are repeated on multiple <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-3" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available to bypass blocks of content that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent").',
				bodyPlain:
					'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'Page Titled',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-4" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> have titles that describe topic or purpose. </p>',
				bodyMarkdown:
					'[Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") have titles that describe topic or purpose.',
				bodyPlain: 'Web pages have titles that describe topic or purpose.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'Focus Order',
				level: 'A',
				bodyHTML:
					'<p>If a <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-5" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-navigated-sequentially" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-navigated-sequentially-1" title="navigated in the order defined for advancing focus (from one element to the next) using a keyboard interface">navigated sequentially</a> and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. </p>',
				bodyMarkdown:
					'If a [Web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") can be [navigated sequentially](https://www.w3.org/TR/WCAG22/#dfn-navigated-sequentially "navigated in the order defined for advancing focus (from one element to the next) using a keyboard interface") and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
				bodyPlain:
					'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive\nfocus in an order that preserves meaning and operability.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'Link Purpose (In Context)',
				level: 'A',
				bodyHTML:
					'<p>The <a href="https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-purpose-of-each-link-1" title="nature of the result obtained by activating a hyperlink">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determined-link-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determined-link-context-1" title="additional information that can be programmatically determined from relationships with a link, combined with the link text, and presented to users in different modalities">programmatically determined link context</a>, except where the purpose of the link would be <a href="https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-1" title="the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)">ambiguous to users in general</a>. </p>',
				bodyMarkdown:
					'The [purpose of each link](https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link "nature of the result obtained by activating a hyperlink") can be determined from the link text alone or from the link text together with its [programmatically determined link context](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determined-link-context "additional information that can be programmatically determined from relationships with a link, combined with the link text, and presented to users in different modalities"), except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)").',
				bodyPlain:
					'The purpose of each link can be determined from the link text alone or from the link text together with its\nprogrammatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: 'Multiple Ways',
				level: 'AA',
				bodyHTML:
					'<p>More than one way is available to locate a <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-6" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> within a <a href="https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-1" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> except where the Web Page is the result of, or a step in, a <a href="https://www.w3.org/TR/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-1" title="series of user actions where each action is required in order to complete an activity">process</a>. </p>',
				bodyMarkdown:
					'More than one way is available to locate a [Web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") within a [set of Web pages](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") except where the Web Page is the result of, or a step in, a [process](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity").',
				bodyPlain:
					'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: 'Headings and Labels',
				level: 'AA',
				bodyHTML:
					'<p>Headings and <a href="https://www.w3.org/TR/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-1" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">labels</a> describe topic or purpose. </p>',
				bodyMarkdown:
					'Headings and [labels](https://www.w3.org/TR/WCAG22/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") describe topic or purpose.',
				bodyPlain: 'Headings and labels describe topic or purpose.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'Focus Visible',
				level: 'AA',
				bodyHTML:
					'<p>Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. </p>',
				bodyMarkdown:
					'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
				bodyPlain:
					'Any keyboard operable user interface has a mode of operation where the keyboard focus\nindicator is visible.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: 'Location',
				level: 'AAA',
				bodyHTML:
					'<p>Information about the user\'s location within a <a href="https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-2" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> is available. </p>',
				bodyMarkdown:
					'Information about the user\'s location within a [set of Web pages](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") is available.',
				bodyPlain:
					"Information about the user's location within a set of Web pages is available.",
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'Link Purpose (Link Only)',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-6" title="process or technique for achieving a result">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-2" title="the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)">ambiguous to users in general</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general "the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)").',
				bodyPlain:
					'A mechanism is available to allow the purpose of each link to be identified from link text alone,\nexcept where the purpose of the link would be ambiguous to users in general.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'Section Headings',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-section" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-section-1" title="a self-contained portion of written content that deals with one or more related topics or thoughts">Section</a> headings are used to organize the content. </p> <div class="note" role="note" id="issue-container-generatedID-25"><div role="heading" class="note-title marker" id="h-note-25" aria-level="5"><span>Note 1</span></div><p class="">"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content. </p></div> <div class="note" role="note" id="issue-container-generatedID-26"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>Note 2</span></div><p class="">This success criterion covers sections within writing, not <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-6" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a>. User interface components are covered under <a href="https://www.w3.org/TR/WCAG22/#name-role-value">Success Criterion 4.1.2</a>. </p></div>',
				bodyMarkdown:
					'[Section](https://www.w3.org/TR/WCAG22/#dfn-section "a self-contained portion of written content that deals with one or more related topics or thoughts") headings are used to organize the content.\n\nNote 1\n\n"Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.\n\nNote 2\n\nThis success criterion covers sections within writing, not [user interface components](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function"). User interface components are covered under [Success Criterion 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value).',
				bodyPlain:
					'Section headings are used to organize the content.\n\nNote 1"Heading" is used in its general sense and includes titles and other ways to add a\nheading to different types of content.\n\nNote 2This success criterion covers sections within writing, not user interface components. User interface components are covered under Success Criterion 4.1.2.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html',
			},
			'2.4.11': {
				id: '2.4.11',
				title: 'Focus Not Obscured (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p>When a <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-7" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> receives keyboard focus, the component is not entirely hidden due to author-created content.</p> <div class="note" role="note" id="issue-container-generatedID-27"><div role="heading" class="note-title marker" id="h-note-27" aria-level="5"><span>Note 1</span></div><p class="">Where content in a configurable interface can be repositioned by the user, then only the initial positions of user-movable content are considered for testing and conformance of this Success Criterion.</p></div> <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-28" aria-level="5"><span>Note 2</span></div><p class="">Content opened by the <em>user</em> may obscure the component receiving focus. If the user can reveal the focused component without advancing the keyboard focus, the component with focus is not considered hidden due to author-created content.</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nWhen a [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") receives keyboard focus, the component is not entirely hidden due to author-created content.\n\nNote 1\n\nWhere content in a configurable interface can be repositioned by the user, then only the initial positions of user-movable content are considered for testing and conformance of this Success Criterion.\n\nNote 2\n\nContent opened by the _user_ may obscure the component receiving focus. If the user can reveal the focused component without advancing the keyboard focus, the component with focus is not considered hidden due to author-created content.',
				bodyPlain:
					'[New]\n\nWhen a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.\n\nNote 1Where content in a configurable interface can be repositioned by the user, then only the initial positions of user-movable content are considered for testing and conformance of this Success Criterion.\n\nNote 2Content opened by the user may obscure the component receiving focus. If the user can reveal the focused component without advancing the keyboard focus, the component with focus is not considered hidden due to author-created content.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html',
			},
			'2.4.12': {
				id: '2.4.12',
				title: 'Focus Not Obscured (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p>When a <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-8" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> receives keyboard focus, no part of the component is hidden by author-created content.</p>',
				bodyMarkdown:
					'\\[New\\]\n\nWhen a [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") receives keyboard focus, no part of the component is hidden by author-created content.',
				bodyPlain:
					'[New]\n\nWhen a user interface component receives keyboard focus, no part of the component is hidden by author-created content.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html',
			},
			'2.4.13': {
				id: '2.4.13',
				title: 'Focus Appearance',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p>When the keyboard <a href="https://www.w3.org/TR/WCAG22/#dfn-focus-indicator" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-focus-indicator-1" title="[New]">focus indicator</a> is visible, an area of the focus indicator meets all the following:</p> <ul> <li>is at least as large as the area of a 2 <a href="https://www.w3.org/TR/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-3" title="visual angle of about 0.0213 degrees">CSS pixel</a> thick <a href="https://www.w3.org/TR/WCAG22/#dfn-perimeter" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-perimeter-1" title="[New]">perimeter</a> of the unfocused component or sub-component, and</li> <li>has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.</li> </ul> <p>Exceptions:</p> <ul> <li>The focus indicator is determined by the <a href="https://www.w3.org/TR/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-1" title="any software that retrieves and presents Web content for users">user agent</a> and cannot be adjusted by the author, or</li> <li>The focus indicator and the indicator\'s background color are not modified by the author.</li> </ul> <div class="note" role="note" id="issue-container-generatedID-29"><div role="heading" class="note-title marker" id="h-note-29" aria-level="5"><span>Note 1</span></div><p class="">What is perceived as the user interface component or sub-component (to determine enclosure or size) depends on its visual <a href="https://www.w3.org/TR/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-3" title="rendering of the content in a form to be perceived by users">presentation</a>. The visual presentation includes the component\'s visible <a href="https://www.w3.org/TR/WCAG22/#dfn-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-content-1" title="information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content\'s structure, presentation, and interactions">content</a>, border, and component-specific background. It does not include shadow and glow effects outside the component\'s content, background, or border.</p></div> <div class="note" role="note" id="issue-container-generatedID-30"><div role="heading" class="note-title marker" id="h-note-30" aria-level="5"><span>Note 2</span></div><p class="">Examples of sub-components that may receive a focus indicator are menu items in an opened drop-down menu, or focusable cells in a grid.</p></div> <div class="note" role="note" id="issue-container-generatedID-31"><div role="heading" class="note-title marker" id="h-note-31" aria-level="5"><span>Note 3</span></div><p class="">Contrast calculations can be based on colors defined within the <a href="https://www.w3.org/TR/WCAG22/#dfn-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-technologies-1" title="mechanism for encoding instructions to be rendered, played or executed by user agents">technology</a> (such as HTML, CSS and SVG). Pixels modified by user agent resolution enhancements and anti-aliasing can be ignored.</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nWhen the keyboard [focus indicator](https://www.w3.org/TR/WCAG22/#dfn-focus-indicator "[New]") is visible, an area of the focus indicator meets all the following:\n\n-   is at least as large as the area of a 2 [CSS pixel](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees") thick [perimeter](https://www.w3.org/TR/WCAG22/#dfn-perimeter "[New]") of the unfocused component or sub-component, and\n-   has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.\n\nExceptions:\n\n-   The focus indicator is determined by the [user agent](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents Web content for users") and cannot be adjusted by the author, or\n-   The focus indicator and the indicator\'s background color are not modified by the author.\n\nNote 1\n\nWhat is perceived as the user interface component or sub-component (to determine enclosure or size) depends on its visual [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users"). The visual presentation includes the component\'s visible [content](https://www.w3.org/TR/WCAG22/#dfn-content "information and sensory experience to be communicated to the user by means of a user agent, including code or markup that defines the content\'s structure, presentation, and interactions"), border, and component-specific background. It does not include shadow and glow effects outside the component\'s content, background, or border.\n\nNote 2\n\nExamples of sub-components that may receive a focus indicator are menu items in an opened drop-down menu, or focusable cells in a grid.\n\nNote 3\n\nContrast calculations can be based on colors defined within the [technology](https://www.w3.org/TR/WCAG22/#dfn-technologies "mechanism for encoding instructions to be rendered, played or executed by user agents") (such as HTML, CSS and SVG). Pixels modified by user agent resolution enhancements and anti-aliasing can be ignored.',
				bodyPlain:
					"[New]\n\nWhen the keyboard focus indicator is visible, an area of the focus indicator meets all the following:\n\nis at least as large as the area of a 2 CSS pixel thick perimeter of the unfocused component or sub-component, and\nhas a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.\n\nExceptions:\n\nThe focus indicator is determined by the user agent and cannot be adjusted by the author, or\nThe focus indicator and the indicator's background color are not modified by the author.\n\nNote 1What is perceived as the user interface component or sub-component (to determine enclosure or size) depends on its visual presentation. The visual presentation includes the component's visible content, border, and component-specific background. It does not include shadow and glow effects outside the component's content, background, or border.\n\nNote 2Examples of sub-components that may receive a focus indicator are menu items in an opened drop-down menu, or focusable cells in a grid.\n\nNote 3Contrast calculations can be based on colors defined within the technology (such as HTML, CSS and SVG). Pixels modified by user agent resolution enhancements and anti-aliasing can be ignored.",
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html',
			},
			'2.5.1': {
				id: '2.5.1',
				title: 'Pointer Gestures',
				level: 'A',
				bodyHTML:
					'<p>All <a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-3" title="processes and outcomes achievable through user action">functionality</a> that uses multipoint or path-based gestures for operation can be operated with a <a href="https://www.w3.org/TR/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-1" title="pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures">single pointer</a> without a path-based gesture, unless a multipoint or path-based gesture is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-9" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</p> <div class="note" role="note" id="issue-container-generatedID-32"><div role="heading" class="note-title marker" id="h-note-32" aria-level="5"><span>Note</span></div><p class="">This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p></div>',
				bodyMarkdown:
					'All [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") that uses multipoint or path-based gestures for operation can be operated with a [single pointer](https://www.w3.org/TR/WCAG22/#dfn-single-pointer "pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures") without a path-based gesture, unless a multipoint or path-based gesture is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform").\n\nNote\n\nThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				bodyPlain:
					'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.\n\nNoteThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html',
			},
			'2.5.2': {
				id: '2.5.2',
				title: 'Pointer Cancellation',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-4" title="processes and outcomes achievable through user action">functionality</a> that can be operated using a <a href="https://www.w3.org/TR/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-2" title="pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures">single pointer</a>, at least one of the following is true:</p> <dl> <dt>No Down-Event</dt> <dd>The <a href="https://www.w3.org/TR/WCAG22/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="platform event that occurs when the trigger stimulus of a pointer is depressed">down-event</a> of the pointer is not used to execute any part of the function;</dd> <dt>Abort or Undo</dt> <dd>Completion of the function is on the <a href="https://www.w3.org/TR/WCAG22/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="platform event that occurs when the trigger stimulus of a pointer is released">up-event</a>, and a <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="process or technique for achieving a result">mechanism</a> is available to abort the function before completion or to undo the function after completion;</dd> <dt>Up Reversal</dt> <dd>The up-event reverses any outcome of the preceding down-event;</dd> <dt>Essential</dt> <dd>Completing the function on the down-event is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-33"><div role="heading" class="note-title marker" id="h-note-33" aria-level="5"><span>Note 1</span></div><p class="">Functions that emulate a keyboard or numeric keypad key press are considered essential.</p></div> <div class="note" role="note" id="issue-container-generatedID-34"><div role="heading" class="note-title marker" id="h-note-34" aria-level="5"><span>Note 2</span></div><p class="">This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p></div>',
				bodyMarkdown:
					'For [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") that can be operated using a [single pointer](https://www.w3.org/TR/WCAG22/#dfn-single-pointer "pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures"), at least one of the following is true:\n\n<dl><dt>No Down-Event</dt><dd>The <a href="https://www.w3.org/TR/WCAG22/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="platform event that occurs when the trigger stimulus of a pointer is depressed">down-event</a> of the pointer is not used to execute any part of the function;</dd><dt>Abort or Undo</dt><dd>Completion of the function is on the <a href="https://www.w3.org/TR/WCAG22/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="platform event that occurs when the trigger stimulus of a pointer is released">up-event</a>, and a <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="process or technique for achieving a result">mechanism</a> is available to abort the function before completion or to undo the function after completion;</dd><dt>Up Reversal</dt><dd>The up-event reverses any outcome of the preceding down-event;</dd><dt>Essential</dt><dd>Completing the function on the down-event is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>.</dd></dl>\n\nNote 1\n\nFunctions that emulate a keyboard or numeric keypad key press are considered essential.\n\nNote 2\n\nThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				bodyPlain:
					'For functionality that can be operated using a single pointer, at least one of the following is true:\n\nNo Down-Event\nThe down-event of the pointer is not used to execute any part of the function;\n\nAbort or Undo\nCompletion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;\n\nUp Reversal\nThe up-event reverses any outcome of the preceding down-event;\n\nEssential\nCompleting the function on the down-event is essential.\n\nNote 1Functions that emulate a keyboard or numeric keypad key press are considered essential.\n\nNote 2This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html',
			},
			'2.5.3': {
				id: '2.5.3',
				title: 'Label in Name',
				level: 'A',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-9" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> with <a href="https://www.w3.org/TR/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-2" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">labels</a> that include <a href="https://www.w3.org/TR/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-8" title="sequence of characters that can be programmatically determined, where the sequence is expressing something in human language">text</a> or <a href="https://www.w3.org/TR/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-6" title="text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect">images of text</a>, the <a href="https://www.w3.org/TR/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-2" title="text by which software can identify a component within Web content to the user">name</a> contains the text that is presented visually.</p> <div class="note" role="note" id="issue-container-generatedID-35"><div role="heading" class="note-title marker" id="h-note-35" aria-level="5"><span>Note</span></div><p class="">A best practice is to have the text of the label at the start of the name.</p></div>',
				bodyMarkdown:
					'For [user interface components](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") with [labels](https://www.w3.org/TR/WCAG22/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") that include [text](https://www.w3.org/TR/WCAG22/#dfn-text "sequence of characters that can be programmatically determined, where the sequence is expressing something in human language") or [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text "text that has been rendered in a non-text form (e.g., an image) in order to achieve a particular visual effect"), the [name](https://www.w3.org/TR/WCAG22/#dfn-name "text by which software can identify a component within Web content to the user") contains the text that is presented visually.\n\nNote\n\nA best practice is to have the text of the label at the start of the name.',
				bodyPlain:
					'For user interface components with labels that include text or images of text, the name contains the text that is presented visually.\n\nNoteA best practice is to have the text of the label at the start of the name.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html',
			},
			'2.5.4': {
				id: '2.5.4',
				title: 'Motion Actuation',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-5" title="processes and outcomes achievable through user action">Functionality</a> that can be operated by device motion or user motion can also be operated by <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-10" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> and responding to the motion can be disabled to prevent accidental actuation, except when:</p> <dl> <dt>Supported Interface</dt> <dd>The motion is used to operate functionality through an <a href="https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="supported by users\' assistive technologies as well as the accessibility features in browsers and other user agents">accessibility supported</a> interface;</dd> <dt>Essential</dt> <dd>The motion is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> for the function and doing so would invalidate the activity.</dd> </dl>',
				bodyMarkdown:
					'[Functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") that can be operated by device motion or user motion can also be operated by [user interface components](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") and responding to the motion can be disabled to prevent accidental actuation, except when:\n\n<dl><dt>Supported Interface</dt><dd>The motion is used to operate functionality through an <a href="https://www.w3.org/TR/WCAG22/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="supported by users\' assistive technologies as well as the accessibility features in browsers and other user agents">accessibility supported</a> interface;</dd><dt>Essential</dt><dd>The motion is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> for the function and doing so would invalidate the activity.</dd></dl>',
				bodyPlain:
					'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:\n\nSupported Interface\nThe motion is used to operate functionality through an accessibility supported interface;\n\nEssential\nThe motion is essential for the function and doing so would invalidate the activity.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html',
			},
			'2.5.5': {
				id: '2.5.5',
				title: 'Target Size (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p>The size of the <a href="https://www.w3.org/TR/WCAG22/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-1" title="region of the display that will accept a pointer action, such as the interactive area of a user interface component">target</a> for <a href="https://www.w3.org/TR/WCAG22/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-1" title="input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact">pointer inputs</a> is at least 44 by 44 <a href="https://www.w3.org/TR/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-4" title="visual angle of about 0.0213 degrees">CSS pixels</a> except when:</p> <dl> <dt>Equivalent</dt> <dd>The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;</dd> <dt>Inline</dt> <dd>The target is in a sentence or block of text;</dd> <dt>User Agent Control</dt> <dd>The size of the target is determined by the user agent and is not modified by the author;</dd> <dt>Essential</dt> <dd>A particular presentation of the target is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd> </dl>',
				bodyMarkdown:
					'The size of the [target](https://www.w3.org/TR/WCAG22/#dfn-targets "region of the display that will accept a pointer action, such as the interactive area of a user interface component") for [pointer inputs](https://www.w3.org/TR/WCAG22/#dfn-pointer-inputs "input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact") is at least 44 by 44 [CSS pixels](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees") except when:\n\n<dl><dt>Equivalent</dt><dd>The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;</dd><dt>Inline</dt><dd>The target is in a sentence or block of text;</dd><dt>User Agent Control</dt><dd>The size of the target is determined by the user agent and is not modified by the author;</dd><dt>Essential</dt><dd>A particular presentation of the target is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> to the information being conveyed.</dd></dl>',
				bodyPlain:
					'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:\n\nEquivalent \nThe target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;\nInline \nThe target is in a sentence or block of text;\nUser Agent Control \nThe size of the target is determined by the user agent and is not modified by the author;\nEssential \nA particular presentation of the target is essential to the information being conveyed.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html',
			},
			'2.5.6': {
				id: '2.5.6',
				title: 'Concurrent Input Mechanisms',
				level: 'AAA',
				bodyHTML:
					'<p>Web content does not restrict use of input modalities available on a platform except where the restriction is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-13" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>, required to ensure the security of the content, or required to respect user settings.</p>',
				bodyMarkdown:
					'Web content does not restrict use of input modalities available on a platform except where the restriction is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform"), required to ensure the security of the content, or required to respect user settings.',
				bodyPlain:
					'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html',
			},
			'2.5.7': {
				id: '2.5.7',
				title: 'Dragging Movements',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p>All <a href="https://www.w3.org/TR/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-6" title="processes and outcomes achievable through user action">functionality</a> that uses a <a href="https://www.w3.org/TR/WCAG22/#dfn-dragging-movements" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-dragging-movements-1" title="[New]">dragging movement</a> for operation can be achieved by a <a href="https://www.w3.org/TR/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-3" title="pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures">single pointer</a> without dragging, unless dragging is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-14" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> or the functionality is determined by the <a href="https://www.w3.org/TR/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-2" title="any software that retrieves and presents Web content for users">user agent</a> and not modified by the author.</p> <div class="note" role="note" id="issue-container-generatedID-36"><div role="heading" class="note-title marker" id="h-note-36" aria-level="5"><span>Note</span></div><p class="">This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nAll [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality "processes and outcomes achievable through user action") that uses a [dragging movement](https://www.w3.org/TR/WCAG22/#dfn-dragging-movements "[New]") for operation can be achieved by a [single pointer](https://www.w3.org/TR/WCAG22/#dfn-single-pointer "pointer input that operates with one point of contact with the screen, including single taps and clicks, double-taps and clicks, long presses, and path-based gestures") without dragging, unless dragging is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") or the functionality is determined by the [user agent](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents Web content for users") and not modified by the author.\n\nNote\n\nThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				bodyPlain:
					'[New]\n\nAll functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential or the functionality is determined by the user agent and not modified by the author.\nNoteThis requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
			},
			'2.5.8': {
				id: '2.5.8',
				title: 'Target Size (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p>The size of the <a href="https://www.w3.org/TR/WCAG22/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-2" title="region of the display that will accept a pointer action, such as the interactive area of a user interface component">target</a> for <a href="https://www.w3.org/TR/WCAG22/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-2" title="input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact">pointer inputs</a> is at least 24 by 24 <a href="https://www.w3.org/TR/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-5" title="visual angle of about 0.0213 degrees">CSS pixels</a>, except where:</p> <ul> <li><strong>Spacing:</strong> Undersized targets (those less than 24 by 24 CSS pixels) are positioned so that if a 24 CSS pixel diameter circle is centered on the <a href="https://www.w3.org/TR/WCAG22/#dfn-bounding-boxes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-bounding-boxes-1" title="[New]">bounding box</a> of each, the circles do not intersect another target or the circle for another undersized target;</li> <li><strong>Equivalent:</strong> The function can be achieved through a different control on the same page that meets this criterion;</li> <li><strong>Inline:</strong> The target is in a sentence or its size is otherwise constrained by the line-height of non-target text;</li> <li><strong>User agent control:</strong> The size of the target is determined by the <a href="https://www.w3.org/TR/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-3" title="any software that retrieves and presents Web content for users">user agent</a> and is not modified by the author;</li> <li><strong>Essential:</strong> A particular <a href="https://www.w3.org/TR/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-4" title="rendering of the content in a form to be perceived by users">presentation</a> of the target is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-15" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a> or is legally required for the information being conveyed.</li> </ul> <div class="note" role="note" id="issue-container-generatedID-37"><div role="heading" class="note-title marker" id="h-note-37" aria-level="5"><span>Note 1</span></div><p class="">Targets that allow for values to be selected spatially based on position within the target are considered one target for the purpose of the success criterion. Examples include sliders, color pickers displaying a gradient of colors, or editable areas where you position the cursor.</p></div> <div class="note" role="note" id="issue-container-generatedID-38"><div role="heading" class="note-title marker" id="h-note-38" aria-level="5"><span>Note 2</span></div><p class="">For inline targets the line-height should be interpreted as perpendicular to the flow of text. For example, in a language displayed vertically, the line-height would be horizontal.</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nThe size of the [target](https://www.w3.org/TR/WCAG22/#dfn-targets "region of the display that will accept a pointer action, such as the interactive area of a user interface component") for [pointer inputs](https://www.w3.org/TR/WCAG22/#dfn-pointer-inputs "input from a device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact") is at least 24 by 24 [CSS pixels](https://www.w3.org/TR/WCAG22/#dfn-css-pixels "visual angle of about 0.0213 degrees"), except where:\n\n-   **Spacing:** Undersized targets (those less than 24 by 24 CSS pixels) are positioned so that if a 24 CSS pixel diameter circle is centered on the [bounding box](https://www.w3.org/TR/WCAG22/#dfn-bounding-boxes "[New]") of each, the circles do not intersect another target or the circle for another undersized target;\n-   **Equivalent:** The function can be achieved through a different control on the same page that meets this criterion;\n-   **Inline:** The target is in a sentence or its size is otherwise constrained by the line-height of non-target text;\n-   **User agent control:** The size of the target is determined by the [user agent](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents Web content for users") and is not modified by the author;\n-   **Essential:** A particular [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users") of the target is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform") or is legally required for the information being conveyed.\n\nNote 1\n\nTargets that allow for values to be selected spatially based on position within the target are considered one target for the purpose of the success criterion. Examples include sliders, color pickers displaying a gradient of colors, or editable areas where you position the cursor.\n\nNote 2\n\nFor inline targets the line-height should be interpreted as perpendicular to the flow of text. For example, in a language displayed vertically, the line-height would be horizontal.',
				bodyPlain:
					'[New]\n\nThe size of the target for pointer inputs is at least 24 by 24 CSS pixels, except where:\n\nSpacing: Undersized targets (those less than 24 by 24 CSS pixels) are positioned so that if a 24 CSS pixel diameter circle is centered on the bounding box of each, the circles do not intersect another target or the circle for another undersized target;\nEquivalent: The function can be achieved through a different control on the same page that meets this criterion;\nInline: The target is in a sentence or its size is otherwise constrained by the line-height of non-target text;\nUser agent control: The size of the target is determined by the user agent and is not modified by the author;\nEssential: A particular presentation of the target is essential or is legally required for the information being conveyed.\n\nNote 1Targets that allow for values to be selected spatially based on position within the target are considered one target for the purpose of the success criterion. Examples include sliders, color pickers displaying a gradient of colors, or editable areas where you position the cursor.\nNote 2For inline targets the line-height should be interpreted as perpendicular to the flow of text. For example, in a language displayed vertically, the line-height would be horizontal.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'Language of Page',
				level: 'A',
				bodyHTML:
					'<p>The default <a href="https://www.w3.org/TR/WCAG22/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-1" title="language that is spoken, written or signed (through visual or tactile means) to communicate with humans">human language</a> of each <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-7" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-5" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>. </p>',
				bodyMarkdown:
					'The default [human language](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans") of each [Web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities").',
				bodyPlain:
					'The default human language of each Web page can be programmatically determined.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: 'Language of Parts',
				level: 'AA',
				bodyHTML:
					'<p>The <a href="https://www.w3.org/TR/WCAG22/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-2" title="language that is spoken, written or signed (through visual or tactile means) to communicate with humans">human language</a> of each passage or phrase in the content can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-6" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. </p>',
				bodyMarkdown:
					'The [human language](https://www.w3.org/TR/WCAG22/#dfn-human-language-s "language that is spoken, written or signed (through visual or tactile means) to communicate with humans") of each passage or phrase in the content can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
				bodyPlain:
					'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words\nor phrases that have become part of the vernacular of the immediately surrounding\ntext.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: 'Unusual Words',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-8" title="process or technique for achieving a result">mechanism</a> is available for identifying specific definitions of words or phrases <a href="https://www.w3.org/TR/WCAG22/#dfn-used-in-an-unusual-or-restricted-way" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-used-in-an-unusual-or-restricted-way-1" title="words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly">used in an unusual or restricted way</a>, including <a href="https://www.w3.org/TR/WCAG22/#dfn-idioms" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-idioms-1" title="phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning">idioms</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-jargon" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-jargon-1" title="words used in a particular way by people in a particular field">jargon</a>. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available for identifying specific definitions of words or phrases [used in an unusual or restricted way](https://www.w3.org/TR/WCAG22/#dfn-used-in-an-unusual-or-restricted-way "words used in such a way that requires users to know exactly which definition to apply in order to understand the content correctly"), including [idioms](https://www.w3.org/TR/WCAG22/#dfn-idioms "phrase whose meaning cannot be deduced from the meaning of the individual words and the specific words cannot be changed without losing the meaning") and [jargon](https://www.w3.org/TR/WCAG22/#dfn-jargon "words used in a particular way by people in a particular field").',
				bodyPlain:
					'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: 'Abbreviations',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-9" title="process or technique for achieving a result">mechanism</a> for identifying the expanded form or meaning of <a href="https://www.w3.org/TR/WCAG22/#dfn-abbreviations" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-abbreviations-1" title="shortened form of a word, phrase, or name where the abbreviation has not become part of the language">abbreviations</a> is available. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") for identifying the expanded form or meaning of [abbreviations](https://www.w3.org/TR/WCAG22/#dfn-abbreviations "shortened form of a word, phrase, or name where the abbreviation has not become part of the language") is available.',
				bodyPlain:
					'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: 'Reading Level',
				level: 'AAA',
				bodyHTML:
					'<p>When text requires reading ability more advanced than the <a href="https://www.w3.org/TR/WCAG22/#dfn-lower-secondary-education-level" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-lower-secondary-education-level-1" title="the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of primary education">lower secondary education level</a> after removal of proper names and titles, <a href="https://www.w3.org/TR/WCAG22/#dfn-supplementary-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-supplementary-content-1" title="additional content that illustrates or clarifies the primary content">supplemental content</a>, or a version that does not require reading ability more advanced than the lower secondary education level, is available. </p>',
				bodyMarkdown:
					'When text requires reading ability more advanced than the [lower secondary education level](https://www.w3.org/TR/WCAG22/#dfn-lower-secondary-education-level "the two or three year period of education that begins after completion of six years of school and ends nine years after the beginning of primary education") after removal of proper names and titles, [supplemental content](https://www.w3.org/TR/WCAG22/#dfn-supplementary-content "additional content that illustrates or clarifies the primary content"), or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
				bodyPlain:
					'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower\nsecondary education level, is available.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: 'Pronunciation',
				level: 'AAA',
				bodyHTML:
					'<p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-10" title="process or technique for achieving a result">mechanism</a> is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation. </p>',
				bodyMarkdown:
					'A [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
				bodyPlain:
					'A mechanism is available for identifying specific pronunciation of words where meaning of the\nwords, in context, is ambiguous without knowing the pronunciation.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'On Focus',
				level: 'A',
				bodyHTML:
					'<p>When any <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-11" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> receives focus, it does not initiate a <a href="https://www.w3.org/TR/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-1" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">change of context</a>. </p>',
				bodyMarkdown:
					'When any [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") receives focus, it does not initiate a [change of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously").',
				bodyPlain:
					'When any user interface component receives focus, it does not initiate a change of context.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: 'On Input',
				level: 'A',
				bodyHTML:
					'<p>Changing the setting of any <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-12" title="a part of the content that is perceived by users as a single control for a distinct function">user interface component</a> does not automatically cause a <a href="https://www.w3.org/TR/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-2" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">change of context</a> unless the user has been advised of the behavior before using the component. </p>',
				bodyMarkdown:
					'Changing the setting of any [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") does not automatically cause a [change of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously") unless the user has been advised of the behavior before using the component.',
				bodyPlain:
					'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: 'Consistent Navigation',
				level: 'AA',
				bodyHTML:
					'<p>Navigational mechanisms that are repeated on multiple <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-8" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> within a <a href="https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-3" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> occur in the <a href="https://www.w3.org/TR/WCAG22/#dfn-same-relative-order" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-relative-order-1" title="same position relative to other items">same relative order</a> each time they are repeated, unless a change is initiated by the user. </p>',
				bodyMarkdown:
					'Navigational mechanisms that are repeated on multiple [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") within a [set of Web pages](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") occur in the [same relative order](https://www.w3.org/TR/WCAG22/#dfn-same-relative-order "same position relative to other items") each time they are repeated, unless a change is initiated by the user.',
				bodyPlain:
					'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: 'Consistent Identification',
				level: 'AA',
				bodyHTML:
					'<p>Components that have the <a href="https://www.w3.org/TR/WCAG22/#dfn-same-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-functionality-1" title="same result when used">same functionality</a> within a <a href="https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-4" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a> are identified consistently. </p>',
				bodyMarkdown:
					'Components that have the [same functionality](https://www.w3.org/TR/WCAG22/#dfn-same-functionality "same result when used") within a [set of Web pages](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization") are identified consistently.',
				bodyPlain:
					'Components that have the same functionality within a set of Web pages are identified consistently.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: 'Change on Request',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-3" title="major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously">Changes of context</a> are initiated only by user request or a <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-11" title="process or technique for achieving a result">mechanism</a> is available to turn off such changes. </p>',
				bodyMarkdown:
					'[Changes of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context "major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously") are initiated only by user request or a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result") is available to turn off such changes.',
				bodyPlain:
					'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html',
			},
			'3.2.6': {
				id: '3.2.6',
				title: 'Consistent Help',
				level: 'A',
				bodyHTML:
					'<p class="change">[New]</p> <p>If a <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-9" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web page</a> contains any of the following help <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-12" title="process or technique for achieving a result">mechanisms</a>, and those mechanisms are repeated on multiple Web pages within a <a href="https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-5" title="collection of web pages that share a common purpose and that are created by the same author, group or organization">set of Web pages</a>, they occur in the same order relative to other page content, unless a change is initiated by the user:</p> <ul> <li>Human contact details;</li> <li>Human contact mechanism;</li> <li>Self-help option;</li> <li>A fully automated contact mechanism.</li> </ul> <div class="note" role="note" id="issue-container-generatedID-39"><div role="heading" class="note-title marker" id="h-note-39" aria-level="5"><span>Note 1</span></div><p class="">Help mechanisms may be provided directly on the page, or may be provided via a direct link to a different page containing the information.</p></div> <div class="note" role="note" id="issue-container-generatedID-40"><div role="heading" class="note-title marker" id="h-note-40" aria-level="5"><span>Note 2</span></div><p class="">For this Success Criterion, "the same order relative to other page content" can be thought of as how the content is ordered when the page is serialized. The visual position of a help mechanism is likely to be consistent across pages for the same page variation (e.g., CSS break-point). The user can initiate a change, such as changing the page\'s zoom or orientation, which may trigger a different page variation. This criterion is concerned with relative order across pages displayed in the same page variation (e.g., same zoom level and orientation).</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nIf a [Web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") contains any of the following help [mechanisms](https://www.w3.org/TR/WCAG22/#dfn-mechanism "process or technique for achieving a result"), and those mechanisms are repeated on multiple Web pages within a [set of Web pages](https://www.w3.org/TR/WCAG22/#dfn-set-of-web-pages "collection of web pages that share a common purpose and that are created by the same author, group or organization"), they occur in the same order relative to other page content, unless a change is initiated by the user:\n\n-   Human contact details;\n-   Human contact mechanism;\n-   Self-help option;\n-   A fully automated contact mechanism.\n\nNote 1\n\nHelp mechanisms may be provided directly on the page, or may be provided via a direct link to a different page containing the information.\n\nNote 2\n\nFor this Success Criterion, "the same order relative to other page content" can be thought of as how the content is ordered when the page is serialized. The visual position of a help mechanism is likely to be consistent across pages for the same page variation (e.g., CSS break-point). The user can initiate a change, such as changing the page\'s zoom or orientation, which may trigger a different page variation. This criterion is concerned with relative order across pages displayed in the same page variation (e.g., same zoom level and orientation).',
				bodyPlain:
					'[New]\n\nIf a Web page contains any of the following help mechanisms, and those mechanisms are repeated on multiple Web pages within a set of Web pages, they occur in the same order relative to other page content, unless a change is initiated by the user:\n\nHuman contact details;\nHuman contact mechanism;\nSelf-help option;\nA fully automated contact mechanism.\n\nNote 1Help mechanisms may be provided directly on the page, or may be provided via a direct link to a different page containing the information.\nNote 2For this Success Criterion, "the same order relative to other page content" can be thought of as how the content is ordered when the page is serialized. The visual position of a help mechanism is likely to be consistent across pages for the same page variation (e.g., CSS break-point). The user can initiate a change, such as changing the page\'s zoom or orientation, which may trigger a different page variation. This criterion is concerned with relative order across pages displayed in the same page variation (e.g., same zoom level and orientation).',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'Error Identification',
				level: 'A',
				bodyHTML:
					'<p>If an <a href="https://www.w3.org/TR/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-2" title="information provided by the user that is not accepted">input error</a> is automatically detected, the item that is in error is identified and the error is described to the user in text. </p>',
				bodyMarkdown:
					'If an [input error](https://www.w3.org/TR/WCAG22/#dfn-input-error "information provided by the user that is not accepted") is automatically detected, the item that is in error is identified and the error is described to the user in text.',
				bodyPlain:
					'If an input error is automatically detected, the item that is in error is identified and the error\nis described to the user in text.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'Labels or Instructions',
				level: 'A',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-3" title="text or other component with a text alternative that is presented to a user to identify a component within Web content">Labels</a> or instructions are provided when content requires user input. </p>',
				bodyMarkdown:
					'[Labels](https://www.w3.org/TR/WCAG22/#dfn-labels "text or other component with a text alternative that is presented to a user to identify a component within Web content") or instructions are provided when content requires user input.',
				bodyPlain:
					'Labels or instructions are provided when content requires user input.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'Error Suggestion',
				level: 'AA',
				bodyHTML:
					'<p>If an <a href="https://www.w3.org/TR/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-3" title="information provided by the user that is not accepted">input error</a> is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content. </p>',
				bodyMarkdown:
					'If an [input error](https://www.w3.org/TR/WCAG22/#dfn-input-error "information provided by the user that is not accepted") is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
				bodyPlain:
					'If an input error is automatically detected and suggestions for correction are known, then the suggestions\nare provided to the user, unless it would jeopardize the security or purpose of the\ncontent.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: 'Error Prevention (Legal, Financial, Data)',
				level: 'AA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-10" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> that cause <a href="https://www.w3.org/TR/WCAG22/#dfn-legal-commitments" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-legal-commitments-1" title="transactions where the person incurs a legally binding obligation or benefit">legal commitments</a> or financial transactions for the user to occur, that modify or delete <a href="https://www.w3.org/TR/WCAG22/#dfn-user-controllable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-controllable-1" title="data that is intended to be accessed by users">user-controllable</a> data in data storage systems, or that submit user test responses, at least one of the following is true: </p> <dl> <dt>Reversible</dt><dd>Submissions are reversible.</dd> <dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd> <dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd> </dl>',
				bodyMarkdown:
					'For [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") that cause [legal commitments](https://www.w3.org/TR/WCAG22/#dfn-legal-commitments "transactions where the person incurs a legally binding obligation or benefit") or financial transactions for the user to occur, that modify or delete [user-controllable](https://www.w3.org/TR/WCAG22/#dfn-user-controllable "data that is intended to be accessed by users") data in data storage systems, or that submit user test responses, at least one of the following is true:\n\n<dl><dt>Reversible</dt><dd>Submissions are reversible.</dd><dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd><dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd></dl>',
				bodyPlain:
					'For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of\nthe following is true:\n\nReversibleSubmissions are reversible.\nCheckedData entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmedA mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'Help',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://www.w3.org/TR/WCAG22/#dfn-context-sensitive-help" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-context-sensitive-help-1" title="help text that provides information related to the function currently being performed">Context-sensitive help</a> is available. </p>',
				bodyMarkdown:
					'[Context-sensitive help](https://www.w3.org/TR/WCAG22/#dfn-context-sensitive-help "help text that provides information related to the function currently being performed") is available.',
				bodyPlain: 'Context-sensitive help is available.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: 'Error Prevention (All)',
				level: 'AAA',
				bodyHTML:
					'<p>For <a href="https://www.w3.org/TR/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-11" title="a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent">Web pages</a> that require the user to submit information, at least one of the following is true: </p> <dl> <dt>Reversible</dt><dd>Submissions are reversible.</dd> <dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd> <dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd> </dl>',
				bodyMarkdown:
					'For [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s "a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent") that require the user to submit information, at least one of the following is true:\n\n<dl><dt>Reversible</dt><dd>Submissions are reversible.</dd><dt>Checked</dt><dd>Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</dd><dt>Confirmed</dt><dd>A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</dd></dl>',
				bodyPlain:
					'For Web pages that require the user to submit information, at least one of the following is true:\n\nReversibleSubmissions are reversible.\nCheckedData entered by the user is checked for input errors and the user is provided an opportunity to correct them.\nConfirmedA mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html',
			},
			'3.3.7': {
				id: '3.3.7',
				title: 'Redundant Entry',
				level: 'A',
				bodyHTML:
					'<p class="change">[New]</p> <p>Information previously entered by or provided to the user that is required to be entered again in the same <a href="https://www.w3.org/TR/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-2" title="series of user actions where each action is required in order to complete an activity">process</a> is either:</p> <ul> <li>auto-populated, or</li> <li>available for the user to select.</li> </ul> <p>Except when:</p> <ul> <li>re-entering the information is <a href="https://www.w3.org/TR/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-16" title="if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform">essential</a>,</li> <li>the information is required to ensure the security of the content, or</li> <li>previously entered information is no longer valid.</li> </ul>',
				bodyMarkdown:
					'\\[New\\]\n\nInformation previously entered by or provided to the user that is required to be entered again in the same [process](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity") is either:\n\n-   auto-populated, or\n-   available for the user to select.\n\nExcept when:\n\n-   re-entering the information is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential "if removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform"),\n-   the information is required to ensure the security of the content, or\n-   previously entered information is no longer valid.',
				bodyPlain:
					'[New]\n\nInformation previously entered by or provided to the user that is required to be entered again in the same process is either:\n\nauto-populated, or\navailable for the user to select.\n\nExcept when: \n\nre-entering the information is essential,\nthe information is required to ensure the security of the content, or\npreviously entered information is no longer valid.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html',
			},
			'3.3.8': {
				id: '3.3.8',
				title: 'Accessible Authentication (Minimum)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-cognitive-function-test-1" title="[New]">cognitive function test</a> (such as remembering a password or solving a puzzle) is not required for any step in an authentication <a href="https://www.w3.org/TR/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-3" title="series of user actions where each action is required in order to complete an activity">process</a> unless that step provides at least one of the following:</p> <dl> <dt>Alternative</dt> <dd>Another authentication method that does not rely on a cognitive function test.</dd> <dt>Mechanism</dt> <dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-13" title="process or technique for achieving a result">mechanism</a> is available to assist the user in completing the cognitive function test.</dd> <dt>Object Recognition</dt> <dd>The cognitive function test is to recognize objects.</dd> <dt>Personal Content</dt> <dd>The cognitive function test is to identify <a href="https://www.w3.org/TR/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-2" title="any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language">non-text content</a> the user provided to the Web site.</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-41"><div role="heading" class="note-title marker" id="h-note-41" aria-level="5"><span>Note 1</span></div><p class="">"Object recognition" and "Personal content" may be represented by images, video, or audio.</p></div> <div class="note" role="note" id="issue-container-generatedID-42"><div role="heading" class="note-title marker" id="h-note-42" aria-level="5"><span>Note 2</span></div><div class="">Examples of mechanisms that satisfy this criterion include: <ol> <li>support for password entry by password managers to reduce memory need, and</li> <li>copy and paste to reduce the cognitive burden of re-typing.</li> </ol> </div></div>',
				bodyMarkdown:
					'\\[New\\]\n\nA [cognitive function test](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test "[New]") (such as remembering a password or solving a puzzle) is not required for any step in an authentication [process](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity") unless that step provides at least one of the following:\n\n<dl><dt>Alternative</dt><dd>Another authentication method that does not rely on a cognitive function test.</dd><dt>Mechanism</dt><dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-13" title="process or technique for achieving a result">mechanism</a> is available to assist the user in completing the cognitive function test.</dd><dt>Object Recognition</dt><dd>The cognitive function test is to recognize objects.</dd><dt>Personal Content</dt><dd>The cognitive function test is to identify <a href="https://www.w3.org/TR/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-2" title="any content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language">non-text content</a> the user provided to the Web site.</dd></dl>\n\nNote 1\n\n"Object recognition" and "Personal content" may be represented by images, video, or audio.\n\nNote 2\n\nExamples of mechanisms that satisfy this criterion include:\n\n1.  support for password entry by password managers to reduce memory need, and\n2.  copy and paste to reduce the cognitive burden of re-typing.',
				bodyPlain:
					'[New]\n\nA cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of the following: \n\nAlternative\nAnother authentication method that does not rely on a cognitive function test.\nMechanism\nA mechanism is available to assist the user in completing the cognitive function test.\nObject Recognition\nThe cognitive function test is to recognize objects.\nPersonal Content\nThe cognitive function test is to identify non-text content the user provided to the Web site.\n\nNote 1"Object recognition" and "Personal content" may be represented by images, video, or audio.\nNote 2Examples of mechanisms that satisfy this criterion include:\n\nsupport for password entry by password managers to reduce memory need, and\ncopy and paste to reduce the cognitive burden of re-typing.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html',
			},
			'3.3.9': {
				id: '3.3.9',
				title: 'Accessible Authentication (Enhanced)',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p>A <a href="https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-cognitive-function-test-2" title="[New]">cognitive function test</a> (such as remembering a password or solving a puzzle) is not required for any step in an authentication <a href="https://www.w3.org/TR/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-4" title="series of user actions where each action is required in order to complete an activity">process</a> unless that step provides at least one of the following:</p> <dl> <dt>Alternative</dt> <dd>Another authentication method that does not rely on a cognitive function test.</dd> <dt>Mechanism</dt> <dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-14" title="process or technique for achieving a result">mechanism</a> is available to assist the user in completing the cognitive function test.</dd> </dl>',
				bodyMarkdown:
					'\\[New\\]\n\nA [cognitive function test](https://www.w3.org/TR/WCAG22/#dfn-cognitive-function-test "[New]") (such as remembering a password or solving a puzzle) is not required for any step in an authentication [process](https://www.w3.org/TR/WCAG22/#dfn-processes "series of user actions where each action is required in order to complete an activity") unless that step provides at least one of the following:\n\n<dl><dt>Alternative</dt><dd>Another authentication method that does not rely on a cognitive function test.</dd><dt>Mechanism</dt><dd>A <a href="https://www.w3.org/TR/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-14" title="process or technique for achieving a result">mechanism</a> is available to assist the user in completing the cognitive function test.</dd></dl>',
				bodyPlain:
					'[New]\n\nA cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of the following: \n\nAlternative\nAnother authentication method that does not rely on a cognitive function test.\nMechanism\nA mechanism is available to assist the user in completing the cognitive function test.',
				understanding:
					'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: 'Name, Role, Value',
				level: 'A',
				bodyHTML:
					'<p>For all <a href="https://www.w3.org/TR/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-13" title="a part of the content that is perceived by users as a single control for a distinct function">user interface components</a> (including but not limited to: form elements, links and components generated by scripts), the <a href="https://www.w3.org/TR/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-3" title="text by which software can identify a component within Web content to the user">name</a> and <a href="https://www.w3.org/TR/WCAG22/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-1" title="text or number by which software can identify the function of a component within Web content">role</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-7" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a>; states, properties, and values that can be set by the user can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-set" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-set-1" title="set by software using methods that are supported by user agents, including assistive technologies">programmatically set</a>; and notification of changes to these items is available to <a href="https://www.w3.org/TR/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-4" title="any software that retrieves and presents Web content for users">user agents</a>, including <a href="https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-3" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technologies</a>. </p> <div class="note" role="note" id="issue-container-generatedID-44"><div role="heading" class="note-title marker" id="h-note-44" aria-level="5"><span>Note</span></div><p class="">This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification. </p></div>',
				bodyMarkdown:
					'For all [user interface components](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components "a part of the content that is perceived by users as a single control for a distinct function") (including but not limited to: form elements, links and components generated by scripts), the [name](https://www.w3.org/TR/WCAG22/#dfn-name "text by which software can identify a component within Web content to the user") and [role](https://www.w3.org/TR/WCAG22/#dfn-role "text or number by which software can identify the function of a component within Web content") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities"); states, properties, and values that can be set by the user can be [programmatically set](https://www.w3.org/TR/WCAG22/#dfn-programmatically-set "set by software using methods that are supported by user agents, including assistive technologies"); and notification of changes to these items is available to [user agents](https://www.w3.org/TR/WCAG22/#dfn-user-agents "any software that retrieves and presents Web content for users"), including [assistive technologies](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents").\n\nNote\n\nThis success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
				bodyPlain:
					'For all user interface components (including but not limited to: form elements, links and components generated by scripts),\nthe name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.\n\nNoteThis success criterion is primarily for Web authors who develop or script their own\nuser interface components. For example, standard HTML controls already meet this success\ncriterion when used according to specification.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html',
			},
			'4.1.3': {
				id: '4.1.3',
				title: 'Status Messages',
				level: 'AA',
				bodyHTML:
					'<p>In content implemented using markup languages, <a href="https://www.w3.org/TR/WCAG22/#dfn-status-messages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-status-messages-1" title="change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors">status messages</a> can be <a href="https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-8" title="determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities">programmatically determined</a> through <a href="https://www.w3.org/TR/WCAG22/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-2" title="text or number by which software can identify the function of a component within Web content">role</a> or properties such that they can be presented to the user by <a href="https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-4" title="hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents">assistive technologies</a> without receiving focus.</p>',
				bodyMarkdown:
					'In content implemented using markup languages, [status messages](https://www.w3.org/TR/WCAG22/#dfn-status-messages "change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors") can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users in different modalities") through [role](https://www.w3.org/TR/WCAG22/#dfn-role "text or number by which software can identify the function of a component within Web content") or properties such that they can be presented to the user by [assistive technologies](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies "hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents") without receiving focus.',
				bodyPlain:
					'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
				understanding: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
			},
		},
		ja: {
			'1.1.1': {
				id: '1.1.1',
				title: '非テキストコンテンツ',
				level: 'A',
				bodyHTML:
					'<p>利用者に提示されるすべての<a href="https://waic.jp/translations/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-1" title="プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。">非テキストコンテンツ</a>には、同等の目的を果たす<a href="https://waic.jp/translations/WCAG22/#dfn-text-alternative" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-alternative-1" title="非テキストコンテンツとプログラムで関連付けられるテキスト。又は非テキストコンテンツとプログラムで関連付けられるテキストから参照されるテキスト。プログラムで関連付けられたテキストとは、その場所を、非テキストコンテンツからプログラムによる解釈が可能なテキストである。">テキストによる代替</a>が提供されている。ただし、次の場合は除く:</p> <dl> <dt>コントロール、入力</dt> <dd><p>非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する<a href="https://waic.jp/translations/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、<a href="https://waic.jp/translations/WCAG22/#name-role-value">達成基準 4.1.2</a> を参照。) </p> </dd> <dt>時間依存メディア</dt> <dd><p>非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、<a href="https://waic.jp/translations/WCAG22/#time-based-media">ガイドライン 1.2</a> を参照。) </p> </dd> <dt>テスト</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p> </dd> <dt>感覚的</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="純粋な装飾ではなく、かつ、重要な情報を伝える、又は機能を果たすことを主としない、感覚的な体験。">特定の感覚的体験</a>を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p> </dd> <dt><a href="https://waic.jp/translations/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a></dt> <dd><p>非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。</p> </dd> <dt>装飾、整形、非表示</dt> <dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、<a href="https://waic.jp/translations/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>が無視できるように実装されている。</p> </dd> </dl>',
				bodyMarkdown:
					'利用者に提示されるすべての[非テキストコンテンツ](https://waic.jp/translations/WCAG22/#dfn-non-text-content "プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。")には、同等の目的を果たす[テキストによる代替](https://waic.jp/translations/WCAG22/#dfn-text-alternative "非テキストコンテンツとプログラムで関連付けられるテキスト。又は非テキストコンテンツとプログラムで関連付けられるテキストから参照されるテキスト。プログラムで関連付けられたテキストとは、その場所を、非テキストコンテンツからプログラムによる解釈が可能なテキストである。")が提供されている。ただし、次の場合は除く:\n\n<dl><dt>コントロール、入力</dt><dd><p>非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する<a href="https://waic.jp/translations/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-1" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、<a href="https://waic.jp/translations/WCAG22/#name-role-value">達成基準 4.1.2</a> を参照。)</p></dd><dt>時間依存メディア</dt><dd><p>非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、<a href="https://waic.jp/translations/WCAG22/#time-based-media">ガイドライン 1.2</a> を参照。)</p></dd><dt>テスト</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-1" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>で提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p></dd><dt>感覚的</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-specific-sensory-experience" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-specific-sensory-experience-1" title="純粋な装飾ではなく、かつ、重要な情報を伝える、又は機能を果たすことを主としない、感覚的な体験。">特定の感覚的体験</a>を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。</p></dd><dt><a href="https://waic.jp/translations/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-1" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a></dt><dd><p>非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。</p></dd><dt>装飾、整形、非表示</dt><dd><p>非テキストコンテンツが、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-1" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、<a href="https://waic.jp/translations/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-1" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>が無視できるように実装されている。</p></dd></dl>',
				bodyPlain:
					'利用者に提示されるすべての非テキストコンテンツには、同等の目的を果たすテキストによる代替が提供されている。ただし、次の場合は除く:\n\nコントロール、入力\n\n非テキストコンテンツが、コントロール又は利用者の入力を受け付けるものであるとき、その目的を説明する名前 (name) を提供している。(コントロール及び利用者の入力を受け入れるコンテンツに関するその他の要件は、達成基準 4.1.2 を参照。) \n\n時間依存メディア\n\n非テキストコンテンツが、時間に依存したメディアであるとき、テキストによる代替は、少なくとも、その非テキストコンテンツを識別できる説明を提供している。(メディアに関するその他の要件は、ガイドライン 1.2 を参照。) \n\nテスト\n\n非テキストコンテンツが、テキストで提示されると無効になるテスト又は演習のとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\n感覚的\n\n非テキストコンテンツが、特定の感覚的体験を創り出すことを主に意図しているとき、テキストによる代替は、少なくともその非テキストコンテンツを識別できる説明を提供している。\n\nCAPTCHA\n\n非テキストコンテンツが、コンピュータではなく人間がコンテンツにアクセスしていることを確認する目的で用いられているとき、テキストによる代替は、その非テキストコンテンツの目的を特定し、説明している。なおかつ、他の感覚による知覚に対応して出力する CAPTCHA の代替形式を提供することで、様々な障害に対応している。\n\n装飾、整形、非表示\n\n非テキストコンテンツが、純粋な装飾である、見た目の整形のためだけに用いられている、又は利用者に提供されるものではないとき、支援技術が無視できるように実装されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/non-text-content.html',
			},
			'1.2.1': {
				id: '1.2.1',
				title: '音声のみ及び映像のみ (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-1" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-1" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか</a>含まないメディア及び収録済の<a href="https://waic.jp/translations/WCAG22/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-1" title="映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。">映像しか</a>含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、<a href="https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-1" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによる代替</a>であることが明確にラベル付けされている場合は除く:</p> <dl> <dt>収録済の音声しか含まない</dt> <dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。</p> </dd> <dt>収録済の映像しか含まない</dt> <dd><p>時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。</p> </dd> </dl>',
				bodyMarkdown:
					'[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[音声しか](https://waic.jp/translations/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")含まないメディア及び収録済の[映像しか](https://waic.jp/translations/WCAG22/#dfn-video-only "映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。")含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、[メディアによる代替](https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であることが明確にラベル付けされている場合は除く:\n\n<dl><dt>収録済の音声しか含まない</dt><dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-1" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。</p></dd><dt>収録済の映像しか含まない</dt><dd><p>時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。</p></dd></dl>',
				bodyPlain:
					'収録済の音声しか含まないメディア及び収録済の映像しか含まないメディアは、次の事項を満たしている。ただし、その音声又は映像がメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く:\n\n収録済の音声しか含まない\n\n時間依存メディアに対する代替コンテンツによって、収録済の音声しか含まないコンテンツと同等の情報を提供している。\n\n収録済の映像しか含まない\n\n時間依存メディアに対する代替コンテンツ又は音声トラックによって、収録済の映像しか含まないコンテンツと同等の情報を提供している。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html',
			},
			'1.2.2': {
				id: '1.2.2',
				title: 'キャプション (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-1" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-2" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-1" title="音の再生技術。">音声</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-1" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>が提供されている。ただし、その同期したメディアが<a href="https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-2" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[音声](https://waic.jp/translations/WCAG22/#dfn-audio "音の再生技術。")コンテンツに対して、[キャプション](https://waic.jp/translations/WCAG22/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の音声コンテンツに対して、キャプションが提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/captions-prerecorded.html',
			},
			'1.2.3': {
				id: '1.2.3',
				title: '音声解説、又はメディアに対する代替 (収録済)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-2" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれている<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-3" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-1" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-2" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツ又は<a href="https://waic.jp/translations/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-1" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>が提供されている。ただし、その同期したメディアが<a href="https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-media-alternative-for-text-3" title="テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。">メディアによるテキストの代替</a>であって、メディアによる代替であることが明確にラベル付けされている場合は除く。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれている[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG22/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[時間依存メディアに対する代替](https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツ又は[音声解説](https://waic.jp/translations/WCAG22/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")が提供されている。ただし、その同期したメディアが[メディアによるテキストの代替](https://waic.jp/translations/WCAG22/#dfn-media-alternative-for-text "テキストで (直接又はテキストによる代替によって) 既に提示されている情報以上のものを提示していないメディア。")であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				bodyPlain:
					'同期したメディアに含まれている収録済の映像コンテンツに対して、時間依存メディアに対する代替コンテンツ又は音声解説が提供されている。ただし、その同期したメディアがメディアによるテキストの代替であって、メディアによる代替であることが明確にラベル付けされている場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html',
			},
			'1.2.4': {
				id: '1.2.4',
				title: 'キャプション (ライブ)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-3" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG22/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-1" title="現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。">ライブ</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-2" title="音の再生技術。">音声</a>コンテンツに対して<a href="https://waic.jp/translations/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-2" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[ライブ](https://waic.jp/translations/WCAG22/#dfn-live "現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。")の[音声](https://waic.jp/translations/WCAG22/#dfn-audio "音の再生技術。")コンテンツに対して[キャプション](https://waic.jp/translations/WCAG22/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべてのライブの音声コンテンツに対してキャプションが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/captions-live.html',
			},
			'1.2.5': {
				id: '1.2.5',
				title: '音声解説 (収録済)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-4" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-4" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-2" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-2" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG22/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[音声解説](https://waic.jp/translations/WCAG22/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の映像コンテンツに対して、音声解説が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/audio-description-prerecorded.html',
			},
			'1.2.6': {
				id: '1.2.6',
				title: '手話 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-5" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-5" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-audio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-3" title="音の再生技術。">音声</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-sign-language-interpretation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-sign-language-interpretation-1" title="ある言語、通常は話されている言語を、手話に訳すこと。">手話通訳</a>が提供されている。</p>',
				bodyMarkdown:
					'[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[音声](https://waic.jp/translations/WCAG22/#dfn-audio "音の再生技術。")コンテンツに対して、[手話通訳](https://waic.jp/translations/WCAG22/#dfn-sign-language-interpretation "ある言語、通常は話されている言語を、手話に訳すこと。")が提供されている。',
				bodyPlain:
					'同期したメディアに含まれているすべての収録済の音声コンテンツに対して、手話通訳が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/sign-language-prerecorded.html',
			},
			'1.2.7': {
				id: '1.2.7',
				title: '拡張音声解説 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p>前景音の合間が、<a href="https://waic.jp/translations/WCAG22/#dfn-audio-descriptions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-descriptions-3" title="主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。">音声解説</a>で映像の意味を伝達するのに不十分な場合、<a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-6" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>に含まれているすべての<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-6" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-video" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-3" title="写真又は画像を動かす、又はシーケンス化する技術。">映像</a>コンテンツに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-extended-audio-description" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-extended-audio-description-1" title="映像を一時停止することで追加の説明を付加するための時間を確保し、視聴覚提示に付加した音声解説。">拡張音声解説</a>が提供されている。</p>',
				bodyMarkdown:
					'前景音の合間が、[音声解説](https://waic.jp/translations/WCAG22/#dfn-audio-descriptions "主音声のトラックだけでは理解できない重要で視覚的な詳細を説明するために、音声トラックに追加されたナレーション。")で映像の意味を伝達するのに不十分な場合、[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")に含まれているすべての[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[映像](https://waic.jp/translations/WCAG22/#dfn-video "写真又は画像を動かす、又はシーケンス化する技術。")コンテンツに対して、[拡張音声解説](https://waic.jp/translations/WCAG22/#dfn-extended-audio-description "映像を一時停止することで追加の説明を付加するための時間を確保し、視聴覚提示に付加した音声解説。")が提供されている。',
				bodyPlain:
					'前景音の合間が、音声解説で映像の意味を伝達するのに不十分な場合、同期したメディアに含まれているすべての収録済の映像コンテンツに対して、拡張音声解説が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/extended-audio-description-prerecorded.html',
			},
			'1.2.8': {
				id: '1.2.8',
				title: 'メディアに対する代替 (収録済)',
				level: 'AAA',
				bodyHTML:
					'<p>すべての<a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-7" title="ライブではない情報。">収録済の</a><a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-7" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>及びすべての収録済の<a href="https://waic.jp/translations/WCAG22/#dfn-video-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-video-only-2" title="映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。">映像しか含まない</a>メディアに対して、<a href="https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-3" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアに対する代替</a>コンテンツが提供されている。</p>',
				bodyMarkdown:
					'すべての[収録済の](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")及びすべての収録済の[映像しか含まない](https://waic.jp/translations/WCAG22/#dfn-video-only "映像のみを含んだ (音声もインタラクションも含まない)、時間に依存する提示。")メディアに対して、[時間依存メディアに対する代替](https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツが提供されている。',
				bodyPlain:
					'すべての収録済の同期したメディア及びすべての収録済の映像しか含まないメディアに対して、時間依存メディアに対する代替コンテンツが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/media-alternative-prerecorded.html',
			},
			'1.2.9': {
				id: '1.2.9',
				title: '音声のみ (ライブ)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-live" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-live-2" title="現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。">ライブ</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-2" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか含まない</a>コンテンツに対して、それと同等の情報を提示する、<a href="https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-alternative-for-time-based-media-4" title="時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。">時間依存メディアの代替</a>コンテンツが提供されている。</p>',
				bodyMarkdown:
					'[ライブ](https://waic.jp/translations/WCAG22/#dfn-live "現実の出来事から取り込まれ、放送遅延以上の遅延なく受け手に送信される情報。")の[音声しか含まない](https://waic.jp/translations/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")コンテンツに対して、それと同等の情報を提示する、[時間依存メディアの代替](https://waic.jp/translations/WCAG22/#dfn-alternative-for-time-based-media "時間依存の視覚的及び聴覚的情報を正しい順序で説明したテキストを含み、あらゆる時間依存のインタラクションによる結果を得る手段を提供している文書。")コンテンツが提供されている。',
				bodyPlain:
					'ライブの音声しか含まないコンテンツに対して、それと同等の情報を提示する、時間依存メディアの代替コンテンツが提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/audio-only-live.html',
			},
			'1.3.1': {
				id: '1.3.1',
				title: '情報及び関係性',
				level: 'A',
				bodyHTML:
					'<p>何らかの形で<a href="https://waic.jp/translations/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-1" title="rendering of the content in a form to be perceived by users">提示</a>されている情報、<a href="https://waic.jp/translations/WCAG22/#dfn-structure" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-structure-1" title="ウェブページの各部を相互の関係性によりまとめる方法論。一連のウェブページをまとめる方法論。">構造</a>、及び<a href="https://waic.jp/translations/WCAG22/#dfn-relationships" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-relationships-1" title="コンテンツの異なる部分間における意味のあるつながり。">関係性</a>は、<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-1" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である、又はテキストで提供されている。</p>',
				bodyMarkdown:
					'何らかの形で[提示](https://waic.jp/translations/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users")されている情報、[構造](https://waic.jp/translations/WCAG22/#dfn-structure "ウェブページの各部を相互の関係性によりまとめる方法論。一連のウェブページをまとめる方法論。")、及び[関係性](https://waic.jp/translations/WCAG22/#dfn-relationships "コンテンツの異なる部分間における意味のあるつながり。")は、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である、又はテキストで提供されている。',
				bodyPlain:
					'何らかの形で提示されている情報、構造、及び関係性は、プログラムによる解釈が可能である、又はテキストで提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/info-and-relationships.html',
			},
			'1.3.2': {
				id: '1.3.2',
				title: '意味のあるシーケンス',
				level: 'A',
				bodyHTML:
					'<p>コンテンツが提示されている順序が意味に影響を及ぼす場合には、<a href="https://waic.jp/translations/WCAG22/#dfn-correct-reading-sequence" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-correct-reading-sequence-1" title="コンテンツの意味を変更せずに、単語及び段落が提示されるシーケンス。">正しく読むシーケンス</a>は<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-2" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'コンテンツが提示されている順序が意味に影響を及ぼす場合には、[正しく読むシーケンス](https://waic.jp/translations/WCAG22/#dfn-correct-reading-sequence "コンテンツの意味を変更せずに、単語及び段落が提示されるシーケンス。")は[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'コンテンツが提示されている順序が意味に影響を及ぼす場合には、正しく読むシーケンスはプログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/meaningful-sequence.html',
			},
			'1.3.3': {
				id: '1.3.3',
				title: '感覚的な特徴',
				level: 'A',
				bodyHTML:
					'<p>コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。</p> <div class="note" role="note" id="issue-container-generatedID"><div role="heading" class="note-title marker" id="h-note" aria-level="5"><span>注記</span></div><p class="">色に関する要件は、<a href="https://waic.jp/translations/WCAG22/#distinguishable">ガイドライン 1.4</a> を参照。</p></div>',
				bodyMarkdown:
					'コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。\n\n注記\n\n色に関する要件は、[ガイドライン 1.4](https://waic.jp/translations/WCAG22/#distinguishable) を参照。',
				bodyPlain:
					'コンテンツを理解し操作するための説明は、形、色、大きさ、視覚的な位置、方向、又は音のような、構成要素が持つ感覚的な特徴だけに依存していない。\n\n注記色に関する要件は、ガイドライン 1.4 を参照。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/sensory-characteristics.html',
			},
			'1.3.4': {
				id: '1.3.4',
				title: '表示の向き',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-1" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</p> <div class="note" role="note" id="issue-container-generatedID-0"><div role="heading" class="note-title marker" id="h-note-0" aria-level="5"><span>注記</span></div><p class="">特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。</p></div>',
				bodyMarkdown:
					'コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な場合は除く。\n\n注記\n\n特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。',
				bodyPlain:
					'コンテンツは、その表示及び操作を、縦向き (portrait) 又は横向き (landscape) のような単一のディスプレイの向きに制限しない。ただし、特定のディスプレイの向きが必要不可欠な場合は除く。\n\n注記特定のディスプレイの向きが必要不可欠となり得る例としては、銀行の小切手、ピアノのアプリケーション、プロジェクターもしくはテレビ向けのスライド、又はコンテンツが必ずしも横向き (landscape) もしくは縦向き (portrait) のディスプレイの向きに制限されないバーチャルリアリティのコンテンツが挙げられる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/orientation.html',
			},
			'1.3.5': {
				id: '1.3.5',
				title: '入力目的の特定',
				level: 'AA',
				bodyHTML:
					'<p>利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合に<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-3" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である:</p> <ul> <li>入力フィールドが、<a href="https://waic.jp/translations/WCAG22/#input-purposes">ユーザインタフェース コンポーネントの入力目的の節</a>で示される目的を提供している、 かつ</li> <li>フォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。</li> </ul>',
				bodyMarkdown:
					'利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合に[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である:\n\n-   入力フィールドが、[ユーザインタフェース コンポーネントの入力目的の節](https://waic.jp/translations/WCAG22/#input-purposes)で示される目的を提供している、 かつ\n-   フォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。',
				bodyPlain:
					'利用者の情報を集める入力フィールドのそれぞれの目的は、次の場合にプログラムによる解釈が可能である:\n\n入力フィールドが、ユーザインタフェース コンポーネントの入力目的の節で示される目的を提供している、 かつ\nフォーム入力データとして想定される意味の特定をサポートする技術を用いて、コンテンツが実装されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/identify-input-purpose.html',
			},
			'1.3.6': {
				id: '1.3.6',
				title: '目的の特定',
				level: 'AAA',
				bodyHTML:
					'<p>マークアップ言語で実装されたコンテンツでは、<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-1" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>、アイコン、<a href="https://waic.jp/translations/WCAG22/#dfn-regions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-regions-1" title="コンテンツの知覚可能、プログラムによる解釈が可能なセクション">領域</a>の目的は<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-4" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'マークアップ言語で実装されたコンテンツでは、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")、アイコン、[領域](https://waic.jp/translations/WCAG22/#dfn-regions "コンテンツの知覚可能、プログラムによる解釈が可能なセクション")の目的は[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'マークアップ言語で実装されたコンテンツでは、ユーザインタフェース コンポーネント、アイコン、領域の目的はプログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/identify-purpose.html',
			},
			'1.4.1': {
				id: '1.4.1',
				title: '色の使用',
				level: 'A',
				bodyHTML:
					'<p>色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。</p> <div class="note" role="note" id="issue-container-generatedID-1"><div role="heading" class="note-title marker" id="h-note-1" aria-level="5"><span>注記</span></div><p class="">この達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、<a href="https://waic.jp/translations/WCAG22/#adaptable">ガイドライン 1.3</a> で網羅されている。</p></div>',
				bodyMarkdown:
					'色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。\n\n注記\n\nこの達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、[ガイドライン 1.3](https://waic.jp/translations/WCAG22/#adaptable) で網羅されている。',
				bodyPlain:
					'色が、情報を伝える、動作を示す、反応を促す、又は視覚的な要素を判別するための唯一の視覚的手段になっていない。\n\n注記この達成基準は、特に色の知覚に関するものである。その他の知覚形態については、色やその他の視覚的提示のコーディングへのプログラムによるアクセスも含めて、ガイドライン 1.3 で網羅されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/use-of-color.html',
			},
			'1.4.2': {
				id: '1.4.2',
				title: '音声の制御',
				level: 'A',
				bodyHTML:
					'<p>ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-1" title="結果を得るためのプロセス又は手法。">メカニズム</a>、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。</p> <div class="note" role="note" id="issue-container-generatedID-2"><div role="heading" class="note-title marker" id="h-note-2" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG22/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止する[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG22/#cc5)を参照。',
				bodyPlain:
					'ウェブページ上にある音声が自動的に再生され、3 秒より長く続く場合、その音声を一時停止又は停止するメカニズム、もしくはシステム全体の音量レベルに影響を与えずに音量レベルを調整できるメカニズムが利用できる。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/audio-control.html',
			},
			'1.4.3': {
				id: '1.4.3',
				title: 'コントラスト (最低限)',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-2" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-1" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>の視覚的提示に、少なくとも 4.5:1 の<a href="https://waic.jp/translations/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-1" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。ただし、次の場合は除く:</p> <dl> <dt>大きな文字</dt> <dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。</p> </dd> <dt> 付随的</dt> <dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p> </dd> <dt>ロゴタイプ</dt> <dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p> </dd> </dl>',
				bodyMarkdown:
					'[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")及び[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")の視覚的提示に、少なくとも 4.5:1 の[コントラスト比](https://waic.jp/translations/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。ただし、次の場合は除く:\n\n<dl><dt>大きな文字</dt><dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-1" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。</p></dd><dt>付随的</dt><dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-2" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-2" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></dd><dt>ロゴタイプ</dt><dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></dd></dl>',
				bodyPlain:
					'テキスト及び文字画像の視覚的提示に、少なくとも 4.5:1 のコントラスト比がある。ただし、次の場合は除く:\n\n大きな文字\n\nサイズの大きなテキスト及びサイズの大きな文字画像に、少なくとも 3:1 のコントラスト比がある。\n\n付随的\n\nテキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n\nロゴタイプ\n\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/contrast-minimum.html',
			},
			'1.4.4': {
				id: '1.4.4',
				title: 'テキストのサイズ変更',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-captions" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captions-3" title="そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。">キャプション</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-2" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>を除き、<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-3" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>は、コンテンツ又は機能を損なうことなく、<a href="https://waic.jp/translations/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-2" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>なしで 200％ までサイズ変更できる。</p>',
				bodyMarkdown:
					'[キャプション](https://waic.jp/translations/WCAG22/#dfn-captions "そのメディアのコンテンツを理解するのに必要な、会話及び会話でない音声情報に対する、同期した視覚、及び／又はテキストによる代替。")及び[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")を除き、[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")は、コンテンツ又は機能を損なうことなく、[支援技術](https://waic.jp/translations/WCAG22/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")なしで 200％ までサイズ変更できる。',
				bodyPlain:
					'キャプション及び文字画像を除き、テキストは、コンテンツ又は機能を損なうことなく、支援技術なしで 200％ までサイズ変更できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/resize-text.html',
			},
			'1.4.5': {
				id: '1.4.5',
				title: '文字画像',
				level: 'AA',
				bodyHTML:
					'<p>使用している技術で意図した視覚的提示が可能である場合、<a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-3" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>ではなく<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-4" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>が情報伝達に用いられている。ただし、次に挙げる場合を除く:</p> <dl> <dt>カスタマイズ可能</dt> <dd><p>文字画像は、利用者の要求に応じた<a href="https://waic.jp/translations/WCAG22/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="フォント、サイズ、色、及び背景を設定できること。">視覚的なカスタマイズ</a>ができる。</p> </dd> <dt>必要不可欠</dt> <dd><p>テキストの特定の提示が、伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-3"><div role="heading" class="note-title marker" id="h-note-3" aria-level="5"><span>注記</span></div><p class="">ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'使用している技術で意図した視覚的提示が可能である場合、[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")ではなく[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")が情報伝達に用いられている。ただし、次に挙げる場合を除く:\n\n<dl><dt>カスタマイズ可能</dt><dd><p>文字画像は、利用者の要求に応じた<a href="https://waic.jp/translations/WCAG22/#dfn-visually-customized" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-visually-customized-1" title="フォント、サイズ、色、及び背景を設定できること。">視覚的なカスタマイズ</a>ができる。</p></dd><dt>必要不可欠</dt><dd><p>テキストの特定の提示が、伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-2" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</p></dd></dl>\n\n注記\n\nロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられている。ただし、次に挙げる場合を除く:\n\nカスタマイズ可能\n\n文字画像は、利用者の要求に応じた視覚的なカスタマイズができる。\n\n必要不可欠\n\nテキストの特定の提示が、伝えようとする情報にとって必要不可欠である。\n\n注記ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/images-of-text.html',
			},
			'1.4.6': {
				id: '1.4.6',
				title: 'コントラスト (高度)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-5" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-4" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>の視覚的提示に、少なくとも 7:1 の<a href="https://waic.jp/translations/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-2" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。ただし、次の場合は除く:</p> <dl> <dt>大きな文字</dt> <dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。</p> </dd> <dt> 付随的</dt> <dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p> </dd> <dt>ロゴタイプ</dt> <dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p> </dd> </dl>',
				bodyMarkdown:
					'[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")及び[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")の視覚的提示に、少なくとも 7:1 の[コントラスト比](https://waic.jp/translations/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。ただし、次の場合は除く:\n\n<dl><dt>大きな文字</dt><dd><p><a href="https://waic.jp/translations/WCAG22/#dfn-large-scale" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-large-scale-2" title="少なくとも 18 ポイント、又は 14 ポイントの太字。あるいは、中国語、日本語、及び韓国語 (CJK) のフォントは、それと同等の文字サイズ。">サイズの大きな</a>テキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。</p></dd><dt>付随的</dt><dd><p>テキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではない<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-3" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の一部である、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-3" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。</p></dd><dt>ロゴタイプ</dt><dd><p>ロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。</p></dd></dl>',
				bodyPlain:
					'テキスト及び文字画像の視覚的提示に、少なくとも 7:1 のコントラスト比がある。ただし、次の場合は除く:\n\n大きな文字\n\nサイズの大きなテキスト及びサイズの大きな文字画像に、少なくとも 4.5:1 のコントラスト比がある。\n\n付随的\n\nテキスト又は文字画像において、次の場合はコントラストの要件はない。アクティブではないユーザインタフェース コンポーネントの一部である、純粋な装飾である、誰も視覚的に確認できない、又は重要な他の視覚的なコンテンツを含む写真の一部分である。\n\nロゴタイプ\n\nロゴ又はブランド名の一部である文字には、最低限のコントラストの要件はない。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/contrast-enhanced.html',
			},
			'1.4.7': {
				id: '1.4.7',
				title: '小さな背景音、又は背景音なし',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-prerecorded" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-prerecorded-8" title="ライブではない情報。">収録済</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-audio-only" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-audio-only-3" title="a time-based presentation that contains only audio (no video and no interaction)">音声しか</a>含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 <a href="https://waic.jp/translations/WCAG22/#dfn-captcha" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-captcha-2" title="コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。">CAPTCHA</a> 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:</p> <dl> <dt>背景音なし</dt> <dd><p>音声は背景音を含まない。</p> </dd> <dt>消音</dt> <dd><p>背景音を消すことができる。</p> </dd> <dt>20 デシベル</dt> <dd><p>背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。</p> <div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>注記</span></div><p class="">デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。</p></div> </dd> </dl>',
				bodyMarkdown:
					'[収録済](https://waic.jp/translations/WCAG22/#dfn-prerecorded "ライブではない情報。")の[音声しか](https://waic.jp/translations/WCAG22/#dfn-audio-only "a time-based presentation that contains only audio (no video and no interaction)")含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 [CAPTCHA](https://waic.jp/translations/WCAG22/#dfn-captcha "コンピュータと人間とを判別する完全自動化されたチューリングテスト (Completely Automated Public Turing test to tell Computers and Humans Apart) の頭文字語。") 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n<dl><dt>背景音なし</dt><dd><p>音声は背景音を含まない。</p></dd><dt>消音</dt><dd><p>背景音を消すことができる。</p></dd><dt>20 デシベル</dt><dd><p>背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。</p><div class="note" role="note" id="issue-container-generatedID-4"><div role="heading" class="note-title marker" id="h-note-4" aria-level="5"><span>注記</span></div><p class="">デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。</p></div></dd></dl>',
				bodyPlain:
					'収録済の音声しか含まないコンテンツで、(1) 前景に主として発話を含み、(2) 音声 CAPTCHA 又は音声ロゴではなく、かつ、(3) 例えば、歌やラップなどのように、主として音楽表現を意図した発声ではないものについては、次に挙げる事項のうち、少なくとも一つを満たしている:\n\n背景音なし\n\n音声は背景音を含まない。\n\n消音\n\n背景音を消すことができる。\n\n20 デシベル\n\n背景音は、前景にある発話のコンテンツより少なくとも 20 デシベルは低い。ただし、継続時間が 2 秒以内で発生頻度が低い背景音は除く。\n\n注記デシベルの定義によれば、この要件を満たす背景音は、前景にある発話のコンテンツの約 4 分の 1 の大きさになる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/low-or-no-background-audio.html',
			},
			'1.4.8': {
				id: '1.4.8',
				title: '視覚的提示',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-blocks-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blocks-of-text-1" title="一文よりも長いテキスト。">テキストブロック</a>の視覚的提示において、次を実現する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-2" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる:</p> <ul> <li>利用者が、前景色と背景色を選択できる。</li> <li>幅が 80 字を越えない (全角文字の場合は、40 字)。</li> <li>テキストが、均等割り付けされていない (両端揃えではない)。</li> <li>段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。</li> <li>テキストは、支援技術なしで 200％までサイズ変更でき、利用者が<a href="https://waic.jp/translations/WCAG22/#dfn-on-a-full-screen-window" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-on-a-full-screen-window-1" title="最も普及したサイズのデスクトップやラップトップのディスプレイで、ビューポートを最大化した状態。">全画面表示</a>にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。</li> </ul> <div class="note" role="note" id="issue-container-generatedID-5"><div role="heading" class="note-title marker" id="h-note-5" aria-level="5"><span>注記 1</span></div><p class="">コンテンツがこれらの値を用いる必要はない。要求事項は、利用者がこれらの提示の外観を変更するメカニズムを利用できることである。このメカニズムは、ブラウザ又は他のユーザエージェントによって提供されることがある。コンテンツがこのメカニズムを提供する必要はない。</p></div> <div class="note" role="note" id="issue-container-generatedID-6"><div role="heading" class="note-title marker" id="h-note-6" aria-level="5"><span>注記 2</span></div><p class="">言語の中には、書記体系において、可読性及び視認性を向上させるために用いる提示の概念が異なるものもある。ある書記体系でこの達成基準における提示の概念が用いられていない場合、その書記体系のコンテンツは、その提示の設定を用いる必要はなく、その提示の設定なしでも適合できる。コンテンツ制作者は、可読性及び視認性を向上させるために、言語の書記体系のガイドラインに従うことが推奨される。</p></div>',
				bodyMarkdown:
					'[テキストブロック](https://waic.jp/translations/WCAG22/#dfn-blocks-of-text "一文よりも長いテキスト。")の視覚的提示において、次を実現する[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる:\n\n-   利用者が、前景色と背景色を選択できる。\n-   幅が 80 字を越えない (全角文字の場合は、40 字)。\n-   テキストが、均等割り付けされていない (両端揃えではない)。\n-   段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。\n-   テキストは、支援技術なしで 200％までサイズ変更でき、利用者が[全画面表示](https://waic.jp/translations/WCAG22/#dfn-on-a-full-screen-window "最も普及したサイズのデスクトップやラップトップのディスプレイで、ビューポートを最大化した状態。")にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。\n\n注記 1\n\nコンテンツがこれらの値を用いる必要はない。要求事項は、利用者がこれらの提示の外観を変更するメカニズムを利用できることである。このメカニズムは、ブラウザ又は他のユーザエージェントによって提供されることがある。コンテンツがこのメカニズムを提供する必要はない。\n\n注記 2\n\n言語の中には、書記体系において、可読性及び視認性を向上させるために用いる提示の概念が異なるものもある。ある書記体系でこの達成基準における提示の概念が用いられていない場合、その書記体系のコンテンツは、その提示の設定を用いる必要はなく、その提示の設定なしでも適合できる。コンテンツ制作者は、可読性及び視認性を向上させるために、言語の書記体系のガイドラインに従うことが推奨される。',
				bodyPlain:
					'テキストブロックの視覚的提示において、次を実現するメカニズムが利用できる:\n\n利用者が、前景色と背景色を選択できる。 \n幅が 80 字を越えない (全角文字の場合は、40 字)。 \nテキストが、均等割り付けされていない (両端揃えではない)。 \n段落中の行送りは、少なくとも 1.5 文字分ある。そして、段落の間隔は、その行送りの少なくとも 1.5 倍以上ある。 \nテキストは、支援技術なしで 200％までサイズ変更でき、利用者が全画面表示にしたウィンドウで 1 行のテキストを読むときに横スクロールする必要がない。 \n\n注記 1コンテンツがこれらの値を用いる必要はない。要求事項は、利用者がこれらの提示の外観を変更するメカニズムを利用できることである。このメカニズムは、ブラウザ又は他のユーザエージェントによって提供されることがある。コンテンツがこのメカニズムを提供する必要はない。\n\n注記 2言語の中には、書記体系において、可読性及び視認性を向上させるために用いる提示の概念が異なるものもある。ある書記体系でこの達成基準における提示の概念が用いられていない場合、その書記体系のコンテンツは、その提示の設定を用いる必要はなく、その提示の設定なしでも適合できる。コンテンツ制作者は、可読性及び視認性を向上させるために、言語の書記体系のガイドラインに従うことが推奨される。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/visual-presentation.html',
			},
			'1.4.9': {
				id: '1.4.9',
				title: '文字画像 (例外なし)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-5" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>は、<a href="https://waic.jp/translations/WCAG22/#dfn-pure-decoration" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pure-decoration-4" title="見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。">純粋な装飾</a>に用いられているか、<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-6" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>の特定の提示が伝えようとする情報にとって<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-3" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である場合に用いられている。</p> <div class="note" role="note" id="issue-container-generatedID-7"><div role="heading" class="note-title marker" id="h-note-7" aria-level="5"><span>注記</span></div><p class="">ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。</p></div>',
				bodyMarkdown:
					'[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")は、[純粋な装飾](https://waic.jp/translations/WCAG22/#dfn-pure-decoration "見栄えのためだけのもので、情報は提供せず、機能性も備えていないもの。")に用いられているか、[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")の特定の提示が伝えようとする情報にとって[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である場合に用いられている。\n\n注記\n\nロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				bodyPlain:
					'文字画像は、純粋な装飾に用いられているか、テキストの特定の提示が伝えようとする情報にとって必要不可欠である場合に用いられている。\n\n注記ロゴタイプ (ロゴ又はブランド名の一部である文字) は必要不可欠なものであると考えられる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/images-of-text-no-exception.html',
			},
			'1.4.10': {
				id: '1.4.10',
				title: 'リフロー',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:</p> <ul> <li>320 <a href="https://waic.jp/translations/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-1" title="約 0.0213 度の視野角。">CSS ピクセル</a>に相当する幅の縦スクロールのコンテンツ。</li> <li>256 <a href="https://waic.jp/translations/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-2" title="約 0.0213 度の視野角。">CSS ピクセル</a>に相当する高さの横スクロールのコンテンツ。</li> </ul> <p>利用や意味の理解に 2 次元のレイアウトを必要とする一部のコンテンツを除く。</p> <div class="note" role="note" id="issue-container-generatedID-8"><div role="heading" class="note-title marker" id="h-note-8" aria-level="5"><span>注記 1</span></div><p class="">320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。</p></div> <div class="note" role="note" id="issue-container-generatedID-9"><div role="heading" class="note-title marker" id="h-note-9" aria-level="5"><span>注記 2</span></div><p class="">2 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。</p></div>',
				bodyMarkdown:
					'コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:\n\n-   320 [CSS ピクセル](https://waic.jp/translations/WCAG22/#dfn-css-pixels "約 0.0213 度の視野角。")に相当する幅の縦スクロールのコンテンツ。\n-   256 [CSS ピクセル](https://waic.jp/translations/WCAG22/#dfn-css-pixels "約 0.0213 度の視野角。")に相当する高さの横スクロールのコンテンツ。\n\n利用や意味の理解に 2 次元のレイアウトを必要とする一部のコンテンツを除く。\n\n注記 1\n\n320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。\n\n注記 2\n\n2 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。',
				bodyPlain:
					'コンテンツは、情報又は機能を損なうことなく、かつ、以下において 2 次元スクロールを必要とせずに提示できる:\n\n320 CSS ピクセルに相当する幅の縦スクロールのコンテンツ。\n256 CSS ピクセルに相当する高さの横スクロールのコンテンツ。\n\n利用や意味の理解に 2 次元のレイアウトを必要とする一部のコンテンツを除く。\n\n注記 1320 CSS ピクセルは、400% ズーム時の開始ビューポート幅 1280 CSS ピクセルに相当する。横スクロールになるように設計されたウェブコンテンツ (例えば、縦書きのテキスト) の場合、256 CSS ピクセルは、400% ズーム時の開始ビューポート高さ 1024 CSS ピクセルに相当する。\n\n注記 22 次元のレイアウトを必要とするコンテンツの例としては、理解のために必要な画像 (地図、図解など)、映像、ゲーム、プレゼンテーション、データテーブル (個々のセルではない)、及びコンテンツを操作している間にツールバーを表示しておく必要のあるインタフェースが挙げられる。コンテンツのそのような部分には、2 次元スクロールを提供することが許容される。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/reflow.html',
			},
			'1.4.11': {
				id: '1.4.11',
				title: '非テキストのコントラスト',
				level: 'AA',
				bodyHTML:
					'<p>以下の視覚的<a href="https://waic.jp/translations/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-2" title="rendering of the content in a form to be perceived by users">提示</a>には、隣接した色との間で少なくとも 3:1 の<a href="https://waic.jp/translations/WCAG22/#dfn-contrast-ratio" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-contrast-ratio-3" title="(L1 + 0.05) / (L2 + 0.05) ここでは、">コントラスト比</a>がある。</p> <dl> <dt>ユーザインタフェース コンポーネント </dt> <dd><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="利用者のアクション又は自動プロセスに応答して変化し得るユーザインタフェースコンポーネントの特性を表現する動的プロパティ。">状態 (state)</a> を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。</dd> <dt>グラフィカルオブジェクト </dt> <dd>コンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</dd> </dl>',
				bodyMarkdown:
					'以下の視覚的[提示](https://waic.jp/translations/WCAG22/#dfn-presentation "rendering of the content in a form to be perceived by users")には、隣接した色との間で少なくとも 3:1 の[コントラスト比](https://waic.jp/translations/WCAG22/#dfn-contrast-ratio "(L1 + 0.05) / (L2 + 0.05) ここでは、")がある。\n\n<dl><dt>ユーザインタフェース コンポーネント</dt><dd><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-4" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-states" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-states-1" title="利用者のアクション又は自動プロセスに応答して変化し得るユーザインタフェースコンポーネントの特性を表現する動的プロパティ。">状態 (state)</a> を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。</dd><dt>グラフィカルオブジェクト</dt><dd>コンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-4" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合は除く。</dd></dl>',
				bodyPlain:
					'以下の視覚的提示には、隣接した色との間で少なくとも 3:1 のコントラスト比がある。\n\nユーザインタフェース コンポーネント \n\nユーザインタフェース コンポーネント及び状態 (state) を特定するのに必要な視覚的な情報。ただし、アクティブではないユーザインタフェース コンポーネントや、そのコンポーネントの見た目がユーザエージェントによって提示されていてコンテンツ制作者が変更していない場合は除く。\n\nグラフィカルオブジェクト \n\nコンテンツを理解するのに必要なグラフィック部分。ただし、そのグラフィック特有の提示が、情報を伝えるうえで必要不可欠な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/non-text-contrast.html',
			},
			'1.4.12': {
				id: '1.4.12',
				title: 'テキストの間隔',
				level: 'AA',
				bodyHTML:
					'<p>以下の<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-7" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a><a href="https://waic.jp/translations/WCAG22/#dfn-style-properties" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-style-properties-1" title="ユーザエージェントによってコンテンツ要素が (画面、音声スピーカー、点字ディスプレイなどを介して) レンダリングされるとき、その値の提示 (フォント、色、サイズ、位置、パディング、音量、合成音声の韻律など) を定義するプロパティ。">スタイルプロパティ</a>をサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:</p> <ul> <li>行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する</li> <li>段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する</li> <li>文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する</li> <li>単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する</li> </ul> <p>例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。</p> <div class="note" role="note" id="issue-container-generatedID-10"><div role="heading" class="note-title marker" id="h-note-10" aria-level="5"><span>注記 1</span></div><p class="">コンテンツが、これらのテキストの間隔の値を用いる必要はない。要求事項は、制作者が指定したテキストの間隔を利用者が上書きした場合に、コンテンツ又は機能が失われないことである。</p></div> <div class="note" role="note" id="issue-container-generatedID-11"><div role="heading" class="note-title marker" id="h-note-11" aria-level="5"><span>注記 2</span></div><p class="">言語の中には、書記体系において、例えば段落開始のインデントのように、異なるテキストの間隔の設定が用いられるものもある。コンテンツ制作者は、テキストの可読性及び視認性を向上させるために、その書記体系の、その地域に適用されるガイドラインに従うことが推奨される。</p></div>',
				bodyMarkdown:
					'以下の[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")[スタイルプロパティ](https://waic.jp/translations/WCAG22/#dfn-style-properties "ユーザエージェントによってコンテンツ要素が (画面、音声スピーカー、点字ディスプレイなどを介して) レンダリングされるとき、その値の提示 (フォント、色、サイズ、位置、パディング、音量、合成音声の韻律など) を定義するプロパティ。")をサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:\n\n-   行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する\n-   段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する\n-   文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する\n-   単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する\n\n例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。\n\n注記 1\n\nコンテンツが、これらのテキストの間隔の値を用いる必要はない。要求事項は、制作者が指定したテキストの間隔を利用者が上書きした場合に、コンテンツ又は機能が失われないことである。\n\n注記 2\n\n言語の中には、書記体系において、例えば段落開始のインデントのように、異なるテキストの間隔の設定が用いられるものもある。コンテンツ制作者は、テキストの可読性及び視認性を向上させるために、その書記体系の、その地域に適用されるガイドラインに従うことが推奨される。',
				bodyPlain:
					'以下のテキストスタイルプロパティをサポートするマークアップ言語を用いて実装されているコンテンツにおいては、以下をすべて設定し、かつ他のスタイルプロパティを変更しないことによって、コンテンツ又は機能の損失が生じない:\n\n行の間隔 (行送り) をフォントサイズの少なくとも 1.5 倍に設定する\n段落に続く間隔をフォントサイズの少なくとも 2 倍に設定する\n文字の間隔 (字送り) をフォントサイズの少なくとも 0.12 倍に設定する\n単語の間隔をフォントサイズの少なくとも 0.16 倍に設定する\n\n例外: テキスト表記においてこれらのテキストスタイルプロパティの一つ以上を使用しない自然言語及び文字体系では、その言語と文字体系の組み合わせに存在するプロパティだけを用いて、この達成基準に適合することができる。\n\n注記 1コンテンツが、これらのテキストの間隔の値を用いる必要はない。要求事項は、制作者が指定したテキストの間隔を利用者が上書きした場合に、コンテンツ又は機能が失われないことである。\n\n注記 2言語の中には、書記体系において、例えば段落開始のインデントのように、異なるテキストの間隔の設定が用いられるものもある。コンテンツ制作者は、テキストの可読性及び視認性を向上させるために、その書記体系の、その地域に適用されるガイドラインに従うことが推奨される。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/text-spacing.html',
			},
			'1.4.13': {
				id: '1.4.13',
				title: 'ホバー又はフォーカスで表示されるコンテンツ',
				level: 'AA',
				bodyHTML:
					'<p>ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:</p> <dl> <dt>非表示にすることができる </dt> <dd>ポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にする<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="結果を得るためのプロセス又は手法。">メカニズム</a>が存在する。ただし、追加コンテンツが<a href="https://waic.jp/translations/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>を伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。</dd> <dt>ホバーすることができる </dt> <dd>ポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。</dd> <dt>表示が継続される </dt> <dd>ホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。</dd> </dl> <p>例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。</p> <div class="note" role="note" id="issue-container-generatedID-12"><div role="heading" class="note-title marker" id="h-note-12" aria-level="5"><span>注記 1</span></div><p class="">ユーザエージェントによって制御されている追加コンテンツの例としては、HTML の <a href="https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute"><code>title</code> 属性</a> [<cite><a class="bibref" data-link-type="biblio" href="https://waic.jp/translations/WCAG22/#bib-html" title="HTML Standard">HTML</a></cite>] を用いて作られているブラウザのツールチップが挙げられる。</p></div> <div class="note" role="note" id="issue-container-generatedID-13"><div role="heading" class="note-title marker" id="h-note-13" aria-level="5"><span>注記 2</span></div><p class="">ホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。</p></div> <div class="note" role="note" id="issue-container-generatedID-14"><div role="heading" class="note-title marker" id="h-note-14" aria-level="5"><span>注記 3</span></div><p class="">この達成基準は、トリガーとなるコンポーネント自体に追加で表示されるコンテンツに対して適用される。キーボードフォーカスによって可視化される非表示のコンポーネント (例えば、ページの別の部分にスキップするためのリンク) は追加コンテンツを提示しないため、この達成基準の適用対象外である。</p></div>',
				bodyMarkdown:
					'ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:\n\n<dl><dt>非表示にすることができる</dt><dd>ポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にする<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-3" title="結果を得るためのプロセス又は手法。">メカニズム</a>が存在する。ただし、追加コンテンツが<a href="https://waic.jp/translations/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-1" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>を伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。</dd><dt>ホバーすることができる</dt><dd>ポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。</dd><dt>表示が継続される</dt><dd>ホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。</dd></dl>\n\n例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。\n\n注記 1\n\nユーザエージェントによって制御されている追加コンテンツの例としては、HTML の [`title` 属性](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute) \\[[HTML](https://waic.jp/translations/WCAG22/#bib-html "HTML Standard")\\] を用いて作られているブラウザのツールチップが挙げられる。\n\n注記 2\n\nホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。\n\n注記 3\n\nこの達成基準は、トリガーとなるコンポーネント自体に追加で表示されるコンテンツに対して適用される。キーボードフォーカスによって可視化される非表示のコンポーネント (例えば、ページの別の部分にスキップするためのリンク) は追加コンテンツを提示しないため、この達成基準の適用対象外である。',
				bodyPlain:
					'ポインタホバー又はキーボードフォーカスを受け取ってから外すことで、追加コンテンツを表示させてから非表示にさせる場合は、以下の要件を全て満たす:\n\n非表示にすることができる \nポインタホバー又はキーボードフォーカスを動かさずに追加コンテンツを非表示にするメカニズムが存在する。ただし、追加コンテンツが入力エラーを伝える場合や、他のコンテンツを不明瞭にしたり置き換えたりしない場合は除く。\n\nホバーすることができる \nポインタホバーによって追加コンテンツを表示させることができる場合、その追加コンテンツを消すことなく、ポインタを追加コンテンツ上で動かすことができる。\n\n表示が継続される \nホバーやフォーカスが解除される、利用者が非表示にする、又はその情報が有効でなくなるまでは、追加コンテンツが表示され続ける。\n\n例外: 追加コンテンツの視覚的提示がユーザエージェントによって制御されていて、かつコンテンツ制作者が変更していない場合は例外とする。\n\n注記 1ユーザエージェントによって制御されている追加コンテンツの例としては、HTML の title 属性 [HTML] を用いて作られているブラウザのツールチップが挙げられる。\n注記 2ホバー時やフォーカス時に表示されるカスタムツールチップ、サブメニュー、他の非モーダルポップアップは、この達成基準の適用対象となる「追加コンテンツ」の例である。\n注記 3この達成基準は、トリガーとなるコンポーネント自体に追加で表示されるコンテンツに対して適用される。キーボードフォーカスによって可視化される非表示のコンポーネント (例えば、ページの別の部分にスキップするためのリンク) は追加コンテンツを提示しないため、この達成基準の適用対象外である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/content-on-hover-or-focus.html',
			},
			'2.1.1': {
				id: '2.1.1',
				title: 'キーボード',
				level: 'A',
				bodyHTML:
					'<p>コンテンツのすべての<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-1" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a href="https://waic.jp/translations/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-1" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。</p> <div class="note" role="note" id="issue-container-generatedID-15"><div role="heading" class="note-title marker" id="h-note-15" aria-level="5"><span>注記 1</span></div><p class="">上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。</p></div> <div class="note" role="note" id="issue-container-generatedID-16"><div role="heading" class="note-title marker" id="h-note-16" aria-level="5"><span>注記 2</span></div><p class="">これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。</p></div>',
				bodyMarkdown:
					'コンテンツのすべての[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG22/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。\n\n注記 1\n\n上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。\n\n注記 2\n\nこれは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				bodyPlain:
					'コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。ただし、その根本的な機能が利用者の動作による終点だけではない軌跡に依存する入力を必要とする場合は除く。\n\n注記 1上記の例外は、根本的な機能に関するものであり、入力手法に関するものではない。例えば、テキスト入力に手書き入力を用いるのであれば、その入力手法 (手書き) は利用者の動作による軌跡に依存した入力を必要とするが、その根本的な機能 (テキスト入力) は利用者の動作による軌跡に依存した入力を必要とするものではない。\n\n注記 2これは、キーボード操作に加えて、マウス入力、又はその他の入力手段を提供することを禁ずるものでも妨げるものでもない。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/keyboard.html',
			},
			'2.1.2': {
				id: '2.1.2',
				title: 'キーボードトラップなし',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-2" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。</p> <div class="note" role="note" id="issue-container-generatedID-17"><div role="heading" class="note-title marker" id="h-note-17" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG22/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'[キーボードインタフェース](https://waic.jp/translations/WCAG22/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG22/#cc5)を参照。',
				bodyPlain:
					'キーボードインタフェースを用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tab キー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/no-keyboard-trap.html',
			},
			'2.1.3': {
				id: '2.1.3',
				title: 'キーボード (例外なし)',
				level: 'AAA',
				bodyHTML:
					'<p>コンテンツのすべての<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-2" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、個々のキーストロークに特定のタイミングを要することなく、<a href="https://waic.jp/translations/WCAG22/#dfn-keyboard-interface" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-interface-3" title="キーストローク入力を取得するためにソフトウェアが用いるインタフェース。">キーボードインタフェース</a>を通じて操作可能である。</p>',
				bodyMarkdown:
					'コンテンツのすべての[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、個々のキーストロークに特定のタイミングを要することなく、[キーボードインタフェース](https://waic.jp/translations/WCAG22/#dfn-keyboard-interface "キーストローク入力を取得するためにソフトウェアが用いるインタフェース。")を通じて操作可能である。',
				bodyPlain:
					'コンテンツのすべての機能は、個々のキーストロークに特定のタイミングを要することなく、キーボードインタフェースを通じて操作可能である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/keyboard-no-exception.html',
			},
			'2.1.4': {
				id: '2.1.4',
				title: '文字キーのショートカット',
				level: 'A',
				bodyHTML:
					'<p>文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用した<a href="https://waic.jp/translations/WCAG22/#dfn-keyboard-shortcuts" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-keyboard-shortcuts-1" title="一つ以上のキーを押すことによる、動作のトリガーの代替手段">キーボードショートカット</a>がコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:</p> <dl> <dt>解除</dt> <dd>ショートカットを解除する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる </dd> <dt>再割当て</dt> <dd>一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる </dd> <dt>フォーカス中にのみ有効化</dt> <dd><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>のキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。</dd> </dl>',
				bodyMarkdown:
					'文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用した[キーボードショートカット](https://waic.jp/translations/WCAG22/#dfn-keyboard-shortcuts "一つ以上のキーを押すことによる、動作のトリガーの代替手段")がコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:\n\n<dl><dt>解除</dt><dd>ショートカットを解除する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-4" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる</dd><dt>再割当て</dt><dd>一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる</dd><dt>フォーカス中にのみ有効化</dt><dd><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-5" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>のキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。</dd></dl>',
				bodyPlain:
					'文字 (大文字と小文字を含む)、句読点、数字、又は記号のみを使用したキーボードショートカットがコンテンツに実装されている場合、少なくとも次のいずれかを満たしている:\n\n解除\nショートカットを解除するメカニズムが利用できる \n\n再割当て\n一つ以上のキーボードの非印字キー (例えば Ctrl、Alt) を含むようにショートカットを再割当てするメカニズムが利用できる \n\nフォーカス中にのみ有効化\nユーザインタフェース コンポーネントのキーボードショートカットは、そのコンポーネントがフォーカスをもっているときのみ有効になる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/character-key-shortcuts.html',
			},
			'2.2.1': {
				id: '2.2.1',
				title: 'タイミング調整可能',
				level: 'A',
				bodyHTML:
					'<p>コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>解除</dt> <dd><p>制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、</p> </dd> <dt>調整</dt> <dd><p>制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、</p> </dd> <dt>延長</dt> <dd><p>時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、</p> </dd> <dt>リアルタイムの例外</dt> <dd><p>リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、</p> </dd> <dt>必要不可欠な例外</dt> <dd><p>制限時間が<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、</p> </dd> <dt>20 時間の例外</dt> <dd><p>制限時間が 20 時間よりも長い。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-18"><div role="heading" class="note-title marker" id="h-note-18" aria-level="5"><span>注記</span></div><p class="">この達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する<a href="https://waic.jp/translations/WCAG22/#on-focus">達成基準 3.2.1</a> と併せて考慮すること。</p></div>',
				bodyMarkdown:
					'コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>解除</dt><dd><p>制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、</p></dd><dt>調整</dt><dd><p>制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、</p></dd><dt>延長</dt><dd><p>時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、</p></dd><dt>リアルタイムの例外</dt><dd><p>リアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、</p></dd><dt>必要不可欠な例外</dt><dd><p>制限時間が<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-5" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、</p></dd><dt>20 時間の例外</dt><dd><p>制限時間が 20 時間よりも長い。</p></dd></dl>\n\n注記\n\nこの達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する[達成基準 3.2.1](https://waic.jp/translations/WCAG22/#on-focus) と併せて考慮すること。',
				bodyPlain:
					'コンテンツに制限時間を設定する場合は、次に挙げる事項のうち、少なくとも一つを満たしている\n\n解除\n\n制限時間があるコンテンツを利用する前に、利用者がその制限時間を解除することができる。又は、\n\n調整\n\n制限時間があるコンテンツを利用する前に、利用者が少なくともデフォルト設定の 10 倍を超える、大幅な制限時間の調整をすることができる。又は、\n\n延長\n\n時間切れになる前に利用者に警告し、かつ少なくとも 20 秒間の猶予をもって、例えば「スペースキーを押す」などの簡単な操作により、利用者が制限時間を少なくとも 10 倍以上延長することができる。又は、\n\nリアルタイムの例外\n\nリアルタイムのイベント (例えば、オークション) において制限時間が必須の要素で、その制限時間に代わる手段が存在しない。又は、\n\n必要不可欠な例外\n\n制限時間が必要不可欠なもので、制限時間を延長することがコンテンツの動作を無効にすることになる。又は、\n\n20 時間の例外\n\n制限時間が 20 時間よりも長い。\n\n注記この達成基準は、制限時間の結果として、コンテンツ又は状況の予期せぬ変化を引き起こさないように利用者がタスクを完了できるようにするためのものである。この達成基準は、利用者の動作の結果としてのコンテンツ又はコンテキストの変化を制限する達成基準 3.2.1 と併せて考慮すること。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/timing-adjustable.html',
			},
			'2.2.2': {
				id: '2.2.2',
				title: '一時停止、停止、非表示',
				level: 'A',
				bodyHTML:
					'<p>動きのある、<a href="https://waic.jp/translations/WCAG22/#dfn-blinking" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-blinking-1" title="注意を引く意図で、二つの視覚的な状態を交互に切り替えること。">点滅</a>している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている</p> <dl> <dt>動き、点滅、スクロール</dt> <dd><p>動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを<a href="https://waic.jp/translations/WCAG22/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="利用者の要求により停止し、利用者の要求があるまで再開しない。">一時停止</a>、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な動作の一部である場合は除く。</p> </dd> <dt>自動更新</dt> <dd><p>自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。</p> </dd> </dl> <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="5"><span>注記 1</span></div><p class="">画面がちらつく、又は閃光を放つコンテンツに関する要件は、<a href="https://waic.jp/translations/WCAG22/#seizures-and-physical-reactions">ガイドライン 2.3</a> を参照。</p></div> <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="5"><span>注記 2</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG22/#cc5">適合要件 5: 非干渉</a>を参照。</p></div> <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="5"><span>注記 3</span></div><p class="">定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。</p></div> <div class="note" role="note" id="issue-container-generatedID-22"><div role="heading" class="note-title marker" id="h-note-22" aria-level="5"><span>注記 4</span></div><p class="">コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。</p></div>',
				bodyMarkdown:
					'動きのある、[点滅](https://waic.jp/translations/WCAG22/#dfn-blinking "注意を引く意図で、二つの視覚的な状態を交互に切り替えること。")している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている\n\n<dl><dt>動き、点滅、スクロール</dt><dd><p>動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを<a href="https://waic.jp/translations/WCAG22/#dfn-pause" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pause-1" title="利用者の要求により停止し、利用者の要求があるまで再開しない。">一時停止</a>、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-6" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な動作の一部である場合は除く。</p></dd><dt>自動更新</dt><dd><p>自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。</p></dd></dl>\n\n注記 1\n\n画面がちらつく、又は閃光を放つコンテンツに関する要件は、[ガイドライン 2.3](https://waic.jp/translations/WCAG22/#seizures-and-physical-reactions) を参照。\n\n注記 2\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG22/#cc5)を参照。\n\n注記 3\n\n定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n\n注記 4\n\nコンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				bodyPlain:
					'動きのある、点滅している、スクロールする、又は自動更新する情報は、次のすべての事項を満たしている\n\n動き、点滅、スクロール\n\n動きのある、点滅している、又はスクロールしている情報が、(1) 自動的に開始し、(2) 5 秒よりも長く継続し、かつ、(3) その他のコンテンツと並行して提示される場合、利用者がそれらを一時停止、停止、又は非表示にすることのできるメカニズムがある。ただし、その動き、点滅、又はスクロールが必要不可欠な動作の一部である場合は除く。\n\n自動更新\n\n自動更新する情報が、(1) 自動的に開始し、 (2) その他のコンテンツと並行して提示される場合、利用者がそれを一時停止、停止、もしくは非表示にする、又はその更新頻度を調整することのできるメカニズムがある。ただし、その自動更新が必要不可欠な動作の一部である場合は除く。\n\n注記 1画面がちらつく、又は閃光を放つコンテンツに関する要件は、ガイドライン 2.3 を参照。\n\n注記 2この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。\n\n注記 3定期的にソフトウェアによって自動的に更新されるコンテンツ、又はユーザエージェントにストリーム配信されるコンテンツでは、コンテンツ再生の一時停止と再開の操作の間に生成、又は受信される情報を保持、又は提示する必要はない。これは技術的に不可能であることが考えられ、多くの状況において利用者の混乱を招くことにつながる可能性があるためである。\n\n注記 4コンテンツの読み込み中やそれに類似した状況の一部として表示されるアニメーションについては、この段階ですべての利用者に対していかなるインタラクションも発生する可能性がなく、かつコンテンツ読み込みの進行状況を表示しないことが利用者の混乱を招いたり、コンテンツが動作を停止した、又はコンテンツが破損しているという誤解を生じたりする可能性がある場合には、必要不可欠なものと考えることができる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/pause-stop-hide.html',
			},
			'2.2.3': {
				id: '2.2.3',
				title: 'タイミング非依存',
				level: 'AAA',
				bodyHTML:
					'<p>タイミングは、コンテンツによって提示されるイベント又は動作の<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-7" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な部分ではない。ただし、インタラクティブではない<a href="https://waic.jp/translations/WCAG22/#dfn-synchronized-media" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-synchronized-media-8" title="情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。">同期したメディア</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-real-time-events" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-real-time-events-1" title="a) 閲覧と同時に発生し、かつ b) コンテンツによる生成だけでは完結しないイベント。">リアルタイムのイベント</a>は除く。</p>',
				bodyMarkdown:
					'タイミングは、コンテンツによって提示されるイベント又は動作の[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な部分ではない。ただし、インタラクティブではない[同期したメディア](https://waic.jp/translations/WCAG22/#dfn-synchronized-media "情報を提示するために、他のフォーマットと同期した音声もしくは映像、及び／又は時間に依存するインタラクティブな構成要素と同期した音声もしくは映像。ただし、そのメディアがメディアによるテキストの代替であって、そのように明確にラベル付けされているものは除く。")及び[リアルタイムのイベント](https://waic.jp/translations/WCAG22/#dfn-real-time-events "a) 閲覧と同時に発生し、かつ b) コンテンツによる生成だけでは完結しないイベント。")は除く。',
				bodyPlain:
					'タイミングは、コンテンツによって提示されるイベント又は動作の必要不可欠な部分ではない。ただし、インタラクティブではない同期したメディア及びリアルタイムのイベントは除く。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/no-timing.html',
			},
			'2.2.4': {
				id: '2.2.4',
				title: '割り込み',
				level: 'AAA',
				bodyHTML:
					'<p>割り込みは、利用者が延期、又は抑制することができる。ただし、<a href="https://waic.jp/translations/WCAG22/#dfn-emergency" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-emergency-1" title="健康、安全、又は財産を守るために即座の行動を必要とする、突然で予期しない状況又は出来事。">緊急</a>を要する割り込みは除く。</p>',
				bodyMarkdown:
					'割り込みは、利用者が延期、又は抑制することができる。ただし、[緊急](https://waic.jp/translations/WCAG22/#dfn-emergency "健康、安全、又は財産を守るために即座の行動を必要とする、突然で予期しない状況又は出来事。")を要する割り込みは除く。',
				bodyPlain:
					'割り込みは、利用者が延期、又は抑制することができる。ただし、緊急を要する割り込みは除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/interruptions.html',
			},
			'2.2.5': {
				id: '2.2.5',
				title: '再認証',
				level: 'AAA',
				bodyHTML:
					'<p>認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。</p>',
				bodyMarkdown:
					'認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。',
				bodyPlain:
					'認証済のセッションが切れた場合は、再認証後でもデータを失うことなく利用者が操作を継続できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/re-authenticating.html',
			},
			'2.2.6': {
				id: '2.2.6',
				title: 'タイムアウト',
				level: 'AAA',
				bodyHTML:
					'<p>データの損失を引き起こす恐れのある<a href="https://waic.jp/translations/WCAG22/#dfn-user-inactivity" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-inactivity-1" title="利用者がいかなる操作も行わない時間が続くこと。">利用者の無操作</a>の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。</p> <div class="note" role="note" id="issue-container-generatedID-23"><div role="heading" class="note-title marker" id="h-note-23" aria-level="5"><span>注記</span></div><p class="">プライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。</p></div>',
				bodyMarkdown:
					'データの損失を引き起こす恐れのある[利用者の無操作](https://waic.jp/translations/WCAG22/#dfn-user-inactivity "利用者がいかなる操作も行わない時間が続くこと。")の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。\n\n注記\n\nプライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。',
				bodyPlain:
					'データの損失を引き起こす恐れのある利用者の無操作の残り時間が警告される。ただし、利用者が 20 時間以上何もしなくてもデータが保持される場合は、この限りではない。\n\n注記プライバシー関連の規制により、利用者を認証する前や利用者のデータが保存される前に、利用者の明確な同意が必要になる可能性がある。利用者が未成年の場合、ほとんどの司法管轄、国又は地域で、利用者からの明示的な同意を要請することができない。この達成基準に適合するためのアプローチとしてデータの保存を検討する場合は、プライバシーの専門家や弁護士に相談するのが望ましい。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/timeouts.html',
			},
			'2.3.1': {
				id: '2.3.1',
				title: '3 回の閃光、又は閾値以下',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-1" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は<a href="https://waic.jp/translations/WCAG22/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-1" title="相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。">閃光</a>が<a href="https://waic.jp/translations/WCAG22/#dfn-general-flash-and-red-flash-thresholds" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-general-flash-and-red-flash-thresholds-1" title="次のいずれかに該当する場合、閃光、又は急速に変化する映像シーケンスは、閾値を下回っている (すなわち、コンテンツは基準を満たしている) ことになる:">一般閃光閾値及び赤色閃光閾値</a>を下回っている。</p> <div class="note" role="note" id="issue-container-generatedID-24"><div role="heading" class="note-title marker" id="h-note-24" aria-level="5"><span>注記</span></div><p class="">この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。<a href="https://waic.jp/translations/WCAG22/#cc5">適合要件 5: 非干渉</a>を参照。</p></div>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は[閃光](https://waic.jp/translations/WCAG22/#dfn-flashes "相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。")が[一般閃光閾値及び赤色閃光閾値](https://waic.jp/translations/WCAG22/#dfn-general-flash-and-red-flash-thresholds "次のいずれかに該当する場合、閃光、又は急速に変化する映像シーケンスは、閾値を下回っている (すなわち、コンテンツは基準を満たしている) ことになる:")を下回っている。\n\n注記\n\nこの達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。[適合要件 5: 非干渉](https://waic.jp/translations/WCAG22/#cc5)を参照。',
				bodyPlain:
					'ウェブページには、どの 1 秒間においても 3 回を超える閃光を放つものがない、又は閃光が一般閃光閾値及び赤色閃光閾値を下回っている。\n\n注記この達成基準を満たさないコンテンツでは、利用者がそのウェブページ全体を使用できない恐れがあるため、ウェブページ上のすべてのコンテンツは他の達成基準を満たすために用いられているか否かにかかわらず、この達成基準を満たさなければならない。適合要件 5: 非干渉を参照。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/three-flashes-or-below-threshold.html',
			},
			'2.3.2': {
				id: '2.3.2',
				title: '3 回の閃光',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-2" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、どの 1 秒間においても 3 回を超える<a href="https://waic.jp/translations/WCAG22/#dfn-flashes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-flashes-2" title="相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。">閃光</a>を放つものがない。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、どの 1 秒間においても 3 回を超える[閃光](https://waic.jp/translations/WCAG22/#dfn-flashes "相対輝度の相反する変化の組合せで、十分な広さを持ち、かつ特定の頻度の場合に、一部の人に発作を誘発する恐れがあるもの。")を放つものがない。',
				bodyPlain:
					'ウェブページには、どの 1 秒間においても 3 回を超える閃光を放つものがない。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/three-flashes.html',
			},
			'2.3.3': {
				id: '2.3.3',
				title: 'インタラクションによるアニメーション',
				level: 'AAA',
				bodyHTML:
					'<p>アニメーションが、機能又は伝達されている情報に<a href="https://waic.jp/translations/WCAG22/#dfn-motion-animation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-motion-animation-1" title="動いているような錯覚を作り出す、又は滑らかに遷移しているような感覚を与えるための、状態間へのステップの追加。">必要不可欠</a>でない限り、インタラクションによって引き起こされる<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-8" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">モーションアニメーション</a>を無効にできる。</p>',
				bodyMarkdown:
					'アニメーションが、機能又は伝達されている情報に[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-motion-animation "動いているような錯覚を作り出す、又は滑らかに遷移しているような感覚を与えるための、状態間へのステップの追加。")でない限り、インタラクションによって引き起こされる[モーションアニメーション](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")を無効にできる。',
				bodyPlain:
					'アニメーションが、機能又は伝達されている情報に必要不可欠でない限り、インタラクションによって引き起こされるモーションアニメーションを無効にできる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/animation-from-interactions.html',
			},
			'2.4.1': {
				id: '2.4.1',
				title: 'ブロックスキップ',
				level: 'A',
				bodyHTML:
					'<p>複数の<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-3" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>上で繰り返されているコンテンツのブロックをスキップする<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-5" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'複数の[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")上で繰り返されているコンテンツのブロックをスキップする[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'複数のウェブページ上で繰り返されているコンテンツのブロックをスキップするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/bypass-blocks.html',
			},
			'2.4.2': {
				id: '2.4.2',
				title: 'ページタイトル',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-4" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>には、主題又は目的を説明したタイトルがある。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")には、主題又は目的を説明したタイトルがある。',
				bodyPlain: 'ウェブページには、主題又は目的を説明したタイトルがある。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/page-titled.html',
			},
			'2.4.3': {
				id: '2.4.3',
				title: 'フォーカス順序',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-5" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>が<a href="https://waic.jp/translations/WCAG22/#dfn-navigated-sequentially" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-navigated-sequentially-1" title="キーボードインタフェースを用いて (一つの要素から次へ) フォーカスを移動するために、定義された順序でナビゲートすること。">順を追ってナビゲート</a>できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。</p>',
				bodyMarkdown:
					'[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")が[順を追ってナビゲート](https://waic.jp/translations/WCAG22/#dfn-navigated-sequentially "キーボードインタフェースを用いて (一つの要素から次へ) フォーカスを移動するために、定義された順序でナビゲートすること。")できて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。',
				bodyPlain:
					'ウェブページが順を追ってナビゲートできて、そのナビゲーション順が意味又は操作に影響を及ぼす場合、フォーカス可能なコンポーネントは、意味及び操作性を損なわない順序でフォーカスを受け取る。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/focus-order.html',
			},
			'2.4.4': {
				id: '2.4.4',
				title: 'リンクの目的 (コンテキスト内)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-purpose-of-each-link" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-purpose-of-each-link-1" title="ハイパーリンクを動作させたときに得られる結果の本質。">それぞれのリンクの目的</a>が、リンクのテキスト単独で、又はリンクのテキストと<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determined-link-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determined-link-context-1" title="リンクとの関係性からプログラムによる解釈が可能であり、リンクテキストと結びつけることができ、様々な感覚モダリティで利用者に提示することができる付加的情報。">プログラムによる解釈が可能</a>なリンクのコンテキストから判断できる。ただし、リンクの目的が<a href="https://waic.jp/translations/WCAG22/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-1" title="リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。">ほとんどの利用者にとって曖昧</a>な場合は除く。</p>',
				bodyMarkdown:
					'[それぞれのリンクの目的](https://waic.jp/translations/WCAG22/#dfn-purpose-of-each-link "ハイパーリンクを動作させたときに得られる結果の本質。")が、リンクのテキスト単独で、又はリンクのテキストと[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determined-link-context "リンクとの関係性からプログラムによる解釈が可能であり、リンクテキストと結びつけることができ、様々な感覚モダリティで利用者に提示することができる付加的情報。")なリンクのコンテキストから判断できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG22/#dfn-ambiguous-to-users-in-general "リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。")な場合は除く。',
				bodyPlain:
					'それぞれのリンクの目的が、リンクのテキスト単独で、又はリンクのテキストとプログラムによる解釈が可能なリンクのコンテキストから判断できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/link-purpose-in-context.html',
			},
			'2.4.5': {
				id: '2.4.5',
				title: '複数の手段',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-1" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中で、ある<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-6" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>を見つける複数の手段が利用できる。ただし、ウェブページが一連の<a href="https://waic.jp/translations/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-1" title="ある活動を完了させるために必要な利用者の一連の動作。">プロセス</a>の中の 1 ステップ又は結果である場合は除く。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中で、ある[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")を見つける複数の手段が利用できる。ただし、ウェブページが一連の[プロセス](https://waic.jp/translations/WCAG22/#dfn-processes "ある活動を完了させるために必要な利用者の一連の動作。")の中の 1 ステップ又は結果である場合は除く。',
				bodyPlain:
					'ウェブページ一式の中で、あるウェブページを見つける複数の手段が利用できる。ただし、ウェブページが一連のプロセスの中の 1 ステップ又は結果である場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/multiple-ways.html',
			},
			'2.4.6': {
				id: '2.4.6',
				title: '見出し及びラベル',
				level: 'AA',
				bodyHTML:
					'<p>見出し及び<a href="https://waic.jp/translations/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-1" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>は、主題又は目的を説明している。</p>',
				bodyMarkdown:
					'見出し及び[ラベル](https://waic.jp/translations/WCAG22/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")は、主題又は目的を説明している。',
				bodyPlain: '見出し及びラベルは、主題又は目的を説明している。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/headings-and-labels.html',
			},
			'2.4.7': {
				id: '2.4.7',
				title: 'フォーカスの可視化',
				level: 'AA',
				bodyHTML:
					'<p>キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。</p>',
				bodyMarkdown:
					'キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。',
				bodyPlain:
					'キーボード操作が可能なあらゆるユーザインタフェースには、フォーカスインジケータが見える操作モードがある。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/focus-visible.html',
			},
			'2.4.8': {
				id: '2.4.8',
				title: '現在位置',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-2" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中での利用者の位置に関する情報が利用できる。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中での利用者の位置に関する情報が利用できる。',
				bodyPlain: 'ウェブページ一式の中での利用者の位置に関する情報が利用できる。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/location.html',
			},
			'2.4.9': {
				id: '2.4.9',
				title: 'リンクの目的 (リンクのみ)',
				level: 'AAA',
				bodyHTML:
					'<p>それぞれのリンクの目的を、リンクのテキスト単独で特定できる<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-6" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。ただし、リンクの目的が<a href="https://waic.jp/translations/WCAG22/#dfn-ambiguous-to-users-in-general" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-ambiguous-to-users-in-general-2" title="リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。">ほとんどの利用者にとって曖昧</a>な場合は除く。</p>',
				bodyMarkdown:
					'それぞれのリンクの目的を、リンクのテキスト単独で特定できる[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。ただし、リンクの目的が[ほとんどの利用者にとって曖昧](https://waic.jp/translations/WCAG22/#dfn-ambiguous-to-users-in-general "リンク、及びリンクと同時に利用者に提供されているウェブページのどの情報からも、そのリンクの目的を判断できない (すなわち、障害がない閲覧者でも、そのリンクを動作させるまで、そのリンクが何をするのか分からない)。")な場合は除く。',
				bodyPlain:
					'それぞれのリンクの目的を、リンクのテキスト単独で特定できるメカニズムが利用できる。ただし、リンクの目的がほとんどの利用者にとって曖昧な場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/link-purpose-link-only.html',
			},
			'2.4.10': {
				id: '2.4.10',
				title: 'セクション見出し',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-section" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-section-1" title="一つ以上の関連する話題、又は考えについて書かれたコンテンツの自己完結している部分。">セクション</a>見出しを用いて、コンテンツが整理されている。</p> <div class="note" role="note" id="issue-container-generatedID-25"><div role="heading" class="note-title marker" id="h-note-25" aria-level="5"><span>注記 1</span></div><p class="">見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。</p></div> <div class="note" role="note" id="issue-container-generatedID-26"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>注記 2</span></div><p class="">この達成基準は、文書におけるセクションを対象としており、<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-6" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>は対象としていない。ユーザインタフェース コンポーネントについては、<a href="https://waic.jp/translations/WCAG22/#name-role-value">達成基準 4.1.2</a> が対象にしている。</p></div>',
				bodyMarkdown:
					'[セクション](https://waic.jp/translations/WCAG22/#dfn-section "一つ以上の関連する話題、又は考えについて書かれたコンテンツの自己完結している部分。")見出しを用いて、コンテンツが整理されている。\n\n注記 1\n\n見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n\n注記 2\n\nこの達成基準は、文書におけるセクションを対象としており、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")は対象としていない。ユーザインタフェース コンポーネントについては、[達成基準 4.1.2](https://waic.jp/translations/WCAG22/#name-role-value) が対象にしている。',
				bodyPlain:
					'セクション見出しを用いて、コンテンツが整理されている。\n\n注記 1見出しはその一般的な意味で用いられており、タイトルや様々なタイプのコンテンツに見出しを付加するその他の手段を含む。\n\n注記 2この達成基準は、文書におけるセクションを対象としており、ユーザインタフェース コンポーネントは対象としていない。ユーザインタフェース コンポーネントについては、達成基準 4.1.2 が対象にしている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/section-headings.html',
			},
			'2.4.11': {
				id: '2.4.11',
				title: '隠されないフォーカス (最低限)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-7" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>がキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントの全体が隠されるようなことがない。</p> <div class="note" role="note" id="issue-container-generatedID-27"><div role="heading" class="note-title marker" id="h-note-27" aria-level="5"><span>注記 1</span></div><p class="">設定可能なインタフェースの中にあるコンテンツが利用者によって再配置可能な場合、この達成基準のテスト及び適合性の対象として検討されるのは、利用者によって移動可能なコンテンツの初期位置だけである。</p></div> <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-28" aria-level="5"><span>注記 2</span></div><p class=""><em>利用者</em>が開いたコンテンツによって、フォーカスを受け取るコンポーネントが隠される場合がある。利用者がキーボードフォーカスを移動せずにフォーカスを持つコンポーネントを表示できる場合、そのフォーカスを持つコンポーネントは、コンテンツ制作者が作成したコンテンツによって隠されたとはみなされない。</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\n[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")がキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントの全体が隠されるようなことがない。\n\n注記 1\n\n設定可能なインタフェースの中にあるコンテンツが利用者によって再配置可能な場合、この達成基準のテスト及び適合性の対象として検討されるのは、利用者によって移動可能なコンテンツの初期位置だけである。\n\n注記 2\n\n_利用者_が開いたコンテンツによって、フォーカスを受け取るコンポーネントが隠される場合がある。利用者がキーボードフォーカスを移動せずにフォーカスを持つコンポーネントを表示できる場合、そのフォーカスを持つコンポーネントは、コンテンツ制作者が作成したコンテンツによって隠されたとはみなされない。',
				bodyPlain:
					'[New]\n\nユーザインタフェース コンポーネントがキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントの全体が隠されるようなことがない。\n\n注記 1設定可能なインタフェースの中にあるコンテンツが利用者によって再配置可能な場合、この達成基準のテスト及び適合性の対象として検討されるのは、利用者によって移動可能なコンテンツの初期位置だけである。\n\n注記 2利用者が開いたコンテンツによって、フォーカスを受け取るコンポーネントが隠される場合がある。利用者がキーボードフォーカスを移動せずにフォーカスを持つコンポーネントを表示できる場合、そのフォーカスを持つコンポーネントは、コンテンツ制作者が作成したコンテンツによって隠されたとはみなされない。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/focus-not-obscured-minimum.html',
			},
			'2.4.12': {
				id: '2.4.12',
				title: '隠されないフォーカス (高度)',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-8" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>がキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントのどの部分も隠されることがない。</p>',
				bodyMarkdown:
					'\\[New\\]\n\n[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")がキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントのどの部分も隠されることがない。',
				bodyPlain:
					'[New]\n\nユーザインタフェース コンポーネントがキーボードフォーカスを受け取るとき、コンテンツ制作者が作成したコンテンツによって、そのコンポーネントのどの部分も隠されることがない。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/focus-not-obscured-enhanced.html',
			},
			'2.4.13': {
				id: '2.4.13',
				title: 'フォーカスの外観',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p>キーボードの<a href="https://waic.jp/translations/WCAG22/#dfn-focus-indicator" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-focus-indicator-1" title="[New]">フォーカスインジケータ</a>が視覚的に表示される場合、フォーカスインジケータの領域が以下の全てを満たす。</p> <ul> <li>フォーカスされていないコンポーネント又はサブコンポーネントの、太さ 2 <a href="https://waic.jp/translations/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-3" title="約 0.0213 度の視野角。">CSS ピクセル</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-perimeter" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-perimeter-1" title="[New]">外周</a>の領域と同等以上の大きさである。かつ、</li> <li>フォーカスされている状態とフォーカスされていない状態との間で、同一ピクセルに少なくとも 3:1 のコントラスト比がある。</li> </ul> <p>例外:</p> <ul> <li>フォーカスインジケータが<a href="https://waic.jp/translations/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-1" title="ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。">ユーザエージェント</a>によって決定され、かつコンテンツ制作者が調整できない場合。又は、</li> <li>コンテンツ制作者がフォーカスインジケータ及びそのインジケータの背景色を変更していない場合。</li> </ul> <div class="note" role="note" id="issue-container-generatedID-29"><div role="heading" class="note-title marker" id="h-note-29" aria-level="5"><span>注記 1</span></div><p class="">ユーザインタフェースコンポーネント又はサブコンポーネントとして認識されるもの (輪郭又は大きさを決定づけるもの) は、その視覚的<a href="https://waic.jp/translations/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-3" title="利用者が知覚できる形式でコンテンツをレンダリングすること。">提示</a>に依存する。視覚的提示には、コンポーネントの可視<a href="https://waic.jp/translations/WCAG22/#dfn-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-content-1" title="コンテンツの構造、提示、及びインタラクションを定義するコード又はマークアップも含めて、ユーザエージェントによって利用者に伝達される情報及び感覚的な体験。">コンテンツ</a>、ボーダー、及びコンポーネント固有の背景が含まれる。コンポーネントのコンテンツ、背景、又はボーダーの外側にある、影及びグロー効果は含まれない。</p></div> <div class="note" role="note" id="issue-container-generatedID-30"><div role="heading" class="note-title marker" id="h-note-30" aria-level="5"><span>注記 2</span></div><p class="">フォーカスインジケータを受け取ることができるサブコンポーネントの例としては、開いたドロップダウンメニューのメニュー項目、グリッド内のフォーカス可能なセルなどがある。</p></div> <div class="note" role="note" id="issue-container-generatedID-31"><div role="heading" class="note-title marker" id="h-note-31" aria-level="5"><span>注記 3</span></div><p class="">コントラストは、(HTML、CSS、及び SVG のような) <a href="https://waic.jp/translations/WCAG22/#dfn-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-technologies-1" title="ユーザエージェントがどのようにレンダリング、再生、又は実行するかを符号化するメカニズム。">技術</a>の中で定義された色を基に計算できる。その際、ユーザエージェントの高解像度化及びアンチエイリアスによって変更されたピクセルは無視できる。</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\nキーボードの[フォーカスインジケータ](https://waic.jp/translations/WCAG22/#dfn-focus-indicator "[New]")が視覚的に表示される場合、フォーカスインジケータの領域が以下の全てを満たす。\n\n-   フォーカスされていないコンポーネント又はサブコンポーネントの、太さ 2 [CSS ピクセル](https://waic.jp/translations/WCAG22/#dfn-css-pixels "約 0.0213 度の視野角。")の[外周](https://waic.jp/translations/WCAG22/#dfn-perimeter "[New]")の領域と同等以上の大きさである。かつ、\n-   フォーカスされている状態とフォーカスされていない状態との間で、同一ピクセルに少なくとも 3:1 のコントラスト比がある。\n\n例外:\n\n-   フォーカスインジケータが[ユーザエージェント](https://waic.jp/translations/WCAG22/#dfn-user-agents "ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。")によって決定され、かつコンテンツ制作者が調整できない場合。又は、\n-   コンテンツ制作者がフォーカスインジケータ及びそのインジケータの背景色を変更していない場合。\n\n注記 1\n\nユーザインタフェースコンポーネント又はサブコンポーネントとして認識されるもの (輪郭又は大きさを決定づけるもの) は、その視覚的[提示](https://waic.jp/translations/WCAG22/#dfn-presentation "利用者が知覚できる形式でコンテンツをレンダリングすること。")に依存する。視覚的提示には、コンポーネントの可視[コンテンツ](https://waic.jp/translations/WCAG22/#dfn-content "コンテンツの構造、提示、及びインタラクションを定義するコード又はマークアップも含めて、ユーザエージェントによって利用者に伝達される情報及び感覚的な体験。")、ボーダー、及びコンポーネント固有の背景が含まれる。コンポーネントのコンテンツ、背景、又はボーダーの外側にある、影及びグロー効果は含まれない。\n\n注記 2\n\nフォーカスインジケータを受け取ることができるサブコンポーネントの例としては、開いたドロップダウンメニューのメニュー項目、グリッド内のフォーカス可能なセルなどがある。\n\n注記 3\n\nコントラストは、(HTML、CSS、及び SVG のような) [技術](https://waic.jp/translations/WCAG22/#dfn-technologies "ユーザエージェントがどのようにレンダリング、再生、又は実行するかを符号化するメカニズム。")の中で定義された色を基に計算できる。その際、ユーザエージェントの高解像度化及びアンチエイリアスによって変更されたピクセルは無視できる。',
				bodyPlain:
					'[New]\n\nキーボードのフォーカスインジケータが視覚的に表示される場合、フォーカスインジケータの領域が以下の全てを満たす。\n\nフォーカスされていないコンポーネント又はサブコンポーネントの、太さ 2 CSS ピクセルの外周の領域と同等以上の大きさである。かつ、\nフォーカスされている状態とフォーカスされていない状態との間で、同一ピクセルに少なくとも 3:1 のコントラスト比がある。\n\n例外:\n\nフォーカスインジケータがユーザエージェントによって決定され、かつコンテンツ制作者が調整できない場合。又は、\nコンテンツ制作者がフォーカスインジケータ及びそのインジケータの背景色を変更していない場合。\n\n注記 1ユーザインタフェースコンポーネント又はサブコンポーネントとして認識されるもの (輪郭又は大きさを決定づけるもの) は、その視覚的提示に依存する。視覚的提示には、コンポーネントの可視コンテンツ、ボーダー、及びコンポーネント固有の背景が含まれる。コンポーネントのコンテンツ、背景、又はボーダーの外側にある、影及びグロー効果は含まれない。\n\n注記 2フォーカスインジケータを受け取ることができるサブコンポーネントの例としては、開いたドロップダウンメニューのメニュー項目、グリッド内のフォーカス可能なセルなどがある。\n\n注記 3コントラストは、(HTML、CSS、及び SVG のような) 技術の中で定義された色を基に計算できる。その際、ユーザエージェントの高解像度化及びアンチエイリアスによって変更されたピクセルは無視できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/focus-appearance.html',
			},
			'2.5.1': {
				id: '2.5.1',
				title: 'ポインタのジェスチャ',
				level: 'A',
				bodyHTML:
					'<p>マルチポイント又は軌跡ベースのジェスチャを使って操作する<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-3" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>はすべて、軌跡ベースのジェスチャなしの<a href="https://waic.jp/translations/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-1" title="シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。">シングルポインタ</a>で操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-9" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である場合は例外とする。</p> <div class="note" role="note" id="issue-container-generatedID-32"><div role="heading" class="note-title marker" id="h-note-32" aria-level="5"><span>注記</span></div><p class="">この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。</p></div>',
				bodyMarkdown:
					'マルチポイント又は軌跡ベースのジェスチャを使って操作する[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")はすべて、軌跡ベースのジェスチャなしの[シングルポインタ](https://waic.jp/translations/WCAG22/#dfn-single-pointer "シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。")で操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である場合は例外とする。\n\n注記\n\nこの要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				bodyPlain:
					'マルチポイント又は軌跡ベースのジェスチャを使って操作する機能はすべて、軌跡ベースのジェスチャなしのシングルポインタで操作することができる。ただし、マルチポイント又は軌跡ベースのジェスチャが必要不可欠である場合は例外とする。\n\n注記この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/pointer-gestures.html',
			},
			'2.5.2': {
				id: '2.5.2',
				title: 'ポインタのキャンセル',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-2" title="シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。">シングルポインタ</a>を使って操作できる<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-4" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、以下の要件の少なくとも 一つを満たす。</p> <dl> <dt>ダウンイベントがない </dt> <dd>機能を実行する目的でポインタの<a href="https://waic.jp/translations/WCAG22/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="トリガ刺激が depressed (押し下げられた) となった時に発生するプラットフォームのイベント。">ダウンイベント</a>を使用していない。</dd> <dt>中止又は元に戻すことができる </dt> <dd>機能の完了には<a href="https://waic.jp/translations/WCAG22/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="ポインタのトリガが解除されたときに生じるプラットフォームイベント。">アップイベント</a>を使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すための<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd> <dt>アップイベントで反転 </dt> <dd>アップイベントによって、先のダウンイベントのすべての結果が反転する。</dd> <dt>必要不可欠</dt> <dd>ダウンイベントによって機能を完了させることが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-33"><div role="heading" class="note-title marker" id="h-note-33" aria-level="5"><span>注記 1</span></div><p class="">キーボードまたはテンキーパッドのキープレスをエミュレートする機能は必須と考えられる。</p></div> <div class="note" role="note" id="issue-container-generatedID-34"><div role="heading" class="note-title marker" id="h-note-34" aria-level="5"><span>注記 2</span></div><p class="">この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。</p></div>',
				bodyMarkdown:
					'[シングルポインタ](https://waic.jp/translations/WCAG22/#dfn-single-pointer "シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。")を使って操作できる[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、以下の要件の少なくとも 一つを満たす。\n\n<dl><dt>ダウンイベントがない</dt><dd>機能を実行する目的でポインタの<a href="https://waic.jp/translations/WCAG22/#dfn-down-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-down-event-1" title="トリガ刺激が depressed (押し下げられた) となった時に発生するプラットフォームのイベント。">ダウンイベント</a>を使用していない。</dd><dt>中止又は元に戻すことができる</dt><dd>機能の完了には<a href="https://waic.jp/translations/WCAG22/#dfn-up-event" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-up-event-1" title="ポインタのトリガが解除されたときに生じるプラットフォームイベント。">アップイベント</a>を使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すための<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-7" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd><dt>アップイベントで反転</dt><dd>アップイベントによって、先のダウンイベントのすべての結果が反転する。</dd><dt>必要不可欠</dt><dd>ダウンイベントによって機能を完了させることが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-10" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd></dl>\n\n注記 1\n\nキーボードまたはテンキーパッドのキープレスをエミュレートする機能は必須と考えられる。\n\n注記 2\n\nこの要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				bodyPlain:
					'シングルポインタを使って操作できる機能は、以下の要件の少なくとも 一つを満たす。\n\nダウンイベントがない \n機能を実行する目的でポインタのダウンイベントを使用していない。\n\n中止又は元に戻すことができる \n機能の完了にはアップイベントを使用し、かつ機能の完了前に中止する、又は機能の完了後に元に戻すためのメカニズムが利用できる。\n\nアップイベントで反転 \nアップイベントによって、先のダウンイベントのすべての結果が反転する。\n\n必要不可欠\nダウンイベントによって機能を完了させることが必要不可欠である。\n\n注記 1キーボードまたはテンキーパッドのキープレスをエミュレートする機能は必須と考えられる。\n\n注記 2この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (ユーザエージェントや支援技術の操作に必要なアクションには適用されない)。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/pointer-cancellation.html',
			},
			'2.5.3': {
				id: '2.5.3',
				title: 'ラベルを含む名前 (name)',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-9" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>が<a href="https://waic.jp/translations/WCAG22/#dfn-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-text-8" title="プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。">テキスト</a>又は<a href="https://waic.jp/translations/WCAG22/#dfn-images-of-text" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-images-of-text-6" title="特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。">文字画像</a>を含む<a href="https://waic.jp/translations/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-2" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>を持つ場合、視覚的に提示されたテキストが<a href="https://waic.jp/translations/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-2" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name) </a>に含まれている。</p> <div class="note" role="note" id="issue-container-generatedID-35"><div role="heading" class="note-title marker" id="h-note-35" aria-level="5"><span>注記</span></div><p class="">ベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。</p></div>',
				bodyMarkdown:
					'[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")が[テキスト](https://waic.jp/translations/WCAG22/#dfn-text "プログラムによる解釈が可能な文字の並びで、自然言語で何かを表現しているもの。")又は[文字画像](https://waic.jp/translations/WCAG22/#dfn-images-of-text "特定の視覚的効果を得るために非テキスト形式 (例えば画像) でレンダリングされたテキスト。")を含む[ラベル](https://waic.jp/translations/WCAG22/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")を持つ場合、視覚的に提示されたテキストが[名前 (name)](https://waic.jp/translations/WCAG22/#dfn-name "ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。") に含まれている。\n\n注記\n\nベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。',
				bodyPlain:
					'ユーザインタフェース コンポーネントがテキスト又は文字画像を含むラベルを持つ場合、視覚的に提示されたテキストが名前 (name) に含まれている。\n\n注記ベストプラクティスは、ラベルのテキストを名前 (name) の最初に使用することである。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/label-in-name.html',
			},
			'2.5.4': {
				id: '2.5.4',
				title: '動きによる起動',
				level: 'A',
				bodyHTML:
					'<p>デバイスの動き又は利用者の動きで操作できる<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-5" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-10" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>でも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、次の場合は除く:</p> <dl> <dt>サポートされたインタフェース </dt> <dd><a href="https://waic.jp/translations/WCAG22/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="利用者の支援技術だけでなく、ブラウザ及びその他のユーザエージェントにあるアクセシビリティ機能でサポートされていること。">アクセシビリティ サポーテッド</a>なインタフェースを通じて機能を操作するために動きが用いられる。</dd> <dt>必要不可欠</dt> <dd>その機能にとって動きが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>であり、この達成基準に従うと動作を無効化してしまう。</dd> </dl>',
				bodyMarkdown:
					'デバイスの動き又は利用者の動きで操作できる[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")でも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、次の場合は除く:\n\n<dl><dt>サポートされたインタフェース</dt><dd><a href="https://waic.jp/translations/WCAG22/#dfn-accessibility-supported" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-accessibility-supported-1" title="利用者の支援技術だけでなく、ブラウザ及びその他のユーザエージェントにあるアクセシビリティ機能でサポートされていること。">アクセシビリティ サポーテッド</a>なインタフェースを通じて機能を操作するために動きが用いられる。</dd><dt>必要不可欠</dt><dd>その機能にとって動きが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-11" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>であり、この達成基準に従うと動作を無効化してしまう。</dd></dl>',
				bodyPlain:
					'デバイスの動き又は利用者の動きで操作できる機能は、ユーザインタフェース コンポーネントでも操作でき、かつ偶発的な起動を防ぐために動きへの反応を無効化することができる。ただし、次の場合は除く:\n\nサポートされたインタフェース \nアクセシビリティ サポーテッドなインタフェースを通じて機能を操作するために動きが用いられる。\n\n必要不可欠\nその機能にとって動きが必要不可欠であり、この達成基準に従うと動作を無効化してしまう。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/motion-actuation.html',
			},
			'2.5.5': {
				id: '2.5.5',
				title: 'ターゲットのサイズ (高度)',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-1" title="マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。">ポインタ入力</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-1" title="ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域">ターゲット</a>のサイズは、少なくとも 44 × 44 <a href="https://waic.jp/translations/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-4" title="約 0.0213 度の視野角。">CSS ピクセル</a>である。ただし、次の場合は除く:</p> <dl> <dt>同等</dt> <dd>ターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。</dd> <dt>インライン</dt> <dd>ターゲットが文中、又はテキストブロック内に存在する。</dd> <dt>ユーザエージェントのコントロール</dt> <dd>ターゲットのサイズがユーザエージェントによって決定され、かつコンテンツ制作者によって変更されていない。</dd> <dt>必要不可欠</dt> <dd>そのターゲットを特定の方法で提示することが、伝達される情報において<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd> </dl>',
				bodyMarkdown:
					'[ポインタ入力](https://waic.jp/translations/WCAG22/#dfn-pointer-inputs "マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。")の[ターゲット](https://waic.jp/translations/WCAG22/#dfn-targets "ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域")のサイズは、少なくとも 44 × 44 [CSS ピクセル](https://waic.jp/translations/WCAG22/#dfn-css-pixels "約 0.0213 度の視野角。")である。ただし、次の場合は除く:\n\n<dl><dt>同等</dt><dd>ターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。</dd><dt>インライン</dt><dd>ターゲットが文中、又はテキストブロック内に存在する。</dd><dt>ユーザエージェントのコントロール</dt><dd>ターゲットのサイズがユーザエージェントによって決定され、かつコンテンツ制作者によって変更されていない。</dd><dt>必要不可欠</dt><dd>そのターゲットを特定の方法で提示することが、伝達される情報において<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-12" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</dd></dl>',
				bodyPlain:
					'ポインタ入力のターゲットのサイズは、少なくとも 44 × 44 CSS ピクセルである。ただし、次の場合は除く:\n\n同等 \nターゲットと同等のリンク又はコントロールが同じページに 44 × 44 CSS ピクセル以上のサイズで存在する。\nインライン \nターゲットが文中、又はテキストブロック内に存在する。\nユーザエージェントのコントロール \nターゲットのサイズがユーザエージェントによって決定され、かつコンテンツ制作者によって変更されていない。\n必要不可欠 \nそのターゲットを特定の方法で提示することが、伝達される情報において必要不可欠である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/target-size-enhanced.html',
			},
			'2.5.6': {
				id: '2.5.6',
				title: '入力メカニズムの共存',
				level: 'AAA',
				bodyHTML:
					'<p>プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-13" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。</p>',
				bodyMarkdown:
					'プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。',
				bodyPlain:
					'プラットフォームで提供されている入力モダリティの使用を、ウェブコンテンツが制限しない。ただし、その制限が必要不可欠な場合、コンテンツのセキュリティのために必要な場合、又は利用者による設定を尊重するうえで必要な場合は例外とする。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/concurrent-input-mechanisms.html',
			},
			'2.5.7': {
				id: '2.5.7',
				title: 'ドラッグ動作',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p>操作に<a href="https://waic.jp/translations/WCAG22/#dfn-dragging-movements" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-dragging-movements-1" title="[New]">ドラッグ動作</a>を用いる全ての<a href="https://waic.jp/translations/WCAG22/#dfn-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-functionality-6" title="利用者の操作により実現可能なプロセス及び結果。">機能</a>は、ドラッグなしの<a href="https://waic.jp/translations/WCAG22/#dfn-single-pointer" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-single-pointer-3" title="シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。">シングルポインタ</a>で完遂できる。ただし、ドラッグが<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-14" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である、又はその機能が<a href="https://waic.jp/translations/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-2" title="ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。">ユーザエージェント</a>によって決定され、かつコンテンツ制作者によって変更されない場合は除く。</p> <div class="note" role="note" id="issue-container-generatedID-36"><div role="heading" class="note-title marker" id="h-note-36" aria-level="5"><span>注記</span></div><p class="">この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (すなわち、これはユーザエージェント又は支援技術の操作に必要なアクションには適用されない)。</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\n操作に[ドラッグ動作](https://waic.jp/translations/WCAG22/#dfn-dragging-movements "[New]")を用いる全ての[機能](https://waic.jp/translations/WCAG22/#dfn-functionality "利用者の操作により実現可能なプロセス及び結果。")は、ドラッグなしの[シングルポインタ](https://waic.jp/translations/WCAG22/#dfn-single-pointer "シングルタップ・クリック、ダブルタップ・クリック、長押し、軌跡ベースのジェスチャなど、画面と一つの接点で動作するポインタ入力。")で完遂できる。ただし、ドラッグが[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である、又はその機能が[ユーザエージェント](https://waic.jp/translations/WCAG22/#dfn-user-agents "ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。")によって決定され、かつコンテンツ制作者によって変更されない場合は除く。\n\n注記\n\nこの要件は、ポインタの動作を解釈するウェブコンテンツに適用される (すなわち、これはユーザエージェント又は支援技術の操作に必要なアクションには適用されない)。',
				bodyPlain:
					'[New]\n\n操作にドラッグ動作を用いる全ての機能は、ドラッグなしのシングルポインタで完遂できる。ただし、ドラッグが必要不可欠である、又はその機能がユーザエージェントによって決定され、かつコンテンツ制作者によって変更されない場合は除く。\n注記この要件は、ポインタの動作を解釈するウェブコンテンツに適用される (すなわち、これはユーザエージェント又は支援技術の操作に必要なアクションには適用されない)。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/dragging-movements.html',
			},
			'2.5.8': {
				id: '2.5.8',
				title: 'ターゲットのサイズ (最低限)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-pointer-inputs" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-pointer-inputs-2" title="マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。">ポインタ入力</a>の<a href="https://waic.jp/translations/WCAG22/#dfn-targets" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-targets-2" title="ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域">ターゲット</a>のサイズは、少なくとも 24 × 24 <a href="https://waic.jp/translations/WCAG22/#dfn-css-pixels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-css-pixels-5" title="約 0.0213 度の視野角。">CSS ピクセル</a>である。ただし、次の場合は除く:</p> <ul> <li><strong>間隔:</strong> 複数の小さなターゲット (24 × 24 CSS ピクセル未満のもの) が配置されており、それぞれの<a href="https://waic.jp/translations/WCAG22/#dfn-bounding-boxes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-bounding-boxes-1" title="[New]">境界ボックス</a>の中心に直径 24 CSS ピクセルの円があるとした場合に、その円が別のターゲットと重なる、又は別の小さなターゲットの円と重なることがない。</li> <li><strong>同等:</strong> その機能は、この達成基準を満たす同一ページ上の別のコントロールを通じて達成できる。</li> <li><strong>インライン:</strong> ターゲットが文中に存在する、又は、そのサイズがターゲット以外のテキストに対する行の高さによって制約されている。</li> <li><strong>ユーザエージェントのコントロール:</strong> ターゲットのサイズが<a href="https://waic.jp/translations/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-3" title="ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。">ユーザエージェント</a>によって決定され、かつコンテンツ制作者によって変更されていない。</li> <li><strong>必要不可欠:</strong> そのターゲットを特定の方法で<a href="https://waic.jp/translations/WCAG22/#dfn-presentation" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-presentation-4" title="利用者が知覚できる形式でコンテンツをレンダリングすること。">提示</a>することが、<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-15" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である、又は伝達される情報に対して法的に要求されている。</li> </ul> <div class="note" role="note" id="issue-container-generatedID-37"><div role="heading" class="note-title marker" id="h-note-37" aria-level="5"><span>注記 1</span></div><p class="">ターゲット内の位置に基づいて空間的に値を選択できるターゲットは、この達成基準の目的上、一つのターゲットとみなされる。例としては、スライダー、色のグラデーションを表示するカラーピッカー、カーソルを置いた位置を編集できる領域などがある。</p></div> <div class="note" role="note" id="issue-container-generatedID-38"><div role="heading" class="note-title marker" id="h-note-38" aria-level="5"><span>注記 2</span></div><p class="">インラインのターゲットの場合、行の高さはテキストのフローに対して垂直方向として解釈されるべきである。例えば、縦書きで表示される言語では、行の高さは水平方向となる。</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\n[ポインタ入力](https://waic.jp/translations/WCAG22/#dfn-pointer-inputs "マウス、ペン、タッチ接触のように、画面上の特定の座標 (又は複数の座標群) をターゲットにできるデバイスからの入力。")の[ターゲット](https://waic.jp/translations/WCAG22/#dfn-targets "ユーザインタフェース コンポーネントのインタラクティブな領域のような、ポインタアクションを受け入れるディスプレイの領域")のサイズは、少なくとも 24 × 24 [CSS ピクセル](https://waic.jp/translations/WCAG22/#dfn-css-pixels "約 0.0213 度の視野角。")である。ただし、次の場合は除く:\n\n-   **間隔:** 複数の小さなターゲット (24 × 24 CSS ピクセル未満のもの) が配置されており、それぞれの[境界ボックス](https://waic.jp/translations/WCAG22/#dfn-bounding-boxes "[New]")の中心に直径 24 CSS ピクセルの円があるとした場合に、その円が別のターゲットと重なる、又は別の小さなターゲットの円と重なることがない。\n-   **同等:** その機能は、この達成基準を満たす同一ページ上の別のコントロールを通じて達成できる。\n-   **インライン:** ターゲットが文中に存在する、又は、そのサイズがターゲット以外のテキストに対する行の高さによって制約されている。\n-   **ユーザエージェントのコントロール:** ターゲットのサイズが[ユーザエージェント](https://waic.jp/translations/WCAG22/#dfn-user-agents "ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。")によって決定され、かつコンテンツ制作者によって変更されていない。\n-   **必要不可欠:** そのターゲットを特定の方法で[提示](https://waic.jp/translations/WCAG22/#dfn-presentation "利用者が知覚できる形式でコンテンツをレンダリングすること。")することが、[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である、又は伝達される情報に対して法的に要求されている。\n\n注記 1\n\nターゲット内の位置に基づいて空間的に値を選択できるターゲットは、この達成基準の目的上、一つのターゲットとみなされる。例としては、スライダー、色のグラデーションを表示するカラーピッカー、カーソルを置いた位置を編集できる領域などがある。\n\n注記 2\n\nインラインのターゲットの場合、行の高さはテキストのフローに対して垂直方向として解釈されるべきである。例えば、縦書きで表示される言語では、行の高さは水平方向となる。',
				bodyPlain:
					'[New]\n\nポインタ入力のターゲットのサイズは、少なくとも 24 × 24 CSS ピクセルである。ただし、次の場合は除く:\n\n間隔: 複数の小さなターゲット (24 × 24 CSS ピクセル未満のもの) が配置されており、それぞれの境界ボックスの中心に直径 24 CSS ピクセルの円があるとした場合に、その円が別のターゲットと重なる、又は別の小さなターゲットの円と重なることがない。\n同等: その機能は、この達成基準を満たす同一ページ上の別のコントロールを通じて達成できる。\nインライン: ターゲットが文中に存在する、又は、そのサイズがターゲット以外のテキストに対する行の高さによって制約されている。\nユーザエージェントのコントロール: ターゲットのサイズがユーザエージェントによって決定され、かつコンテンツ制作者によって変更されていない。\n必要不可欠: そのターゲットを特定の方法で提示することが、必要不可欠である、又は伝達される情報に対して法的に要求されている。\n\n注記 1ターゲット内の位置に基づいて空間的に値を選択できるターゲットは、この達成基準の目的上、一つのターゲットとみなされる。例としては、スライダー、色のグラデーションを表示するカラーピッカー、カーソルを置いた位置を編集できる領域などがある。\n注記 2インラインのターゲットの場合、行の高さはテキストのフローに対して垂直方向として解釈されるべきである。例えば、縦書きで表示される言語では、行の高さは水平方向となる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/target-size-minimum.html',
			},
			'3.1.1': {
				id: '3.1.1',
				title: 'ページの言語',
				level: 'A',
				bodyHTML:
					'<p>それぞれの<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-7" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>のデフォルトの<a href="https://waic.jp/translations/WCAG22/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-1" title="人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。">自然言語</a>がどの言語であるか、<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-5" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。</p>',
				bodyMarkdown:
					'それぞれの[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")のデフォルトの[自然言語](https://waic.jp/translations/WCAG22/#dfn-human-language-s "人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。")がどの言語であるか、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。',
				bodyPlain:
					'それぞれのウェブページのデフォルトの自然言語がどの言語であるか、プログラムによる解釈が可能である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/language-of-page.html',
			},
			'3.1.2': {
				id: '3.1.2',
				title: '一部分の言語',
				level: 'AA',
				bodyHTML:
					'<p>コンテンツの一節、又は語句それぞれの<a href="https://waic.jp/translations/WCAG22/#dfn-human-language-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-human-language-s-2" title="人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。">自然言語</a>がどの言語であるか、<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-6" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。</p>',
				bodyMarkdown:
					'コンテンツの一節、又は語句それぞれの[自然言語](https://waic.jp/translations/WCAG22/#dfn-human-language-s "人間とコミュニケーションをとるために話される、書かれる、又は (視覚的もしくは触覚的な手段で) 手話にされる言語。")がどの言語であるか、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。',
				bodyPlain:
					'コンテンツの一節、又は語句それぞれの自然言語がどの言語であるか、プログラムによる解釈が可能である。ただし、固有名詞、技術用語、言語が不明な語句、及びすぐ前後にあるテキストの言語の一部になっている単語又は語句は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/language-of-parts.html',
			},
			'3.1.3': {
				id: '3.1.3',
				title: '一般的ではない用語',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-idioms" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-idioms-1" title="個々の単語の意味からはその意味を推測できず、特定の単語を変えると意味が通じなくなる言い回し。">慣用句</a>及び<a href="https://waic.jp/translations/WCAG22/#dfn-jargon" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-jargon-1" title="特定の分野の人々が特定の用法で用いる単語。">業界用語</a>を含めて、一般的ではない、又は<a href="https://waic.jp/translations/WCAG22/#dfn-used-in-an-unusual-or-restricted-way" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-used-in-an-unusual-or-restricted-way-1" title="そのコンテンツを正しく理解するために、どの定義で使われているのかを利用者が正確に知る必要があるような使われ方をしている言葉。">限定された用法で使われている</a>単語、又は語句の、明確な定義を特定する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-8" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[慣用句](https://waic.jp/translations/WCAG22/#dfn-idioms "個々の単語の意味からはその意味を推測できず、特定の単語を変えると意味が通じなくなる言い回し。")及び[業界用語](https://waic.jp/translations/WCAG22/#dfn-jargon "特定の分野の人々が特定の用法で用いる単語。")を含めて、一般的ではない、又は[限定された用法で使われている](https://waic.jp/translations/WCAG22/#dfn-used-in-an-unusual-or-restricted-way "そのコンテンツを正しく理解するために、どの定義で使われているのかを利用者が正確に知る必要があるような使われ方をしている言葉。")単語、又は語句の、明確な定義を特定する[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'慣用句及び業界用語を含めて、一般的ではない、又は限定された用法で使われている単語、又は語句の、明確な定義を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/unusual-words.html',
			},
			'3.1.4': {
				id: '3.1.4',
				title: '略語',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-9" title="結果を得るためのプロセス又は手法。">略語</a>の元の語、又は意味を特定する<a href="https://waic.jp/translations/WCAG22/#dfn-abbreviations" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-abbreviations-1" title="単語、語句、又は名称の短縮形で、その略語が言語の一部になっていないもの。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[略語](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")の元の語、又は意味を特定する[メカニズム](https://waic.jp/translations/WCAG22/#dfn-abbreviations "単語、語句、又は名称の短縮形で、その略語が言語の一部になっていないもの。")が利用できる。',
				bodyPlain: '略語の元の語、又は意味を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/abbreviations.html',
			},
			'3.1.5': {
				id: '3.1.5',
				title: '読解レベル',
				level: 'AAA',
				bodyHTML:
					'<p>固有名詞や題名を取り除いた状態で、テキストが<a href="https://waic.jp/translations/WCAG22/#dfn-lower-secondary-education-level" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-lower-secondary-education-level-1" title="6 年間の学校教育卒業の後に始まり、初等教育の開始から 9 年後に終わる、2 年、又は 3 年の教育期間。">前期中等教育レベル</a>を超えた読解力を必要とする場合は、<a href="https://waic.jp/translations/WCAG22/#dfn-supplementary-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-supplementary-content-1" title="元のコンテンツを説明、又はより明確にするために付加されたコンテンツ。">補足コンテンツ</a>又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。</p>',
				bodyMarkdown:
					'固有名詞や題名を取り除いた状態で、テキストが[前期中等教育レベル](https://waic.jp/translations/WCAG22/#dfn-lower-secondary-education-level "6 年間の学校教育卒業の後に始まり、初等教育の開始から 9 年後に終わる、2 年、又は 3 年の教育期間。")を超えた読解力を必要とする場合は、[補足コンテンツ](https://waic.jp/translations/WCAG22/#dfn-supplementary-content "元のコンテンツを説明、又はより明確にするために付加されたコンテンツ。")又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。',
				bodyPlain:
					'固有名詞や題名を取り除いた状態で、テキストが前期中等教育レベルを超えた読解力を必要とする場合は、補足コンテンツ又は前期中等教育レベルを超えた読解力を必要としない版が利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/reading-level.html',
			},
			'3.1.6': {
				id: '3.1.6',
				title: '発音',
				level: 'AAA',
				bodyHTML:
					'<p>文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-10" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定する[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'文脈において、発音が分からないと単語の意味が不明瞭になる場合、その単語の明確な発音を特定するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/pronunciation.html',
			},
			'3.2.1': {
				id: '3.2.1',
				title: 'フォーカス時',
				level: 'A',
				bodyHTML:
					'<p>いずれの<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-11" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインターフェイス コンポーネント</a>も、フォーカスを受け取ったときに<a href="https://waic.jp/translations/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-1" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>を引き起こさない。</p>',
				bodyMarkdown:
					'いずれの[ユーザインターフェイス コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")も、フォーカスを受け取ったときに[コンテキストの変化](https://waic.jp/translations/WCAG22/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")を引き起こさない。',
				bodyPlain:
					'いずれのユーザインターフェイス コンポーネントも、フォーカスを受け取ったときにコンテキストの変化を引き起こさない。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/on-focus.html',
			},
			'3.2.2': {
				id: '3.2.2',
				title: '入力時',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-12" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a>の設定を変更することが、<a href="https://waic.jp/translations/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-2" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。</p>',
				bodyMarkdown:
					'[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。")の設定を変更することが、[コンテキストの変化](https://waic.jp/translations/WCAG22/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。',
				bodyPlain:
					'ユーザインタフェース コンポーネントの設定を変更することが、コンテキストの変化を自動的に引き起こさない。ただし、利用者が使用する前にその挙動を知らせてある場合を除く。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/on-input.html',
			},
			'3.2.3': {
				id: '3.2.3',
				title: '一貫したナビゲーション',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-3" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中にある複数の<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-8" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに<a href="https://waic.jp/translations/WCAG22/#dfn-same-relative-order" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-relative-order-1" title="他の項目との相対位置が同じ。">相対的に同じ順序</a>で出現する。ただし、利用者が変更した場合は除く。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中にある複数の[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに[相対的に同じ順序](https://waic.jp/translations/WCAG22/#dfn-same-relative-order "他の項目との相対位置が同じ。")で出現する。ただし、利用者が変更した場合は除く。',
				bodyPlain:
					'ウェブページ一式の中にある複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現する。ただし、利用者が変更した場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/consistent-navigation.html',
			},
			'3.2.4': {
				id: '3.2.4',
				title: '一貫した識別性',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-4" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中で<a href="https://waic.jp/translations/WCAG22/#dfn-same-functionality" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-same-functionality-1" title="使うと同じ結果が得られること。">同じ機能</a>を有するコンポーネントは、一貫して識別できる。</p>',
				bodyMarkdown:
					'[ウェブページ一式](https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中で[同じ機能](https://waic.jp/translations/WCAG22/#dfn-same-functionality "使うと同じ結果が得られること。")を有するコンポーネントは、一貫して識別できる。',
				bodyPlain:
					'ウェブページ一式の中で同じ機能を有するコンポーネントは、一貫して識別できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/consistent-identification.html',
			},
			'3.2.5': {
				id: '3.2.5',
				title: '要求による変化',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-change-of-context" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-change-of-context-3" title="大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。">コンテキストの変化</a>は利用者の要求によってだけ生じるか、又は、そのような変化を止める<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-11" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</p>',
				bodyMarkdown:
					'[コンテキストの変化](https://waic.jp/translations/WCAG22/#dfn-change-of-context "大きな変化で、利用者が気づかないと、ウェブページ全体を一度に見ることのできない利用者を混乱させる恐れのあるもの。")は利用者の要求によってだけ生じるか、又は、そのような変化を止める[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")が利用できる。',
				bodyPlain:
					'コンテキストの変化は利用者の要求によってだけ生じるか、又は、そのような変化を止めるメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/change-on-request.html',
			},
			'3.2.6': {
				id: '3.2.6',
				title: '一貫したヘルプ',
				level: 'A',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-9" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>が次のヘルプの<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-12" title="結果を得るためのプロセス又は手法。">メカニズム</a>のいずれかを含み、かつ、それらのメカニズムが<a href="https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-set-of-web-pages-5" title="共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。">ウェブページ一式</a>の中にある複数のウェブページで繰り返されている場合、他のページコンテンツに対して相対的に同じ順序で出現する。ただし、変更が利用者によって行われた場合は除く。</p> <ul> <li>人間への連絡先</li> <li>人間への連絡メカニズム</li> <li>自己解決のためのオプション</li> <li>完全に自動化された連絡メカニズム</li> </ul> <div class="note" role="note" id="issue-container-generatedID-39"><div role="heading" class="note-title marker" id="h-note-39" aria-level="5"><span>注記 1</span></div><p class="">ヘルプのメカニズムは、ページ上で直接提供されることもあれば、その情報を含む別のページへの直接リンクを経由して提供されることもある。</p></div> <div class="note" role="note" id="issue-container-generatedID-40"><div role="heading" class="note-title marker" id="h-note-40" aria-level="5"><span>注記 2</span></div><p class="">この達成基準における「他のページコンテンツに対して相対的に同じ順序」は、ページが線形化されたときのコンテンツの並べ方と考えることができる。ヘルプのメカニズムの視覚的な位置は、ページの同じバリエーション (例えば CSS のブレークポイント) に対してページ間で一貫している可能性が高い。利用者は、ページのズーム、ページの向きを変えるなどの変更を発生させることができ、これはページのバリエーションが変化するきっかけになる可能性がある。この達成基準で扱うのは、同じバリエーション (例えば、同じズームレベル、向き) で表示されるページ同士の間における、相対的な順序である。</p></div>',
				bodyMarkdown:
					'\\[New\\]\n\n[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")が次のヘルプの[メカニズム](https://waic.jp/translations/WCAG22/#dfn-mechanism "結果を得るためのプロセス又は手法。")のいずれかを含み、かつ、それらのメカニズムが[ウェブページ一式](https://waic.jp/translations/WCAG22/#dfn-set-of-web-pages "共通の目的を共有し、同じコンテンツ制作者、グループ、又は組織により制作されたウェブページの集合。")の中にある複数のウェブページで繰り返されている場合、他のページコンテンツに対して相対的に同じ順序で出現する。ただし、変更が利用者によって行われた場合は除く。\n\n-   人間への連絡先\n-   人間への連絡メカニズム\n-   自己解決のためのオプション\n-   完全に自動化された連絡メカニズム\n\n注記 1\n\nヘルプのメカニズムは、ページ上で直接提供されることもあれば、その情報を含む別のページへの直接リンクを経由して提供されることもある。\n\n注記 2\n\nこの達成基準における「他のページコンテンツに対して相対的に同じ順序」は、ページが線形化されたときのコンテンツの並べ方と考えることができる。ヘルプのメカニズムの視覚的な位置は、ページの同じバリエーション (例えば CSS のブレークポイント) に対してページ間で一貫している可能性が高い。利用者は、ページのズーム、ページの向きを変えるなどの変更を発生させることができ、これはページのバリエーションが変化するきっかけになる可能性がある。この達成基準で扱うのは、同じバリエーション (例えば、同じズームレベル、向き) で表示されるページ同士の間における、相対的な順序である。',
				bodyPlain:
					'[New]\n\nウェブページが次のヘルプのメカニズムのいずれかを含み、かつ、それらのメカニズムがウェブページ一式の中にある複数のウェブページで繰り返されている場合、他のページコンテンツに対して相対的に同じ順序で出現する。ただし、変更が利用者によって行われた場合は除く。\n\n人間への連絡先\n人間への連絡メカニズム\n自己解決のためのオプション\n完全に自動化された連絡メカニズム\n\n注記 1ヘルプのメカニズムは、ページ上で直接提供されることもあれば、その情報を含む別のページへの直接リンクを経由して提供されることもある。\n注記 2この達成基準における「他のページコンテンツに対して相対的に同じ順序」は、ページが線形化されたときのコンテンツの並べ方と考えることができる。ヘルプのメカニズムの視覚的な位置は、ページの同じバリエーション (例えば CSS のブレークポイント) に対してページ間で一貫している可能性が高い。利用者は、ページのズーム、ページの向きを変えるなどの変更を発生させることができ、これはページのバリエーションが変化するきっかけになる可能性がある。この達成基準で扱うのは、同じバリエーション (例えば、同じズームレベル、向き) で表示されるページ同士の間における、相対的な順序である。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/consistent-help.html',
			},
			'3.3.1': {
				id: '3.3.1',
				title: 'エラーの特定',
				level: 'A',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-2" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。</p>',
				bodyMarkdown:
					'[入力エラー](https://waic.jp/translations/WCAG22/#dfn-input-error "利用者が入力した情報で、受け付けられないもの。")が自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。',
				bodyPlain:
					'入力エラーが自動的に検出された場合は、エラーとなっている箇所が特定され、そのエラーが利用者にテキストで説明される。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/error-identification.html',
			},
			'3.3.2': {
				id: '3.3.2',
				title: 'ラベル又は説明',
				level: 'A',
				bodyHTML:
					'<p>コンテンツが利用者の入力を要求する場合は、<a href="https://waic.jp/translations/WCAG22/#dfn-labels" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-labels-3" title="テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。">ラベル</a>又は説明文が提供されている。</p>',
				bodyMarkdown:
					'コンテンツが利用者の入力を要求する場合は、[ラベル](https://waic.jp/translations/WCAG22/#dfn-labels "テキスト、又はテキストによる代替を伴うコンポーネントで、ウェブコンテンツ内のコンポーネントを識別するために利用者に提示されているもの。")又は説明文が提供されている。',
				bodyPlain:
					'コンテンツが利用者の入力を要求する場合は、ラベル又は説明文が提供されている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/labels-or-instructions.html',
			},
			'3.3.3': {
				id: '3.3.3',
				title: 'エラー修正の提案',
				level: 'AA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-input-error" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-input-error-3" title="利用者が入力した情報で、受け付けられないもの。">入力エラー</a>が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。</p>',
				bodyMarkdown:
					'[入力エラー](https://waic.jp/translations/WCAG22/#dfn-input-error "利用者が入力した情報で、受け付けられないもの。")が自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。',
				bodyPlain:
					'入力エラーが自動的に検出され、修正方法を提案できる場合、その提案が利用者に提示される。ただし、セキュリティ又はコンテンツの目的を損なう場合は除く。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/error-suggestion.html',
			},
			'3.3.4': {
				id: '3.3.4',
				title: '誤り防止 (法的、金融、データ)',
				level: 'AA',
				bodyHTML:
					'<p>利用者にとって<a href="https://waic.jp/translations/WCAG22/#dfn-legal-commitments" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-legal-commitments-1" title="法的に拘束力のある義務あるいは利益が発生する取引。">法律行為</a>もしくは金融取引が生じる、<a href="https://waic.jp/translations/WCAG22/#dfn-user-controllable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-controllable-1" title="利用者によってアクセスされることを意図したデータ。">利用者が制御可能な</a>データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-10" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>取消</dt><dd>送信を取り消すことができる。</dd> <dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd> <dt>確認 </dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd> </dl>',
				bodyMarkdown:
					'利用者にとって[法律行為](https://waic.jp/translations/WCAG22/#dfn-legal-commitments "法的に拘束力のある義務あるいは利益が発生する取引。")もしくは金融取引が生じる、[利用者が制御可能な](https://waic.jp/translations/WCAG22/#dfn-user-controllable "利用者によってアクセスされることを意図したデータ。")データストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信する[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")では、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>取消</dt><dd>送信を取り消すことができる。</dd><dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd><dt>確認</dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd></dl>',
				bodyPlain:
					'利用者にとって法律行為もしくは金融取引が生じる、利用者が制御可能なデータストレージシステム上のデータを変更もしくは削除する、又は利用者が試験の解答を送信するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている\n\n取消送信を取り消すことができる。\nチェック利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/error-prevention-legal-financial-data.html',
			},
			'3.3.5': {
				id: '3.3.5',
				title: 'ヘルプ',
				level: 'AAA',
				bodyHTML:
					'<p><a href="https://waic.jp/translations/WCAG22/#dfn-context-sensitive-help" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-context-sensitive-help-1" title="そのとき実行されている機能に関する情報を提供するヘルプのテキスト。">コンテキストに応じたヘルプ</a>が利用できる。</p>',
				bodyMarkdown:
					'[コンテキストに応じたヘルプ](https://waic.jp/translations/WCAG22/#dfn-context-sensitive-help "そのとき実行されている機能に関する情報を提供するヘルプのテキスト。")が利用できる。',
				bodyPlain: 'コンテキストに応じたヘルプが利用できる。',
				understanding: 'https://waic.jp/translations/WCAG22/Understanding/help.html',
			},
			'3.3.6': {
				id: '3.3.6',
				title: '誤り防止 (すべて)',
				level: 'AAA',
				bodyHTML:
					'<p>利用者に情報の送信を要求する<a href="https://waic.jp/translations/WCAG22/#dfn-web-page-s" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-web-page-s-11" title="単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。">ウェブページ</a>では、次に挙げる事項のうち、少なくとも一つを満たしている</p> <dl> <dt>取消</dt><dd>送信を取り消すことができる。</dd> <dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd> <dt>確認 </dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd> </dl>',
				bodyMarkdown:
					'利用者に情報の送信を要求する[ウェブページ](https://waic.jp/translations/WCAG22/#dfn-web-page-s "単一の URI から HTTP で得た埋め込まれていないリソースに加え、レンダリングに使われる、又はユーザエージェントがこのリソースと一緒にレンダリングすることを意図しているその他のあらゆるリソースを合わせたもの。")では、次に挙げる事項のうち、少なくとも一つを満たしている\n\n<dl><dt>取消</dt><dd>送信を取り消すことができる。</dd><dt>チェック</dt><dd>利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。</dd><dt>確認</dt><dd>送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。</dd></dl>',
				bodyPlain:
					'利用者に情報の送信を要求するウェブページでは、次に挙げる事項のうち、少なくとも一つを満たしている\n\n取消送信を取り消すことができる。\nチェック利用者が入力したデータの入力エラーがチェックされ、利用者には修正する機会が提供される。\n確認 送信を完了する前に、利用者が情報の見直し、確認及び修正をするメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/error-prevention-all.html',
			},
			'3.3.7': {
				id: '3.3.7',
				title: '冗長な入力項目',
				level: 'A',
				bodyHTML:
					'<p class="change">[New]</p> <p>以前に利用者によって入力された、又は利用者に対して提供された情報であって、同一の<a href="https://waic.jp/translations/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-2" title="ある活動を完了させるために必要な利用者の一連の動作。">プロセス</a>において再入力する必要がある情報は、次のいずれかである。</p> <ul> <li>自動入力される。又は、</li> <li>利用者が選択可能である。</li> </ul> <p>ただし、次の場合は除く:</p> <ul> <li>情報の再入力が<a href="https://waic.jp/translations/WCAG22/#dfn-essential" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-essential-16" title="もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。">必要不可欠</a>である。</li> <li>その情報がコンテンツのセキュリティを確保するために必要である。又は、</li> <li>以前に入力された情報が無効になっている。</li> </ul>',
				bodyMarkdown:
					'\\[New\\]\n\n以前に利用者によって入力された、又は利用者に対して提供された情報であって、同一の[プロセス](https://waic.jp/translations/WCAG22/#dfn-processes "ある活動を完了させるために必要な利用者の一連の動作。")において再入力する必要がある情報は、次のいずれかである。\n\n-   自動入力される。又は、\n-   利用者が選択可能である。\n\nただし、次の場合は除く:\n\n-   情報の再入力が[必要不可欠](https://waic.jp/translations/WCAG22/#dfn-essential "もし取り除いてしまうと、コンテンツの情報又は機能を根本的に変えてしまい、かつ、適合する他の方法では情報及び機能を実現できない。")である。\n-   その情報がコンテンツのセキュリティを確保するために必要である。又は、\n-   以前に入力された情報が無効になっている。',
				bodyPlain:
					'[New]\n\n以前に利用者によって入力された、又は利用者に対して提供された情報であって、同一のプロセスにおいて再入力する必要がある情報は、次のいずれかである。\n\n自動入力される。又は、\n利用者が選択可能である。\n\nただし、次の場合は除く: \n\n情報の再入力が必要不可欠である。\nその情報がコンテンツのセキュリティを確保するために必要である。又は、\n以前に入力された情報が無効になっている。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/redundant-entry.html',
			},
			'3.3.8': {
				id: '3.3.8',
				title: 'アクセシブルな認証 (最低限)',
				level: 'AA',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-cognitive-function-test" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-cognitive-function-test-1" title="[New]">認知機能テスト</a> (パスワードを記憶する、パズルを解く、など) は、認証<a href="https://waic.jp/translations/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-3" title="ある活動を完了させるために必要な利用者の一連の動作。">プロセス</a>のどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。</p> <dl> <dt>代替手段</dt> <dd>認知機能テストに依存しない別の認証方法がある。</dd> <dt>メカニズム</dt> <dd>認知機能テストを利用者が完遂できるように支援する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-13" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd> <dt>物体の認識</dt> <dd>認知機能テストは、物体を認識させるものである。</dd> <dt>個人特有のコンテンツ</dt> <dd>認知機能テストは、その利用者本人がウェブサイトに提供した<a href="https://waic.jp/translations/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-2" title="プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。">非テキストコンテンツ</a>を識別させるものである。</dd> </dl> <div class="note" role="note" id="issue-container-generatedID-41"><div role="heading" class="note-title marker" id="h-note-41" aria-level="5"><span>注記 1</span></div><p class="">「物体の認識」及び「個人特有のコンテンツ」は、画像、映像、又は音声によって表現される場合がある。</p></div> <div class="note" role="note" id="issue-container-generatedID-42"><div role="heading" class="note-title marker" id="h-note-42" aria-level="5"><span>注記 2</span></div><div class="">この達成基準を満たすメカニズムの例としては、次が挙げられる。<ol> <li>パスワードマネージャーによるパスワード入力の支援によって、記憶の必要性を軽減する。</li> <li>コピー＆ペーストによって、再度のタイピングに伴う認知負荷を軽減する。</li> </ol> </div></div>',
				bodyMarkdown:
					'\\[New\\]\n\n[認知機能テスト](https://waic.jp/translations/WCAG22/#dfn-cognitive-function-test "[New]") (パスワードを記憶する、パズルを解く、など) は、認証[プロセス](https://waic.jp/translations/WCAG22/#dfn-processes "ある活動を完了させるために必要な利用者の一連の動作。")のどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。\n\n<dl><dt>代替手段</dt><dd>認知機能テストに依存しない別の認証方法がある。</dd><dt>メカニズム</dt><dd>認知機能テストを利用者が完遂できるように支援する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-13" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd><dt>物体の認識</dt><dd>認知機能テストは、物体を認識させるものである。</dd><dt>個人特有のコンテンツ</dt><dd>認知機能テストは、その利用者本人がウェブサイトに提供した<a href="https://waic.jp/translations/WCAG22/#dfn-non-text-content" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-non-text-content-2" title="プログラムによる解釈が可能な文字の並びではないコンテンツ、又は文字の並びが自然言語においても何をも表現していないコンテンツ。">非テキストコンテンツ</a>を識別させるものである。</dd></dl>\n\n注記 1\n\n「物体の認識」及び「個人特有のコンテンツ」は、画像、映像、又は音声によって表現される場合がある。\n\n注記 2\n\nこの達成基準を満たすメカニズムの例としては、次が挙げられる。\n\n1.  パスワードマネージャーによるパスワード入力の支援によって、記憶の必要性を軽減する。\n2.  コピー＆ペーストによって、再度のタイピングに伴う認知負荷を軽減する。',
				bodyPlain:
					'[New]\n\n認知機能テスト (パスワードを記憶する、パズルを解く、など) は、認証プロセスのどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。 \n\n代替手段\n認知機能テストに依存しない別の認証方法がある。\nメカニズム\n認知機能テストを利用者が完遂できるように支援するメカニズムが利用できる。\n物体の認識\n認知機能テストは、物体を認識させるものである。\n個人特有のコンテンツ\n認知機能テストは、その利用者本人がウェブサイトに提供した非テキストコンテンツを識別させるものである。\n\n注記 1「物体の認識」及び「個人特有のコンテンツ」は、画像、映像、又は音声によって表現される場合がある。\n注記 2この達成基準を満たすメカニズムの例としては、次が挙げられる。\nパスワードマネージャーによるパスワード入力の支援によって、記憶の必要性を軽減する。\nコピー＆ペーストによって、再度のタイピングに伴う認知負荷を軽減する。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/accessible-authentication-minimum.html',
			},
			'3.3.9': {
				id: '3.3.9',
				title: 'アクセシブルな認証 (高度)',
				level: 'AAA',
				bodyHTML:
					'<p class="change">[New]</p> <p><a href="https://waic.jp/translations/WCAG22/#dfn-cognitive-function-test" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-cognitive-function-test-2" title="[New]">認知機能テスト</a> (パスワードを記憶する、パズルを解く、など) は、認証<a href="https://waic.jp/translations/WCAG22/#dfn-processes" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-processes-4" title="ある活動を完了させるために必要な利用者の一連の動作。">プロセス</a>のどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。</p> <dl> <dt>代替手段</dt> <dd>認知機能テストに依存しない別の認証方法がある。</dd> <dt>メカニズム</dt> <dd>認知機能テストを利用者が完遂できるように支援する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-14" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd> </dl>',
				bodyMarkdown:
					'\\[New\\]\n\n[認知機能テスト](https://waic.jp/translations/WCAG22/#dfn-cognitive-function-test "[New]") (パスワードを記憶する、パズルを解く、など) は、認証[プロセス](https://waic.jp/translations/WCAG22/#dfn-processes "ある活動を完了させるために必要な利用者の一連の動作。")のどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。\n\n<dl><dt>代替手段</dt><dd>認知機能テストに依存しない別の認証方法がある。</dd><dt>メカニズム</dt><dd>認知機能テストを利用者が完遂できるように支援する<a href="https://waic.jp/translations/WCAG22/#dfn-mechanism" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-mechanism-14" title="結果を得るためのプロセス又は手法。">メカニズム</a>が利用できる。</dd></dl>',
				bodyPlain:
					'[New]\n\n認知機能テスト (パスワードを記憶する、パズルを解く、など) は、認証プロセスのどのステップにおいても要求されない。ただし、そのステップが次の少なくとも一つを提供する場合は除く。 \n\n代替手段\n認知機能テストに依存しない別の認証方法がある。\nメカニズム\n認知機能テストを利用者が完遂できるように支援するメカニズムが利用できる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/accessible-authentication-enhanced.html',
			},
			'4.1.2': {
				id: '4.1.2',
				title: '名前 (name)・役割 (role)・値 (value)',
				level: 'A',
				bodyHTML:
					'<p>すべての<a href="https://waic.jp/translations/WCAG22/#dfn-user-interface-components" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-interface-components-13" title="コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。">ユーザインタフェース コンポーネント</a> (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、<a href="https://waic.jp/translations/WCAG22/#dfn-name" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-name-3" title="ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。">名前 (name)</a> 及び<a href="https://waic.jp/translations/WCAG22/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-1" title="ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。">役割 (role)</a> は、<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-7" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>である。又、状態、プロパティ、利用者が設定可能な値は<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-set" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-set-1" title="支援技術を含むユーザエージェントがサポートしている手法を用いて、ソフトウェアによって設定されること。">プログラムによる設定</a>が可能である。そして、<a href="https://waic.jp/translations/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-3" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>を含む<a href="https://waic.jp/translations/WCAG22/#dfn-user-agents" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-user-agents-4" title="ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。">ユーザエージェント</a>が、これらの項目に対する変更通知を利用できる。</p> <div class="note" role="note" id="issue-container-generatedID-44"><div role="heading" class="note-title marker" id="h-note-44" aria-level="5"><span>注記</span></div><p class="">この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。</p></div>',
				bodyMarkdown:
					'すべての[ユーザインタフェース コンポーネント](https://waic.jp/translations/WCAG22/#dfn-user-interface-components "コンテンツの一部分で、特定の機能を実現するための単一のコントロールとして利用者が知覚するもの。") (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、[名前 (name)](https://waic.jp/translations/WCAG22/#dfn-name "ソフトウェアが、ウェブコンテンツのコンポーネントを利用者に識別させることができるテキスト。") 及び[役割 (role)](https://waic.jp/translations/WCAG22/#dfn-role "ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。") は、[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")である。又、状態、プロパティ、利用者が設定可能な値は[プログラムによる設定](https://waic.jp/translations/WCAG22/#dfn-programmatically-set "支援技術を含むユーザエージェントがサポートしている手法を用いて、ソフトウェアによって設定されること。")が可能である。そして、[支援技術](https://waic.jp/translations/WCAG22/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")を含む[ユーザエージェント](https://waic.jp/translations/WCAG22/#dfn-user-agents "ウェブコンテンツを取得して利用者に提示するあらゆるソフトウェア。")が、これらの項目に対する変更通知を利用できる。\n\n注記\n\nこの達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				bodyPlain:
					'すべてのユーザインタフェース コンポーネント (フォームを構成する要素、リンク、スクリプトが生成するコンポーネントなど) では、名前 (name) 及び役割 (role) は、プログラムによる解釈が可能である。又、状態、プロパティ、利用者が設定可能な値はプログラムによる設定が可能である。そして、支援技術を含むユーザエージェントが、これらの項目に対する変更通知を利用できる。\n\n注記この達成基準は、主に独自のユーザインタフェース コンポーネントを開発、又はスクリプトで実装するコンテンツ制作者に向けたものである。例えば、標準的な HTML のコントロールを仕様に沿って使用していれば、既にこの達成基準を満たしていることになる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/name-role-value.html',
			},
			'4.1.3': {
				id: '4.1.3',
				title: 'ステータスメッセージ',
				level: 'AA',
				bodyHTML:
					'<p>マークアップ言語を使って実装されたコンテンツでは、<a href="https://waic.jp/translations/WCAG22/#dfn-status-messages" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-status-messages-1" title="コンテンツ内の変化であって、コンテキストの変化ではなく、かつ、アクションの成否もしくは結果、アプリケーションの処理待ち状態、プロセスの進捗、又はエラーの存在に関する情報を利用者に提供するもの。">ステータスメッセージ</a>は、<a href="https://waic.jp/translations/WCAG22/#dfn-role" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-role-2" title="ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。">役割 (role)</a> 又はプロパティを通して<a href="https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-programmatically-determinable-8" title="支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。">プログラムによる解釈が可能</a>であり、フォーカスを受けとらなくても<a href="https://waic.jp/translations/WCAG22/#dfn-assistive-technologies" class="internalDFN" data-link-type="dfn" id="ref-for-dfn-assistive-technologies-4" title="障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。">支援技術</a>によって利用者に提示することができる。</p>',
				bodyMarkdown:
					'マークアップ言語を使って実装されたコンテンツでは、[ステータスメッセージ](https://waic.jp/translations/WCAG22/#dfn-status-messages "コンテンツ内の変化であって、コンテキストの変化ではなく、かつ、アクションの成否もしくは結果、アプリケーションの処理待ち状態、プロセスの進捗、又はエラーの存在に関する情報を利用者に提供するもの。")は、[役割 (role)](https://waic.jp/translations/WCAG22/#dfn-role "ソフトウェアがウェブコンテンツ内のコンポーネントの機能の識別を可能にするためのテキスト又は番号。") 又はプロパティを通して[プログラムによる解釈が可能](https://waic.jp/translations/WCAG22/#dfn-programmatically-determinable "支援技術を含む様々なユーザエージェントが抽出でき、利用者に様々な感覚モダリティで提示できるような形のデータがコンテンツ制作者によって提供されたとき、そのデータがソフトウェアによって解釈されること。")であり、フォーカスを受けとらなくても[支援技術](https://waic.jp/translations/WCAG22/#dfn-assistive-technologies "障害のある利用者の要件を満たすために、主流のユーザエージェントが提供する機能を超えた機能を提供するような、ユーザエージェントとして動作する、又は主流のユーザエージェントと共に動作するハードウェア及び／又はソフトウェア。")によって利用者に提示することができる。',
				bodyPlain:
					'マークアップ言語を使って実装されたコンテンツでは、ステータスメッセージは、役割 (role) 又はプロパティを通してプログラムによる解釈が可能であり、フォーカスを受けとらなくても支援技術によって利用者に提示することができる。',
				understanding:
					'https://waic.jp/translations/WCAG22/Understanding/status-messages.html',
			},
		},
	},
} as const;
