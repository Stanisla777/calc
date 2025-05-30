import Vue from 'vue';
import mainBannerParallax from './modules/main-banner-parallax';
import selectsInit from './modules/selects-init';
import menu from './modules/menu';
import svgHandWriting from './modules/svg-hand-writing';
import instructionDocuments from './modules/instruction-documents';
import wasUseful from './modules/was-useful';
import anchors from './modules/anchors';
import expandListsItem from './modules/expand-lists-item';
import {
  mainBannerSlider, mainSlider, contentSlider, cardsInstructionSlider, cardsNewsSlider,
  aboutSlider, questionsAndAnswerSliders, testSlider, mediaSlider, eventPageSlider,
  educationalSlider, educationalSliderReviews, personalitiesSlider, slider4Col,
  birthdayReviewsSwiper, cardHousingCooperativeSlider, housingCooperativeListSlider,
  housingCooperativeDetailSlider, progressSlider, progressSlider4column, progressSliderPartners,
  testPollsSlider, progressSlider2, atAdvantageSwiper, atBecomeSwiper, atSliderPartners,
  SliderCourse, izhsMaterialSlider, izhsBunnersSlider, authorsSlider, authorsDetailedSliderDes,
  authorsDetailedSliderMob, newMarathonScheduleSlider, cardSlider, cardSliderfoufcolumn,
  slideConstructor, atGameConsists
} from './modules/swiper-sliders';
import contentNote from './modules/content-note';
import ocenkaInit from './modules/ocenka';
import toUp from './modules/to-up';
import headerConnection from './modules/header-connection';
import {
    modals, closeModal, catalogModal
} from './modules/modals';
import {
    chatValidation, feedbackValidation, coursesFeedbackValidation, subscriptionValidation,
    callValidation, phoneMask
} from './modules/validations';
import headerShowButtons from './modules/header-show-buttons';
// import geolocation from './modules/geolocation';
import ringNav from './modules/ring-nav';
import {
    tabFAQ, tabInstructions, tabDocuments, tabNews, tabCatalog
} from './modules/tabs';
import numberFormatting from './modules/about-map';
import searchGlobal from './modules/search-global';
import cookies from './modules/cookies';
// import throttle from './modules/throttle';
import {
    subcategoryAccordion, documentAccordion, catalogAsideAccordion, coursesAccordion,
    housingCooperativeChoosenAccordion
} from './modules/accordions';
import subscriptionSuccess from './modules/subscription-success';
import rangeSliders from './modules/range-sliders';
import catalogSort from './modules/catalog-sort';
import setVH from './modules/setVH';
import setImageAttr from './modules/imageAttribute';
import loaderTest from './modules/loader-test';
import leftSideBar from './modules/redesign-site/left-side-bar';

// import KeyIndicators from './modules/KeyIndicators.vue';
import MortgageCalc from './modules/MortgageCalc.vue';
import TelegramBlock from './modules/TelegramBlock.vue';
import fetchLikes from './modules/fetch-likes';
import Test from './modules/BuiltTest.vue';
import HousingCooperativeTest from './modules/housing-cooperative-test/HousingCooperativeTest.vue';

import { checkStatusPinInput, checkStatusValidation, checkStatusTimer } from './modules/check-status';

