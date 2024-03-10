// import { CanActivateFn } from '@angular/router';

// export const adminAuthGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localAdminData = localStorage.getItem('adminToken');
  if (localAdminData != null) {
    return true;
  } else {
    router.navigate(['/admin']);
    return false;
  }
};
