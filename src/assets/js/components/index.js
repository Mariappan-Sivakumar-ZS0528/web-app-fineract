function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('assets/js/components/chat.js');
include('assets/js/constants.js');
include('assets/js/components/cardsCarousel.js');
include('assets/js/components/botTyping.js');
include('assets/js/components/charts.js');
include('assets/js/components/collapsible.js');
include('assets/js/components/dropDown.js');
include('assets/js/components/location.js');
include('assets/js/components/pdfAttachment.js');
include('assets/js/components/quickReplies.js');
include('assets/js/components/suggestionButtons.js');