import testNumber from './modules/test-number';
import checkId from './modules/checkbox-id';
import playVideo from './modules/video/play-video';
import videoWithPreview from './modules/video/video-with-preview';
import tabElement from './modules/tabs-element';
import activeSlideTest from './modules/active-slide-test';
import testBuild from './modules/test-build';
import testPopUp from './modules/test-pop-up';
import modalCapture from './modules/modal-capture';
import MortgageRates from './modules/mortgage-rates/MortgageRatesPointEntry.vue';
import taxToggle from './modules/landing-tax-deducation-toggle';
import TaxDeductionCalculator from './modules/tax-deduction-calculator/TaxDeductionCalculatorPointEntry.vue';
import inputFieldStatus from './modules/check-status-activation-crediting';
import tabChange from './modules/tabs-change-m';
import educationalSection from './modules/educational';
// import callModalWindow from './modules/call-modal-window';
import CreditHolidaysCalculator from './modules/credit-holidays-calculator/CreditHolidaysCalculatorPointEntry.vue';
import collectionSmallFunctions from './modules/collection-small-functions';
import TabsCallFromColumn from './modules/tabs-call-from-column';
import SelectListChoice from './modules/tabs-call-from-dropdown-list';
import VPolls from './modules/polls/MainPolls.vue';
import initializationPolls from './modules/polls/custom-scripts/initialization-polls';
// import scrollToAddedItems from './modules/scroll-to-added-items';
import pageProgressBar from './modules/progress-bar';
import ItMortgageSurveys from './modules/it-mortgage-surveys/ITMortgageSurveys.vue';
import itMortgageJs from './modules/it-mortgage-surveys/it-mortgage-js';
import MortgageCalculator from './modules/mortgage-calculator/MortgageCalculatorPointEntry.vue';
import breedingCalculator from './modules/breeding-calculator';
import openUlList from './modules/preferential-developers';
import openListInfo from './modules/block-additional-info';
import TestN from './modules/test-n/TestN.vue';
import vStories from './modules/stories/StoriesPointEntry.vue';
import beesenderAddMessage from './modules/beesender-add-message';
import beesenderNewWindow from './modules/beesender-new-window';
import housingCooperativeFilter from './modules/housing-cooperative-filter';
import popupGallery from './modules/popup-gallery';
import { housingCooperativeMapList, housingCooperativeMapDetail } from './modules/housing-cooperative-maps';
import housingCooperativeButtons from './modules/housing-cooperative-buttons';
import status450InformMail from './modules/status-450-inform-mail';
import marathonDetail from './modules/marathon-detail';
import marathonNewDetail from './modules/marathon-new-detail';
import VPollsMarathon from './modules/polls-marathon/MainPolls.vue';
import initializationMarathonPolls from './modules/polls-marathon/custom-scripts/initialization-marathon-polls';
import Tags from './modules/tags';
import DduCalculator from './modules/ddu-calculator/DduCalculator.vue';
import dropdownTopic from './modules/mailing-page';
import RefinancingCalculator from './modules/refinancing-calculator/RefinancingCalculatorPointEntry.vue';
import ItMortgageSurveysOneRequest from './modules/it-mortgage-surveys-one-request/ITMortgageSurveys.vue';
import breadCrumbs from './modules/bread-crumbs';
import CreditCalculator from './modules/credit-calculator/CreditCalculatorPointEntry.vue';
import TaxDeductionCalculatorOld from './modules/tax-deduction-calculator-old/TaxDeductionCalculatorOldPointEntry.vue';
import progressRs from './modules/progress-rs';
import GameddTask from './modules/another-thing/TestNEntryPointEntry.vue';
import anotherThing from './modules/anotherThing';
import callGameTest from './modules/another-thing/custom-scripts/call-game-test';
import GameddRegistration from './modules/another-thing-registration/AnotherThingRegistrationPointEntry.vue';
import substituteStepChange from './modules/another-thing-registration/custom-scripts/substitute-step-change';
import countdownPage from './modules/countdown-page';
import progressBarNew from './modules/progress-bar-new';
import GameddNotifications from './modules/another-thing-notifications/GameddNotificationsPointEntry.vue';
import jsCallModal from './modules/js--call-modal';
import atBeesender from './modules/at-beesender';
import ApexChartProgressCompany from './modules/ApexChartProgressCompany.vue';
import izhsPage from './modules/izhsPage';
import MinSport from './modules/minsport/MinSport.vue';
import ApexChartAt from './modules/another-thing-end/ApexChartsAt.vue';
import atEndForm from './modules/another-thing-end/form/at-end-form';
import formRating from './modules/form-rating';
// eslint-disable-next-line import/no-named-as-default
import VOcenka from './modules/vue-ocenka-test/Ocenka.vue';
import universalForm from './modules/universal-form/universal-form';
import housingCooperativeDropdown from './modules/housing-cooperative-dropdown';
import additionDropDown from './modules/addition-dropDown';
import izhsSendForm from './modules/izhs-send-form';
import keyIndicatorsNewSource from './modules/redesign-site/main-page/key-indicators-new-source';
import snowFall from './modules/snow-fall';
import yandexSearch from './modules/redesign-site/yandex-search';
import headerMenu from './modules/redesign-site/header-menu';
import footerDropDown from './modules/redesign-site/footer-drop-down';
import pageLoader from './modules/redesign-site/page-loader';
import chatBot from './modules/redesign-site/chat-bot';
import SelectWithSearch from './modules/vue-component-templates/select-with-search';
import catalogNew from './modules/catalog-new';
import windowResizeDropDown from './modules/TemplateScript/window-resize-drop-down';
import CatalogNewSendForm from './modules/catalog-new-send-form';
import StatusByKadastr from './modules/StatusByKadastr.vue';
// import taxDeductionNew from './modules/calc-tax-deduction-new/tax-deduction-new';
import SingleCalculator from './modules/single-calculator/SingleCalculatorEntry.vue';
import marathon2024 from './modules/marathon-2024/marathon-2024';
import marathon2024TestInn from './modules/marathon-2024/marathon-2024-test-inn';
import Marathon2024Test from './modules/marathon-2024-test/TestNEntryPointEntry.vue';
import marathon2024Button from './modules/marathon-2024/marathon-2024-test-button';
import marathon2024Rating from './modules/marathon-2024/marathon-2024-rating';
import instruction from './modules/redesign-site/instruction/instruction';
import commentsTexarea from './modules/comments-component/comments-texarea';
import hoverCheckboxLink from './modules/TemplateScript/hover-checkbox-link';
import SearchFamilyMortgage from './modules/search-family-mortgage/SearchFamilyMortgage.vue';
import formRatingUniversal from './modules/universal-form/form-rating-universal';
import formUseFulnessSurvey from './modules/universal-form/usefulness-survey';

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
    window.phoneMask = phoneMask;
    window.closeModal = closeModal;
    window.selectsInit = selectsInit;
    window.questionsAndAnswerSliders = questionsAndAnswerSliders;
    window.fetchLikes = fetchLikes;
    window.checkStatusTimer = checkStatusTimer;
    window.modals = modals;
    window.housingCooperativeMapList = housingCooperativeMapList;
    window.housingCooperativeMapDetail = housingCooperativeMapDetail;
    window.popupGallery = popupGallery;
    window.universalForm = universalForm;
    window.cardSliderfoufcolumn = cardSliderfoufcolumn;
    mainBannerSlider();
    mainBannerParallax();
    mainSlider();
    selectsInit();
    menu();
    svgHandWriting();
    cardsInstructionSlider();
    cardsNewsSlider();
    subcategoryAccordion();
    documentAccordion();
    coursesAccordion();
    catalogAsideAccordion();
    contentSlider();
    aboutSlider();
    questionsAndAnswerSliders();
    instructionDocuments();
    wasUseful();
    anchors();
    newMarathonScheduleSlider();
    contentNote();
    tabInstructions();
    tabDocuments();
    tabNews();
    tabFAQ();
    tabCatalog();
    toUp();
    headerConnection();
    modals();
    catalogModal();
    phoneMask();
    feedbackValidation();
    coursesFeedbackValidation();
    subscriptionValidation();
    chatValidation();
    callValidation();
    headerShowButtons();
