import * as MovActions from '~/actions/movs'
import * as AuthActions from '~/actions/authentication'

export const ActionCreators = Object.assign({},
  MovActions,
  AuthActions,
);
