import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';

export const unsavedChangesNewGuard: CanDeactivateFn<LoginComponent> = (
  component,
  currentRoute,
  curretState,
  nextState
) => {
  if (
    component.loginForm.value.email !== '' ||
    component.loginForm.value.password !== ''
  ) {
    if (confirm('You have some unsaved changes, are you sure you want to leave this page?' )
    ) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
