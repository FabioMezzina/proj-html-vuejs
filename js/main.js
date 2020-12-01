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
    // header menu list
    headerMenu: [
      {
        title: 'Home',
        hasMenu: true,
      },
      {
        title: 'Services',
        hasMenu: true,
      },
      {
        title: 'Why Us',
        hasMenu: false,
      },
      {
        title: 'Case Studies',
        hasMenu: false,
      },
      {
        title: 'About',
        hasMenu: false,
      },
      {
        title: 'Blog',
        hasMenu: false,
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
  }, // <- End Data
  methods: {
    openHelper() {
      this.helperVisible = true;
    },
    closeHelper() {
      this.helperVisible = false;
    }
  }
}); // <- End Vue instance