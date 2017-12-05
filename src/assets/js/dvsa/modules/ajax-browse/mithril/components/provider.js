export class Provider {
  constructor(vnode) {
    const { store } = vnode.attrs;
    this.addStoreToAllChildren(store, vnode);
    this.children = vnode.children;
  }

  addStoreToAllChildren(store, vnode) {
    if (vnode.children && vnode.children.length > 0) {
      vnode.children = vnode.children.map(childVNode => {
        return this.addStoreToAllChildren(store, childVNode);
      });
    }
    return {
      ...vnode,
      store,
    };
  }

  view() {
    return this.children;
  }
}