//  geolocation();
    ringNav();
    numberFormatting();
    searchGlobal();
    setImageAttr();
    cookies();
    subscriptionSuccess();
    rangeSliders();
    catalogSort();
    fetchLikes();
    setVH();
    checkStatusPinInput();
    checkStatusValidation();
    checkStatusTimer();
    testSlider();
    testNumber();
    checkId();
    playVideo();
    videoWithPreview();
    mediaSlider();
    tabElement();
    activeSlideTest();
    testBuild();
    testPopUp();
    eventPageSlider();
    loaderTest();
    leftSideBar();
    modalCapture();
    taxToggle();
    inputFieldStatus();
    tabChange();
    SelectListChoice();
    educationalSlider();
    educationalSliderReviews();
    educationalSection();
    personalitiesSlider();
    collectionSmallFunctions();
    TabsCallFromColumn();
    slider4Col();
    birthdayReviewsSwiper();
    pageProgressBar();
    itMortgageJs();
    initializationPolls();
    breedingCalculator();
    expandListsItem();
    openUlList();
    openListInfo();
    beesenderAddMessage();
    beesenderNewWindow();
    housingCooperativeFilter();
    popupGallery();
    housingCooperativeListSlider();
    housingCooperativeDetailSlider();
    cardHousingCooperativeSlider();
