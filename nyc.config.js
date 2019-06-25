module.exports = {
    all: true,
    reporter: ['lcov', 'html', 'text'],
    'report-dir': './coverage',
    include: [
        'build/**/*.js'
    ],
    exclude: [
        '**/*.spec.*'
    ]
};
