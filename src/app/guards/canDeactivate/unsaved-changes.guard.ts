import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<any> {
  canDeactivate(component: any): boolean {
    if (
      component.loginForm.value.email !== '' ||
      component.loginForm.value.password !== ''
    ) {
      if (confirm('You have some unsaved changes, are you sure you want to leave this page?')
      ) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
