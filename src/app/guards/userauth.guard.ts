// import { CanActivateFn } from '@angular/router';

// export const userauthGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localAdminData = localStorage.getItem('userToken');
  if (localAdminData != null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
