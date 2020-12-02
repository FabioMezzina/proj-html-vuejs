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
  }, // <- End Data
  methods: {
    openHelper() {
      this.helperVisible = true;
    },
    closeHelper() {
      this.helperVisible = false;
    },
  }
}); // <- End Vue instance