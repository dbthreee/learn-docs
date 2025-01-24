export function createSidebarWithPrefix(sidebarItems, prefix) {
  return sidebarItems.map((item) => ({
    ...item,
    link: `${prefix}`,
    prefix: prefix,
    children: item.children
      ? item.children.map((child) => (typeof child === 'string' ? `${child}` : child))
      : undefined,
  }));
}
