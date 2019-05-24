import { StoreEnhancerStoreCreator } from 'redux';

export default function getReduxDevTools(): () => StoreEnhancerStoreCreator {
  const devtoolsEnabled = typeof (window as any).devToolsExtension === 'function';
  return devtoolsEnabled ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : Function.prototype;
}
