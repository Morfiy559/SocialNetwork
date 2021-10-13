export const getUsersSel = (state) => {
    return state.usersPage.users
}
export const getPageSizeSel = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCountSel = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSel = (state) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgressSel = (state) => {
    return state.usersPage.followingInProgress
}
