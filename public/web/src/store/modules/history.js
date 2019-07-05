const state = {
    
};
const getters = {
    GetInvitationList(state) { //承载变化的collects
        return state.InvitationList;
    }
};
const mutations = {
    pushInvitation(state, items) { //如何变化collects,插入items
        state.InvitationList.push(items);
        if (state.InvitationList.length > 100) {
            state.InvitationList.splice(0, 1);
        };
    },
    deleteInvitation(state, items) {
        for (let i = 0; i < state.InvitationList.length; i++) {
            const item = state.InvitationList[i];
            if (item.userName == items.userName) {
                state.InvitationList.splice(i, 1);
                break;
            };
        }
    }
};
const actions = {
    invokePushItems(context, item) { //触发mutations里面的pushCollects ,传入数据形参item 对应到items
        context.commit('pushInvitation', item);
    },
    invokedeleteItems(context, item) {
        context.commit('deleteInvitation', item);
    }
};
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}