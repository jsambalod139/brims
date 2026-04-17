import { Routes } from '@angular/router';
import { LoginComponents } from './components/auth/login/login-components/login-components';
import { ResidentDashboard } from './components/pages/resident-dashboard/resident-dashboard';
import { ResidentMyProfile } from './components/pages/resident-myprofile/resident-myprofile';
import { ResidentReports } from './components/pages/resident-reports/resident-reports';
import { ResidentRequestCertificate } from './components/pages/resident-request-certificate/resident-request-certificate';
import { ResidentRequests } from './components/pages/resident-requests/resident-requests';
import { ResDashboard } from './components/layout/resident-layout/res-dashboard/res-dashboard';
import { StaffDashboard } from './components/pages/staff-dashboard/staff-dashboard';
import { StaffHouseholds } from './components/pages/staff-households/staff-households';
import { StaffProfile } from './components/pages/staff-profile/staff-profile';
import { StaffQrScanner } from './components/pages/staff-qr-scanner/staff-qr-scanner';
import { StaffReports } from './components/pages/staff-reports/staff-reports';
import { StaffRequests } from './components/pages/staff-requests/staff-requests';
import { StaffResidents } from './components/pages/staff-residents/staff-residents';
import { StaDashboard } from './components/layout/staff-layout/sta-dashboard/sta-dashboard';
import { AdDashboard } from './components/layout/admin-layout/ad-dashboard/ad-dashboard';
import { AdminDashboard } from './components/pages/admin-dashboard/admin-dashboard';
import { AdminProfile } from './components/pages/admin-profile/admin-profile';
import { AdminQrScanner } from './components/pages/admin-qr-scanner/admin-qr-scanner';
import { AdminRequests } from './components/pages/admin-requests/admin-requests';
import { AdminResidents } from './components/pages/admin-residents/admin-residents';
import { AdminHouseholds } from './components/pages/admin-households/admin-households';
import { AdminReports } from './components/pages/admin-reports/admin-reports';
import { AdminUserAndRoles } from './components/pages/admin-user-and-roles/admin-user-and-roles';
import { AdminSmsAndEmail } from './components/pages/admin-sms-and-email/admin-sms-and-email';
import { AdminAuditLog } from './components/pages/admin-audit-log/admin-audit-log';
import { AdminArchives } from './components/pages/admin-archives/admin-archives';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponents},
    {
    path: 'res-dashboard', 
    component: ResDashboard, 
    children: [
        {path: '', redirectTo: 'resident-dashboard', pathMatch: 'full'},
        {path: 'resident-dashboard', component: ResidentDashboard},
        {path: 'resident-myprofile', component: ResidentMyProfile},
        {path: 'resident-request-certificate', component: ResidentRequestCertificate},
        {path: 'resident-reports', component: ResidentReports},
        {path: 'resident-requests', component: ResidentRequests}
     ]
  },

    {
    path: 'sta-dashboard',
    component: StaDashboard,
    children: [
        {path: '', redirectTo: 'staff-dashboard', pathMatch: 'full'},
        {path: 'staff-dashboard', component: StaffDashboard},
        {path: 'staff-profile', component: StaffProfile},
        {path: 'staff-qr-scanner', component: StaffQrScanner},
        {path: 'staff-requests', component: StaffRequests},
        {path: 'staff-residents', component: StaffResidents},
        {path: 'staff-households', component: StaffHouseholds},
        {path: 'staff-reports', component: StaffReports}
    
     ]
  },

  {
   path: 'ad-dashboard', 
   component: AdDashboard,
   children: [
      {path: '', redirectTo: 'admin-dashboard', pathMatch: 'full'},
      {path: 'admin-dashboard', component: AdminDashboard},
      {path: 'admin-myprofile', component: AdminProfile},
      {path: 'admin-qr-scanner', component: AdminQrScanner},
      {path: 'admin-requests', component: AdminRequests},
      {path: 'admin-residents', component: AdminResidents},
      {path: 'admin-households', component: AdminHouseholds},
      {path: 'admin-reports', component: AdminReports},
      {path: 'admin-user-roles', component: AdminUserAndRoles},
      {path: 'admin-sms-email', component: AdminSmsAndEmail},
      {path: 'admin-audit-log', component: AdminAuditLog},
      {path: 'admin-archives', component: AdminArchives}

     ]
   }
]


