import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dev.trueprodigyapi.com/appraisaldemo/propertytest/'
});

export default instance;