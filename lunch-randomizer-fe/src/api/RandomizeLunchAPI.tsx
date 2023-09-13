import { getRequest, postRequest } from "./APIUtils";

export const getLunchPastRecords = (next: any, param?: any) => {
    getRequest('lunch/allRecords', next, param)
}

export const randomizeLunchOptions = (next: any, param: any) => {
    postRequest('lunch/randomiseOptions', next, param)
}

export const deletePastLunchOptions = (next: any, param: any) => {
    postRequest('lunch/deleteRecords', next, param)
}