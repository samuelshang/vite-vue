import {getData} from './request'
export default async (store) => {
    const consName = store.state.consName,
          field = store.state.field,
          data = await getData(consName, field);

    if (data.errorCode) {
        store.commit('setErrorCode', data.errorCode);
        return;
    }
    store.commit('setData', data);
}