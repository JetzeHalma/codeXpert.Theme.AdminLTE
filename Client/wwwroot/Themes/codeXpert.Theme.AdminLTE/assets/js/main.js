/**
* Template Name: main
* Template URL:
* Updated: Apr 20 2024 with Bootstrap v5.3.3
* Author: 
* License:
*/

function initializeTheme() {
    "use strict";

    /**
    * Apply .scrolled class to the body as the page is scrolled down
    */
    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 20 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
    document.addEventListener('scroll', toggleScrolled);
    toggleScrolled();

    /**
    * Scroll top button
    */
    let scrollTop = document.querySelector('.back-to-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();

    /**
    * Easy selector helper function
    */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Sidebar toggle
     */
    if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function (e) {
            select('.sidebar').classList.toggle('collapse')
        })
    }

    /**
    * Preloader
    */
    let preloader = select('#preloader');
    if (preloader) {
        preloader.remove()
    }

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
    * Animation on scroll function and init
    */
    function aosInit() {
        AOS.init({
            duration: 600,
            once: true,
            mirror: false
        });
    }

    aosInit();

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
            initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
            });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
            filters.addEventListener('click', function () {
                isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                this.classList.add('filter-active');
                initIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                if (typeof aosInit === 'function') {
                    aosInit();
                }
            }, false);
        });

    });

    /**
     * Initiate tooltips
     */
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    /* popover  */
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

    /**
    * Bootstrap carousel
    */
    function SetCarousel() {
        var myCarousel = document.getElementById("hero-carousel");
        if (myCarousel) {
            var carousel = new bootstrap.Carousel(myCarousel);
            carousel.cycle(); // NOTE: this will cause the carousel to start immediately
        }
    }

    SetCarousel();

    /**
     * Initiate Datatables
     */
    const datatables = select('.datatable', true)
    datatables.forEach(datatable => {
        new simpleDatatables.DataTable(datatable, {
            perPageSelect: [5, 10, 15, ["All", -1]],
            columns: [{
                select: 2,
                sortSequence: ["desc", "asc"]
            },
            {
                select: 3,
                sortSequence: ["desc"]
            },
            {
                select: 4,
                cellClass: "green",
                headerClass: "red"
            }
            ]
        });
    });

    /**
    * AdminLTE
    */
    const domContentLoadedCallbacks = [];
    const onDOMContentLoaded = (callback) => {
        if (document.readyState === 'loading') {
            // add listener on the first call when the document is in loading state
            if (!domContentLoadedCallbacks.length) {
                document.addEventListener('DOMContentLoaded', () => {
                    for (const callback of domContentLoadedCallbacks) {
                        callback();
                    }
                });
            }
            domContentLoadedCallbacks.push(callback);
        }
        else {
            callback();
        }
    };
    /* SLIDE UP */
    const slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = `${duration}ms`;
        target.style.boxSizing = 'border-box';
        target.style.height = `${target.offsetHeight}px`;
        target.style.overflow = 'hidden';
        window.setTimeout(() => {
            target.style.height = '0';
            target.style.paddingTop = '0';
            target.style.paddingBottom = '0';
            target.style.marginTop = '0';
            target.style.marginBottom = '0';
        }, 1);
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };
    /* SLIDE DOWN */
    const slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let { display } = window.getComputedStyle(target);
        if (display === 'none') {
            display = 'block';
        }
        target.style.display = display;
        const height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = '0';
        target.style.paddingTop = '0';
        target.style.paddingBottom = '0';
        target.style.marginTop = '0';
        target.style.marginBottom = '0';
        window.setTimeout(() => {
            target.style.boxSizing = 'border-box';
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = `${duration}ms`;
            target.style.height = `${height}px`;
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
        }, 1);
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };

    /**
     * --------------------------------------------
     * @file AdminLTE layout.ts
     * @description Layout for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const CLASS_NAME_HOLD_TRANSITIONS = 'hold-transition';
    const CLASS_NAME_APP_LOADED = 'app-loaded';
    /**
     * Class Definition
     * ====================================================
     */
    class Layout {
        constructor(element) {
            this._element = element;
        }
        holdTransition() {
            let resizeTimer;
            window.addEventListener('resize', () => {
                document.body.classList.add(CLASS_NAME_HOLD_TRANSITIONS);
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    document.body.classList.remove(CLASS_NAME_HOLD_TRANSITIONS);
                }, 400);
            });
        }
    }
    onDOMContentLoaded(() => {
        const data = new Layout(document.body);
        data.holdTransition();
        setTimeout(() => {
            document.body.classList.add(CLASS_NAME_APP_LOADED);
        }, 400);
    });

    /**
     * --------------------------------------------
     * @file AdminLTE direct-chat.ts
     * @description Direct chat for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * Constants
     * ====================================================
     */
    const DATA_KEY$2 = 'lte.direct-chat';
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const EVENT_EXPANDED$1 = `expanded${EVENT_KEY$2}`;
    const EVENT_COLLAPSED$1 = `collapsed${EVENT_KEY$2}`;
    const SELECTOR_DATA_TOGGLE = '[data-lte-toggle="chat-pane"]';
    const SELECTOR_DIRECT_CHAT = '.direct-chat';
    const CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
    /**
     * Class Definition
     * ====================================================
     */
    class DirectChat {
        constructor(element) {
            this._element = element;
        }
        toggle() {
            if (this._element.classList.contains(CLASS_NAME_DIRECT_CHAT_OPEN)) {
                const event = new Event(EVENT_COLLAPSED$1);
                this._element.classList.remove(CLASS_NAME_DIRECT_CHAT_OPEN);
                this._element.dispatchEvent(event);
            }
            else {
                const event = new Event(EVENT_EXPANDED$1);
                this._element.classList.add(CLASS_NAME_DIRECT_CHAT_OPEN);
                this._element.dispatchEvent(event);
            }
        }
    }
    /**
     *
     * Data Api implementation
     * ====================================================
     */
    onDOMContentLoaded(() => {
        const button = document.querySelectorAll(SELECTOR_DATA_TOGGLE);
        button.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const chatPane = target.closest(SELECTOR_DIRECT_CHAT);
                if (chatPane) {
                    const data = new DirectChat(chatPane);
                    data.toggle();
                }
            });
        });
    });

    /**
     * --------------------------------------------
     * @file AdminLTE card-widget.ts
     * @description Card widget for AdminLTE.
     * @license MIT
     * --------------------------------------------
     */
    /**
     * Constants
     * ====================================================
     */
    const DATA_KEY$1 = 'lte.card-widget';
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const EVENT_COLLAPSED = `collapsed${EVENT_KEY$1}`;
    const EVENT_EXPANDED = `expanded${EVENT_KEY$1}`;
    const EVENT_REMOVE = `remove${EVENT_KEY$1}`;
    const EVENT_MAXIMIZED$1 = `maximized${EVENT_KEY$1}`;
    const EVENT_MINIMIZED$1 = `minimized${EVENT_KEY$1}`;
    const CLASS_NAME_CARD = 'card';
    const CLASS_NAME_COLLAPSED = 'collapsed-card';
    const CLASS_NAME_COLLAPSING = 'collapsing-card';
    const CLASS_NAME_EXPANDING = 'expanding-card';
    const CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
    const CLASS_NAME_MAXIMIZED = 'maximized-card';
    const SELECTOR_DATA_REMOVE = '[data-lte-toggle="card-remove"]';
    const SELECTOR_DATA_COLLAPSE = '[data-lte-toggle="card-collapse"]';
    const SELECTOR_DATA_MAXIMIZE = '[data-lte-toggle="card-maximize"]';
    const SELECTOR_CARD = `.${CLASS_NAME_CARD}`;
    const SELECTOR_CARD_BODY = '.card-body';
    const SELECTOR_CARD_FOOTER = '.card-footer';
    const Default = {
        animationSpeed: 500,
        collapseTrigger: SELECTOR_DATA_COLLAPSE,
        removeTrigger: SELECTOR_DATA_REMOVE,
        maximizeTrigger: SELECTOR_DATA_MAXIMIZE
    };
    class CardWidget {
        constructor(element, config) {
            this._element = element;
            this._parent = element.closest(SELECTOR_CARD);
            if (element.classList.contains(CLASS_NAME_CARD)) {
                this._parent = element;
            }
            this._config = Object.assign(Object.assign({}, Default), config);
        }
        collapse() {
            var _a, _b;
            const event = new Event(EVENT_COLLAPSED);
            if (this._parent) {
                this._parent.classList.add(CLASS_NAME_COLLAPSING);
                const elm = (_a = this._parent) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`);
                elm.forEach(el => {
                    if (el instanceof HTMLElement) {
                        slideUp(el, this._config.animationSpeed);
                    }
                });
                setTimeout(() => {
                    if (this._parent) {
                        this._parent.classList.add(CLASS_NAME_COLLAPSED);
                        this._parent.classList.remove(CLASS_NAME_COLLAPSING);
                    }
                }, this._config.animationSpeed);
            }
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.dispatchEvent(event);
        }
        expand() {
            var _a, _b;
            const event = new Event(EVENT_EXPANDED);
            if (this._parent) {
                this._parent.classList.add(CLASS_NAME_EXPANDING);
                const elm = (_a = this._parent) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`);
                elm.forEach(el => {
                    if (el instanceof HTMLElement) {
                        slideDown(el, this._config.animationSpeed);
                    }
                });
                setTimeout(() => {
                    if (this._parent) {
                        this._parent.classList.remove(CLASS_NAME_COLLAPSED);
                        this._parent.classList.remove(CLASS_NAME_EXPANDING);
                    }
                }, this._config.animationSpeed);
            }
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.dispatchEvent(event);
        }
        remove() {
            var _a;
            const event = new Event(EVENT_REMOVE);
            if (this._parent) {
                slideUp(this._parent, this._config.animationSpeed);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        toggle() {
            var _a;
            if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_COLLAPSED)) {
                this.expand();
                return;
            }
            this.collapse();
        }
        maximize() {
            var _a;
            const event = new Event(EVENT_MAXIMIZED$1);
            if (this._parent) {
                this._parent.style.height = `${this._parent.offsetHeight}px`;
                this._parent.style.width = `${this._parent.offsetWidth}px`;
                this._parent.style.transition = 'all .15s';
                setTimeout(() => {
                    const htmlTag = document.querySelector('html');
                    if (htmlTag) {
                        htmlTag.classList.add(CLASS_NAME_MAXIMIZED);
                    }
                    if (this._parent) {
                        this._parent.classList.add(CLASS_NAME_MAXIMIZED);
                        if (this._parent.classList.contains(CLASS_NAME_COLLAPSED)) {
                            this._parent.classList.add(CLASS_NAME_WAS_COLLAPSED);
                        }
                    }
                }, 150);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        minimize() {
            var _a;
            const event = new Event(EVENT_MINIMIZED$1);
            if (this._parent) {
                this._parent.style.height = 'auto';
                this._parent.style.width = 'auto';
                this._parent.style.transition = 'all .15s';
                setTimeout(() => {
                    var _a;
                    const htmlTag = document.querySelector('html');
                    if (htmlTag) {
                        htmlTag.classList.remove(CLASS_NAME_MAXIMIZED);
                    }
                    if (this._parent) {
                        this._parent.classList.remove(CLASS_NAME_MAXIMIZED);
                        if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_WAS_COLLAPSED)) {
                            this._parent.classList.remove(CLASS_NAME_WAS_COLLAPSED);
                        }
                    }
                }, 10);
            }
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
        }
        toggleMaximize() {
            var _a;
            if ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.classList.contains(CLASS_NAME_MAXIMIZED)) {
                this.minimize();
                return;
            }
            this.maximize();
        }
    }
    /**
     *
     * Data Api implementation
     * ====================================================
     */
    onDOMContentLoaded(() => {
        const collapseBtn = document.querySelectorAll(SELECTOR_DATA_COLLAPSE);
        collapseBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.toggle();
            });
        });
        const removeBtn = document.querySelectorAll(SELECTOR_DATA_REMOVE);
        removeBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.remove();
            });
        });
        const maxBtn = document.querySelectorAll(SELECTOR_DATA_MAXIMIZE);
        maxBtn.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const target = event.target;
                const data = new CardWidget(target, Default);
                data.toggleMaximize();
            });
        });
    });
}

initializeTheme();