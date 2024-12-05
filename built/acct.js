function parse(_acct) {
  let acct = _acct;
  if (acct.startsWith("@")) acct = acct.substring(1);
  const split = acct.split("@", 2);
  return { username: split[0], host: split[1] || null };
}
function toString(acct) {
  return acct.host == null ? acct.username : `${acct.username}@${acct.host}`;
}
export {
  parse,
  toString
};
//# sourceMappingURL=acct.js.map
