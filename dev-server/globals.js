let globals = {
    __dev: true,
    __prod: false,
    template: {},
    job: require('./data/job'),
    jobs: require('./data/jobs'),
    request_protocal: 'https://',
}

module.exports = globals;