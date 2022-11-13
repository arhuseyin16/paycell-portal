// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  badge?: string;
  badgeClass?: string;
  isExternalLink: boolean;
  securityCheck: boolean;
  allowedEndpoints: string[];
  submenu: RouteInfo[];
  customerType: number;
  isPayWithLinkActive: boolean;
  isMpMerchant: Boolean;
}
