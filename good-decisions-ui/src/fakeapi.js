import cannedData from './exampleData';

export const allArguments = () => {
  return cannedData.arguments;
}

export const allUsers = () => {
  return cannedData.users;
}

export const fetchArgument = (aid) => {
  return cannedData.arguments.filter((i) => {return i.aid === aid})[0];
}

export const buildUserRef= (uid) => {
  let uData = fetchUser(uid);
  if (uData) {
    let ret = {};
    ret.uid = uid;
    ret.uname = uData.uname;
    return ret
  }
  console.log("Ouch!, buildUserRef couldn't find user:", uid);
}


export const summarizeArgument = (arg) => {
  if (arg) {
    let ret = {};
    ret.creator = buildUserRef(arg.creator);
    ret.title = arg.title;
    ret.aid = arg.aid;
    return ret;
  }
  console.log("Ouch!, summarizeArgument can't process null");
  return null;
}

export const fetchUser = (uid) => {
  return cannedData.users.filter((u) => { return u.uid === uid})[0];
}

export const summarizeUser = (uData) => {
  if (uData) {
    let uid = uData.uid;
    let u = {};
    Object.assign(u, uData);
    u.args.owned = cannedData.arguments.filter((a) => {
      return (a.creator === uid)
    }).map(summarizeArgument);
    u.args.contrib = cannedData.arguments.filter((a) => {
      return (a.users.hasOwnProperty(uid))
    }).map(summarizeArgument);
    return u
  } 
  console.log("Ouch!, summarizeUser can't process null");
}

export const fetchUserSummaryData = (uid) => {
  let u = {};
  u.owned = cannedData.arguments.filter((a) => {
    return (a.creator === uid)
  }).map(summarizeArgument);
  u.contrib = cannedData.arguments.filter((a) => {
    return (a.users.hasOwnProperty(uid))
  }).map(summarizeArgument);
  let srcU = cannedData.users.filter((u) => { return u.uid === uid})[0];
  Object.assign(u, srcU);
  return u
}

const api = {
  allArguments: allArguments,
  allUsers: allUsers,
  fetchArgument: fetchArgument,
  buildUserRef: buildUserRef,
  summarizeArgument: summarizeArgument,
  fetchUser: fetchUser,
  summarizeUser: summarizeUser,
  fetchUserSummaryData: fetchUserSummaryData
}
export default api;
