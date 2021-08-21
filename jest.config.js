module.exports = {
    testEnvironment:"jsdom",
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.(css|scss)$": "./styleMock.js"
    },
    
}