//  housingCooperativeRequestValidation();
    housingCooperativeChoosenAccordion();
    housingCooperativeMapList();
    housingCooperativeMapDetail();
    housingCooperativeButtons();
    status450InformMail();
    marathonDetail();
    marathonNewDetail();
    initializationMarathonPolls();
    Tags();
    dropdownTopic();
    breadCrumbs();
    progressRs();
    progressSlider();
    progressSlider2();
    progressSlider4column();
    progressSliderPartners();
    atAdvantageSwiper();
    atBecomeSwiper();
    atSliderPartners();
    anotherThing();
    callGameTest();
    substituteStepChange();
    countdownPage();
    progressBarNew();
    jsCallModal();
    atBeesender();
    SliderCourse();
    testPollsSlider();
    izhsMaterialSlider();
    izhsPage();
    izhsBunnersSlider();
    formRating();
    authorsSlider();
    authorsDetailedSliderDes();
    authorsDetailedSliderMob();
    universalForm();
    snowFall();
    additionDropDown();
    housingCooperativeDropdown();
    yandexSearch();
    catalogNew();
    windowResizeDropDown();
    headerMenu();
    footerDropDown();
    pageLoader();
    chatBot();
    instruction();
    cardSlider();
    cardSliderfoufcolumn();
    commentsTexarea();
    slideConstructor();
    marathon2024();
    hoverCheckboxLink();
    atGameConsists();
    formRatingUniversal();
    formUseFulnessSurvey();

