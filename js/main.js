/**
 * Avada Vue instance
 */
const avada = new Vue({
  el: '#avada',
  data: {
    avadaLogo: './images/avada-marketing-logo-2x.png',
    consultantPhoneNumber: '(555) 802-1234',
    avadaEmail: 'info@yourcompany.com',
    helperVisible: false,
    showSupport: false,
    messageText: '',
    answerText: '',
    // header menu list
    headerMenu: [
      {
        title: 'Home',
        showSubMenu: false,
        subMenu: [
          {
            title: 'Home alternative',
            link: '#',
          },
          {
            title: 'Home alternative 2',
            link: '#',
          },
          {
            title: 'Home alternative 3',
            link: '#',
          },
        ],
      },
      {
        title: 'Services',
        showSubMenu: false,
        subMenu: [
          {
            title: 'Strategic Marketing Plan',
            link: '#',
          },
          {
            title: 'Sales Development',
            link: '#',
          },
          {
            title: 'Digital Marketing',
            link: '#',
          },
        ],
      },
      {
        title: 'Why Us',
        showSubMenu: false,
        subMenu: [

        ],
      },
      {
        title: 'Case Studies',
        showSubMenu: false,
        subMenu: [

        ],
      },
      {
        title: 'About',
        showSubMenu: false,
        subMenu: [

        ],
      },
      {
        title: 'Blog',
        showSubMenu: false,
        subMenu: [

        ],
      },
    ],
    // social networks list
    socialList: [
      {
        name: 'facebook-f',
        link: 'https://www.facebook.com/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/',
      },
      {
        name: 'youtube',
        link: 'https://www.youtube.com/',
      },
      {
        name: 'linkedin-in',
        link: 'https://www.linkedin.com/',
      },
      {
        name: 'tiktok',
        link: 'https://www.tiktok.com/it',
      },
    ],
    // services list
    servicesList:
      [
        'Marketing Plan',
        'Sales Development',
        'Digital Marketing',
        'Pricing',
        'Why Us',
        'Case Studies',
      ],
    // resources list
    resourcesList:
      [
        'Learning Center',
        'Video Tutorials',
        'Customers',
        'Blog',
      ],
    // company menu list
    infosList:
      [
        'Who We Are',
        'Contact Us',
        'Careers',
      ],
      // answer list
      answers: [
        'Hello',
        'Not interested',
        'I\'m busy right now',
        'Tell me more',
        'Interesting...',
      ],
      // messages history (true = 'send')
      messages: []
  }, // <- End Data
  methods: {
    // open helper chat
    openHelper() {
      this.helperVisible = true;
    },
    // close helper chat
    closeHelper() {
      this.helperVisible = false;
    },
    /**
     * Send a message
     */
    sendMessage() {
      if(this.messageText.trim()) {
        const message = {
          text: this.messageText,
          type: true,
        };
        this.messageText = '';
        this.messages.push(message);
        this.answerMessage();
      }
    },
    /**
     * send an automatic answer to the user
     */
    answerMessage() {
      setTimeout(() => {
        if(this.messages.length < 2) {
          console.log('entro');
          this.answerText = this.answers[0];
        } else {
          this.answerText = this.answers[this.randomNumber(1, this.answers.length - 1)];
        }
        const answer = {
          text: this.answerText,
          type: false,
        }
        this.messages.push(answer);
      }, 500);
    },
    /**
     * Give a random whole number between min and max
     * @param {number} min 
     * @param {number} max 
     */
    randomNumber(min = 0, max = 1) {
      return Math.floor(Math.random() * (max - min + 1)) + 1;
    }
  }
}); // <- End Vue instance