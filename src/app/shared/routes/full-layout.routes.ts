import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'pf-home',
    loadChildren: () => import('app/pages/full-pages/pf-home/pf-home.module').then(m => m.PfHomeModule)
  },
  {
    path: 'dcb-home',
    loadChildren: () => import('app/pages/full-pages/dcb-home/dcb-home.module').then(m => m.DcbHomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('app/pages/full-pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'pay-with-link',
    loadChildren: () => import('app/pages/full-pages/pay-with-link/pay-with-link.module').then(m => m.PayWithLinkModule)
  },
  {
    path: 'i18n',
    loadChildren: () => import('app/pages/full-pages/i18n/i18n.module').then(m => m.I18nModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('app/pages/full-pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'deneme',
    loadChildren: () => import('app/pages/full-pages/deneme/deneme.module').then(m => m.DenemeModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('app/pages/full-pages/user-create/user-create.module').then(m => m.UserCreateModule)
  },
  {
    path: 'pf-history',
    loadChildren: () => import('app/pages/full-pages/pf-history/pf-history.module').then(m => m.pfHistoryModule)
  },
  {
    path: 'dcb-transaction',
      loadChildren: () => import('app/pages/full-pages/dcb-transaction/dcb-transaction.module').then(m => m.dcbTransactionModule)
  },
  {
    path: 'dcb-transaction-summary',
    loadChildren: () => import('app/pages/full-pages/dcb-transaction-summary/dcb-transaction-summary.module').then(m => m.dcbTransactionSummaryModule)
  },
  {
    path: 'dcb-collection',
    loadChildren: () => import('app/pages/full-pages/dcb-collection/dcb-collection.module').then(m => m.dcbCollectionModule)
  },
  {
    path: 'dcb-collection-summary',
    loadChildren: () => import('app/pages/full-pages/dcb-collection-summary/dcb-collection-summary.module').then(m => m.dcbCollectionSummaryModule)
  },
  {
    path: 'pwl-home',
    loadChildren: () => import('app/pages/full-pages/pwl-home/pwl-home.module').then(m => m.PwlHomeModule)
  },
  {
    path: 'pwl-register-status',
    loadChildren: () => import('app/pages/full-pages/pwl-register-status/pwl-register-status.module').then(m => m.PwlRegisterStatusModule)
  },
  {
    path: 'pwl-register-status/:state',
    loadChildren: () => import('app/pages/full-pages/pwl-register-status/pwl-register-status.module').then(m => m.PwlRegisterStatusModule)
  },
  {
    path: 'pf-dcb',
    loadChildren: () => import('app/pages/full-pages/pf-dcb/pf-dcb.module').then(m => m.PfDcbModule)
  },
  {
    path: 'pwl-individual-register',
    loadChildren: () => import('app/pages/full-pages/pwl-individual-register/pwl-individual-register.module').then(m => m.PwlIndividualRegisterModule)
  },
  {
    path: 'pwl-corporate-register',
    loadChildren: () => import('app/pages/full-pages/pwl-corporate-register/pwl-corporate-register.module').then(m => m.PwlCorporateRegisterModule)
  },
  {
    path: 'account-summary',
    loadChildren: () => import('app/pages/full-pages/account-summary/account-summary.module').then(m => m.AccountSummaryModule)
  },
  {
    path: 'products',
    loadChildren: () => import('app/pages/full-pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'save-product',
    loadChildren: () => import('app/pages/full-pages/save-product/save-product.module').then(m => m.SaveProductModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('app/pages/full-pages/save-product/save-product.module').then(m => m.SaveProductModule)
} ,
  {
    path: 'orders',
    loadChildren: () => import('app/pages/full-pages/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'payment-and-invoice',
    loadChildren: () => import('app/pages/full-pages/payment-and-invoice/payment-and-invoice.module').then(m => m.PaymentAndInvoiceModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('app/pages/full-pages/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
  },
  {
    path: 'shop-management',
    loadChildren: () => import('app/pages/full-pages/shop-management/shop-management.module').then(m => m.ShopManagementModule)
  },
  {
    path: 'pf-dcb',
    loadChildren: () => import('app/pages/full-pages/pf-dcb/pf-dcb.module').then(m => m.PfDcbModule)
  }
];