// scrollToAddedItems();
// callModalWindow();
//  window.addEventListener('resize', throttle(menu, 1000));

    /**
     * запускает функцию, когда есть необходимый id на странице
     * @param {Object} obj - Информация по функции и ее id
     * @param {String} obj.id - идентификатор для запуска функции
     * @param {Function} obj.fn - функция, которую необходимо запустить
     */
    function initVueApp(obj) {
        const app = document.getElementById(obj.id);
        if (app) {
            obj.fn();
        }
    }

    // Устаревшее приложение для
    // блока ключевых показателей с данными из БД ЕИСЖС
    // function initKeyIndicator() {
    //     // eslint-disable-next-line no-new
    //     new Vue({
    //         el: '#appKi',
    //         components: {
    //             'key-indicators': KeyIndicators
    //         }
    //     });
    // }

    function initMrotgageCalc() {
        // eslint-disable-next-line no-new
        new Vue({
            el: '#m-calc',
            components: {
                'mortgage-calc': MortgageCalc
            }
        });
    }

  // eslint-disable-next-line no-unused-vars
    function test() {
      // eslint-disable-next-line no-new
      new Vue({
        el: '#test',
        components: {
          test: Test
        }
      });
    }

    // eslint-disable-next-line no-unused-vars
    function initMortgageRates() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#v-mortgage-rates',
            components: {
              'mortgage-rates': MortgageRates
            }
          });
        }
    // eslint-disable-next-line no-unused-vars
    function initTelegramBlock() {
        // eslint-disable-next-line no-new
        new Vue({
            el: '#telegram-block',
            components: {
                'telegram-block': TelegramBlock
            }
        });
    }
    function initStatusByKadastr() {
        // eslint-disable-next-line no-new
        new Vue({
            el: '#status-by-kadastr',
            components: {
                'status-by-kadastr': StatusByKadastr
            }
        });
    }

    // eslint-disable-next-line no-unused-vars
        function initTaxDeductionCalculator() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-tax-calculator',
                components: {
                  'tax-calculator': TaxDeductionCalculator
                }
              });
            }

    // eslint-disable-next-line no-unused-vars
            function initCreditHolidaysCalculator() {
                  // eslint-disable-next-line no-new
                  new Vue({
                    el: '#v-credit-holidays-calculator',
                    components: {
                      'credit-holidays-calculator': CreditHolidaysCalculator
                    }
                  });
                }

    // eslint-disable-next-line no-unused-vars
        function initITMortgageSurveys() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-mortgage-surveys',
                components: {
                  'it-mortgage-surveys': ItMortgageSurveys
                }
              });
            }
    // eslint-disable-next-line no-unused-vars
        function initMortgageCalculator() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-mortgage-calculator',
                components: {
                  'mortgage-calculator': MortgageCalculator
                }
              });
            }

    // eslint-disable-next-line no-unused-vars
      // function initPolls() {
            // eslint-disable-next-line no-new
            // new Vue({
              // el: '#v-polls',
              // components: {
                // 'v-polls': VPolls
              // }
            // });
        // }

    // eslint-disable-next-line no-unused-vars
          function initStories() {
                // eslint-disable-next-line no-new
                new Vue({
                  el: '#v-stories',
                  components: {
                    'v-stories': vStories
                  }
                });
            }

    // eslint-disable-next-line no-unused-vars
      function initHousingCooperativeTest() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#housing-cooperative-test',
              components: {
                'housing-cooperative-test': HousingCooperativeTest
              }
            });
        }

    // eslint-disable-next-line no-unused-vars
      function initPollsMarathon() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#v-polls-marathon',
              components: {
                'v-polls-marathon': VPollsMarathon
              }
            });
        }

    // eslint-disable-next-line no-unused-vars
        function initRefinancingCalculator() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#v-refinancing-calculator',
              components: {
                'refinancing-calculator': RefinancingCalculator
              }
            });
        }

    // eslint-disable-next-line no-unused-vars
        function initItMortgageSurveysOneRequest() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#v-mortgage-surveys-one-request',
            components: {
              'it-mortgage-surveys-one-request': ItMortgageSurveysOneRequest
            }
          });
        }

    // eslint-disable-next-line no-unused-vars
      function initDduCalculator() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#v-ddu-calculator',
              components: {
                'ddu-calculator': DduCalculator
              }
            });
          }

    // eslint-disable-next-line no-unused-vars
        function initCreditCalculator() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#v-credit-calculator',
              components: {
                'credit-calculator': CreditCalculator
              }
            });
        }

    // eslint-disable-next-line no-unused-vars
        function initTaxDeductionCalculatorOld() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-tax-calculator-old',
                components: {
                  'tax-calculator-old': TaxDeductionCalculatorOld
                }
              });
            }

    // eslint-disable-next-line no-unused-vars
        function initGameddRegistration() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-gamedd-registration',
                components: {
                  'gamedd-registration': GameddRegistration
                }
              });
            }
    // eslint-disable-next-line no-unused-vars
        function initGameddNotifications() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#v-gamedd-notifications',
                components: {
                  'gamedd-notifications': GameddNotifications
                }
              });
            }
    // eslint-disable-next-line no-unused-vars
        function initApexChartProgressCompany() {
              // eslint-disable-next-line no-new
              new Vue({
                el: '#schedule-circle',
                components: {
                  'apex-chart-progress-company': ApexChartProgressCompany
                }
              });
            }
    // eslint-disable-next-line no-unused-vars
        function initMinSport() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#v-minsport',
            components: {
              'min-sport': MinSport
            }
          });
        }
    // eslint-disable-next-line no-unused-vars
        function initApexChartAt() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#another-thing-end',
            components: {
              'apex-chart-at': ApexChartAt
            }
          });
        }
    // eslint-disable-next-line no-unused-vars
        function initOcenka() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#v-ocenka',
            components: {
              'v-ocenka': VOcenka
            }
          });
        }
    // eslint-disable-next-line no-unused-vars
        function initSingleCalculator() {
            // eslint-disable-next-line no-new
            new Vue({
              el: '#v-single-calculator',
              components: {
                'single-calculator': SingleCalculator
              }
            });
        }
  // eslint-disable-next-line no-unused-vars
        function initSearchFamilyMortgage() {
          // eslint-disable-next-line no-new
          new Vue({
            el: '#search-family-mortgage',
            components: {
              'search-family-mortgage': SearchFamilyMortgage
            }
          });
        }

    const obj = [
        {
            id: 'app',
            fn: ocenkaInit
        },
        // Устаревшее приложение для
        // блока ключевых показателей с данными из БД ЕИСЖС
        // {
        //     id: 'appKi',
        //     fn: initKeyIndicator
        // },
        {
            id: 'm-calc',
            fn: initMrotgageCalc
        },
        {
          id: 'test',
          fn: test
        },
        {
          id: 'v-mortgage-rates',
          fn: initMortgageRates
        },
        {
            id: 'telegram-block',
            fn: initTelegramBlock
        },
        {
          id: 'status-by-kadastr',
          fn: initStatusByKadastr
        },
        {
          id: 'v-tax-calculator',
          fn: initTaxDeductionCalculator
        },
        {
          id: 'v-credit-holidays-calculator',
          fn: initCreditHolidaysCalculator
        },
        {
          id: 'v-mortgage-surveys',
          fn: initITMortgageSurveys
        },
        // {
          // id: 'v-polls',
          // fn: initPolls
        // },
        {
          id: 'v-mortgage-calculator',
          fn: initMortgageCalculator
        },
        {
          id: 'v-stories',
          fn: initStories
        },
        {
          id: 'housing-cooperative-test',
          fn: initHousingCooperativeTest
        },
        {
          id: 'v-polls-marathon',
          fn: initPollsMarathon
        },
        {
          id: 'v-refinancing-calculator',
          fn: initRefinancingCalculator
        },
        {
          id: 'v-mortgage-surveys-one-request',
          fn: initItMortgageSurveysOneRequest
        },
        {
          id: 'v-ddu-calculator',
          fn: initDduCalculator
        },
        {
          id: 'v-credit-calculator',
          fn: initCreditCalculator
        },
        {
          id: 'v-tax-calculator-old',
          fn: initTaxDeductionCalculatorOld
        },
        {
          id: 'v-gamedd-registration',
          fn: initGameddRegistration
        },
        {
          id: 'v-gamedd-notifications',
          fn: initGameddNotifications
        },
        {
          id: 'schedule-circle',
          fn: initApexChartProgressCompany
        },
        {
          id: 'v-minsport',
          fn: initMinSport
        },
        {
          id: 'another-thing-end',
          fn: initApexChartAt
        },
        {
          id: 'at-form-end',
          fn: atEndForm
        },
        {
          id: 'form-rating',
          fn: formRating
        },
        {
          id: 'modal-housing-cooperative-request',
          fn: izhsSendForm
        },
        {
          id: 'v-ocenka',
          fn: initOcenka
        },
        {
          id: 'key-indicators',
          fn: keyIndicatorsNewSource
        },
        {
          id: 'select-with-search',
          fn: SelectWithSearch
        },
        {
          id: 'modal-catalog-new-request',
          fn: CatalogNewSendForm
        },
        // {
          // id: 'tax-deduction-new',
          // fn: taxDeductionNew
        // },
        {
          id: 'v-single-calculator',
          fn: initSingleCalculator
        },
        {
          id: 'modal-marathon-test-inn',
          fn: marathon2024TestInn
        },
        {
          id: 'marathon-new-last--wr-countdown',
          fn: marathon2024Button
        },
        {
          id: 'marathon-rating',
          fn: marathon2024Rating
        },
        {
          id: 'search-family-mortgage',
          fn: initSearchFamilyMortgage
        },
        // {
        //   id: 'form-rating-universal',
        //   fn: formRatingUniversal
        // },
        // {
        //     id: 'form-rating-universal',
        //     fn: formRatingUniversal
        // },

    ];

    for (let i = 0; i < obj.length; i += 1) {
        initVueApp(obj[i]);
    }

  // создание несколько экземпляров vue для вызова тестов в них
  const vueTestRoots = document.querySelectorAll('.js-test-n');

  if (vueTestRoots.length) {
    for (let i = 0; i < vueTestRoots.length; i += 1) {
      vueTestRoots[i].id = `test-n-${i}`;

      // eslint-disable-next-line no-new
      new Vue({
        el: `#test-n-${i}`,
        components: {
          'test-n': TestN,
        }
      });
    }
  }

  // создание несколько экземпляров vue для вызова тестов в них
    const vuePolls = document.querySelectorAll('.js-polls-n');

    if (vuePolls.length) {
      for (let i = 0; i < vuePolls.length; i += 1) {
        vuePolls[i].classList.add(`js__polls-n-${i}`);

        // eslint-disable-next-line no-new
        new Vue({
          el: `.js__polls-n-${i}`,
          components: {
            'v-polls': VPolls,
          }
        });
      }
    }

  // создание несколько экземпляров vue для вызова тестов в них
    const vueTestAnotherThing = document.querySelectorAll('.js-test-another-thing');

    if (vueTestAnotherThing.length) {
      for (let i = 0; i < vueTestAnotherThing.length; i += 1) {
        vueTestAnotherThing[i].id = `test-n-${i}`;

        // eslint-disable-next-line no-new
        new Vue({
          el: `#test-n-${i}`,
          components: {
            'gamedd-task': GameddTask,
          }
        });
      }
    }

  // создание несколько экземпляров vue для вызова тестов в них
      const vueMarathon2024Test = document.querySelectorAll('.js-test-marathon-2024');

      if (vueMarathon2024Test.length) {
        for (let i = 0; i < vueMarathon2024Test.length; i += 1) {
          vueMarathon2024Test[i].id = `test-n-${i}`;

          // eslint-disable-next-line no-new
          new Vue({
            el: `#test-n-${i}`,
            components: {
              'marathon-2024-test': Marathon2024Test,
            }
          });
        }
      }
});
