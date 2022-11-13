import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'menu.name.main', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null,
    submenu: [
      { path: '/pf-home', title: 'menu.name.main.pos', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
        securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
      },
      { path: '/dcb-home', title: 'menu.name.main.dcb', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
        securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
      }
      ]
  },
 /* {
    path: '/page', title: 'menu.name.main', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
	securityCheck: false, allowedEndpoints: []
  },*/
  {
    path: '', title: 'menu.name.pf', icon: 'ft-credit-card', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
	securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null,
    submenu: [
      { path: '/pf-history', title: 'menu.name.pf_trx', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
		securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
	 }
    ]
  },
  {
    path: '', title: 'menu.name.dcb', icon: 'ft-smartphone', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
	securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null,
      submenu: [
          {
            path: '/dcb-transaction', title: 'menu.name.dcb_transaction', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '',
            isExternalLink: false, submenu: [], securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
          },
          {
            path: '/dcb-transaction-summary', title: 'menu.name.dcb_transaction_summary', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
          },
          {
              path: '/dcb-collection', title: 'menu.name.dcb_collection', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
          },
          {
              path: '/dcb-collection-summary', title: 'menu.name.dcb_collection_summary', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 1, isPayWithLinkActive: false, isMpMerchant: null
          }

      ]
  },
  // potential user start
  {
    path: '', title: 'menu.name.pay_with_link', icon: 'ft-shopping-cart', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
	  securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: null,
      submenu: [
          {
              path: '/pwl-home', title: 'menu.name.pay_with_link.onboarding', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: false
          },
          {
              path: '/account-summary', title: 'menu.name.pay_with_link.account_summary', icon: 'ft-arrow-right ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
          {
              path: '/products', title: 'menu.name.pay_with_link.products', icon: 'ft-arrow-right ft-box', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
          {
              path: '/orders', title: 'menu.name.pay_with_link.orders', icon: 'ft-arrow-right ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
          {
              path: '/payment-and-invoice', title: 'menu.name.pay_with_link.payment_and_invoice', icon: 'ft-arrow-right ft-pie-chart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
          {
              path: '/account-settings', title: 'menu.name.pay_with_link.account_settings', icon: 'ft-arrow-right ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
          {
              path: '/shop-management', title: 'menu.name.pay_with_link.shop_management', icon: 'ft-arrow-right ft-shopping-cart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
              securityCheck: false, allowedEndpoints: [], customerType: 2, isPayWithLinkActive: true, isMpMerchant: true
          },
      ]
  },
/*  {
    path: '/user', title: 'menu.name.users', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
    securityCheck: true, allowedEndpoints: ['/api/user'], customerType: 1, isPayWithLinkActive: false
  },
  */
  // potential user end

  /* {
     path: 'pages/orca-inline-user', title: 'menu.name.orca.users', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [],
     securityCheck: false, allowedEndpoints: []
   }*/
  // {
  //   path: '', title: 'menu.operation.root', icon: 'ft-align-left', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
  //   submenu: [
  //       { path: '/user', title: 'menu.operation.users', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       { path: '/i18n', title: 'menu.operation.i18n', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       { path: '/deneme', title: 'menu.operation.deneme', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //   ]
  // },
  // {
  //   path: '', title: 'menu.operation.root', icon: 'ft-align-left', class: 'has-sub', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
  //   submenu: [
  //       { path: '/user', title: 'menu.operation.users', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       { path: '/i18n', title: 'menu.operation.i18n', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       { path: '/deneme', title: 'menu.operation.deneme', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //   ]
  // },
];
