module.exports = async app => {
    return {
        env: {},
        plugins: {
            cleanDistFolders: {
                preserveFolders: ['img'],
                enabled: process.env.NODE_ENV === 'production'
            }
        }
    }
}