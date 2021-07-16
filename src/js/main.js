
import tippy from 'tippy.js';
import bannerSlider from './modules/bannerSlider';
import randomNum from './modules/randomNum';
import safetySlider from './modules/safetySlider';
import aboutCollapse from './modules/aboutCollapse';
import feedbackThumbsSlider from './modules/feedbackThumbsSlider';
import feedbackSlider from './modules/feedbackSlider';
import Modal from './modules/modal';
import tape from './modules/tape';
import validate from './modules/maskAndValidate';




document.addEventListener('DOMContentLoaded', () => {
    tippy('.circle', {
        theme: 'tomato',
    });
    bannerSlider();
    randomNum();
    safetySlider();
    aboutCollapse();
    feedbackThumbsSlider();
    feedbackSlider();
    const modal = new Modal();
    tape();
    validate();
})





